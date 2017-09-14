# @Time    : 2017/9/14 7:27
# @Author  : Bule-Zst
# @File    : Main.py
import os
import re, requests
from selenium import webdriver
from selenium.webdriver import DesiredCapabilities
from bs4 import BeautifulSoup
from urllib import request


def getCheckcode(cookie, savePath):
    header = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
        'Cookie': cookie
    }
    session = requests.session()
    url = 'http://202.119.225.34/CheckCode.aspx'
    conn = session.get( url, headers=header )
    fout = open( savePath, "wb" )
    fout.write( conn.content )
    fout.close()
    pass


def login(chrome):
    # Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36
    # 打开登录窗口
    chrome.get( 'http://202.119.225.34/default2.aspx' ) # 首先打开登录窗口
    addCookie = {
        'name': 'ASP.NET_SessionId',
        'value': '3szkdh2tmhugdl5544aovdrc'
    }
    chrome.add_cookie( addCookie )
    print( chrome.get_cookies() )

    savePath = "./checkcode.jpg"
    getCheckcode( cookie, savePath )


def getChrome(chromePath, cookie):
    options = webdriver.ChromeOptions()
    options.add_argument(
        'User-Agent=Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36')
    # options.add_argument('Cookie="%s"' % (cookie))
    options.add_argument( 'Cookie="123"' )
    return webdriver.Chrome( chromePath, chrome_options=options )


if __name__ == "__main__":
    chromePath = r"chromedriver.exe"
    cookie = 'ASP.NET_SessionId=kvur2m45a2qirb45zowzcr45; WEB=20111153'
    chrome = getChrome( chromePath, cookie )
    login( chrome )

