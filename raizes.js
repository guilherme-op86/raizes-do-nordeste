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

    contador.textContent = carrinhoContador
}

window.addEventListener("load", () =>{
    contadorCarrinho()
})


