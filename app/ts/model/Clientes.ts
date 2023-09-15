class Clientes {

private clientes:Array<Cliente>;

    constructor(){
        this.clientes = new Array<Cliente>;
    }
    inserir(cliente:Cliente) {
        this.clientes.push(cliente);
    }
    listar(){
        return this.clientes;
    }

    pesquisar(cpf:number):Cliente {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }

    remover(cpf:number) {
        const clienteProcurar = this.pesquisar(cpf);
        if (clienteProcurar) {
            const indiceARemover = this.clientes.indexOf(clienteProcurar);
            if (indiceARemover > -1) {
                this.clientes.splice(indiceARemover, 1);
            }
        }
    }

}