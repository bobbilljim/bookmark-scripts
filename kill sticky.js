javascript: (function () {
    (function () {
        var i, position;
        var elements = document.querySelectorAll('body *');
        for (i = 0; i < elements.length; i++) {
            position = getComputedStyle(elements[i]).position;
            if (position === 'fixed' || position === 'sticky') {
                elements[i].parentNode.removeChild(elements[i]);
            }
        }
    })()
})()


//uglified - make sure to have javascript label on front 

javascript:(function(){(function(){var t,o;var e=document.querySelectorAll("body *");for(t=0;t<e.length;t++){o=getComputedStyle(e[t]).position;if(o==="fixed"||o==="sticky"){e[t].parentNode.removeChild(e[t])}}})()})();