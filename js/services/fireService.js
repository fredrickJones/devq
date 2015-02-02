'use strict';
var app = angular.module('devQ');

app.service('fireService', function($http, $q, $firebase, fireConstant) {
	var url = fireConstant.firebaseUrl;

	this.getQueue = function() {
		return $firebase(new Firebase(url + '/q'));
	};
});