angular.module('angularfireSlackApp')
	.factory('Users', function($firebaseArray, $firebaseObject, FirebaseUrl) {
		var usersRef = new Firebase(FirebaseUrl+'users');
		var users = $firebaseArray(usersRef)

		var Users = {
			getProfile: function(uid) {
				return $firebaseObject(usersRef.child(uid));
			},
			getDislayName: function(uid) {
				return users.$getRecord(uid).displayName;
			},
			all: users
		};

		return Users;

	})