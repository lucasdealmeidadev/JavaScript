const express = require("express");
const app = express();

/*Routes*/
app.get("/",function(req, res){

    res.sendFile(`${__dirname}/view/index.html`);
});
app.get("/sobre",function(req, res){

    res.sendFile(`${__dirname}/view/sobre.html`);
});
app.get("/contato",function(req, res){

    res.sendFile(`${__dirname}/view/contato.html`);    
});

/*Star Sever*/
app.listen(8081, function(){
    
    console.log("Servidor rodando");
});