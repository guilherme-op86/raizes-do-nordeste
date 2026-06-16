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

    let quantidade = 1

    carrinho.forEach

    carrinho.push({nome, preco})

    localStorage.setItem("carrinho", JSON.stringify(carrinho))

    contadorCarrinho()
}

const contadorCarrinho = () =>{
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []

    const carrinhoContador = carrinho.length

    if(carrinhoContador == 0){
        contador.textContent = ""
    }
    else{
        contador.textContent = carrinhoContador
    }

    
}

window.addEventListener("load", () =>{
    contadorCarrinho()
})


