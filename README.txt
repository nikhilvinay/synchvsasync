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

              Now when I say read  each and every file in my diretory and print it's content say last 10 lines it should print sequentially , right ? But it doesn't . It's due to asynchronous behaviour of Node.js 
              This is possible only when you return promises from each function . This demonstration is done by this code . 

Procedure :
                - Download source code
                - node tail.js
