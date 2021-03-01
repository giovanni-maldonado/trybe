let n = 20;
let array = [];
let resultado = '';

for (let index = 0; index < n; index+=1) {
        array.push('*');
}
for (let index = 0; index < array.length; index+=1) {
    const element = array[index];
    resultado += element;   
}
for (let index = 0; index < n; index+=1) {
    console.log(resultado);
}