const c1 = new Conta('1', 100);
const c2 = new Conta('2');


console.log(c1.numero);
const contaController = new ContaController();
contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
contaController.listar();

const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);
console.log(contaBonificada.getSaldo());


const pessoa: Pessoa = new Pessoa("Gustavo", 30, new Date())
const pessoaFisica: PessoaFisica = new PessoaFisica("Savio", 22, new Date(), "122222" );
const pessoaJuridica: PessoaJuridica = new PessoaJuridica("Quixaba", 22, new Date(), "687726");

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.dataNascimento);

console.log(pessoaFisica.nome);
console.log(pessoaFisica.idade);
console.log(pessoaFisica.dataNascimento);
console.log(pessoaFisica.cpf);

console.log(pessoaJuridica.nome);
console.log(pessoaJuridica.idade);
console.log(pessoaJuridica.dataNascimento);
console.log(pessoaJuridica.cnpj);




