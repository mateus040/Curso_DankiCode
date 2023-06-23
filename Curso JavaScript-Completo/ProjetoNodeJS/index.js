// Construindo servidor
const express = require('express');
const path = require('path');

const app = express();

// Código padrão para utilizar o express com ejs
app.engine('html', require('ejs').renderFile); // Engine para renderização do tipo html utilizando o ejs
app.set('view engine', 'html'); // Setando a view engine para html
app.use('/public', express.static(path.join(__dirname, 'public'))); // Mostrando o diretório estático onde fica todos os arquivos
app.set('views', path.join(__dirname, '/views')); // Pasta onde estão as views

var tarefas = ['Arrumar o quarto','Comprar no supermercado'];

// Rota home
app.get('/',(req,res)=>{

    // Buscando do arquivo index dento da pasta views
    res.render('index',{tarefasList:tarefas});

});

// Rota deletar
app.get('/deletar/:id',(req,res)=>{
    tarefas = tarefas.filter(function(val,index){
            if(index != req.params.id){
                return val;
            }
    })
})

// Estabelecendo na porta 5000
app.listen(5000,()=>{
    console.log('server logado!');
})