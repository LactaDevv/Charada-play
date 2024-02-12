let responder = document.getElementById('btn1')
function pegarValores(){
      
    let resposta= document.getElementsByName("inlineRadioOptions")
    
    for(var i=0;i<resposta.legth;i++){

        if(resposta[i].checked){
            console.log("a alternativa selecionada é a: " + resposta[i].value)

        }

    }

}

responder.addEventListener("click",pegarValores)