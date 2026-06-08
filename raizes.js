const botoes = document.querySelectorAll(".btn")
const contador = document.querySelector(".contador")

botoes.forEach(botao =>{
    botao.addEventListener("click", () =>{
        const nome = botao.dataset.nome
        const preco = Number(botao.dataset.preco)

        adicionarCarrinho(nome, preco)
    })
})

const adicionarCarrinho = (nome, preco) =>{
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []

    carrinho.push({nome, preco})

    localStorage.setItem("carrinho", JSON.stringify(carrinho))

    contadorCarrinho()
}

const contadorCarrinho = () =>{
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []

    const carrinhoContador = carrinho.length

    contador.innerText = carrinhoContador
}

window.addEventListener("load", () =>{
    contadorCarrinho()
})

const loadLGPD = () =>{ 
    alert("Todos os dados são armazenados conforme Lei nº 13.709/2018 (LGPD - Lei Geral de Proteção de dados")

}

const carregarCarrinho = () =>{
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []
    const lista = document.querySelector("#listaCarrinho")
    const totalSpan = document.querySelector("#total")

    let total = 0
    lista.innerHTML = ""

    carrinho.forEach(item =>{
        lista.innerHTML += `<p>${item.nome} - R$ ${item.preco} </p>`
        total += Number(item.preco)
    })

    totalSpan.innerText = `Total: R$ ${total}`
    
}