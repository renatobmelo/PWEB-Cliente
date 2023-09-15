class ClienteEspecial extends Cliente{

private dependentes:Array<Cliente>;
    constructor(nome:string, cpf:number, conta:Conta) {
        super(nome, cpf, conta);
        this.dependentes = [];
    }
    get nome():string {
        return super.nome;
    }
    set nome(value:string) {
        super.nome = value;
    }
    get cpf():number {
        return super.cpf;
    }
    set cpf(value) {
        super.cpf = value;
    }
    get conta() {
        return super.conta;
    }
    set conta(value) {
        super.conta = value;
    }

    toString() {
        return `Dados do Cliente - Nome: ${super.nome} / CPF: ${super.cpf} / Conta: ${super.conta} / Dependentes: ${this.dependentes}`;
    }
}