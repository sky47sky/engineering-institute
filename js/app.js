//import './vendor/what-input';
//import './in-view';

$(document).foundation()







const diagramInstance = document.querySelectorAll('.diagram .diagram__item .item-container')

diagramInstance.forEach(column => {
  // Get all immediate child elements of .interactive-column__detail-item
  var immediateChildren = column.querySelectorAll('.diagram .diagram__item .item-container > .item__label');

  // loop through those child elements and assign incremental class names
  for (var i = 0; i < immediateChildren.length; i++) {
    immediateChildren[i].classList.add('item__label__' + i);

    // get the elements with same class names
    let columnCell = document.getElementsByClassName('item__label__' + i);

    // find the element with the tallest height
    let maxHeight = 0;
    for (let i = 0; i < columnCell.length; i++) {
      if (columnCell[i].offsetHeight > maxHeight) {
        maxHeight = columnCell[i].offsetHeight;
      }
    }
    
    // apply whatever the tallest element's height is to all elements with same class name
    for (let i = 0; i < columnCell.length; i++) {
      columnCell[i].style = 'height: ' + maxHeight + 'px';
    }
  }
});







/*
const diagramInstance2 = document.querySelectorAll('.diagram-2 .diagram__item .item-container')

diagramInstance2.forEach(column => {
  // Get all immediate child elements of .interactive-column__detail-item
  var immediateChildren = column.querySelectorAll('.diagram-2 .diagram__item .item-container > .item__label');

  // loop through those child elements and assign incremental class names
  for (var i = 0; i < immediateChildren.length; i++) {
    immediateChildren[i].classList.add('item__label__' + i);

    // get the elements with same class names
    let columnCell = document.getElementsByClassName('item__label__' + i);

    // find the element with the tallest height
    let maxHeight = 0;
    for (let i = 0; i < columnCell.length; i++) {
      if (columnCell[i].offsetHeight > maxHeight) {
        maxHeight = columnCell[i].offsetHeight;
      }
    }
    
    // apply whatever the tallest element's height is to all elements with same class name
    for (let i = 0; i < columnCell.length; i++) {
      columnCell[i].style = 'height: ' + maxHeight + 'px';
    }
  }
});
*/






/*!
* Intersection Observer API "In Viewport" script
*/


$(document).ready(function(){

const targets = document.querySelectorAll('[data-in-view="once"]');

const ioInView = (target)=>{
  const io = new IntersectionObserver((entries,observer)=>{
      entries.forEach(entry=>{
          if(entry.isIntersecting){
              //console.log(entry.target)
              entry.target.classList.add('is-in-view')
          }
      })
  });

  io.observe(target);
}
targets.forEach(ioInView);

});

















/* Back to Top Button =========================================================== */

$(document).ready(function() {
  var offset = 200;
  var duration = 500;

  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('.back-to-top').fadeIn(duration);
    } else {
      $('.back-to-top').fadeOut(duration);
    }
  });
  // Below not needed if html{scroll-behavior:smooth} is in effect
  
  $('.back-to-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 500);
    return false;
  })
  







// add <span> to Mega Menu Categories
/*
 $( ".menu--main .first-sub .is-dropdown-submenu-parent > a" ).wrapInner( "<span></span>" );
 */
});








/* Reveal More/Less text Button =========================================================== */

// Count how many windows occur on the page
var instanceCount = document.querySelectorAll('.js-accordion-window').length

for (var i = 0; i <= instanceCount; i++) {
  const trg = $('.js-accordion-window-' + i)

  // The initial window height
  const preHeight = trg.height()

  // Set the initial window height on page load
  trg.css('height', preHeight)

  $('.js-expand-window-link-' + i).on('click', function () {
    const curHeight = trg.height()

    if (preHeight === curHeight) {
      trg.removeClass('js-accordion-window-height')
      $(this).addClass('js-accordion-window-collapse')
      $(this).text('Read less')
      //$(this).text('Read more')
      var xHeight = 'auto'
    } else {
      $(this).removeClass('js-accordion-window-collapse')
      $(this).text('Read more')
      //$(this).text('Read less')
      var xHeight = preHeight
    }

    var trgHeight = trg.css('height', xHeight).height()
    trg.height(curHeight).stop().animate({ height: trgHeight }, 600, function () { trg.css('height', xHeight) })
  })
}







