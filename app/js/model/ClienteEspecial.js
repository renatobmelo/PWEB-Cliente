class ClienteEspecial extends Cliente{

    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this.dependentes = [];
    }
    get nome() {
        return super._nome;
    }
    set nome(value) {
        super._nome = value;
    }
    get cpf() {
        return super._cpf;
    }
    set cpf(value) {
        super._cpf = value;
    }
    get conta() {
        return super._conta;
    }
    set conta(value) {
        super._conta = value;
    }

    toString() {
        return `Dados do Cliente - Nome: ${super._nome} / CPF: ${super._cpf} / Conta: ${super._conta} / Dependentes: ${this._dependetes}`;
    }
}