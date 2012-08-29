# zq

zq is the combination of some small JavaScript libraries to allow dom manipulation in a similar syntax to jquery but with a different intention.

zq is [AMD](http://requirejs.org/docs/whyamd.html) and it is deployed to [jam](http://jamjs.org).

zq uses [ded/qwery](http://github.com/ded/qwery), [ded/bonzo](http://github.com/ded/bonzo) and [fat/bean](http://github.com/fat/bean).

# Installation

    jam install zq


Do not use this project (yet?) if you are not using jam. If you are looking for an alternative like this to jquery but you dont want to use jam, you might want to check [ender](http://ender.no.de/).

# Some examples


```javascript

define("example", [zq], function($){
  
  // on dom ready
  $(function(){
    alert("hello dom is ready!")
  });

  // select and connect to an event
  $(".mybutton").on("click", function(e){
    console.log("clicked");
  });

  //chained
  $(".mybutton")
    .html("")
    .append($.create("<a href='aboutme'>about</a>"))
    .on("click", function(e){
      console.log("something")
    });

  //fire events
  $(".something").fire("click");

  //event delegates
  $(".container")
    .on("click", "div.thebutton", function(e){
      console.log("a!");
    });

  //insert after delegates
  $.create("<a href='test'>test</a>")
    .insertAfter(".mydiv span");

});

```
# differences with jquery

Although this might look similar to jquery, it has a lot of differences and there is a bunch of functionality not there on purpose.

This  project only combines the three afore mentioned projects for DOM manipulation, and I will never add to this project something like `$.post(...)`. If you want to have a look the differences from the DOM manipulation check the respective websites, there might be good reasons for that.

# develop

    npm install
    npm test

and then open your browser pointing to [http://localhost:3000/tests/index.html](http://localhost:3000/tests/index.html).

# license

[MIT](http://en.wikipedia.org/wiki/MIT_License)

José F. Romaniello 2012