angular.module('angularfireSlackApp')
	.factory('Messages', function($firebaseArray, FirebaseUrl){
		var channelMessagesRef = new Firebase(FirebaseUrl+'channelMessages');
		var userMessagesRef = new Firebase(FirebaseUrl+'userMessages')

		return {
			forChannel: function(channelId) {
				return $firebaseArray(channelMessagesRef.child(channelId));
			}
		};

	})