javascript: ! function () {
    var l = document.querySelectorAll("*[style]");
    Array.prototype.forEach.call(l, function (l) {
        "hidden" === (l.style["overflow-y"] || "") && (l.style["overflow-y"] = "scroll")
    })
}();



//uglified:
javascript:!function(){var l=document.querySelectorAll("*[style]");Array.prototype.forEach.call(l,function(l){"hidden"===(l.style["overflow-y"]||"")&&(l.style["overflow-y"]="scroll")})}();