const atualizaPontos = () =>{
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []
    const pontosContainer = document.querySelector(".pontosContainer")
    let soma = 0

    pontosContainer.innerHTML = ""

    carrinho.forEach(item =>{

        soma += item.preco
    })

        const pontosParagrafo = document.createElement("p")
        pontosParagrafo.classList.add ("pontosParagrafo")
        const ponstosSpan = document.createElement("span")
        ponstosSpan.classList.add("ponstosSpan")

        const pontos = (Math.floor((soma / 1000) * 10))
        
        const pontosTexto = document.createTextNode("Você tem um total de: ")
        const pontosTotal = document.createTextNode(`${pontos} pontos`)
        ponstosSpan.appendChild(pontosTotal)
        pontosParagrafo.append(pontosTexto, pontosTotal)

        pontosContainer.appendChild(pontosParagrafo)
        
        localStorage.JSON.parse()
}

window.addEventListener("load", () =>{
    atualizaPontos()
})