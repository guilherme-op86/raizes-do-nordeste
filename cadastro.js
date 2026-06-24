const btn = document.querySelector(".btn")

btn.addEventListener("click", () =>{
    mostrarMensagem("Cadastro realizado com sucesso.")
})


const mostrarMensagem = (texto) =>{
    const mensagem = document.querySelector("#mensagem")
    mensagem.textContent = texto
    mensagem.classList.add("show")

    setTimeout(() =>{
        mensagem.classList.remove("show")
    }, 4000)

}

const loadLGPD = () =>{ 
    alert("Todos os dados são armazenados conforme Lei nº 13.709/2018 (LGPD - Lei Geral de Proteção de dados")
}

window.addEventListener("load", () =>{
    loadLGPD()
}
)