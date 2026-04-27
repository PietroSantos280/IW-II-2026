function ex1(){
    var Texto = document.getElementById("input");
    const paragrafo = document.getElementById("ex1");
    paragrafo.innerText = Texto.value;
}
function ex2(){
    var nome = document.getElementById("input2").value;
    const print = document.getElementById("ex2");
    print.innerText = "Olá, " + nome + "!";
}
function ex3(){
    var idade = document.getElementById("input3").value;
    const resultado = document.getElementById("ex3");
    if (idade <= 18 ) {
        resultado.innerText = "Você é Menor de Idade";        
    } else{
        resultado.innerText = "Você é Maior de Idade";
    }

}
function ex4(){
    document.body.style.backgroundColor = "red";
}
function black(){
    document.body.style.backgroundColor = "black";
}
function white(){
    document.body.style.backgroundColor = "white";
}