javascript: (function () {
    var maxId = setTimeout(function(){}, 0);
    for(var i=0; i < maxId; i+=1) { 
        clearTimeout(i);
    }
    document.getElementsByClassName('header__sub-btn')[0].style['display'] = 'none'
    document.getElementsByClassName('header__sign-in-btn')[0].style['display'] = 'none'
    document.querySelectorAll('span[class="story-card__label"]').forEach(e => e.innerText = 'Free 😉');
    document.getElementById('premium-toaster').style["display"] = "none"
    document.querySelectorAll('section[class="article-offer"]').forEach(e => e.style["display"] = "none");
    document.querySelectorAll('p[class="GIZOHyucobDOBz"]').forEach(e => {e.style["display"] = "block"; e.style["opacity"] = "100%"; e.style["color"] = "black"});
})()


javascript:(function(){<minifed goes here>})()

javascript:(function(){for(var maxId=setTimeout(function(){},0),i=0;i<maxId;i+=1)clearTimeout(i);document.getElementsByClassName("header__sub-btn")[0].style.display="none",document.getElementsByClassName("header__sign-in-btn")[0].style.display="none",document.querySelectorAll('span[class="story-card__label"]').forEach(e=>e.innerText="Free 😉"),document.getElementById("premium-toaster").style.display="none",document.querySelectorAll('section[class="article-offer"]').forEach(e=>e.style.display="none"),document.querySelectorAll('p[class="GIZOHyucobDOBz"]').forEach(e=>{e.style.display="block",e.style.opacity="100%",e.style.color="black"});})()
