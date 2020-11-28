#!/bin/bash

watch -n 0.5 "(date '+TIME:%H:%M:%S'; echo 'Server' ; curl 192.168.0.26:3000;echo '') >> log.txt"