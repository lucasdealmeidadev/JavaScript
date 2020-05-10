const express = require("express");
const app = express();

app.get("/",function(req, res){

    res.send("<h1>Bem vindo ao meu APP, Nodemon</h1>");
});
app.get("/sobre/:nome/:idade",function(req, res){

    res.send(`<h1>Nome = ${req.params.nome}</br>Idade = ${req.params.idade}</h1>`);
});

app.listen(8081,function(){ 
    console.log("Servidor está rodando url : http://localhost:8081/");
});