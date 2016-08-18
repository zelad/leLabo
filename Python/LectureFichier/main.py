#!/usr/bin/python
# -*- coding:Utf-8 -*-
'''
Created on 18 août 2016

@author: rbeck
'''
import os,codecs

listCat = []
fileUrl = "../conf"#nom du fichier (pas besoins d extention...)

# aFile = codecs.open(fileUrl,"r","utf-8")#Alternative mais ne pas oublier de fermer le fichier!!
#     dataFile = aFile.readlines()

with codecs.open(fileUrl,"r","utf-8") as dataFile:
    for data in dataFile:
        catego = data.split("\r\n")
        listCat.append(catego[0])
#         aFile.close()

