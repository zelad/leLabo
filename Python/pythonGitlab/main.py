'''
Created on 30 juil. 2016

@author: Kiki
'''
import gitlab
import requests
if __name__ == '__main__':
#     gl = gitlab.Gitlab('https://gitlab.com','')
#     gl.auth()
    
#     projects = gl.projects.owned()
    payload = {'private_token':''}
    r = requests.get('https://gitlab.com/api/v3/projects/owned',params=payload)
    print r.content