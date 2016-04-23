/**
  * Fonction d'orientation de message entrant
  */
var rxTools = {
//Orientation du message reçu
//    rxRouting : function (scope,rootScope,data/*,PartyStartService*/){
	rxRouting : function (scope,rootScope,data){
        var mType = data.messageType;
        
        switch(mType) {
            case "accueil":
                alert(data.message);
                break;
            
            case "broadCastEndR":
//console.info("[Test:] Blason de fin de tour recu: ",data.blasonColor);
				blasonManager.majAffichEndRound(scope, data);
            	break;
				
            default:
                alert("Type de message inconnue!");
            	console.info("ORNI: ",data);
        }
    }
        
};
/**
 * Class permettant d'enregistrer un fichier
 */
var saveFile = {
		getFile : function (){
			document.querySelector('input[type=file]').onchange = function () {
			    var file = this.files[0];
			};
		},
		
		saveToDisk : function (fileUrl, fileName) {
		    var save = document.createElement('a');
		    save.href = fileUrl;
		    save.target = '_blank';
		    save.download = fileName || fileUrl;

		    var event = document.createEvent('Event');
		    event.initEvent('click', true, true);

		    save.dispatchEvent(event);
		    (window.URL || window.webkitURL).revokeObjectURL(save.href);
		}
}

