#!/usr/bin/python
# -*- coding:Utf-8 -*-
'''
Created on 24 juil. 2016
Essai de connection et "fetch et Pull" vers GitLab
@author: Kiki
'''

from dulwich.client import TCPGitClient
from dulwich.client import SSHVendor
from dulwich.repo import Repo

if __name__ == '__main__':
#model d addresse: "ssh://user@domain.tld/path/to/repo.git"
#     client = TCPGitClient('git+ssh://git@gitlab.com:Emrik/FFBookMark_DB.git'.encode('ascii'),22)
    client = SSHVendor.run_command('gitlab.com', command, 'git', 22)#@ICI
#     local = Repo.init(b"local", mkdir=True)#pour créer un repo
    local = Repo("local")
    remote_refs = client.fetch(b"/", local)#KO
