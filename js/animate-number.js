'use strict'

import $ from 'jquery'

export default (() => {
  const nums = []
  let $animNum

  const playAnimationNum = $num => {
    const index = $animNum.index($num)
    nums[index] = $num.each(function () {
      // Allow Decimals
      var size = $(this).text().split('.')[1] ? $(this).text().split('.')[1].length : 0
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
          // $(this).text(Math.ceil(now).toLocaleString('en'))
          $(this).text(commaSeparateNumber(parseFloat(now).toFixed(size)))
        }
      })
    })
  }

  function commaSeparateNumber (val) {
    while (/(\d+)(\d{3})/.test(val.toString())) {
      val = val.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2')
    }
    return val
  }

  return {
    init: () => {
      $animNum = $('.js-anim-number')
    },
    playAnimationNum: playAnimationNum
  }
})()
