javascript: (function () {
    var hide = (elem) => {
        if(elem){
            elem.style['display'] = 'none';
        }
    }

    var maxId = setTimeout(function(){}, 0);
    for(var i=0; i < maxId; i+=1) { 
        clearTimeout(i);
    }
    var theClassName = Object.entries(Array.from(document.querySelectorAll('p')).reduce((acc, current) => {
        if (acc[current.className] === undefined) 
            acc[current.className] = 1;
        else 
            acc[current.className]++;
        return acc;
    }, {})).reduce((max, current) => {
        return max[1] > current[1] ? max : current
    })[0];

    hide(document.getElementsByClassName('header__sub-btn')[0])
    hide(document.getElementsByClassName('header__sign-in-btn')[0])
    document.querySelectorAll('span[class="story-card__label"]').forEach(e => e.innerText = 'Free 😉');
    hide(document.getElementById('premium-toaster'))
    document.querySelectorAll('section[class="article-offer"]').forEach(hide);
    document.querySelectorAll('p.' + theClassName + ',span.' + theClassName).forEach(e => {e.style["display"] = "block"; e.style["opacity"] = "100%"; e.style["color"] = "black"});
})()

/*
javascript:(function(){<minifed goes here>})()

javascript:(function(){for(var hide=e=>{e&&(e.style.display="none")},maxId=setTimeout(function(){},0),i=0;maxId>i;i+=1)clearTimeout(i);var theClassName=Object.entries(Array.from(document.querySelectorAll("p")).reduce((e,a)=>(void 0===e[a.className]?e[a.className]=1:e[a.className]++,e),{})).reduce((e,a)=>e[1]>a[1]?e:a)[0];hide(document.getElementsByClassName("header__sub-btn")[0]),hide(document.getElementsByClassName("header__sign-in-btn")[0]),document.querySelectorAll('span[class="story-card__label"]').forEach(e=>e.innerText="Free 😉"),hide(document.getElementById("premium-toaster")),document.querySelectorAll('section[class="article-offer"]').forEach(hide),document.querySelectorAll("p."+theClassName+",span."+theClassName).forEach(e=>{e.style.display="block",e.style.opacity="100%",e.style.color="black"});})()
*/
