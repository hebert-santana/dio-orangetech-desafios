// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let n = parseInt(gets());

//TODO: Implemente um método que calcule o somatório de um número usando recursividade:

let soma = 0;

function somatorio(n){
      while (n >= 0) {
        soma += n;
        n -= 1;
      }
    return soma;
}

let conta = somatorio(n);
print(conta);

