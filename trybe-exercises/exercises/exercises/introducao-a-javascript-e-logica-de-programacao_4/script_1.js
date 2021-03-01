//1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
//2 - Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.
//3 - Faça um for/in que mostre todas as chaves do objeto.
//4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
//5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".


//1
let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
//2
    recorrente: 'Sim'
};
console.log('Bem-vinda, ' + info.personagem)

//3
for (index in info){
    console.log(index)
}

//4
for(index in info){
    console.log(info[index])
}
//5
let info = {
    personagem: "Margarida e Tio Patinhas",
    origem: "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas",
    recorrente: "Sim"
};
for(index in info)[
    console.log(info[index])
]
