angular.module('angularfireSlackApp')
	.controller('ChannelsCtrl', function($state, Auth, Users, profile, channels) {

		var channelsCtrl = this;

		channelsCtrl.profile = profile;
		channelsCtrl.channels = channels;

		channelsCtrl.getDisplayName = Users.getDisplayName;
		channelsCtrl.getGravatar = Users.getGravatar;

		channelsCtrl.logout = function () {
			console.log('logging out')
			Auth.$unauth();
			$state.go('home');
		}

		channelsCtrl.newChannel = {
			name: ''
		}
	})