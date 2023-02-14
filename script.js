// const meuArray = ['felipe',31 , false]
// // // indice            0      1     2


// //  const primeiroElemento = meuArray[0]
// //  const segundoElemento = meuArray[1]
// //  const terceiroElemento = meuArray[2]

// //  console.log(primeiroElemento,segundoElemento,terceiroElemento)


// // PRATICA GUIADA 1 

// const tipoString = ['Felipe', 'Letras','Pizza']
// const tipoNumeros = [3,4,5]
// const tipoVariados = ['Felipe', 31 , false]
// const tipoNumSolo = [10]
// const tipoSemValor = []



// const tamanhoMinhaString = meuArray.length
// console.log(tamanhoMinhaString)
// const quartoElementoMinhaString = meuArray[3]
// console.log(quartoElementoMinhaString)
// const temFalse = tipoVariados.includes('Felipe')
// console.log(temFalse)

// //c 
// const tamanhoTipoSolo = tipoNumSolo.length
// console.log(tipoNumSolo)


// exercicio 1

let apenasNumeros = [10,30,40,50]

let copiaApenasNumeros = apenasNumeros.slice()

copiaApenasNumeros.pop()

copiaApenasNumeros.push(6)

copiaApenasNumeros.splice(2,1)

console.log(apenasNumeros, copiaApenasNumeros)