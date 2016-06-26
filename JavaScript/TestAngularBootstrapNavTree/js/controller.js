/**
 * Test d'enregistrement de fichier
 */

var app = angular.module('uneApp', ['angularBootstrapNavTree']);

app.controller("uneFonctionCtrl", function ($scope, $rootScope,$timeout, WebSocketService) {
	
	$rootScope.ws = new SocketManager.SocketManager($scope,$rootScope);

	txLogin = function() {
		WebSocketService.sendObject("login",null);
	}
	
$scope.data = [{
		label: 'Languages',
		children: ['Jade','Less','Coffeescript'],
	},
	{
		label: 'autre',
	},
	{
		label: 'encore un autre'
	}
	];
/**	
	$scope.foo = [
              {username: "rbeck", content:"bienvenue"},
              {username: "sthomas", content:"WTF"}
	];
	
	$scope.fireWStest = function(){
		var fichier = document.getElementById('fileinput').files;
		charge = new FileReader();
		charge.readAsDataURL(fichier[0]);
		
		charge.onload = function (event) {
	        var fileDataURL = event.target.result; // it is Data URL...can be saved to disk
	        saveFile.saveToDisk(fileDataURL, "fichierTest.json");
	    };
	};
*/

/**
 * Apparition d'éléments suite à une "event"
 */
//MAJ des listes de catégorie
	$scope.majCatego = function (list) {
		$timeout(function () {
			$scope.data = list;
		}, 100);
	}
	
});

var SocketManager = {
		ws:{},
		
		SocketManager: function (scope,rootScope){
	        this.ws = new WebSocket("ws://localhost:9999/");
//	        this.ws = new WebSocket("ws://localhost:80/");
//	        this.ws = new WebSocket("ws://172.28.50.187/");//ne fonctionne pas chez Ali le: 28/1/2016
	        
	        this.ws.onopen = function(){
	        	console.log("Socket has been opened!");
	        	txLogin();
	        };
	        
	    	this.ws.onmessage = function(message) {
	//console.log(message);
	    	    var messageObj = JSON.parse(message.data);
	    	    
	  console.log("Received data from websocket: ", messageObj);
	    	    rxTools.rxRouting(scope,rootScope,messageObj);
	    	};
	        
	        return this.ws;
	    }
		
};

