const carregarCarrinho = () =>{
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []
    const lista = document.querySelector("#listaCarrinho")
    const totalSpan = document.querySelector("#total")

    let total = 0

    const dicionario = {moqueca: "Moqueca Nordestina", baiao: "Baião de Dois com Camarão", carneDeSol: "Carne de Sol com Purê de Macaxeira", carneSerca: "Carne Seca com Queijo Gratinado", camarao: "Camarão na Moranga Nordestina", peixeFrito: "Peixe frito com pirão e Vinagrete"}

    carrinho.forEach(item =>{

        //cria a imagem do prato
        const novaImagem = document.createElement("img")
        //cria os parágrafos com nome do prato e preço
        const novoParagrafo = document.createElement("p")
        const novoParagrafo2 = document.createElement("p")
        //cria a div que irá conter a imagem do prato e a div dadosPrato
        const novaDiv = document.createElement("div")
        //cria a div que irá conter o nome do prato e preço para aplicar display flex
        const novaDiv2 = document.createElement("div")
        novaDiv.classList = "infoPrato"
        //const novaDiv2 = document.createElement("div")
        novaDiv2.classList = "dadosPrato"

        //bloco que vai criar o contador de pratos com botões + e -
        const divContador = document.createElement("div")
        const iconMais = document.createElement("i")
        const iconMenos = document.createElement("i")
        const iconLixeira = document.createElement("i")
        const contPrato = document.createElement("span")
        divContador.classList.add("divContador")
        iconMenos.classList.add("fa-solid", "fa-minus")
        contPrato.classList.add("qtdPrato")
        iconMais.classList.add("fa-solid", "fa-plus")
        iconLixeira.classList.add("fa-solid", "fa-trash")
        divContador.append(iconMenos,contPrato, iconMais, iconLixeira)


        const novoTexto = document.createTextNode(`${dicionario[item.nome]}`)
        const preco = document.createTextNode(`R$ ${item.preco}`)
        novoParagrafo.appendChild(novoTexto)
        novoParagrafo2.appendChild(preco)
        novaDiv2.append(novoParagrafo, novoParagrafo2)
        //novaDiv2.appendChild(novoParagrafo)
        //novaDiv2.appendChild(novoParagrafo2)


        novaImagem.src = `imagens/${item.nome}.png`
        novaImagem.alt = `${dicionario[item.nome]}`
        novaImagem.classList = "imagemPrato"
        
        novaDiv.append(novaImagem, novaDiv2, divContador)
        //novaDiv.appendChild(novaImagem)
        //novaDiv.appendChild(novaDiv2)

        lista.appendChild(novaDiv)

        total += Number(item.preco)
    })

    totalSpan.innerText = `R$${total}` 
}