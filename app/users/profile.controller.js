angular.module('angularfireSlackApp')
	.controller('ProfileCtrl', function($state, md5, auth, profile) {

		// md5 - gravatar needs email to be md5 hashed

		var profileCtrl = this;

		profileCtrl.profile = profile;

		profileCtrl.updateProfile = function() {
			profileCtrl.profile.emailHash = md5.createHash(auth.password.email);
			profileCtrl.profile.$save();
		};

	})