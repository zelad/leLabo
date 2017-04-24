##Pour avoir toujours la même lettre sur une clef USB
Utiliser le prog [USBDLM](http://www.uwe-sieber.de/usbdlm_e.html).
###Configuration:
Tout se passe dans le fichier **USBDLM.ini** se trouvant dans le dossier de USBDLM (au mieux dans ```racine/programmes```

* pour afficher le **log**:

		[Settings]
		...
		WriteLogFile=1
ce fichier s'écrira à la racine du **root**
* pour attribuer une lettre en fonction du nom de la clef (qui sera afficher dans le fichier log)

		[DriveLetters]
		...
		Volume Name = \\?\Volume{72bxxx1-97d8-11e6-8926-80xxx63}\
		Letters=R
	Ne pas oublier de stop/start le service pour que ceci prenne effet!
	
Plus d'info sur la config et les conditions [ici](http://www.uwe-sieber.de/usbdlm_help_e.html#by_criteria)