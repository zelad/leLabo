/**
 * Test d'enregistrement de fichier
 */
app.controller("uneFonctionCtrl", function ($scope, $rootScope,$timeout) {
	var charge;
	
//	$scope.foo = [
//	              {username: "rbeck", content:"bienvenue"},
//	              {username: "sthomas", content:"WTF"}];
	
	$scope.fireWStest = function(){
		var fichier = document.getElementById('fileinput').files;
		
		charge = new FileReader();
//		charge.readAsDataURL(fichier[0]);//ceci je peux l'enregistrer dans un fichier
		charge.readAsText(fichier[0]);//De cette manière, "fileDataURL" devient lisible!
		
		charge.onload = function (event) {
	        var fileDataURL = event.target.result; // it is Data URL...can be saved to disk
//	        saveFile.saveToDisk(fileDataURL, "fichierTest.json");
	    };
	};
});

/**
 * Ensemble d'exemple de gestion de JSONP dans Angular
 */
/**déclaration HTML:
  	<script src="lib/angular/angular.js"></script>
	<script src="js/controller.js"></script>
	<script src="lib/jsonp/J50Npi.js"></script>
	
	<!-- <script type="text/javascript" src="http://localhost/customers.php?callback=JSON_CALLBACK" ></script> -->
 */

app.controller("uneFonctionCtrl", function ($scope, Exo) {
	$scope.foo = [
	              {username: "rbeck", content:"bienvenue"},
	              {username: "sthomas", content:"WTF"}];
	
//avec un jsonp (get json sécurisé)
//	$scope.questions = Exo.getPosts().then(function(posts) {
//		$scope.questions = posts;
//	}, function(reason) {
//		alert(reason);
//	})
//	
//exemple w3schools
//	Exo.getW3School();
//	Exo.getTestJsonp();
	Exo.getAngularJsonp();
});

app.factory("Exo", function($http, $q){
	var factory = {
		posts : false,
	//fonctionera avec un json sur le même domaine que cette appli Web
	//système prenant en charge les "promise"
		getPosts : function(){
			var deferred = $q.defer();
			$http.get("http://localhost/cgi-bin/download.py?ip=default")
				.success(function(data, status, headers, config) {
					console.log("data: ",data);
				}).error(function(data, status) {
					console.log("statue: ",status);
					deferred.reject("impossible de récupérer les Questions");
				})
			return deferred.promise;
		},
	//Version Avec prise en charge du "CORS" par le serveur
		getW3School : function(){
			$http.get("http://www.w3schools.com/angular/customers.php")//fonctionne
			  .then(function (response) {
				  console.log("response: ",response);
			  });
		},
	//Version fonctionnel en JS pure
		getTestJsonp: function (){
			var url = "http://api.wipmania.com/jsonp";
			var data = {};
			var callback = function(geodata){ console.log(geodata);alert("ok"); };
		//Crée dans le [head] une ligne du type:
			//<script type="text/javascript"
			//src="http://localhost/cgi-bin/download.py?ip=default&amp;callback=J50Npi.success">
			//</script>"

			J50Npi.getJSON(url, data, callback);
		},
	//Version fonctionnel en AngularJS
		getAngularJsonp: function(){
			$http.jsonp("http://localhost/cgi-bin/download.py?callback=JSON_CALLBACK")
				.success(function(data){
			        console.log(data);
			    })
			    .error(function(data, status, headers, config) {
			    	console.log("erreur de reception: ");
			    	console.log("datas: ",data);
			    	console.log("satus: ",status);
			    	console.log("headers: ",headers);
			    	console.log("config: ",config);
			    });
		}
	};
	return factory;
})