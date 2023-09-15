class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this.dependentes = [];
    }
    get nome() {
        return super.nome;
    }
    set nome(value) {
        super.nome = value;
    }
    get cpf() {
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
