angular.module('angularfireSlackApp')
	.controller('ChannelsCtrl', function($state, Auth, Users, profile, channels) {

		var channelsCtrl = this;

		channelsCtrl.profile = profile;
		channelsCtrl.channels = channels;
		channelsCtrl.users = Users.all

		channelsCtrl.getDisplayName = Users.getDisplayName;
		channelsCtrl.getGravatar = Users.getGravatar;

		channelsCtrl.logout = function () {
			console.log('logging out')
			channelsCtrl.profile.online = null;
			channelsCtrl.profile.$save().then(function(){
				Auth.$unauth();
				$state.go('home');
			})
		}

		channelsCtrl.newChannel = {
			name: ''
		}

		channelsCtrl.createChannel = function() {
			// $add on the $firebaseArray is similar to .push() on a js Array, also returns a promise
			channelsCtrl.channels.$add(channelsCtrl.newChannel).then(function(ref){
				$state.go('channels.messages', {channelId: ref.key()})
			})
		}

		// set the current user as online
		Users.setOnline(profile.$id)
	})