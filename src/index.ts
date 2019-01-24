import * as http from 'http';
import Cliente = require('./Cliente');

var cli = new Cliente();
cli.altura = 1.89;
cli.codCli = 1;
cli.nome = 'Anotonio Glauber';

var server = http.createServer((request,response)=>{
    response.writeHead(200,{"Content-Type" : "text/html"})
    response.write(`Cliente ${cli.nome} Altura ${cli.altura} Codigo${cli.codCli}`);
    response.end();

}).listen(3000)

console.log('servidor iniciado na porta 3000');
console.debug('Eae tudo bem');

