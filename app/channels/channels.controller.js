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

		channelsCtrl.createChannel = function() {
			// $add on the $firebaseArray is similar to .push() on a js Array, also returns a promise
			channelsCtrl.channels.$add(channelsCtrl.newChannel).then(function(){
				channelsCtrl.newChannel = {
					name: ''
				}
				// close createChannel after channel created
				$state.go('channels');
			})
		}
	})