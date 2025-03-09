let carrinho = [
    {nome: "banana", qnt: 3, preco: 1.50},
    {nome: "papel", qnt: 1, preco: 4},
    {nome: "ovo", qnt: 6, preco: 2.50}
]

function compras() {
    console.log("\n")    

carrinho.push({nome: "maça", qnt: 6, preco: 3.75});

carrinho.shift()

for (let key in carrinho) {
    console.log(`${key} - Nome: ${carrinho[key].nome}, Qnt: ${carrinho[key].qnt}, Preco: ${carrinho[key].preco} `)
}
console.log("\n")
}



function maiuscula() {let carrinho1 = [];

for (let key in carrinho) {
    let a = 0;
    
    while (a < carrinho[key].nome.length) {
        if (a == 0) {
            carrinho1[key] = carrinho[key].nome[0].toUpperCase()
        } else {
            carrinho1[key] += carrinho[key].nome[a]
        }
        a++;
    }
      
}

for (let key in carrinho1) {
    console.log(`${carrinho1[key]}`)
}

console.log("\n")}

function tempo() {

    let contador = 0;

    let intervalor = setInterval(() => {
        contador++
        console.log(`Passaram-se ${contador} segundos`)
        
        if (contador == 5) {

            clearInterval(intervalor)
            console.log("\nIntervalo parado");

        }
}, 1000)

}


compras()
maiuscula()
tempo()