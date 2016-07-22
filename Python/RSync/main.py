'''
Created on 22 juin 2016

@author: rbeck
'''
import rsync
# rsync.main("-r dirTest backUpDirTest")
rsync.main('-r "dirTest" "backUpDirTest"')
rsync.printUsage()
print "ok!"
