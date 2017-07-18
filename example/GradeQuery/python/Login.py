import simplejson
import requests

url = "http://202.119.225.34/default2.aspx"

fin = open("../value/parameter/cookie.txt")
cookie = fin.read()
fin.close()
header = {
    "Host": "202.119.225.34",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:54.0) Gecko/20100101 Firefox/54.0",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3",
    "Accept-Encoding": "gzip, deflate",
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": "205",
    "Referer": "http://202.119.225.34/default2.aspx",
    "Cookie": cookie,
    "Connection": "keep-alive",
    "Upgrade-Insecure-Requests": "1"
}
fin = open("../value/parameter/username.txt")
jsonStr = fin.read()
jsonObj = simplejson.loads(jsonStr)
# print json
fin.close()
username = jsonObj["username"]
password = jsonObj["password"]
# dDwtNTE2MjI4MTQ7Oz7mVyvQA2u2y4eNL2Izmk/oP8BTCA==
try:
    fin = open("../value/parameter/viewState.txt")
    viewState = fin.read()
    fin.close()
    fin = open("../value/parameter/checkcode.txt")
    checkcode = fin.read()
    fin.close()
except Exception, e:
    print e

data = {
    "__VIEWSTATE": viewState,
    "txtUserName": username,
    "Textbox1": "",
    "TextBox2": password,
    "txtSecretCode": checkcode,
    "RadioButtonList1": "%D1%A7%C9%FA",
    "Button1": "",
    "lbLanguage": "",
    "hidPdrs": "",
    "hidsc": ""
}
print checkcode

session = requests.session()
conn = session.post(url, headers=header, data=data)

print "Login.py"



# url = "http://202.119.225.34/xs_main.aspx?xh=" + Common.getUsername()
# header = {
#     "User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64; rv:54.0) Gecko/20100101 Firefox/54.0",
#     "Cookie":Common.getCokkie()
# }
# session = requests.session()
# conn = session.get( url, headers=header )
#
# url = "http://202.119.225.34/content.aspx"
# header = {
#     "User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64; rv:54.0) Gecko/20100101 Firefox/54.0",
#     "Cookie":Common.getCokkie()
# }
# session = requests.session()
# conn = session.get( url, headers=header )
# print conn.content

# mark
# fout = open( "Login.txt", "w" )
# fout.close()
