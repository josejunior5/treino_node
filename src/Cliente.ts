import Pessoa = require("./Pessoa");

class Cliente extends Pessoa{
    public codCli:number;    
    public endereco:string;
}


export = Cliente;