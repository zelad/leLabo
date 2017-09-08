#!/usr/bin/python
# -*- coding:Utf-8 -*-
'''
Created on 9 mai 2017

@author: Kiki
Exemple pris sur:
http://stockrt.github.io/p/emulating-a-browser-in-python-with-mechanize/
'''

import mechanize

if __name__ == '__main__':
    br = mechanize.Browser()
# parmaètre du "User agent" pris sur le Chrome du PC CE
    br.addheaders = [('User-agent',
                      "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36")]
# Option du navigateur
    br.set_handle_equiv(True)
    br.set_handle_gzip(True)
    br.set_handle_redirect(True)
    br.set_handle_referer(True)
    br.set_handle_robots(False)
# On go sur un site qqonc :p
    r = br.open('http://google.com')
    print "ok!"