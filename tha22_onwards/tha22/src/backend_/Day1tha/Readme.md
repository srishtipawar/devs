# Redis Installation
---
### For Windows
 - Enable WSL from "Turn Windows features on or off settings"
 - Restart Your Laptop/PC
 - Install Ubuntu20.04 from Windows Store.
 - Open Ubuntu and setup name and password
 - Run the following commands:
    1. sudo apt-get update
    2. sudo apt-get upgrade
    3. sudo apt-get install redis-server
    4. sudo service redis-server restart
    5. redis-cli
***
# some Important commands for REDIS
***
first type 
```redis
redis-server &
```
 press Enter then type 
```
redis-cli
```
Your redis server is started successfully.