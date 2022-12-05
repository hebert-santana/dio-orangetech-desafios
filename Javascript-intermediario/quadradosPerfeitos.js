/* Desafio  
Dado um inteiro n, retorne o menor número de números quadrados perfeitos cuja soma seja n. 
Um quadrado perfeito é um inteiro que é o quadrado de um inteiro; em outras palavras, é o produto de algum inteiro consigo mesmo. 
Por exemplo, 1, 4, 9 e 16 são quadrados perfeitos, enquanto 3 e 11 não são. 

Entrada
A entrada consiste em um número inteiro n, representando o valor total. 

Saída
A saída consiste em retornar o menor número de números quadrados perfeitos. */


let lines = gets().split('\n');
let n = parseInt(lines.shift());

const d = new Array(n + 1).fill(Infinity);
d[0] = 0;

for (var i = 0; i < n + 1; i++) {
    d[i] = i * i;
}

var sqrt = Math.sqrt(n);

if (sqrt * sqrt == n) {
    print('1');
} else {
    search: for (var i = 1; i < n + 1; i++) {
        for (var j = 1; j < n + 1; j++) {
            if (d[0] == 0) {
                for (var k = 1; k < n + 1; k++) {
                    if (d[i] + d[j] + d[k] == n) {
                        d[0] = 3;
                        break;
                    }
                }
            }
            if (d[0] == 0 || d[0] == 3) {
                if (d[i] + d[j] == n) {
                    d[0] = 2;
                    break search;
                }
            }
        }
    }

    if (d[0] != 0) {
        print(d[0]);
        d[0] = 0;
    } else {
        print('4');
    }
}
