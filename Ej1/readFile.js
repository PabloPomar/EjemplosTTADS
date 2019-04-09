var fs=require('fs');
var fileData=fs.readFileSync('file1.txt','utf8');

console.log("fileData:\n"+fileData);
