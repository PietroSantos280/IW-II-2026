//1. Par ou Ímpar
//Peça um número ao usuário e exiba se ele é par ou ímpar.
console.log("Exercicio 1");
var n = prompt("digite um numero para ver se é par ou impar: ");
if (n % 2 == 0){
    console.log("seu numero é par");
}else{
    console.log("seu numero é impar");
}
//2. Verificação de Maioridade
//Solicite a idade do usuário e informe se ele é maior de idade (18 anos ou mais) ou menor de idade.
console.log("Exercicio 2");
var id = prompt("digite sua idade:");
if (id >=18){
    console.log("você é maior de idade");
}else{
    console.log("você é menor de idade");
}
//3. Contagem de 1 a 10
//Exiba os números de 1 a 10 no console usando um laço for.
console.log("Exercicio 3");
for(var i = 1; i<11;i++){
    console.log(i)
}
//4. Contagem Regressiva
//Peça um número ao usuário e exiba uma contagem regressiva até 0 usando um while.
console.log("Exercicio 4");
i = prompt("digite um numero: ");
while (i > -1){
    console.log(i);
    i--;
}
//5. Tabuada
//Peça um número e exiba a tabuada de 1 a 10 usando um laço for.
console.log("Exercicio 5");
i = prompt("digite um numero para ser multiplicado de 1 a 10: ");
for(var m = 1; m<11;m++){
    mult = i * m;
    console.log(mult);
}
//6. Somatório
//Solicite um número e some todos os números de 1 até ele
console.log("Exercicio 6");
num = parseInt(prompt("digite um numero para ser somado: "));
num = num+1;
for(var s = 1; s<num; s++){
    soma = 0 + s;
    console.log(soma);
}
//7. Número Primo
//Peça um número ao usuário e informe se ele é primo ou não.
console.log("Exercicio 7");
num = parseInt(prompt("digite um numero para ver se é primo: "));
var primo = true;
if (num <= 1) {
    primo = false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        primo = false;
        break;
      }
    }
  }
  
  if (primo) {
    console.log("O número é primo.");
  } else {
    console.log("O número não é primo.");
  }
//8. Login Simples
//Peça ao usuário um nome de usuário e uma senha. Se ele errar, peça novamente até acertar.
console.log("Exercicio 8");
var usuario = prompt("digite um nome de usuario: ");
var senha = parseInt(prompt("digite uma senha: "));
while(true){
    var entrada1 = prompt("digite o nome do seu usuario: ");
    var entrada2 = parseInt(prompt("digite sua senha: "));
    if ((entrada1 == usuario) || (entrada2 == senha)){
        console.log("você logou");
        break
    } else{
        console.log("tente novamente")
    }
}
