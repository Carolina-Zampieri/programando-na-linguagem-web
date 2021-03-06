var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function(){
    console.log("buscando..");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //configura o endereço

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");

        if( xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta); // lê em JSON e devolve em JavaScript
    
            pacientes.forEach( function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log( xhr.status);
            console.log( xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
    })

    xhr.send();  // envia a requisição
})