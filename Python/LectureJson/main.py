'''
Created on 19 avr. 2016

@author: Kiki
'''
import json
from pprint import pprint
import os

if __name__ == '__main__':
    from pprint import pprint

#     os.chdir('/')#Obligation de donner le chemin du fichier avec le QPython
#     with open('aFile.json') as data_file:
    with open('bookmark.json') as data_file:#test de lecture de sav FireFox 
        data = json.load(data_file)
    
    pprint(data)
    print("exemple de parcourt de dictionnaire:")
    pprint(data["children"][14]["children"][2]["children"][0]["children"][0])#montre le dossier Barre Personnel / [01]Tech / [01]Projet / Outils Favoris
#     print(data["maps"][0]["id"])
#     pprint(data["masks"]["id"])
#     pprint(data["om_points"])