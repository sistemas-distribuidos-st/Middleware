#!/bin/bash

sshpass -p '1974' ssh yohan@192.168.1.4 'echo "reboot service...";cd lab;git clone https://github.com/sistemas-distribuidos-st/Middleware.git;cd Middleware/ServerA;npm install;echo "starting service...";pm2 start index.js;echo "service restored...";'
exit
