'use strict';
var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function () {
	return {
		request: function(config) {
			config.headers = {
				'X-Parse-Application-Id': 'YlfXBv1tuVc4VZxvZh0J32JtSalJTIckk08Y9lxa',
				'X-Parse-REST-API-Key': 'QGQM2tRi4r1pZfyopAuHjTRvVOJsx0j3l95oPrXQ'
			}
			return config;
		}
	};
});