'''
Created on 19 avr. 2016

@author: Kiki
'''
import json
from pprint import pprint

if __name__ == '__main__':
    from pprint import pprint

    with open('aFile.json') as data_file:    
        data = json.load(data_file)
    
    pprint(data)
    
    print(data["maps"][0]["id"])
    pprint(data["masks"]["id"])
    pprint(data["om_points"])