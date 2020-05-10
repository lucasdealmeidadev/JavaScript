/*

    Desafios-Javascript
    DESAFIO-01

    Crie uma função com as seguintes características:

    1 - A função deve receber 3 argumentos.
    2 - Se somente um argumento for passado, retorne o valor do argumento.
    3 - Se dois argumentos forem passados, retorne a soma dos dois argumentos.
    4 - Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
    5 - Se nenhum argumento for passado, retorne o valor booleano false.
    6 - E ainda, se nenhuma das condições acima forem atendidas

*/

function enviar(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let n3 = document.getElementById("n3").value;
    let msg = document.getElementById("msg");

        try {
                let recebe = validando(n1,n2,n3);
                msg.classList.add("alert-success");
                msg.innerHTML = `${recebe.toString()}`;

        } catch (error) {
                msg.classList.add("alert-danger");
                msg.innerHTML = `${error.toString()}`;
        }
    return false;
}
function validando(n1,n2,n3){

       if(n1 == "" && n2 == "" && n3 == ""){ return `Nenhum argumento foi passado, retorno = ${false}`;}
       
       else if(n1 != "" && n2 != "" && n3 != ""){ return `Todos os argumentos foram passados, valor = ${(eval(n1)+eval(n2))/(eval(n3))}`;}
       
       else if(n1 != "" && n2 == "" && n3 == ""){ return `Somente um argumento foi passado, valor = ${n1}`;}
       
       else if(n2 != "" && n1 == "" && n3 == ""){ return `Somente um argumento foi passado, valor = ${n2}`;}

       else if(n3 != "" && n2 == "" && n1 == ""){return `Somente um argumento foi passado, valor = ${n3}`;}

       else if(n1 != "" && n2 != "" && n3 == ""){ return `Dois argumentos foram passados, soma = ${eval(n1)+eval(n2)}`;}
       
       else if(n2 != "" && n3 != "" && n1 == ""){return `Dois argumentos foram passados, soma = ${eval(n2)+eval(n3)}`;}
       
       else if(n1 != "" && n3 != "" && n2 == ""){return `Dois argumentos foram passados, soma = ${eval(n1)+eval(n3)}`;}
       
       else{ return `Nenhuma das condições acima foram atendidas, retorno = ${null}`;}
}