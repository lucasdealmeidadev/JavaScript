function iniciar(){
    document.getElementById('validar').onclick = Validar;
}
function Validar(){
    var erro = document.getElementById("erro");
    var success = document.getElementById("success");
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var r_senha = document.getElementById("r_senha").value;

        try {
                if(nome == ""){
                        form_val.nome.focus();
                        throw "Erro : Preencha o campo nome.";
                }
                else if(nome.length <= 3){
                        form_val.nome.focus();
                        throw "Erro : O campo nome deve ter mais de 3 caracteres.";
                }
                else if(email == ""){
                        form_val.email.focus();
                        throw "Erro : Preencha o campo e-mail.";
                }
                else if(senha == ""){
                        form_val.senha.focus();
                        throw "Erro : Preencha o campo senha.";
                }
                else if(r_senha == ""){
                        form_val.r_senha.focus();
                        throw "Erro : Preencha o campo repetir senha.";
                }
                else if(senha.length <= 4){
                        form_val.r_senha.focus();
                        throw "Erro : O campo senha deve ter mais de 4 caracteres.";
                }
                else if(senha != r_senha){
                        form_val.senha.focus();
                        throw "Erro : As senhas são diferentes, verifique os campos (senha e verificar senha).";
                }else{
                        erro.style.display = "none";
                        success.style.display = "block";
                        success.innerHTML = "Sucesso : Todos os dados foram preenchidos corretamente.";
                }
              return false;  

        } catch (error) {
            success.style.display = "none";  
            erro.style.display = "block";
            erro.innerHTML = error;  
            return false;
        }
}
