const miModulo=(()=>{"use strict";let e=[];const t=["C","D","H","S"],n=["A","J","Q","K"];let o=[];const r=document.querySelector("#btnNuevo"),l=document.querySelector("#btnPedir"),s=document.querySelector("#btnDetener"),c=document.querySelectorAll(".divCartas"),a=document.querySelectorAll("small"),d=document.querySelector("h1"),u=()=>{e=[];for(let n=2;n<=10;n++)for(let o of t)e.push(n+o);for(let o of n)for(let n of t)e.push(o+n);return _.shuffle(e)},i=()=>0===e.length?console.warn("No hay cartas en el deck"):e.pop(),f=(e,t)=>(o[t]+=(e=>{let t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t})(e),a[t].innerText=o[t],o[t]),h=(e,t)=>{const n=document.createElement("img");n.classList.add("carta"),n.src=`assets/cartas/${e}.png`,c[t].append(n)},m=e=>{let t=0;do{const e=i();t=f(e,o.length-1),h(e,o.length-1)}while(t<e&&e<=21);(()=>{const[e,t]=o;d.innerText=t===e?"No winner":e>21?"Cortana WIN":t>21?"You win":t<=21&&t>e?"Cortana WIN":"---"})()};return l.addEventListener("click",function(){const e=i(),t=f(e,0);h(e,0),t>21?(console.warn("You lose"),d.innerText="You lose",m(t),l.disabled=!0):21===t&&(console.warn("Awesome"),l.disabled=!0)}),s.addEventListener("click",function(){l.disabled=!0,s.disabled=!0,m(o[0])}),{nuevoJuego:(t=2)=>{e=u(),o=[];for(let e=0;e<t;e++)o.push(0);r.disabled=!1,l.disabled=!1,s.disabled=!1,a.forEach(e=>e.innerText=0),c.forEach(e=>e.innerHTML=""),d.innerHTML=""}}})();