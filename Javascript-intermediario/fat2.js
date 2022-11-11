let lines = gets().split("\n"); 
let n = parseInt(lines.shift()); 

if (n <= 2) { 

 print(n); 

} 

// TODO: Calcule o valor do fatorial de "n", atribuindo o retorno a "r".

let nZero = n;
let soma = 0;
const varia = -1;
                                    

while (n >= 4 ) {
    if (n == nZero) {
    soma += parseInt(n*((n-1) / (n-2)));
    soma += (n-3);
    n = n - 4; 
    } else {
    soma += varia * parseInt(n*((n-1) / (n-2)))
    soma += (n-3);
    n = n - 4;
}}

if (n == 3) {
    soma += varia * parseInt(n*((n-1) / (n-2)));
} else if (n == 2) {
    soma += varia * (n * (n-1));
} else if (n == 1) {
    soma += varia * n
}

print(soma);