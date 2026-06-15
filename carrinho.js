const carregarCarrinho = () =>{
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []
    const lista = document.querySelector("#listaCarrinho")
    const totalSpan = document.querySelector("#total")

    let total = 0

    const dicionario = {moqueca: "Moqueca Nordestina", baiao: "Baião de Dois com Camarão", carneDeSol: "Carne de Sol com Purê de Macaxeira", carneSerca: "Carne Seca com Queijo Gratinado", camarao: "Camarão na Moranga Nordestina", peixeFrito: "Peixe frito com pirão e Vinagrete"}

    carrinho.forEach(item =>{

        const novaImagem = document.createElement("img")
        const novoParagrafo = document.createElement("p")
        const novoParagrafo2 = document.createElement("p")
        const novaDiv = document.createElement("div")
        novaDiv.classList = "infoPrato"
        const novaDiv2 = document.createElement("div")
        novaDiv2.classList = "dadosPrato"


        const novoTexto = document.createTextNode(`${dicionario[item.nome]}`)
        const preco = document.createTextNode(`R$ ${item.preco}`)
        novoParagrafo.appendChild(novoTexto)
        novoParagrafo2.appendChild(preco)
        novaDiv2.appendChild(novoParagrafo)
        novaDiv2.appendChild(novoParagrafo2)


        novaImagem.src = `imagens/${item.nome}.png`
        novaImagem.alt = `${dicionario[item.nome]}`
        novaImagem.classList = "imagemPrato"
        
        novaDiv.appendChild(novaImagem)
        novaDiv.appendChild(novaDiv2)

        lista.appendChild(novaDiv)

        total += Number(item.preco)
    })

    totalSpan.innerText = `R$${total}` 
}