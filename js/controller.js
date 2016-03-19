/**
 * Test d'enregistrement de fichier
 */

var app = angular.module('uneApp', []);

app.controller("uneFonctionCtrl", function ($scope, $rootScope,$timeout, WebSocketService) {
	var charge;
	
//	$scope.foo = [
//	              {username: "rbeck", content:"bienvenue"},
//	              {username: "sthomas", content:"WTF"}];
	
	$scope.fireWStest = function(){
		var fichier = document.getElementById('fileinput').files;
		charge = new FileReader();
		charge.readAsDataURL(fichier[0]);
		
		charge.onload = function (event) {
	        var fileDataURL = event.target.result; // it is Data URL...can be saved to disk
	        saveFile.saveToDisk(fileDataURL, "fichierTest.json");
	    };
	};


/**
 * Apparition d'�l�ments suite � une "event"
 */
//MAJ des listes de cat�gorie
	$scope.majCatego = function (list) {
		$timeout(function () {
			$scope.categories = list;
		}, 100);
	}
	
});


//TODO @ICI: vid�o n�7 � 0:02:00 pour commencer � tester "$http" et "$q"