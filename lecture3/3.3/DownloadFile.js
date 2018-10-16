const path = require('path');
const fs = require('fs');
const http = require('http');

let port = process.argv[2] || 3000;
const httpServer = http.createServer(requestHandler);
httpServer.listen(port, () => {console.log('server is listening on port '+ port)});

function requestHandler(req, res){
  if(req.url === '/'){
    sendIndexHtml(res);
  }else if( req.url === '/list'){
    sendListOfFiles(res);
  }else if( /\/download-folder\/[^\/]+$/.test(req.url)){
    saveFile(req.url, res);
  }else{
    sendInvalidRequest(res);
  }
}

function sendIndexHtml(res){
  let indexFile = path.join(__dirname, 'index.html');
  fs.readFile(indexFile, (err, content) => {
    if(err){
      res.writeHead(404, {'Content-Type': 'text'});
      res.write('File Not Found!');
      res.end();
    }else{
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(content);
      res.end();
    }
  })
}

function sendListOfFiles(res){
  let uploadDir = path.join(__dirname, 'download-folder');
  fs.readdir(uploadDir, (err, files) => {
    if(err){
      console.log(err);
      res.writeHead(400, {'Content-Type': 'application/json'});
      res.write(JSON.stringify(err.message));
      res.end();
    }else{
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.write(JSON.stringify(files));
      res.end();
    }
  })
}
function saveFile(url, res){
  let file = path.join(__dirname, url);
  fs.readFile(file, (err, content) => {
    if(err){
      res.writeHead(404, {'Content-Type': 'text'});
      res.write('File Not Found!');
      res.end();
    }else{
      res.writeHead(200, {'Content-Type': 'application/octet-stream'});
      res.write(content);
      res.end();
    }
  })
}
function sendInvalidRequest(res){
  res.writeHead(400, {'Content-Type': 'application/json'});
  res.write('Invalid Request');
  res.end(); 
}


