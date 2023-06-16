var items = [];

// Evento acionando ao clicar no botão de tipo 'submit'
document.querySelector('input[type=submit]').addEventListener('click',()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]') // Buscando o valor do input
    var precoProduto = document.querySelector('input[name=price]') // Buscando o valor do input

    // Objeto
    items.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    })

    let listaProdutos = document.querySelector('.lista-produtos');
    let soma = 0

    listaProdutos.innerHTML = ""
    items.map(function(val){
        soma+=parseFloat(val.valor) // Fazendo a soma dos preços e convertendo para números com casas decimais
        // Adicionando ao código HTML
        listaProdutos.innerHTML+=`
            <div class="lista-produto-single">
                <h3>`+val.nome+`</h3>
                <h3 class="price-produto"><span>R$`+val.valor+`</span></h3>
            </div>
        `;
    })

    soma = soma.toFixed(2) // Aceitando só duas casas decimais deposi ddo '.'

    // Resetando os valores após o cadastro
    nomeProduto.value = ""
    precoProduto.value = ""

    let elementoSoma = document.querySelector('.soma-produto h1')
    elementoSoma.innerHTML = 'R$'+soma

})

document.querySelector('button[name=limpar]').addEventListener('click',()=>{
    items = [] // Voltando a ser vazio

    document.querySelector('.lista-produtos').innerHTML = "" // Deixando a lista vazia novamente
    document.querySelector('.soma-produto h1').innerHTML = "R$0,00" // Deixando o valor em 0,00 novamente
})