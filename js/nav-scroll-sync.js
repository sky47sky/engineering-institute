'use strict'

import $ from 'jquery'

export default (() => {
  return {
    init: () => {
      // Sync nav active status with content on scroll
      $(window).scroll(function () {
        var windscroll = $(window).scrollTop()
        if (windscroll >= 200) {
          $('.js-nav-scroll-sync-wrapper section').each(function (i) {
            if ($(this).position().top <= windscroll - 200) {
              $('.js-nav-scroll-sync-menu a.is-active').removeClass('is-active')
              $('.js-nav-scroll-sync-menu a').eq(i).addClass('is-active')
            }
          })
        } else {
          $('.js-nav-scroll-sync-menu a.is-active').removeClass('is-active')
          $('.js-nav-scroll-sync-menu a:first').addClass('is-active')
        }
      }).scroll()

      // Animate scroll on menu click
      $('.js-nav-scroll-sync-menu a').click(function (e) {
        e.preventDefault()
        $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top - 150
        }, 500)
      })
    }
  }
})()
