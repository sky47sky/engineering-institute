/*!
* inView.js 1.1
*
* Copyright 2019, Mario Duarte http://marioduarte.co.uk
* Released under the GLP-2.0 license
*
* Date: Mon Feb 11 2019
*/

"use strict";
$.fn.inView = function (inViewType) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Calculates the viewport top and bottom position
  //  at the time of the call
  var viewport = {};
  viewport.top = $(window).scrollTop();
  viewport.bottom = viewport.top + $(window).height();

  // Calculate element bouds positions
  var bounds = {};
  bounds.top = this.offset().top + offset;
  bounds.bottom = bounds.top + this.outerHeight();

  switch (inViewType) {
    case 'bottomOnly':
      return bounds.bottom <= viewport.bottom && bounds.bottom >= viewport.top;

    case 'topOnly':
      return bounds.top <= viewport.bottom && bounds.top >= viewport.top;

    case 'both':
      return bounds.top >= viewport.top && bounds.bottom <= viewport.bottom;

    default:
      return bounds.top >= viewport.top && bounds.bottom <= viewport.bottom;
  }
};




$(document).ready(function(){

  function checkVisability() {

    // Add/remove visible class every time element is seen in viewport
    var isInView = $('[data-in-view="infinite"]');

    isInView.each(function(){
      if ($(this).inView("topOnly") || $(this).inView("bottomOnly")) {
        $(this).addClass("is-in-view");
      } else {
        $(this).removeClass("is-in-view");
      }
    });

    // Add visible class only once
    var isInViewOnce = $('[data-in-view="once"]');

    isInViewOnce.each(function(){
      if ($(this).inView("topOnly") || $(this).inView("bottomOnly")) {
        $(this).addClass("is-in-view");
      }
    });
  }

  checkVisability();

  $(window).scroll(function() {
    console.log('scroll');
    checkVisability();
  });

});