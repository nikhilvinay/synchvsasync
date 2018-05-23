# synchvsasync
This will demonstrate you , difference between asynchronus and synchronus

Problem Definition : 
                              Let's say , in your current path there are multiple files and directories.Now your task is to read each file and print it's last 10 lines in Node.js 
    Example : Consider below tree structure in your current path . 1
├── 1.txt
├── 2
│   ├── 1.txt
│   ├── 2.txt
│   ├── package-lock.json
│   └── tail.js
├── 2.txt
├── 3
│   ├── 1.txt
│   ├── 2.txt
│   ├── package-lock.json
│   └── tail.js
├── 4
│   ├── 1.txt
│   ├── 2.txt
│   ├── package-lock.json
│   └── tail.js
├── package-lock.json
└── tail.js

Problem Using read() function :
          When I use read function from file system module it actually reads all file names once and then prints all file data.
Solution over read() :
          Using promise it can be easily achivable . Returning a promise while reading each file can solve this problem easily
      
