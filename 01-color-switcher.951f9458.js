const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),d=document.body;let a;t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,a=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.951f9458.js.map
