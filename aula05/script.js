//a) Crie uma função que receba dois números e retorne o maior deles.
function maior() {
    let x = prompt("Digite o primeiro número")
    let y = prompt("Digite o segundo número")
    if (x == y){
        alert("Os números são iguais")
    } else if(x < y){
        alert(y + " é maior que " + x)
    } else{
        alert(x + " é maior que " + y)
    }
}
console.log(maior())
//b) Escreva uma função que receba um número e retorne true se ele for par
//e false caso contrário.
function comparacao() {
    let a = prompt("Digite um número")
    if (a == 0) {
        alert("número errado tente novamente")        
    } else if (a%2 == 0) {
        alert(true)
    } else {
        alert(false)
    }
    

}
console.log(comparacao())
//c) Desenvolva uma função que calcule o fatorial de um número.

//d) Crie uma função que receba uma lista de números e retorne a média
//deles.

//e) Implemente uma função que converta uma temperatura de Celsius para
//Fahrenheit. 