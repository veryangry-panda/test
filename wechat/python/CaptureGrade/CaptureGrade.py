# -*- coding:UTF-8 -*-

import bs4
import simplejson

import Common
import requests



url = "http://202.119.225.34/xscj_gc.aspx?xh=" + Common.getUsername() + "&xm=%D5%C5%CB%C9%CC%CE&gnmkdm=N121605"
header = {
    "User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64; rv:54.0) Gecko/20100101 Firefox/54.0",
    "Cookie": Common.getCokkie(),
    "Referer": "http://202.119.225.34/xscj_gc.aspx?xh=" + Common.getUsername() + "&xm=%D5%C5%CB%C9%CC%CE&gnmkdm=N121605"
}
data = {
    "__VIEWSTATE": Common.getViewState(),
    "ddlXN":Common.getSchoolYear(),
    "ddlXQ":Common.getTerm(),
    "Button1":"%B0%B4%D1%A7%C6%DA%B2%E9%D1%AF"
}

session = requests.session()
conn = session.post( url, headers=header, data=data )

soup = bs4.BeautifulSoup(conn.content, "html.parser", from_encoding="utf-8")
trs = soup.find("table").find_all("tr")


flag = True
result = []
for tr in trs:
    if flag:
        flag = not flag
        continue
    result_pre = {}
    tds = tr.find_all("td")
    count = 0
    for td in tds:
        if count == 3:
            result_pre["className"] = td.get_text().replace(" ", "")
        if count == 6:
            result_pre["credit"] = td.get_text().replace(" ", "")
        if count == 7:
            result_pre["GPA"] = td.get_text().replace(" ", "")
        if count == 8:
            result_pre["grade"] = td.get_text().replace(" ", "")

        count = count + 1

    result.append(result_pre)

tmp = {}
tmp["result"] = "success"
tmp["grade"] = result

soup = bs4.BeautifulSoup(conn.content, "html.parser", from_encoding="utf-8")
a = soup.find("span", id="pjxfjd").find("b")
GPA = a.get_text()


tmp["GPA"] = GPA[7:30]


result = simplejson.dumps(tmp)
print(result)

# mark
# fout = open( "CaptureGrade.txt", "w" )
# fout.close()
# print "CaptureGrade.py"