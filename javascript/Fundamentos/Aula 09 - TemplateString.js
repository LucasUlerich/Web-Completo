const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'
const template = `
  Olá
  ${nome}!
`
console.log(concatenacao, template)
//Expressões...
console.log(`2 + 2 = ${ 2 + 2}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`)