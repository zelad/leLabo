var app = angular.module('uneApp', []);

app.controller("uneFonctionCtrl", function ($scope, $rootScope,$timeout, WebSocketService) {
	
	$scope.foo = [
	              {username: "rbeck", content:"bienvenue"},
	              {username: "sthomas", content:"WTF"}];
	
	$scope.fireWStest = function(){
		alert("bt cliqu�")
	};

});

/**
 * Apparition d'�l�ments suite � une "event"
 */
//MAJ des listes de cat�gorie
	$scope.majCatego = function (list) {
		$timeout(function () {
			$scope.categories = list;
		}, 100);
	}
//TODO @ICI: vid�o n�7 � 0:02:00 pour commencer � tester "$http" et "$q"