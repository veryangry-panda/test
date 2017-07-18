import json

import bs4


def getCokkie():
    fin = open( "../value/parameter/cookie.txt" )
    cookie = fin.read()
    fin.close()
    return cookie

def getViewState():
    fin = open("../value/parameter/viewState.txt")
    cookie = fin.read()
    fin.close()
    return cookie

def getUsername():
    fin = open("../value/parameter/username.txt")
    jsonStr = fin.read()
    fin.close()
    jsonObj = json.loads(jsonStr)
    username = jsonObj["username"]
    return username

def getPassword():
    fin = open("../value/parameter/username.txt")
    jsonStr = fin.read()
    fin.close()
    jsonObj = json.loads(jsonStr)
    password = jsonObj["password"]
    return password

def generateViewState( conn ):
    viewState = ""
    soup = bs4.BeautifulSoup(conn.content, "html.parser", from_encoding="utf-8")
    # <input type="hidden" name="__VIEWSTATE" value="dDwtNTE2MjI4MTQ7Oz5orbzWVfnyxfXkq3NcS/ZmZ8y+iA==" />
    inputs = soup.find_all("input")
    for input in inputs:
        if input["name"] == "__VIEWSTATE":
            # print input["value"]
            viewState = input["value"]
            break
    fout = open("../value/parameter/viewState.txt", "w")
    fout.write(viewState)
    fout.close()