// Load the YouTube IFrame Player API code asynchronously.
// https://developers.google.com/youtube/iframe_api_reference
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);

// When the YouTube API code loads, it calls this function, so it must be global
// and it must be named exactly onYouTubeIframeAPIReady.
window.onYouTubeIframeAPIReady = function () {
  var videoModules = document.querySelectorAll('.clickvideo');
  // for Internet Explorer 11 and below, convert array-like NodeList to an actual Array.
  videoModules = Array.prototype.slice.call(videoModules);
  videoModules.forEach(initializeVideoModule);
}

function initializeVideoModule(videoModule){
  var player = new YT.Player(videoModule.querySelector('.clickvideo-placeholder'), {
    videoId: videoModule.dataset.videoId,
    events: {
      onStateChange: function (event) {
        var isEnded = event.data === YT.PlayerState.ENDED;
        // 'playing' css class controls fading the video and preivew images in/out.
        // Internet Explorer 11 and below do not support a second argument to `toggle`
        // videoModule.classList.toggle('playing', !isEnded);
        videoModule.classList[isEnded ? 'remove' : 'add']('playing');
        // if the video is done playing, remove it and re-initialize
        if(isEnded){
          player.destroy();
          videoModule.querySelector('.clickvideo-layer').innerHTML = (
            '<div class="clickvideo-placeholder"></div>'
          );
          initializeVideoModule(videoModule);
        }
      }
    },
    playerVars: {rel: 0, showinfo: 0}
  });
}
























/*////////////////////////////////////////////////////////////////////////
SCRIPT - classie.js
/*////////////////////////////////////////////////////////////////////////
!function(s){"use strict";function e(s){return new RegExp("(^|\\s+)"+s+"(\\s+|$)")}function n(s,e){var n=a(s,e)?c:t;n(s,e)}var a,t,c;"classList"in document.documentElement?(a=function(s,e){return s.classList.contains(e)},t=function(s,e){s.classList.add(e)},c=function(s,e){s.classList.remove(e)}):(a=function(s,n){return e(n).test(s.className)},t=function(s,e){a(s,e)||(s.className=s.className+" "+e)},c=function(s,n){s.className=s.className.replace(e(n)," ")});var i={hasClass:a,addClass:t,removeClass:c,toggleClass:n,has:a,add:t,remove:c,toggle:n};"function"==typeof define&&define.amd?define(i):s.classie=i}(window);





/*/////////////////////////////////////////////////////////////////////////
CUSTOM - animate CSS when scroll point is reached
/*////////////////////////////////////////////////////////////////////////
 function init() {
        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 0
                //headeranimate = document.querySelector("html.no-touchevents header");
                headeranimate = document.querySelector("#header-container");
                bodyanimate = document.querySelector("#sitewrap");
            if (distanceY > shrinkOn) {
                classie.add(headeranimate,"is-stuck");
                classie.add(bodyanimate,"nav-is-stuck");
            } else {
                if (classie.has(headeranimate,"is-stuck")) {
                    classie.remove(headeranimate,"is-stuck");
                }
                if (classie.has(bodyanimate,"nav-is-stuck")) {
                    classie.remove(bodyanimate,"nav-is-stuck");
                }
            }
        });
    }
    window.onload = init();


    
// Add fade effect to menu dropdown
/*
$('.menu--main').on(
  'show.zf.dropdownmenu', function() {
    var dropdown = $(this).find('.first-sub.js-dropdown-active');
    dropdown.css('display', 'none');
    dropdown.fadeIn(300);
});
*/

