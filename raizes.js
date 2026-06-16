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

    const procura = carrinho.find(prato => prato.nome == nome)

    if(procura){
        procura.quantidade +=1
    }
    else{
        carrinho.push({nome, preco, quantidade})
    }

    //carrinho.push({nome, preco})

    localStorage.setItem("carrinho", JSON.stringify(carrinho))

    contadorCarrinho()
}

const contadorCarrinho = () =>{
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []

    for

  
}

window.addEventListener("load", () =>{
    contadorCarrinho()
})


