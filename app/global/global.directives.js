'use strict';

angular.module('app.directives', [])

.directive('scrollStick', function() {
  return {
  	restrict: 'A',
  	link: function(scope, element, attrs) {
  		console.log('scroll sticking')

  		// cache non jq lite element to use vanilla js scrollTop
  		var el = document.getElementsByClassName(element.attr('class'))[0];
      console.log('el', el)
  		var scroll_pos = el.scrollTop;
  		var li_height = 35; // height of message line to calculate scroll offset
  		var scroll_height;
  		var scroll_diff;
  		var total_messages;

  		// watch for changes
  		// only update scroll if already at bottom
  		// ie: if user wants to read previous messages, it's annoying to get bumped to the bottom every time there is a new one
  		scope.$watch (function() { return el.scrollHeight; }, function(newVal, oldVal) {
  			// window scrolled all the to bottom, or within li height of it, jump down for each new
  			if ( scroll_diff <= 35 ) {
  				el.scrollTop = el.scrollHeight;
  			}
  		})

  		element.bind('scroll', function() {
  			scroll_pos = el.scrollTop;
  			scroll_diff = (el.scrollHeight - el.offsetHeight) - scroll_pos
  			console.log('scroll diff', scroll_diff)
  			console.log('scroll pos: ', el.scrollTop)
  			console.log('scroll height: ', el.scrollHeight - el.offsetHeight)
  		})

  	}
  };
})
.directive('menuExpander', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      console.log('menu expander directive init')

      var sidebar = $('.sidebar')

      element.bind("click", function() {
        console.log('nav clicked')

        var sidebarDisplay = sidebar.css('display')

        // toggle display none of sidebar
                console.log('sidebar, sidebarDisplay', sidebar, sidebarDisplay)
        if (sidebarDisplay == 'none') {
          sidebar.css('display', 'inline-block')
        } else {
          sidebar.css('display', 'none')
        }
      })

      $('.channel-list').bind("click", function() {
        console.log('channel list clicked')

        if ( window.innerWidth < 768 ) sidebar.css('display', 'none')
      })
    }
  }
})