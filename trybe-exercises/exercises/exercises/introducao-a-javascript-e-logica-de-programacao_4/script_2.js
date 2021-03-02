//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindrome (word){
    let letters = word.length;
    for (let index = 0; index < letters - index; index += 1) { //Creditos ao Rafael Medeiros Gomes, para essa parte aqui pois so consegui fazendo o review no codigo dele
        if (word[index] != word[(letters - index - 1)]) {
            return false;
        }
    }
    return true
}
console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function indiceMaiorValor() {
    let maior = inteiros[0];
    let indice = 0;
    for (let index = 1; index < inteiros.length; index++) {
        if (inteiros[index] > maior) {
            maior = inteiros[index];
            indice = index;
        }
    }
    return indice;
}

let inteiros = [2, 3, 6, 7, 10, 1];
console.log(indiceMaiorValor(inteiros));

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.


function indiceMenorValor() {
    let menor = inteiros[0];
    let indice = 0;
    for (let index = 1; index < inteiros.length; index++) {
        if (inteiros[index] < menor) {
            menor = inteiros[index];
            indice = index;
        }
    }
    return indice;
}

let inteiros = [2, 4, 6, 7, 10, 0, -3];
console.log(indiceMenorValor(inteiros));
