// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let numero = parseInt(gets());

//TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.


let constaNoArray = elementos.find(elemento => elemento === numero);

if (constaNoArray !== undefined) {
  let indice = elementos.indexOf(constaNoArray)
  print(`Achei ${constaNoArray} na posicao ${indice}`)
} else {
  print(`Numero ${numero} nao encontrado!`)
}