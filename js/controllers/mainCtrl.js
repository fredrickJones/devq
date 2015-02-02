'use strict';
var app = angular.module('devQ');

app.controller('mainCtrl', function($scope, $firebase, fireService) {
	var ref = new Firebase('https://devq.firebaseio.com/');
	var sync = $firebase(ref);


	sync.$set({foo: 'bar'});

	sync.$push({hello: 'world'}).then(function(newChildRef) {
		console.log('added record with id ' + newChildRef.key());
	});

	sync.$remove('foo');

	var changedData = {foo: 'bar', bar: {hello: 'world'}, baz: null};
	sync.$update(changedData);


// create a query for the most recent 50 messages on the server
	var ref = new Firebase(URL).orderBy('timestamp').limitToLast(50);
// create an AngularFire reference to the data
	var sync = $firebase(ref);
// download the data into a (psuedo read-only), sorted array
// all server changes are applied in realtime
	var messagesArray = sync.$asArray();
// place the list into $scope for use in the DOM
	$scope.messages = messagesArray;

// authentication code
	
});

app.controller('mainCtrl', function($scope, $firebase, parseService) {
	var ref = new Firebase('https://devq.firebaseio.com/');
	var sync = $firebase(ref);
	$scope.data = sync.$asObject();
	$scope.queue = [];

	var getParseQ = function() {
		parseService.getQueue()
			.then(function(data) {
				$scope.queue = data;
			});
	};
	getParseQ();

	$scope.postToQueue = function() {
		parseService.postQueue($scope.question)
			.then(function() {
				getParseQ();
				$scope.question = '';
			});
	};

	$scope.changeQueue = function(objData) {
		parseService.updateQueue(objData)
			.then(function() {
				getParseQ();
			});
	};

	$scope.delFromQ = function(questionObj) {
		parseService.delFromQ(questionObj)
			.then(function() {
				getParseQ();
			});
	};

});