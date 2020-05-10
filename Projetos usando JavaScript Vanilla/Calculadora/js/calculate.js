var success = document.getElementById('success');
var erro = document.getElementById('erro');
var resultado = 0;


function cal(e){

    var operacao = e.value;
    var n1 = parseInt(document.getElementById('txtN1').value);
    var n2 = parseInt(document.getElementById('txtN2').value);
        
        try {
            
                if(isNaN(n1)){
                                calculadora.txtN1.focus();
                                throw "Erro : Preencha o campo 1° número.";
                }
                else if(isNaN(n2)){

                                calculadora.txtN2.focus();
                                throw "Erro : Preencha o campo 2° número.";
                }
                else{
                        if(operacao == "/" && n2 == 0){

                                throw "Erro : Impossível dividir por zero.";
                        }
                        else{
                                resultado = eval(n1+operacao+n2);
                                result(resultado);
                        }
                }
        } catch (error) {
            
            success.style.display = "none";
            erro.style.display = "block";
            erro.innerHTML = error;
        }    
}
function result(resultado){
            erro.style.display = "none";
            success.style.display = "block";
            success.innerHTML = `Resultado final = ${resultado}`;
}