angular.module('angularfireSlackApp')
	.controller('ChannelsCtrl', function($state, Auth, Users, profile, channels) {

		var channelsCtrl = this;

		channelsCtrl.profile = profile;
		channelsCtrl.channels = channels;
	})