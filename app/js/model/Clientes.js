class Clientes {

    constructor(){
        this.clientes = new Array();
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    listar(){
        return this.clientes;
    }

    pesquisar(cpf) {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }

    remover(cpf) {
        const clienteProcurar = this.pesquisar(cpf);
        if (clienteProcurar) {
            const indiceARemover = this.cliente.indexOf(clienteProcurar);
            if (indiceARemover > -1) {
                this.clientes.splice(indiceARemover, 1);
            }
        }
    }

}