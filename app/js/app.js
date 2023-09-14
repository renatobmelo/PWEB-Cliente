let contaController = new ContaController();
let clienteController = new ClienteController();
contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
const c2 = new Conta('4', 100);

console.log('Conta: ' + c1.saldo);
p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);
cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

const cliente1 = new Cliente("Renato", 123, 1);
const cliente2 = new Cliente('Lucas', 321, 2);
const cliente3 = new Cliente('Yago', 213);

console.log('Nome Cliente 1: ' + cliente1.nome);
console.log('Cpf Cliente 2: ' + cliente2.cpf);
console.log('Nome Cliente 3: ' + cliente3.nome);