var http = require('http');
var fs=require('fs');
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;


http.createServer(function (req, res) {
  let file='.'+req.url;

  fs.readFile(file,'utf8',(err,data)=>{
    if(err){
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write("Error 404 - File not found\n");
      fs.appendFile('logger.txt',"404: file not found: " + file + "  fecha:" + dateTime + "\n", (err) => {
        // In case of a error throw err.
        if (err) throw err;
    })
      res.end(err.Error);
    } else {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write("200 Archivo hallado\n");
      fs.appendFile('logger.txt',"200: Requested file found:" + file + "  fecha:" + dateTime + "\n", (err) => {
        // In case of a error throw err.
        if (err) throw err;
    })
      res.end(data);
    }
  });
}).listen(8080);

console.log('Vive');
