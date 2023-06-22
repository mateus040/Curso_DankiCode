// Criando servidor
const express = require('express');

const app = express();

// Definindo na porta 5000
app.listen(5000,()=>{
    console.log('server rodando');
})