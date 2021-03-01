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
