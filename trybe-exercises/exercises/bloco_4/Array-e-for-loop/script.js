//Exercicio 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let index = 0; index < numbers.length; index++){
  console.log(numbers[index]);
}

//Exercicio 2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for(let index = 0; index < numbers.length; index++ ){
    soma =+ numbers[index]
    console.log(soma);
}   

//Exercicio 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media;
for (index of numbers) {
  soma += index;
}
media = soma/numbers.length;
console.log(media);

