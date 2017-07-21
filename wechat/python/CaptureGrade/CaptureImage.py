import requests

import Common

url = "http://202.119.225.34/CheckCode.aspx"

header = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv54.0) Gecko/20100101 Firefox/54.0',
    "Cookie": Common.getCokkie()
}



try:
	session = requests.session()
	conn = session.get( url, headers=header )
	fout = open( "../../value/images/CaptureGrade/checkcode.jpg", "wb" )
	fout.write( conn.content )
	fout.close()
except Exception,e:
	print e

print "CaptureImage.py"


# mark
# fout = open( "CaptureImage.txt", "w" )
# fout.close()

