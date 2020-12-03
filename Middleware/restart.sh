#!/bin/bash

echo "reboot service..."
cd Lab
git clone https://github.com/sistemas-distribuidos-st/Middleware.git
cd Middleware/$1
npm install
echo "starting service..."
pm2 start index.js
echo "service restored..."