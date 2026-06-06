const botoes = document.querySelectorAll(".btn")

botoes.forEach(botao =>{
    botao.addEventListener("click", () =>{
        const nome = botao.dataset.nome
        const preco = botao.dataset.preco

        adicionarCarrinho(nome, preco)
    })
})

const adicionarCarrinho = (nome, preco) =>{
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []

    carrinho.push({nome, preco})

    localStorage.setItem("carrinho", JSON.stringify(carrinho))
}