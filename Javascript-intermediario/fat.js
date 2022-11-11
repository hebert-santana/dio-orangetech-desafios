let n = 10;
let soma = 0;


soma = soma + n;                                // soma = 4
let dif = n;                                    // dif = 4

while (dif > 1) {
    dif--;
    if (dif == 0) {break;}   
    soma = soma * (dif);    
    dif--;

    if (dif == 0) {break;}                          
    soma = parseInt(soma / dif )    
    dif--;

    if (dif == 0) {break;}             
    soma = soma + dif;
    dif--;
    if (dif == 0) {break;}           
    soma = soma - dif;
    
}


    console.log(soma);

// n!d = n * [parseInt((n-1) / (n-2))] + (n-3) - (n-4)...
// usar break?

let teste = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2;
console.log(teste)
