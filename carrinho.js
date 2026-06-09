const carregarCarrinho = () =>{
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []
    const lista = document.querySelector("#listaCarrinho")
    const totalSpan = document.querySelector("#total")

    let total = 0

    carrinho.forEach(item =>{
        const paragrafo = document.createElement("p")

        const novoTexto = document.createTextNode(`${item.nome} - R$ ${item.preco}`)
        paragrafo.appendChild(novoTexto)
        lista.appendChild(paragrafo)

        total += Number(item.preco)
    })

    totalSpan.innerText = `R$${total}`
    
}