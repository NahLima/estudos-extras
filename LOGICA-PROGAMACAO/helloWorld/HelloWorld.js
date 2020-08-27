//JavaScript surce code

// criando uma variável que vai usar como base o http 
// cria um servidor na minha máquina

var http = require('http'); 

http.createServer(function (req, res) {
    res.wrinteHead(200, { 'Content-Type': 'text/html'});
    res.end('hello World!');
}).listen(8080);

