#!/usr/bin/python
# -*- coding:Utf-8 -*-
'''
Created on 9 janvier 2017

@author: rbeck
@Notes: ligne de cmd dans le dossier des ".cpp" avec ce "setup.py"
> python setup.py build_ext --inplace
@source :
http://docs.cython.org/en/latest/src/reference/compilation.html
'''

from Cython.Build import cythonize

try:
    from setuptools import setup
    from setuptools import Extension
except ImportError:
    from distutils.core import setup
    from distutils.extension import Extension

sourcefiles = ['sift.cpp']

extensions = [
              Extension("testCppToPyd", 
                        sourcefiles,
                        include_dirs = ["C://Users//rbeck//Downloads//opencv_contrib-master//modules//xfeatures2d//include",
                                        "C://Users//rbeck//Downloads//opencv-master//modules//core//include",
                                        "C://Users//rbeck//Downloads//opencv-master//include"],
                        language="c++", )
              ]

setup(ext_modules = cythonize(extensions))