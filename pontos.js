const atualizaPontos = () =>{
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []
    const pontosContainer = document.querySelector(".pontosContainer")
    let soma = 0

    pontosContainer.innerHTML = ""

    carrinho.forEach(item =>{

        soma += item.preco * item.quantidade
    })

        const pontosParagrafo = document.createElement("p")
        pontosParagrafo.classList.add ("pontosParagrafo")
        const pontosSpan = document.createElement("span")
        pontosSpan.classList.add("pontosSpan")

        const pontos = (Math.floor((soma / 1000) * 10))
        
        const pontosTexto = document.createTextNode("Com sua compra atual você ganhará: ")
        const pontosTotal = document.createTextNode(`${pontos} ponto(s)`)
        pontosSpan.appendChild(pontosTotal)
        pontosParagrafo.append(pontosTexto, pontosSpan)

        pontosContainer.appendChild(pontosParagrafo)
        
}

window.addEventListener("load", () =>{
    atualizaPontos()
})

window.addEventListener("storage", (event) =>{
    if(event.key == "carrinho" || event.key == "atualizacaoCarrinho"){
        atualizaPontos()
    } 
})