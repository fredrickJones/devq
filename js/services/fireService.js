'use strict';
var app = angular.module('devQ');

app.service('parseService', function($http, $q, $firebase) {
	var ref = new Firebase("https://devq.firebaseio.com/");
	var url = 'https://api.parse.com/1/classes/queue';

	this.postQueue = function(question) {
		var data = {};
		data.question = question;
		data.status = 'red';
		return $http.post(url, data);
	};

	this.getQueue = function() {
		var deferred = $q.defer();

		$http.get(url + '?order=createdAt')
			.then(function(resp) {
				deferred.resolve(resp.data.results);
			});
		return deferred.promise;
	};

	this.updateQueue = function(questionObj) {
		questionObj.status = 'yellow';
		return $http.put(url + '/' + questionObj.objectId, {status: questionObj.status});
	};

	this.delFromQ = function(questionObj) {
		return $http.delete(url + '/' + questionObj.objectId);
	}

});