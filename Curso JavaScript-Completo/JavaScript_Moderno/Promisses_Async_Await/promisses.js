function testes()
{
    // Pode resolver o rejeitar
    return new Promise(function(resolve,reject){

        setTimeout(function(){
            const erro = false

            if (erro)
                reject('Erro...')
            else
                resolve("A promisse foi resolvida com sucesso!")

        },2000)

    })
}

/*
// retorna corretamente
testes().then(function(res){
    alert(res)
}).catch(function(err){ // retorna o erro
    alert(err)
})
*/

async function testes2(){
    await testes().then(function(res){
        alert(res)
    });
    alert('Olá') // Será chamado só quando a promesse for resolvida, ou seja, virá depois de 2 segundos
}

testes2();