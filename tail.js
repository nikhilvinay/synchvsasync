const fs = require("fs");
const async = require("async");
const readLastLines = require('read-last-lines');
const testFolder = '.';

fs.readdirAsync = function(dirname) {
  return new Promise(function(resolve, reject) {
      fs.readdir(dirname, function(err, filenames){
          if (err) 
              reject(err); 
          else 
              resolve(filenames);
      });
  });
};

function getFilesFromCurrentDirectory(path) {
  return fs.readdirAsync(path, 'utf8');
}

function tailCommand(path){
  getFilesFromCurrentDirectory(path, 'utf8').then(function (files){
    if(files.length > 0){
          console.log("Folder===>" + path);
          async.each(files , function(currentFile , callback){
            var stats = fs.statSync(path + "/" + currentFile);            
            if(stats.isFile()){
              console.log("          File===>" + currentFile);
              var lines = require('fs').readFileSync(currentFile , 'utf-8').split('\n');
              var tailRecords = lines.slice(Math.max(lines.length - 10, 0));
              async.each(tailRecords , function( currentLine , error){
                  console.log("           " + currentLine);
              });
            }else{
              if(currentFile!="node_modules"){
                tailCommand(path+"/"+currentFile+"/");
              }
            }
          });
      }else{
        console.log("Sorry !!! No file found in current directory");
      }
      });    
}

tailCommand(".");