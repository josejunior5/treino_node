// import * as http from 'http';
// import { stringify } from 'querystring';
// class MyServer{
//     private header:object = {'Content-type':'text/plain'};
//     private nome:string;
//     private idade:number;    
//     constructor(_nome:string,_idade:number){
//         this.nome = _nome;
//         this.idade = _idade;                
//         console.log(this.getUserInfo()); 
//         console.log(this.getNomeById(4));
//         console.log(this.getNomesHomens());
//     }
//      private onRequest(request:http.ServerRequest,response:http.ServerResponse) {
//          response.writeHead(200,this.header);         
//          response.end('type with node');        
//     }
//         private getUserInfo() : string{
//         var dados = "Nome: " + this.nome + " Idade: " +this.idade
//         return dados;
//     }
//     private getNomeById(id:number):string{
//         var array_name:string[];        
//         array_name = ["Jose","Joao","Antonio","Carlos"];
//         let result = array_name[id];
//         if (typeof result === 'undefined'){
//             return "Nao encontrado"
//         }
//         return result;
//     }
//     private getNomesHomens():string[]{
//         var retorno = new Array(); 
//         var index:number;    
//         var array_pessoas: {id:number,nome:string,masculino:boolean}[] = 
//         [
//             {"id":1,"nome":"Felipe","masculino":true},
//             {"id":2,"nome":"Mayara","masculino":false},
//             {"id":3,"nome":"Antonio","masculino":true},
//             {"id":4,"nome":"Mario","masculino":true},
//             {"id":5,"nome":"Ana","masculino":false},            
//         ];        
//         // array_pessoas.forEach(function(value,index){
//         //     console.log(index);
//         //     if (value.masculino == true){
//         //         retorno.push(value);
//         //     }
//         // })
//         for(let idx of array_pessoas){
//             if (idx.masculino)
//                     retorno.push(idx);
//         }
//         return retorno;
//     }
//     public StartServer():void{
//         var server = http.createServer(this.onRequest).listen(3000);                        
//     }
// }
// var server = new MyServer('Jose',123);
// server.StartServer();
// console.log('outros testes abaixo')
// var coisas = new Array();
// coisas.push(["abc",1])
// coisas.push(["def",2])
// for(let idx in coisas){
//     console.log(coisas[idx])
// }
