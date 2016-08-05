#!/usr/bin/python
# -*- coding:Utf-8 -*-
'''
Created on 5 août 2016
Pour tester sur Tablette le passage du Json vers SQLite
@author: Kiki
'''

import json
import os
import sqlite3 as lite
import sys

from NodeBookM import NodeBookM

def setDB(node,cur):
    print node.parent
#@ICI: transformer les "node['type']" en "node.type"
    if node.type.find('text/x-moz-place-container') != -1:
    #Ici nous avons un dossier
        print node.title
        print node.index
        print node.dateAdded
        print node.lastModified
        print node.parent
#indice:
#u' '.join((agent_contact, agent_telno)).encode('utf-8')
#http://stackoverflow.com/questions/9942594/unicodeencodeerror-ascii-codec-cant-encode-character-u-xa0-in-position-20
        values = "'{0}','{1}','{2}','{3}','{4}'".format(node.title,node.index,node.dateAdded,node.lastModified,node.parent)
        cur.execute("INSERT INTO folder (title, position, dateAdded, lastModified, parent) VALUES ("+values+")")
#         dictTreeNode['label'] = node['title']
        if node.children:#si la liste est non vide. Rajouter "not" devant "if" pour tester qu elle est vide
            for node in node.children:
                setDB(node, cur)
    elif node.type.find('text/x-moz-place-separator') != -1:
    #ici nous avons un séparateur
        pass
    elif node.type.find('text/x-moz-place') != -1:
    #et ici un favoris, "bookMark" pour la base
        pass
    
def laboSQLite(listNode):
    con = lite.connect('bookMark.db')
    with con:
        cur = con.cursor()
        for node in listNode:
            setDB(node, cur)
            
def getJson(file):
    with open(file) as data_file:#test de lecture de sav FireFox 
        data = json.load(data_file)
    return  data

def getNodeBookM(listNodesBookM):
    listObjNodeBookM = list()
    for node in listNodesBookM:
    #Création des objets node, contenant tous les infos des favoris
        listObjNodeBookM.append(NodeBookM(node))
    return listObjNodeBookM

os.chdir('./')
# Récupération du Json
jsonData = getJson('bookmarks.json')
barPersonal = jsonData['children'][14]['children']
nodesBM = getNodeBookM(barPersonal)
# Test de remplissage de DB
laboSQLite(nodesBM)