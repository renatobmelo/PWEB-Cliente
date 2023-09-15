let contaController = new ContaController();

contaController.listar();
const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
console.log('Conta: ' + c1.saldo);
p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);
cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);



let clienteController = new ClienteController();
clienteController.listar();
const cliente1 = new Cliente('Renato', 123321);
const cliente2 = new Cliente('Lukz', 321123);
const cliente3 = new Cliente('Yago', 231231);
console.log('Cliente1 Nome: ' + cliente1.nome);
console.log('Cliente2 CPF: ' + cliente2.cpf);
console.log('Cliente3 Nome: ' + cliente3.nome);