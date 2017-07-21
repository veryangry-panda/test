import re

import simplejson

import Common
import requests
import bs4

import sys
reload(sys)
sys.setdefaultencoding('utf8')

url = "http://202.119.225.34/xscj_gc.aspx?xh=" + Common.getUsername() + "&xm=%D5%C5%CB%C9%CC%CE&gnmkdm=N121605"
header = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:54.0) Gecko/20100101 Firefox/54.0",
    "Cookie" : Common.getCokkie(),
    "Referer": "http://202.119.225.34/xs_main.aspx?xh=" + Common.getUsername()
}
session = requests.session()
conn = session.get( url, headers=header )
# print conn.content

soup = bs4.BeautifulSoup( conn.content, "html.parser", from_encoding="utf-8" )
#<option value=""></option>
#	<option value="2016-2017">2016-2017</option>
lists = soup.find_all( "option", value=re.compile( r"\d{4}-\d{4}" ) )
schoolYear = []
for list in lists:
    schoolYear.append( list.get_text() )

# schoolYear.append( "2015-2016" )
json = {}
json["result"] = "success"
json["schoolYear"] = schoolYear

result = simplejson.dumps(json,encoding='utf-8',ensure_ascii=False)
print result
# print json