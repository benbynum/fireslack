'use strict';

angular.module('app.directives', [])

// Auto scroll to make most recent messages visible
// Only scrolls when within x pixels (SCROLL_DIFF) from bottom
// ie: If a user is trying to read old messages, don't auto scroll for each new msg
.directive('scrollStick', function() {
  return {
  	restrict: 'A',
  	link: function(scope, element, attrs) {


  		// Cache non jq lite element to use vanilla js scrollTop
  		var el = document.getElementsByClassName(element.attr('class'))[0];
  		var scroll_pos = el.scrollTop;
  		var SCROLL_DIFF = 35;
      // Distance from bottom that the scroll position needs to be in order to stick
  		// Set `SCROLL_DIFF = 0` to auto scroll only when flush to the bottom

      var scroll_height;
      var scroll_diff;

      // Calculate current scroll position and diff from bottom
      element.bind('scroll', function() {
        scroll_pos = el.scrollTop;
        scroll_diff = (el.scrollHeight - el.offsetHeight) - scroll_pos
      })

  		// Watch for new messages (ie: change in scroll height)
  		scope.$watch (function() { return el.scrollHeight; }, function(newVal, oldVal) {
  			if ( scroll_diff <= SCROLL_DIFF ) el.scrollTop = el.scrollHeight;
  		})


  	}
  };
})

// Expand Mobile nav menu
.directive('menuExpander', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {

      // Cache selectors
      var sidebar = $('.sidebar')

      // On click
      element.bind("click", function() {

        var sidebarDisplay = sidebar.css('display')

        // Toggle display none of sidebar
        if (sidebarDisplay == 'none') {
          sidebar.css('display', 'inline-block')
        } else {
          sidebar.css('display', 'none')
        }

      })

      // Hide sidebar on channel-list click if in mobile view
      $('.channel-list').bind("click", function() {
        if ( window.innerWidth < 768 ) sidebar.css('display', 'none')
      })

      
    }
  }
})