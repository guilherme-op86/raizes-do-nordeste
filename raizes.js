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

    localStorage.setItem("carrinho", JSON.stringify(carrinho))

    contadorCarrinho()
}

const contadorCarrinho = () =>{
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []

    let soma = 0

    carrinho.forEach(prato =>{
        soma += Number(prato.quantidade)
    })

    if(soma == 0){
        contador.innerText = ""
    }
    else{
        contador.innerText = soma
    }
}

//contador do carrinho não atualiza com os botoes de + e -
window.addEventListener("storage", ()=>{
    carregarCarrinho()
})

window.addEventListener("load", () =>{
    contadorCarrinho()
})


