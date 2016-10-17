var http = require('http');
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/plain'});
res.end('server js rodando');
}).listen(3090,'127.0.0.1');
