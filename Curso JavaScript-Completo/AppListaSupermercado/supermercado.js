var items = [];

// Evento acionando ao clicar no botão de tipo 'submit'
document.querySelector('input[type=submit]').addEventListener('click',()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]').value // Buscando o valor do input
    var precoProduto = document.querySelector('input[name=valor_produto]').value // Buscando o valor do input

    // Objeto
    items.push({
        nome: nomeProduto,
        valor: precoProduto
    })

    alert(items[0].nome)
})