# import requests
import os
import random
import time


# requests.head("http://192.168.0.20/pantiltcontrol.cgi?PanSingleMoveDegree=5&TiltSingleMoveDegree=5&PanTiltSingleMove=1")
# user_agent = r'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT)'
# headers = {'User-Agent' : user_agent, "Accept": "text/plain"}


while True:
    rand = random.randint(0, 4)
    print(rand)
    if rand == 0:
        # up
        # r = requests.get("http://192.168.0.20/pantiltcontrol.cgi")
        # r = requests.get("http://192.168.0.20/pantiltcontrol.cgi?PanSingleMoveDegree=5&TiltSingleMoveDegree=5&PanTiltSingleMove=1")
        os.system('curl -k "http://192.168.0.20/pantiltcontrol.cgi?PanSingleMoveDegree=5&TiltSingleMoveDegree=5&PanTiltSingleMove=1"')
    if rand == 1:
        # down
        # r = requests.get("http://192.168.0.20/pantiltcontrol.cgi")
        # r = requests.get("http://192.168.0.20/pantiltcontrol.cgi?PanSingleMoveDegree=5&TiltSingleMoveDegree=5&PanTiltSingleMove=7")
        os.system('curl -k "http://192.168.0.20/pantiltcontrol.cgi?PanSingleMoveDegree=5&TiltSingleMoveDegree=5&PanTiltSingleMove=7"')
    if rand == 2: 
        # left
        # r = requests.get("http://192.168.0.20/pantiltcontrol.cgi")
        # r = requests.get("http://192.168.0.20/pantiltcontrol.cgi?PanSingleMoveDegree=5&TiltSingleMoveDegree=5&PanTiltSingleMove=3")
        os.system('curl -k "http://192.168.0.20/pantiltcontrol.cgi?PanSingleMoveDegree=5&TiltSingleMoveDegree=5&PanTiltSingleMove=3"')
    if rand == 3:
        # right
        # r = requests.post("http://192.168.0.20/pantiltcontrol.cgi", headers=headers, params={'PanSingleMoveDegree': '5', 'TiltSingleMoveDegree': '5', 'PanTiltSingleMove': '5'})
        # r = requests.get("http://192.168.0.20/pantiltcontrol.cgi?PanSingleMoveDegree=5&TiltSingleMoveDegree=5&PanTiltSingleMove=5")
        os.system('curl -k "http://192.168.0.20/pantiltcontrol.cgi?PanSingleMoveDegree=5&TiltSingleMoveDegree=5&PanTiltSingleMove=5"')
    if rand == 4:
        # home
        # r = requests.get("http://192.168.0.20/pantiltcontrol.cgi", params={'PanSingleMoveDegree': 5, 'TiltSingleMoveDegree': 5, 'PanTiltSingleMove': 4})
        # r = requests.get("http://192.168.0.20/pantiltcontrol.cgi?PanSingleMoveDegree=5&TiltSingleMoveDegree=5&PanTiltSingleMove=4")
        os.system('curl -k "http://192.168.0.20/pantiltcontrol.cgi?PanSingleMoveDegree=5&TiltSingleMoveDegree=5&PanTiltSingleMove=4"')
    time.sleep(5)
