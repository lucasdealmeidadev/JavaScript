/*
    Desafios02-Javascript
    Escrever um programa Javascript para adicionar itens em um array vazio e depois Listar os itens adicionados no array.
*/

const dados = [];
const lista = document.getElementById("info");
const erro = document.getElementById("info2");

function adicionar() {
        const info = document.getElementById("dados").value;

            if(info == ""){
                erro.innerHTML =`Informe um elemento para o array.`;
            }
            else{
                erro.style.display = "none";
                dados.push(info);
            }
}

function listar(){

        if(dados.length == 0){
            erro.innerHTML =`Nenhum elemento no array foi encontrado.`;
        }
        else{
            erro.style.display = "none";
            lista.innerHTML = "";
                for (let i = 0; i < dados.length; i++) {
                    lista.innerHTML +=`Elemento [${i}] = ${dados[i]}</br>`;
                    
                } 
        }  
}