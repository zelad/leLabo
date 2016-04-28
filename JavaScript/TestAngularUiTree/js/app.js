/**
 * utilisé pour le test de UI-Tree
 */
(function() {
	'use strict';

	angular.module('demoApp', [ 'ui.tree', 'ngRoute', 'ui.bootstrap' ]).config(
			[ '$routeProvider', '$compileProvider',
					function($routeProvider, $compileProvider) {
						$routeProvider.when('/first-try', {
							controller : 'FirstTryCtrl',
							templateUrl : 'views/first-try.html'
						}).otherwise({
							redirectTo : '/first-try'
						});
					}
			]);
})();