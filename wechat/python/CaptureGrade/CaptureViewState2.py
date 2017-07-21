import requests

import Common

url = "http://202.119.225.34/xscj_gc.aspx?xh=" + Common.getUsername() + "&xm=%D5%C5%CB%C9%CC%CE&gnmkdm=N121605"
header = {
    "Cookie": Common.getCokkie(),
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36",
    "Referer": "http://202.119.225.34/xs_main.aspx?xh=" + Common.getUsername()
}

session = requests.session()
conn = session.get( url, headers=header )

Common.generateViewState(conn)

# print conn.content

# print "CaptureViewState2.py"

# mark
# fout = open( "CaptureViewState2.txt", "w" )
# fout.close()

