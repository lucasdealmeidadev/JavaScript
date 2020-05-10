const Sequelize = require("sequelize");

const sequelize = new Sequelize("app","root","",{
    
    host:"localhost",
    dialect:"mysql",

});

/*Gerando tabelas automaticamente no banco mysql*/
const Postagem = sequelize.define("postagens",{

    titulo: {
        type: Sequelize.STRING,
    },
    conteudo:{
        type: Sequelize.TEXT,
    }    
});

const Usuario = sequelize.define("usuarios",{

    nome:{
        type: Sequelize.STRING,
    },
    email:{
        type: Sequelize.STRING,
    },
    senha:{
        type: Sequelize.STRING,
    }
});