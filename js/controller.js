var app = angular.module('uneApp', []);

app.controller("uneFonctionCtrl", function ($scope, $rootScope,$timeout, WebSocketService) {
	
	$scope.foo = [
	              {username: "rbeck", content:"bienvenue"},
	              {username: "sthomas", content:"WTF"}];
	
	$scope.fireWStest = function(){
		alert("bt cliqué")
	};

});

/**
 * Apparition d'éléments suite à  une "event"
 */
//MAJ des listes de catégorie
	$scope.majCatego = function (list) {
		$timeout(function () {
			$scope.categories = list;
		}, 100);
	}
//TODO @ICI: vidéo n°7 à 0:02:00 pour commencer à tester "$http" et "$q"