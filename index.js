//const math = require('./math.js');

/*console.log(math);

console.log(math.add(1,0));
console.log(math.substract(2,1));
console.log(math.multiply(1,0));
console.log(math.divide(1,0));
console.log(math.divide(2,1)); */


/*
const os = require('os');

console.log('Sistema operativo: ' + os.platform());
console.log('Version: ' + os.release());
console.log('Memoria Libre: ' + os.freemem() + ' bytes');
console.log('Memoria Total: ' + os.totalmem() + ' bytes');
*/


/*const fs = require('fs');

fs.writeFile('./texto.txt', 'Linea uno',function(err){
    if(err){
        console.log(err);
    }
    console.log('Archivo Creado');
})

console.log('Ultima linea de codigo');

fs.readFile('./texto.txt', function(err,data){
    if(err){
        console.log(err);
    }
    if(data){
        console.log(data.toString());
    }
})

console.log('Ultima linea de codigo');
*/

const colors = require('colors');
/*
const http = require('http');
const handleServer = function(req,res){
    res.writeHead(200, { 'Content-type': 'text/html'});
    res.write('<h1>Hola Mario desde NodeJS</h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log('Server on port 3000'.yellow.bgRed);
});
*/

const express = require('express');

const server = express();
server.get('/', function(req,res){
    res.send('<h1>Hola mundo con Express y NodeJS</h1>');
    res.end();
});

server.listen(3000,function(){
    console.log('Server port 3000'.red);
});
