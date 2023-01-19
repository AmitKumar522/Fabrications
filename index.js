

$(document).ready(function(){
  var elems = [$('i.circle-bg-fb'), $('i.circle-bg-tw'), $('i.circle-bg-p'), $('i.circle-bg-g')];
  var cls = ["circle-bg-fb-end", "circle-bg-tw-end", "circle-bg-p-end", "circle-bg-g-end",];

    $('div#social-holder').on("mouseenter", function(){
        for(var i=0; i<elems.length; i++) {
            elems[i].addClass(cls[i]);
        };
    }).on("click", function(){
        for(var i=0; i<elems.length; i++) {
            elems[i].removeClass(cls[i]);
        };
    });
});

var element = document.getElementById("social-holder");
element.style.cssFloat = "left";
// or
element.style.float = "left";
