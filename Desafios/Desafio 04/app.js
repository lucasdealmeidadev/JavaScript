/*
    Desafios04-Javascript

    1 - Crie uma função chamada book, que recebe um parâmetro, que será o nome do livro. Dentro dessa função, declare uma variável que recebe um objeto com as seguintes características:
    
        esse objeto irá receber 3 propriedades, que serão nomes de livros;

        cada uma dessas propriedades será um novo objeto, que terá outras 3 propriedades:

        quantidadePaginas - Number
        autor - String
        editora - String

        A função deve retornar o objeto referente ao livro passado por parâmetro.

        Se o parâmetro não for passado, a função deve retornar o objeto com todos os livros.

    2 - Usando a função criada acima, imprima o objeto com todos os livros.

    3 - Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer, usando a frase: "O livro [NOME_DO_LIVRO] tem [X] páginas!"

    4 - Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando a frase: "O autor do livro [NOME_DO_LIVRO] é [AUTOR]."

    5 - Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando a frase: "O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
function book (name) {
    
    const objLivros = {
        php: { 
            quantidadedePaginas: 190, 
            autor : "Rasmus Lerdorf",
            editor: "Saraiva",
        }, 
        java: { 
            quantidadedePaginas: 280, 
            autor: "James Gosling", 
            editor: 'Wikipedia Brasil',
        },
        python: {
            quantidadedePaginas: 340,
            autor: "Guido van Rossum",
            editor: "Wikipedia USA",
        }
    }
    
    if(name == "" || name == undefined || name == null){
        return console.log(objLivros);
    }
    else if(!eval('objLivros.'+name)){
        return console.log("Nenhum livro foi encontrado...");
    }
    else {
        return `${console.log("---------Objeto Completo---------")}
                ${console.log(objLivros)}
                ${console.log("")}
                ${console.log(`---------${name}---------`)}
                ${console.log(eval('objLivros.'+name))}
                ${console.log("")}
                ${console.log("---------Informações---------")}
                ${console.log(`O livro [${name}] tem [${eval('objLivros.'+name).quantidadedePaginas}] páginas!`)}
                ${console.log(`O autor do livro [${name}] é [${eval('objLivros.'+name).autor}].`)}
                ${console.log(`O livro [${name}] foi publicado pela editora [${eval('objLivros.'+name).editor}]`)}
               `;
    }
}
book("php");