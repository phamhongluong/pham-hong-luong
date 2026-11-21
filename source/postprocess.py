import sys,re
s=open('bundle.html',encoding='utf-8').read()
s=s.replace('<meta charset=UTF-8>','',1)
s=s.replace('<html lang=vi>','<html lang=vi><meta charset=UTF-8>',1)
assert s.find('<meta charset=UTF-8>')<100
open('dist-index.html','w',encoding='utf-8').write(s)
print('ok', s[:60])
