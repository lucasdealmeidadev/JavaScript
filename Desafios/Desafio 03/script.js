/*
    Desafios03-Javascript

    
    1 - Declare uma variável chamada objCarro, atribuindo à ela um objeto com as seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
    
        marca - String
        modelo - String
        placa - String
        ano - Number
        cor - String
        quantasPortas - Number
        assentos - Number - cinco por padrão
        quantidadePessoas - Number - zero por padrão
    
    2 - Crie um método chamado mudarCor que mude a cor do carro conforme a cor passado por parâmetro.

    3 - Crie um método chamado obterCor, que retorne a cor do carro.

    4 - Crie um método chamado obterModelo que retorne o modelo do carro.

    5 - Crie um método chamado obterMarca que retorne a marca do carro.

    6 - Crie um método chamado obterMarcaModelo, que retorne: "Esse carro é um [MARCA] [MODELO]" Para retornar os valores de marca e modelo, utilize os métodos criados.

    7 - Crie um método que irá adicionar pessoas no carro. Esse método terá as seguintes características:

        Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse número não precisa encher o carro, você poderá acrescentar as pessoas aos poucos.
        O método deve retornar a frase: "Já temos [X] pessoas no carro!"
        Se o carro já estiver cheio, com todos os assentos já preenchidos, o método deve retornar a frase: "O carro já está lotado!"
        Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por parâmetro for ultrapassar o limite de assentos do carro, então você deve mostrar quantos assentos ainda podem ser ocupados, com a frase: "Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
        Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno citado acima, no lugar de "pessoas".
*/
const objCarro = {

    marca: "Honda",
    modelo: "Civic",
    placa: "1717",
    ano: 2019,
    cor: "Cinza",
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0,
      
    mudarCor:(n_cor)=>{
        objCarro.cor = n_cor;
    },
    obterCor:()=>{
        return objCarro.cor;
    },
    obterModelo:()=>{
        return objCarro.modelo;
    },
    obterMarca:()=>{
        return objCarro.marca;
    },
    obterMarcaModelo:()=>{
        return `Esse carro é um [${objCarro.obterMarca()}] [${objCarro.obterModelo()}]`;
    },
    addPessoas:(num)=>{
        
        let t_pessoas = objCarro.quantidadePessoas + num;
        
            if(objCarro.quantidadePessoas == objCarro.assentos && t_pessoas >= objCarro.assentos){
                return `O carro já está lotado!`;
            }
            else if(t_pessoas > objCarro.assentos){
                
                let a_disponiveis = (objCarro.assentos)-(objCarro.quantidadePessoas);
                
                if(a_disponiveis == 1){
                     return `Só cabem mais [${a_disponiveis}] pessoa!`;   
                }else{
                     return `Só cabem mais [${a_disponiveis}] pessoas!`;
                }
            }else{
                objCarro.quantidadePessoas += num;
                return`Já temos [${objCarro.quantidadePessoas}] pessoas no carro!`;
            }
    },
};