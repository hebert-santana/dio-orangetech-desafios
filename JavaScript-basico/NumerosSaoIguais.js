// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let A = gets();
let B = gets();

//TODO: Imprima se os valores numéricos passados são iguais ou não.

if (A === B) {
  print("Sao iguais!");
} else {
  print("Nao sao iguais!");
}