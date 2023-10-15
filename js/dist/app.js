$(document).foundation();const diagramInstance=document.querySelectorAll(".diagram .diagram__item .item-container");diagramInstance.forEach((t=>{for(var e=t.querySelectorAll(".diagram .diagram__item .item-container > .item__label"),a=0;a<e.length;a++){e[a].classList.add("item__label__"+a);let t=document.getElementsByClassName("item__label__"+a),o=0;for(let e=0;e<t.length;e++)t[e].offsetHeight>o&&(o=t[e].offsetHeight);for(let e=0;e<t.length;e++)t[e].style="height: "+o+"px"}})),$(document).ready((function(){document.querySelectorAll('[data-in-view="once"]').forEach((t=>{new IntersectionObserver(((t,e)=>{t.forEach((t=>{t.isIntersecting&&t.target.classList.add("is-in-view")}))})).observe(t)}))})),$(document).ready((function(){$(window).scroll((function(){$(this).scrollTop()>200?$(".back-to-top").fadeIn(500):$(".back-to-top").fadeOut(500)})),$(".back-to-top").click((function(t){return t.preventDefault(),$("html, body").animate({scrollTop:0},500),!1}))}));for(var instanceCount=document.querySelectorAll(".js-accordion-window").length,i=0;i<=instanceCount;i++){const t=$(".js-accordion-window-"+i),e=t.height();t.css("height",e),$(".js-expand-window-link-"+i).on("click",(function(){const a=t.height();if(e===a){t.removeClass("js-accordion-window-height"),$(this).addClass("js-accordion-window-collapse"),$(this).text("Read less");var o="auto"}else{$(this).removeClass("js-accordion-window-collapse"),$(this).text("Read more");o=e}var i=t.css("height",o).height();t.height(a).stop().animate({height:i},600,(function(){t.css("height",o)}))}))}var tag=document.createElement("script");function initializeVideoModule(t){var e=new YT.Player(t.querySelector(".clickvideo-placeholder"),{videoId:t.dataset.videoId,events:{onStateChange:function(a){var o=a.data===YT.PlayerState.ENDED;t.classList[o?"remove":"add"]("playing"),o&&(e.destroy(),t.querySelector(".clickvideo-layer").innerHTML='<div class="clickvideo-placeholder"></div>',initializeVideoModule(t))}},playerVars:{rel:0,showinfo:0}})}function init(){window.addEventListener("scroll",(function(t){var e=window.pageYOffset||document.documentElement.scrollTop;headeranimate=document.querySelector("#header-container"),bodyanimate=document.querySelector("#sitewrap"),e>0?(classie.add(headeranimate,"is-stuck"),classie.add(bodyanimate,"nav-is-stuck")):(classie.has(headeranimate,"is-stuck")&&classie.remove(headeranimate,"is-stuck"),classie.has(bodyanimate,"nav-is-stuck")&&classie.remove(bodyanimate,"nav-is-stuck"))}))}tag.src="https://www.youtube.com/iframe_api",document.body.appendChild(tag),window.onYouTubeIframeAPIReady=function(){var t=document.querySelectorAll(".clickvideo");(t=Array.prototype.slice.call(t)).forEach(initializeVideoModule)},function(t){"use strict";function e(t){return new RegExp("(^|\\s+)"+t+"(\\s+|$)")}function a(t,e){(o(t,e)?n:i)(t,e)}var o,i,n;"classList"in document.documentElement?(o=function(t,e){return t.classList.contains(e)},i=function(t,e){t.classList.add(e)},n=function(t,e){t.classList.remove(e)}):(o=function(t,a){return e(a).test(t.className)},i=function(t,e){o(t,e)||(t.className=t.className+" "+e)},n=function(t,a){t.className=t.className.replace(e(a)," ")});var r={hasClass:o,addClass:i,removeClass:n,toggleClass:a,has:o,add:i,remove:n,toggle:a};"function"==typeof define&&define.amd?define(r):t.classie=r}(window),window.onload=init(),$("[data-off-canvas]").on("opened.zf.offcanvas",(function(){setTimeout((function(){$("#header-container").css("position","fixed")}),400)})),$("[data-off-canvas]").on("closed.zf.offcanvas",(function(){$("#header-container").css("position","relative")})),$(document).ready((function(){$("#searchright").on("blur",(function(){setTimeout((function(){$("#searchsubmit").hide()}),300)})),$("#searchright").on("focus",(function(){$(this).siblings("#searchsubmit").show()})),$("#searchsubmit").hide()}));var lFollowX=0,lFollowY=0,x=0,y=0,friction=1/30;function moveBackground(){x+=(lFollowX-x)*friction,y+=(lFollowY-y)*friction,translate="translate("+x+"px, "+y+"px) scale(1.1)",$(".hero__background").css({"-webit-transform":translate,"-moz-transform":translate,transform:translate}),window.requestAnimationFrame(moveBackground)}$("#sitewrap").on("mousemove click",(function(t){var e=Math.max(-100,Math.min(100,$(window).width()/2-t.clientX)),a=Math.max(-100,Math.min(100,$(window).height()/2-t.clientY));lFollowX=20*e/100,lFollowY=10*a/100})),moveBackground(),function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.lozad=e()}(this,(function(){"use strict";var t="undefined"!=typeof document&&document.documentMode,e=function(t){return window&&window[t]},a=["data-iesrc","data-alt","data-src","data-srcset","data-background-image","data-toggle-class"],o={rootMargin:"0px",threshold:0,enableAutoReload:!1,load:function(e){if("picture"===e.nodeName.toLowerCase()){var a=e.querySelector("img"),o=!1;null===a&&(a=document.createElement("img"),o=!0),t&&e.getAttribute("data-iesrc")&&(a.src=e.getAttribute("data-iesrc")),e.getAttribute("data-alt")&&(a.alt=e.getAttribute("data-alt")),o&&e.append(a)}if("video"===e.nodeName.toLowerCase()&&!e.getAttribute("data-src")&&e.children){for(var i=e.children,n=void 0,r=0;r<=i.length-1;r++)(n=i[r].getAttribute("data-src"))&&(i[r].src=n);e.load()}e.getAttribute("data-poster")&&(e.poster=e.getAttribute("data-poster")),e.getAttribute("data-src")&&(e.src=e.getAttribute("data-src")),e.getAttribute("data-srcset")&&e.setAttribute("srcset",e.getAttribute("data-srcset"));var s=",";if(e.getAttribute("data-background-delimiter")&&(s=e.getAttribute("data-background-delimiter")),e.getAttribute("data-background-image"))e.style.backgroundImage="url('"+e.getAttribute("data-background-image").split(s).join("'),url('")+"')";else if(e.getAttribute("data-background-image-set")){var c=e.getAttribute("data-background-image-set").split(s),d=c[0].substr(0,c[0].indexOf(" "))||c[0];d=-1===d.indexOf("url(")?"url("+d+")":d,1===c.length?e.style.backgroundImage=d:e.setAttribute("style",(e.getAttribute("style")||"")+"background-image: "+d+"; background-image: -webkit-image-set("+c+"); background-image: image-set("+c+")")}e.getAttribute("data-toggle-class")&&e.classList.toggle(e.getAttribute("data-toggle-class"))},loaded:function(){}};function i(t){t.setAttribute("data-loaded",!0)}var n=function(t){return"true"===t.getAttribute("data-loaded")},r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".lozad",s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=Object.assign({},o,s),d=c.root,l=c.rootMargin,u=c.threshold,g=c.enableAutoReload,f=c.load,m=c.loaded,h=void 0,b=void 0;e("IntersectionObserver")&&(h=new IntersectionObserver(function(t,e){return function(a,o){a.forEach((function(a){(a.intersectionRatio>0||a.isIntersecting)&&(o.unobserve(a.target),n(a.target)||(t(a.target),i(a.target),e(a.target)))}))}}(f,m),{root:d,rootMargin:l,threshold:u})),e("MutationObserver")&&g&&(b=new MutationObserver(function(t){return function(e){e.forEach((function(e){n(e.target)&&"attributes"===e.type&&a.indexOf(e.attributeName)>-1&&t(e.target)}))}}(f)));for(var v,w=r(t,d),p=0;p<w.length;p++)(v=w[p]).getAttribute("data-placeholder-background")&&(v.style.background=v.getAttribute("data-placeholder-background"));return{observe:function(){for(var e=r(t,d),o=0;o<e.length;o++)n(e[o])||(h?(b&&g&&b.observe(e[o],{subtree:!0,attributes:!0,attributeFilter:a}),h.observe(e[o])):(f(e[o]),i(e[o]),m(e[o])))},triggerLoad:function(t){n(t)||(f(t),i(t),m(t))},observer:h,mutationObserver:b}}}));const observer2=lozad();observer2.observe();