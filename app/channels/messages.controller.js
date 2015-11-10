angular.module('angularfireSlackApp')
	.controller('MessagesCtrl', function(profile, channelName, messages) {
		var messagesCtrl = this;

		// set messages and channel name to the respective dependencies
		messagesCtrl.messages = messages;
		messagesCtrl.channelName = channelName;
	});