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