define(["../../lib/zq.js", 
        "../chai.js",
        "bonzo",
        "qwery",
        "bean"], function(zq, chai, bonzo, qwery, bean){

  var expect = chai.expect,
    fixtureDiv = bonzo(qwery("#fixture")[0]);

  describe('zq', function(){
    beforeEach(function(){
      fixtureDiv.append("<div class='a'></div>");
    });

    afterEach(function(){
      fixtureDiv.html('');
    });

    describe("simple tests", function(){
      it('allows to get bonzos by html element', function(){
        expect(zq(document.getElementById("fixture")).length).be.equal(1);
      });

    });

    describe("bonzo-qwery integration", function(){
      it('allows to get bonzos by css query', function(){
        expect(zq(".a").length).to.equal(1);
      });

      it('should allow to use css selector in insertAfter', function(){
        zq.create("<div class='foo'>")
          .insertAfter(".a");
      });
    });

    describe("document ready", function(){
      it("should execute dom ready when the parameter is a function", function(){
        var loaded = false;
        zq(function(){
          loaded = true;
        });
        bean.fire(document, "DOMContentLoaded");
        expect(loaded).be.true;
      });
    });

    describe("bonzo-bean integration", function(){
      it("can attach to an event with on", function(){
        var raised = false;
        zq(".a").on("click", function(e){
          e.preventDefault();
          raised = true;
        });
        bean.fire(qwery(".a")[0], "click");
        expect(raised).be.true;
      });

      it("can fire an event with fire", function(){
        var raised = false;
        zq(".a").on("click", function(e){
          e.preventDefault();
          raised = true;
        }).fire("click");
        expect(raised).be.true;
      });
    });

    describe("bean-qwery integration", function(){
      
      it("can attach a delegated event with on", function(){
        var raised = false;
        zq("#fixture")
          .html("")                                       //clean this container
          .on("click", "div.a", function(e){              //attache the delegate
            e.preventDefault();
            raised = true;
          }).append(zq.create("<div class='a'></div>"));  //append a new item

        zq("div.a").fire("click");

        expect(raised).be.true;
      });
    });

    describe("bonzo extras", function(){
      it("should allow to call 'find'", function(){
        expect(zq("#fixture").find("div.a").length).be.equal(1);
      });
    });
  });


});