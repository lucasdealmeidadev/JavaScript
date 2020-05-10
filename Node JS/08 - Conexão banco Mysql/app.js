const express = require("express");
const app = express();

/*Routes*/
app.get("/", function(req, res){

    res.send("Estou na Home");
});

/*Star Sever*/
app.listen(8081, function(){
    console.log("Servidor Rodandando");
});