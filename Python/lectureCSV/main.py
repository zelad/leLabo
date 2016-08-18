#!/usr/bin/python
# -*- coding:Utf-8 -*-
'''
Created on 18 août 2016
@notes: trouvé sur:
http://www.commentcamarche.net/faq/2382-python-lire-et-ecrire-des-fichiers-csv
https://docs.python.org/2/library/csv.html
@author: rbeck
'''
import csv

# écriture:
with open("MONFICHIER.csv", "wb") as datasFile:
    c = csv.writer(datasFile)#on peut utiliser "with ...:" puisque ici le fichier n'est jamais fermé!
    '''
en cas de fichier CSV spécifique, utiliser:
    csv.reader(datasCSV, delimiter=';', quotechar='"')
    '''
    c.writerow(["Nom","Adresse","Telephone","Fax","Courriel","Autres"])
    c.writerow(["beck","Lille","mon 06","mon 03Fax","zelda@hyrule.com","un truc..."])

# lecture:
with open("MONFICHIER.csv","rb") as datasFile:
    
    cr = csv.reader(datasFile)#on peut utiliser la lecture de fichier avec "codecs" en cas de pb d'encodage
    for row in cr:
        print row
print "fini"
