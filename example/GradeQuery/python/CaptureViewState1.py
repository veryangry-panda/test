import requests
import Common

url = "http://202.119.225.34/default2.aspx"
header = {
    "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:54.0) Gecko/20100101 Firefox/54.0"
}
def generateCookie( conn ):
    res = str(conn.cookies)
    cookie = ""
    # <RequestsCookieJar[<Cookie ASP.NET_SessionId=t3vbfyiropsb2cq4jplxrezy for 202.119.225.34/>, <Cookie WEB=20111152 for 202.119.225.34/>]>
    # "ASP.NET_SessionId=rjapmgvtlisgo32gwvs5u455; WEB=20111157"

    # first part
    index1 = res.find("<Cookie")
    index1 += len("<Cookie")
    index1 += 1
    index2 = res.find("for", index1)
    index2 -= 1
    cookie += res[index1:index2]

    # second
    index1 = res.find("Cookie", index2)
    index1 += len("Cookie")
    index1 += 1
    index2 = res.find("for", index1)
    index2 -= 1
    cookie += ";" + res[index1:index2]

    # file input
    fout = open("../value/parameter/cookie.txt", "w")
    fout.write(cookie)
    fout.close()

session = requests.session()
conn = session.get( url, headers=header )

# print conn.content

# generate cookie
generateCookie( conn )

# generate ViewState
Common.generateViewState( conn )

# mark
# fout = open( "CaptureViewState1.txt", "w" )
# fout.close()
