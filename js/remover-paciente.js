var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){ // quem escuta o evento é a tabela
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    },500);
     
})

//    var alvoEvento = event.target;    // target é o alvo do evento
//    var paiDoALvo = alvoEvento.parentNode;  //TR = paciente = remover

// pacientes.forEach(function(paciente){
//    paciente.addEventListener("dblclick", function(){
//        console.log("Fui clicado com um duplo click");
//        this.remove();    // this está sempre atrelado ao dono do evento//
//    });
//})