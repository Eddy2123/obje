/*
INterpretaçao de codigo

Exercício 1
Matheus Nachtergaele
Virginia Cavendish

Erxicício 2
a)
console.log (cachorro)
nome: "juca", idade:3, raca: "SRD"

Console.log(gato)
nome: "juba", idade:3, raca: "SRD"
 
Console.log(tartaruga)
nome: "jubo" , idade:3, raca: "SRD"

b) faz uma copia dessa objeto

Exercício 3

A)
False : Por cauasa de que esse é o valor da propiedade

undefing; Não existia essa prooiedade dento do objeto
B) 
*/
//Exercícios de escrita de código

// Exercício 1
const referencia = {
nome: "Eddyson",
apelidos: ["el negro","tarzan", "esportacus"],
 }

const minhafunction = (referencia) => {
 const frase = `Eu sou ${referencia.nome}, mas pode me chamar de: ${referencia.apelidos[0]},${referencia.apelidos[1]},ou ${referencia.apelidos[2]}`
console.log(frase);
};

 minhafunction (referencia);

 const novaReferencia ={
    ...referencia,
    apelidos: ["bb","corazon","gato"],}

 minhafunction (novaReferencia)
    


 //Exercicio 2

 const datos = {
    nome: "eddyson",
    idade: 20,
    profissao: "Metalurgico",
}
  
 const datos1 ={
    nome: "Isaac",
    idade: 23,
    profissao: "padeiro",
 }
 const minhafucao = (parametro1) =>{
        const rresultado = [parametro1.nome,parametro1.nome.length,parametro1.idade,parametro1.profissao,parametro1.profissao.length]
        return rresultado
    }
    
    console.log(minhafucao(datos))
    console.log(minhafucao(datos1))










    //Exercicio 3
    const carrinho = []

const fruta1 = {
    nome: "maça",
    disponibilidade: true
}

const fruta2 = {
    nome:"morango",
    disponibilidade: true
}

const fruta3 = {
    nome: "banana",
    disponibilidade: true
}

function Frutas (objfrutas) {
    carrinho.push(fruta1,fruta2,fruta3)
}

Frutas(carrinho)


console.log(carrinho)
 
