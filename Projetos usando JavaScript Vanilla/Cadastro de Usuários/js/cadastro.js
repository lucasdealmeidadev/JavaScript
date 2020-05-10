let arr = [];
const dados = document.getElementById("dados");
const erro = document.getElementById('erro');

function validar(x){

    if(x.value == ""){
        erro.classList.add('alert-danger');
        erro.innerHTML = `Erro : Preencha o campo ${x.name}.`;
    }
    else{
        erro.classList.remove('alert-danger');
    }    
}

function adicionar(){
    
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const idade = document.getElementById("idade").value;
    const email = document.getElementById("email").value;

    const Objcadastro = {
            nome: nome,
            telefone: telefone,
            idade: idade,
            email: email,
    };

    if(nome == "" || telefone == "" || idade == "" || email == ""){

        erro.classList.add('alert-danger');
        erro.innerHTML = `Erro : Preencha todos os campos corretamente.`;  
    }else{

        erro.classList.remove('alert-danger');
        erro.classList.add('alert-success');
        document.form_cad.reset();
        erro.innerHTML = `Sucesso : Registro inserido com sucesso.`;
        return arr.push(Objcadastro);
    }
}

function listar(){
    
    dados.innerHTML = "";
    
        if(arr.length == 0){
            dados.innerHTML = `
                    <tr>
                        <td colspan="4" class="text-center">Nenhum registro foi encontrado...</td>
                    </tr>
            `; 
        }else{
            arr.map(function (cadastro, index, arr) {
                    dados.innerHTML += `
                        <tr>
                            <td>${cadastro.nome}</td>
                            <td>${cadastro.telefone}</td>
                            <td>${cadastro.idade}</td>
                            <td>${cadastro.email}</td>
                        </tr>
                    `; 
            });
        }
}
function pesquisar(){

    const search = document.getElementById("pesquisa").value;

        if(search == ""){

            erro.classList.add('alert-danger');
            erro.innerHTML = `Erro : Preencha o campo pesquisa.`;
        }else{
            erro.classList.remove('alert-success');
            erro.classList.remove('alert-danger');
            erro.innerHTML = "";
            dados.innerHTML = "";
                arr.map(function (cadastro, index, arr) {
                
                    if(cadastro.nome == search){
                        dados.innerHTML += `
                            <tr>
                                <td>${cadastro.nome}</td>
                                <td>${cadastro.telefone}</td>
                                <td>${cadastro.idade}</td>
                                <td>${cadastro.email}</td>
                            </tr>
                        `; 
                    }
                });
        }
}