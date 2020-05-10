const express = require("express");
const app = express();

/*Rotas Aplicação*/
app.get("/", function(req, res){

    res.send("<h1>Seja bem vindo ao meu APP</h1>");
});
app.get("/sobre",function(req, res){

    res.send("<h1>Estou na pagina sobre</h1>");
});
app.get("/blog",function(req, res){

    res.send("<h1>Estou no blog</h1>");
});
app.get("/contato",function(req, res){

    res.send("<h1>Estou na pagina de contato, deixe sua opinião</h1>");
});

/*Sempre deve ser o último trecho de codigo*/
app.listen(8081, function(){

    console.log("Servidor rodando na url : http://localhost:8081/");
});