define(["bonzo", 
  "qwery", 
  "bean"], function(bonzo, qwery, bean){

    bonzo.aug({
    // find: function(selector, el){
    //   var result = [];
    //   this.each(function(el){
    //     result = result.concat(qwery(selector, el));
    //   });
    //   return bonzo(result);
    // },
    // click: function(){
    //   return this.each(function(el){
    //     bean.fire(el, "click");
    //   });
    // },

    on: function(ev, selDel, callback){
      return this.each(function(element){
        if(typeof(selDel) === "function"){
          callback = selDel;
          bean.add(element, ev, callback);
        }else{
          bean.add(element, selDel, ev, callback);
        }
      }.bind(this));
    },

    fire: function(ev){
      return this.each(function(element){
        bean.fire(element, ev);
      });
    }
  });
  bean.setSelectorEngine(qwery);
  bonzo.setQueryEngine(qwery);

  var zq = function(selector){
    if(typeof(selector) === "function"){
      return bean.add(document, "DOMContentLoaded", selector);
    }
    return bonzo(qwery(selector));
  };

  zq.create = function(html){
    return bonzo(bonzo.create(html));
  };

  return zq;
});