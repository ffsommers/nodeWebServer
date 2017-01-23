var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
   
   if (request.url === '/') {
   	   fs.createReadStream(__dirname +'/index.htm').pipe(response);
   }

   else if (request.url === '/api') {
   	response.writeHead(200, {'Content-Type': 'application/json'});
   	var obj ={
   		firstname: 'John',
   		lastname: 'Doe'
   	};
   	response.end(JSON.stringify(obj));
   }
   else{
   	writeHead(404);
   	response.end();
   }

    
}).listen(1337, '127.0.0.1');