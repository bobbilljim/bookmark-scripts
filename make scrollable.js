javascript: ! function() {
        var t, o;
        var e = document.querySelectorAll("body *");
        for (t = 0; t < e.length; t++) {
            o = getComputedStyle(e[t]);
            if (o["overflow"] === "hidden") {
                e[t].style["overflow"] = "scroll";
            }
            if (o["overflow-y"] === "hidden") {
                e[t].style["overflow-y"] = "scroll";
            }
        }
    }();

//uglified:
javascript:!function(){var t,o;var e=document.querySelectorAll("body *");for(t=0;t<e.length;t++){o=getComputedStyle(e[t]);if(o.overflow==="hidden"){e[t].style.overflow="scroll"}
if(o["overflow-y"]==="hidden"){e[t].style["overflow-y"]="scroll"}}}()
