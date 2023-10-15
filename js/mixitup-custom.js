

/*////////////////////////////////////////////////////////////////////////
CUSTOM - MIXITUP - RESULTS Pages
/*////////////////////////////////////////////////////////////////////////

/*
$(function(){
	$('.results-tabs-content').mixItUp({
    animation: {
      duration: 460,
      effects: 'rotateX(20deg) scale(0.13) fade',
      easing: 'ease'
    },
    load: {
        filter: document.location.hash == '' ? 'all' : ('.' + document.location.hash.substring(1))
    },
  });
});
*/
// As we have no server-side application or routes, we will use
// a URL "hash" for this demo, but we chould just as easily use
// a URL route segment.

// As we will use the target selector in several parts of the demo,
// we will declare it as a variable here.

var targetSelector = '.mix';
var selectFilter = document.querySelector('.results-select');

/**
 * Reads a hash from the URL (if present), and converts it into a class
 * selector string. E.g "#green" -> ".green". Otherwise, defaults
 * to the targetSelector, equivalent to "all"
 *
 * @return {string}
 */

function getSelectorFromHash() {
    var hash = window.location.hash.replace(/^#/g, '');

    var selector = hash ? '.' + hash : targetSelector;

    return selector;
}

/**
 * Updates the URL whenever the current filter changes.
 *
 * @param   {mixitup.State} state
 * @return  {void}
 */

function setHash(state) {
    var selector = state.activeFilter.selector;
    var newHash = '#' + selector.replace(/^\./g, '');

    if (selector === targetSelector && window.location.hash) {
        // Equivalent to filter "all", remove the hash

        history.pushState(null, document.title, window.location.pathname); // or history.replaceState()
    } else if (newHash !== window.location.hash && selector !== targetSelector) {
        // Change the hash

        history.pushState(null, document.title, window.location.pathname + newHash); // or history.replaceState()
    }
}

// Instantiate and configure the mixer

var mixer = mixitup('.results-tabs-content', {
    selectors: {
        target: targetSelector
    },
    load: {
        filter: getSelectorFromHash() // Ensure that the mixer's initial filter matches the URL on startup
    },
    callbacks: {
        onMixEnd: setHash // Call the setHash() method at the end of each operation
    }
});

// Add an "onhashchange" handler to keep the mixer in sync as the user goes
// back and forward through their history.

// NB: This may or may not be the desired behavior for your project. If you don't
// want MixItUp operations to count as individual history items, simply use
// 'replaceState()' instead of 'pushState()' within the 'setHash()' function above.
// In which case this handler would no longer be neccessary.

window.onhashchange = function() {
    var selector = getSelectorFromHash();

    if (selector === mixer.getState().activeFilter.selector) return; // no change

    mixer.filter(selector);
};

selectFilter.addEventListener('change', function() {
    var selector = selectFilter.value;

    if (selector === mixer.getState().activeFilter.selector) return; // no change

    mixer.filter(selector);
});




// Count all items with a given class
var total = 0;
$('li.filterli a[data-filter]').each(function(){
  var reqClass = $(this).data('filter');
  var len = +$(reqClass).length;
  $(this).append('<span> (' + len + ')</span>' );
  total += len
});
$('a[data-filter="all"]').append('<span> (' + total + ')</span>' );


var total = 0;
$('.results-select option.filter[value]').each(function(){
  var reqClass = $(this).data('filter');
  var len = +$(reqClass).length;
  $(this).append(' (' + len + ')' );
  total += len
});
// use this total to append to first li (View ALL)
$('option[data-filter="all"]').append(' (' + total + ')' );




/*
var $filterSelect = $('.results-select')
var $container = $('.results-tabs-content');

$container.mixItUp();
  
$filterSelect.on('change', function(){
    $container.mixItUp('filter', this.value);
  });

  $('.results-select').on('change', function() {
    $('.results-select option:selected').trigger('click'); 
});
*/




