#coding:utf-8

import simplejson
import requests
import Common
import bs4
import sys

reload(sys)
sys.setdefaultencoding('utf-8')

url = "http://202.119.225.34/default2.aspx"

header = {
    "Host": "202.119.225.34",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:54.0) Gecko/20100101 Firefox/54.0",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3",
    "Accept-Encoding": "gzip, deflate",
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": "205",
    "Referer": "http://202.119.225.34/default2.aspx",
    "Cookie": Common.getCokkie(),
    "Connection": "keep-alive",
    "Upgrade-Insecure-Requests": "1"
}

data = {
    "__VIEWSTATE": Common.getViewState(),
    "txtUserName": Common.getUsername(),
    "Textbox1": "",
    "TextBox2": Common.getPassword(),
    "txtSecretCode": Common.getCheckcode(),
    "RadioButtonList1": "%D1%A7%C9%FA",
    "Button1": "",
    "lbLanguage": "",
    "hidPdrs": "",
    "hidsc": ""
}



session = requests.session()
conn = session.post(url, headers=header, data=data )
content =  conn.content.decode("gb2312").encode("utf-8")
# print content
if content.index( "验证码不正确" ) != -1:
    print "checkcode is wrong"
if content.index( "密码不能为空" ) != -1:
    print "password is empty"
if content.index( "密码错误" ) != -1:
    print "password is empty"
# soup = bs4.BeautifulSoup( conn.content, "html.parser", from_encoding="utf-8" )



# print conn.content



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
