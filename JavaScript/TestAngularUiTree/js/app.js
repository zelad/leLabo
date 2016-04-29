/**
 * utilisé pour le test de UI-Tree
 * @TTENTION ne fonctionne pas avec Chrome! Oo
 */
(function() {
	'use strict';

	angular.module('demoApp', [ 'ui.tree', 'ngRoute', 'ui.bootstrap' ]).config(
			[ '$routeProvider', '$compileProvider',
					function($routeProvider, $compileProvider) {
						$routeProvider
					        .when('/basic-example', {
					            controller: 'BasicExampleCtrl',
					            templateUrl: 'views/basic-example.html'
						}).otherwise({
							redirectTo : '/basic-example'
						});
					}
			]);
})();