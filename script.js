// Crie uma condição que exiba uma mensagem no console se a idade for maior que 18;

// Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true;

// Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro;

// Exercícios bônus
// Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R;

// Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E;


let idade = 27
const iamhuman = true
const aniversario = "Maio"
const nome = "Rodrigo"
const sobrenome = "Sousa Silva"


if (idade >= 18){
    console.log("Sua idade é maior de 18 anos.")
} else{
    console.log("Sua idade é inferior a 18 anos.")
}

if ((idade >= 18) && (iamhuman == true)){
    console.log("Sua idade é maior de 18 anos e você é humano.")
} else{
    console.log("Sua idade é inferior a 18 anos ou você não é humano.")
}

if((aniversario == "Janeiro") || (aniversario == "Dezembro")){
    console.log("Você faz aniversário em Janeiro ou em Dezembro")
} else{
    console.log("Você não faz aniversário em Janeiro ou em Dezembro")
}

if(nome.substring(0,1) == "R"){
    console.log("Seu nome começa com a letra 'R'.")
} else{
    console.log("Seu nome não começa com a letra 'R'.")
}

if((sobrenome.length > 6) || (nome.substring(0,1) == "E")){
    console.log("Seu sobrenome tem mais de seis letras ou o seu nome começa com a letra 'E'.")
} else{
    console.log("Seu sobrenome não tem mais de seis letras ou seu nome não começa com a letra 'E'.")
}