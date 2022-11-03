let valor // Não inicializada
console.log(valor)
//console.log(valor2) // Variavel não foi declarada Gera erro

valor = null // Null quer dizer ausência de valor
console.log(valor)
//console.log(valor.toString()) Não há como acessar algo que está nulo

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined // Evitar atribuir undefined
console.log(!!produto.preco)
//delete produto.preco 
console.log(produto)

produto.preco = null
console.log(produto)