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

//Exercicio 4

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media;
for (index of numbers) {
  soma += index;
}
media = soma/numbers.length
console.log(media)
if (media > 20){
    console.log('A media é maior que 20');
}else{
    console.log('A media é menor que 20');
}

//Exercicio 5

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;
for (let index of numbers) {
  if (maiorNumero < index) {
    maiorNumero = index;
  }
}
console.log(maiorNumero);

//Exercicio 6 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contImpares = 0;

for (let index of numbers){
    if (index % 2 == 1){
        contImpares++
    }
}
if(contImpares > 0){
    console.log('Tem ',contImpares, ' numeros impares' )
}else{
    console.log('Não tem numeros impares')
}

//Exercicio 7 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = numbers[0];
for(let index of numbers){
    if (menorValor > index) {
      menorValor = index;
    }
}
console.log(menorValor);

//Exercicio 8

for (index = 1; index <= 25; index++) {
    console.log(index);
} 

//Exercicio 9

for (i = 1; i <= 25; i++) {
    console.log(i)	  console.log(`Número: ${i}`)
    console.log(`Divisão: ${i/2}`)
} 