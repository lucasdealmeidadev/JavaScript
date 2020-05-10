let val = true;
let tam = 16;

function constrate() {
    
    if(val){
            document.body.style.background= "#333";
            document.querySelector(".container").style.filter = 'grayscale(100%)';
            document.body.style.color = "white";
            val = false;
    }
    else{
            document.body.style.background= "#f1f1f1";
            document.querySelector(".container").style.filter = 'grayscale(0%)';
            document.body.style.color = "black";
            val = true;
    }
}

function acess(params){
        
        if(params.value == "+"){
                tam++;
                document.body.style.fontSize = tam+"px";
        }
        else if(params.value == "-"){
                
                if(tam == 16){
                        tam==16;
                        document.body.style.fontSize = "16px";
                }
                else{
                        tam--;
                        document.body.style.fontSize = tam+"px";
                }
        }
}