// Make header fixed when off canvas is open
$('[data-off-canvas]').on('opened.zf.offcanvas', function() {
  setTimeout(function() {
    $('#header-container').css('position', 'fixed');
    }, 400);
});

// Remove position fixed when off canvas is closed
$('[data-off-canvas]').on('closed.zf.offcanvas', function() {
  $('#header-container').css('position', 'relative');
});


// Show search submit button only while input is focused
$(document).ready(function(){
  $('#searchright').on('blur', function() {
    setTimeout(function(){ 
      $('#searchsubmit').hide();
    }, 300);
  });
  $('#searchright').on('focus', function() {
      $(this).siblings('#searchsubmit').show();
  });
  $('#searchsubmit').hide();
});











/*////////////////////////////////////////////////////////////////////////
CUSTOM - Move element when mouse moves
/*////////////////////////////////////////////////////////////////////////

var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.hero__background').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$('#sitewrap').on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();





/* Footer idea */
/*
function moveBackground2() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1)';

  $('.footer__shadow').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground2);
}

$('#footer').on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (50 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (30 * lMouseY) / 100;

});

moveBackground2();

*/













/*////////////////////////////////////////////////////////////////////////
SCRIPT - Defer Image Loading
/*////////////////////////////////////////////////////////////////////////
/*! lozad.js - v1.16.0 - 2020-09-10
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2020 Apoorv Saxena; Licensed MIT */


