'use strict';
var app = angular.module('devQ');

app.controller('mainCtrl', function($scope, fireService) {
	$scope.getData = function() {
		$scope.queue = fireService.getQueue().$asArray();
		// console.log($scope.queue);
	};

	$scope.postToQueue = function() {
		var data = {};
		data.question = $scope.question;
		data.status = 'red';
		data.createdAt = new Date();
		$scope.queue.$add(data);
		$scope.question = '';
		// console.log(data);
	};
	
	$scope.changeQueue = function(question) {
		question.status = 'yellow';
		question.createdAt = new Date();
		$scope.queue.$save(question);
		// console.log(question);
	};

	$scope.delFromQ = function(item) {
		$scope.queue.$remove(item);
		return;
	};

	$scope.getData();
	console.log($scope.queue);
});




// app.controller('mainCtrl', function($scope, $firebase, parseService) {
// 	$scope.data = sync.$asObject();
// 	$scope.queue = [];

// 	var getParseQ = function() {
// 		fireService.getQueue()
// 			.then(function(data) {
// 				$scope.queue = data;
// 			});
// 	};
// 	getParseQ();

// 	$scope.postToQueue = function() {
// 		fireService.postQueue($scope.question)
// 			.then(function() {
// 				getParseQ();
// 				$scope.question = '';
// 			});
// 	};

// 	$scope.changeQueue = function(objData) {
// 		parseService.updateQueue(objData)
// 			.then(function() {
// 				getParseQ();
// 			});
// 	};

// 	$scope.delFromQ = function(questionObj) {
// 		parseService.delFromQ(questionObj)
// 			.then(function() {
// 				getParseQ();
// 			});
// 	};

// });