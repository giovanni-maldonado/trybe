/*
Exercicio 1:

let a = 5;
let b = 8;
let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log(adicao);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);
*/

/*
Exercicio 2:

let n1 = 9;
let n2 = 5;
if (n1 > n2 ){
    console.log(n1);
} else (n2 > n1 ){
    console.log(n2);
}
*/

/*
Exercicio 3

let n1 = 12;
let n2 = 9;
let n3 = 6;
if (n1 > n2 || n1 > n3){
    console.log(n1)
}else if (n2 > n1 || n2 > n3){
    console.log(n2)
}else if(n3 > n1 || n3 > n2){
    console.log(n3)
}
*/

/*
Exercicio 4


let n1 = 2
let n2 = -2
if (n1 == n2){
    console.log('positive')
}else if (n2 == n1){
    console.log('negative')
}else{
    console.log('zero')
}
*/

/*
Exercicio 5

let n1 = 45;
let n2 = 55;
let n3 = 80;
if ((n1 + n2 + n3) == 180){
    console.log('true')
}else{
    console.log('false')
}
*/

/*
Exercicio 6

let bishop = 'Diagonally';
let queen = 'Move like a Rook or a Bishop';
let knight = 'L moviment';
let king = 'Move from Its square to a neighboring square';
let pawn = 'Moves one Square straight ahead';
let rook = 'Move in its line or row';
*/

/*
Exercicio 7

let nota = 80;
if (nota >= 0 && nota <= 100){
    if (nota >= 90){
        console.log('A');
    }else if (nota >= 80){
        console.log('B');
    }else if (nota >= 70){
        console.log('C');
    }else if (nota >= 60){
        console.log('D');
    }else if (nota >= 50){
        console.log('E');
    }else{
        console.log('F');
    }
}else{
    console.log('Erro');
}*/

/*
Exercicio 8

let n1 = 8;
let n2 = 4;
let n3 = 2;
if (n1 % 2 == 0 || n2 % 2 == 0 || n3 % 2 == 0){
    console.log(true);
}else{
    console.log(false);
}
*/

/*
Exercicio 9

let n1 = 5;
let n2 = 3;
let n3 = 1;
if (n1 % 2 == 1 || n2 % 2 == 1 || n3 % 2 == 1){
    console.log(true);
}else{
    console.log(false);
}
*/


/*Exercicio 10*/

let cost = 300;
let sell = 600;
let totalCost = cost + (0.2 * cost);
if (cost <  0 || sell < 0){
    console.log('Valor não permitido')
}else{
    let profit = sell - totalCost;
    let totalProfit = profit * 1000;
    console.log('O lucro total foi de: ' + totalProfit);
}