(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.lozad = factory());
}(this, (function () { 'use strict';

  /**
   * Detect IE browser
   * @const {boolean}
   * @private
   */
  var isIE = typeof document !== 'undefined' && document.documentMode;

  /**
   *
   * @param {string} type
   *
   */
  var support = function support(type) {
    return window && window[type];
  };

  var validAttribute = ['data-iesrc', 'data-alt', 'data-src', 'data-srcset', 'data-background-image', 'data-toggle-class'];

  var defaultConfig = {
    rootMargin: '0px',
    threshold: 0,
    enableAutoReload: false,
    load: function load(element) {
      if (element.nodeName.toLowerCase() === 'picture') {
        var img = element.querySelector('img');
        var append = false;

        if (img === null) {
          img = document.createElement('img');
          append = true;
        }

        if (isIE && element.getAttribute('data-iesrc')) {
          img.src = element.getAttribute('data-iesrc');
        }

        if (element.getAttribute('data-alt')) {
          img.alt = element.getAttribute('data-alt');
        }

        if (append) {
          element.append(img);
        }
      }

      if (element.nodeName.toLowerCase() === 'video' && !element.getAttribute('data-src')) {
        if (element.children) {
          var childs = element.children;
          var childSrc = void 0;
          for (var i = 0; i <= childs.length - 1; i++) {
            childSrc = childs[i].getAttribute('data-src');
            if (childSrc) {
              childs[i].src = childSrc;
            }
          }

          element.load();
        }
      }

      if (element.getAttribute('data-poster')) {
        element.poster = element.getAttribute('data-poster');
      }

      if (element.getAttribute('data-src')) {
        element.src = element.getAttribute('data-src');
      }

      if (element.getAttribute('data-srcset')) {
        element.setAttribute('srcset', element.getAttribute('data-srcset'));
      }

      var backgroundImageDelimiter = ',';
      if (element.getAttribute('data-background-delimiter')) {
        backgroundImageDelimiter = element.getAttribute('data-background-delimiter');
      }

      if (element.getAttribute('data-background-image')) {
        element.style.backgroundImage = 'url(\'' + element.getAttribute('data-background-image').split(backgroundImageDelimiter).join('\'),url(\'') + '\')';
      } else if (element.getAttribute('data-background-image-set')) {
        var imageSetLinks = element.getAttribute('data-background-image-set').split(backgroundImageDelimiter);
        var firstUrlLink = imageSetLinks[0].substr(0, imageSetLinks[0].indexOf(' ')) || imageSetLinks[0]; // Substring before ... 1x
        firstUrlLink = firstUrlLink.indexOf('url(') === -1 ? 'url(' + firstUrlLink + ')' : firstUrlLink;
        if (imageSetLinks.length === 1) {
          element.style.backgroundImage = firstUrlLink;
        } else {
          element.setAttribute('style', (element.getAttribute('style') || '') + ('background-image: ' + firstUrlLink + '; background-image: -webkit-image-set(' + imageSetLinks + '); background-image: image-set(' + imageSetLinks + ')'));
        }
      }

      if (element.getAttribute('data-toggle-class')) {
        element.classList.toggle(element.getAttribute('data-toggle-class'));
      }
    },
    loaded: function loaded() {}
  };

  function markAsLoaded(element) {
    element.setAttribute('data-loaded', true);
  }

  function preLoad(element) {
    if (element.getAttribute('data-placeholder-background')) {
      element.style.background = element.getAttribute('data-placeholder-background');
    }
  }

  var isLoaded = function isLoaded(element) {
    return element.getAttribute('data-loaded') === 'true';
  };

  var onIntersection = function onIntersection(load, loaded) {
    return function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > 0 || entry.isIntersecting) {
          observer.unobserve(entry.target);

          if (!isLoaded(entry.target)) {
            load(entry.target);
            markAsLoaded(entry.target);
            loaded(entry.target);
          }
        }
      });
    };
  };

  var onMutation = function onMutation(load) {
    return function (entries) {
      entries.forEach(function (entry) {
        if (isLoaded(entry.target) && entry.type === 'attributes' && validAttribute.indexOf(entry.attributeName) > -1) {
          load(entry.target);
        }
      });
    };
  };

  var getElements = function getElements(selector) {
    var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    if (selector instanceof Element) {
      return [selector];
    }

    if (selector instanceof NodeList) {
      return selector;
    }

    return root.querySelectorAll(selector);
  };

  function lozad () {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.lozad';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _Object$assign = Object.assign({}, defaultConfig, options),
        root = _Object$assign.root,
        rootMargin = _Object$assign.rootMargin,
        threshold = _Object$assign.threshold,
        enableAutoReload = _Object$assign.enableAutoReload,
        load = _Object$assign.load,
        loaded = _Object$assign.loaded;

    var observer = void 0;
    var mutationObserver = void 0;
    if (support('IntersectionObserver')) {
      observer = new IntersectionObserver(onIntersection(load, loaded), {
        root: root,
        rootMargin: rootMargin,
        threshold: threshold
      });
    }

    if (support('MutationObserver') && enableAutoReload) {
      mutationObserver = new MutationObserver(onMutation(load, loaded));
    }

    var elements = getElements(selector, root);
    for (var i = 0; i < elements.length; i++) {
      preLoad(elements[i]);
    }

    return {
      observe: function observe() {
        var elements = getElements(selector, root);

        for (var _i = 0; _i < elements.length; _i++) {
          if (isLoaded(elements[_i])) {
            continue;
          }

          if (observer) {
            if (mutationObserver && enableAutoReload) {
              mutationObserver.observe(elements[_i], { subtree: true, attributes: true, attributeFilter: validAttribute });
            }

            observer.observe(elements[_i]);
            continue;
          }

          load(elements[_i]);
          markAsLoaded(elements[_i]);
          loaded(elements[_i]);
        }
      },
      triggerLoad: function triggerLoad(element) {
        if (isLoaded(element)) {
          return;
        }

        load(element);
        markAsLoaded(element);
        loaded(element);
      },

      observer: observer,
      mutationObserver: mutationObserver
    };
  }

  return lozad;

})));


const observer2 = lozad(); // lazy loads elements with default selector as '.lozad'
observer2.observe();






  


