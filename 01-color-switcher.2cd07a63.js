!function(){var t,e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]"),d=document.body;e.addEventListener("click",(function(){e.disabled=!0,a.disabled=!1,t=setInterval((function(){d.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))}),1e3)})),a.addEventListener("click",(function(){e.disabled=!1,a.disabled=!0,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.2cd07a63.js.map
