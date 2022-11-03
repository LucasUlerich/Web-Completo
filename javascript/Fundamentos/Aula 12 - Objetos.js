const prod1 = {}
prod1.nome = 'Celular s21 ultra'
prod1.preco = 4999.90
prod1['Desconto Legal'] = 0.40 // Evitar usar atributos com espaço

console.log(prod1)

const prod2 = {
  nome: 'Camisa Polo',
  preco: 79.90,
  obj: {
    tenis: 'nike'
  }
}
// Em javascript podemos ter um objeto dentro do outro
// Objeto é uma coleção de chaves e valores