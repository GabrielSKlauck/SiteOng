function showForm(){
    var formulario = document.getElementById("form-add");

    if (formulario.style.display === "none" || formulario.style.display === "") {
        formulario.style.display = "block";
        formulario.style.position = "fixed"
        formulario.style.left = "7rem";
        formulario.style.marginTop = "5px";

    } else {
        formulario.style.display = "none";
    }
}

function criarAnuncio(){
    var nomeOng = $("#input-nome-ong").val();
    var descricaoOng = $("#ta-descricao").val();
    console.log("Nome ong: " + nomeOng + "\n" +
                "Descricao: " + descricaoOng + "\n");

    var novoAnuncio =  $("<div>").addClass("cards card border-2 p-2 flex flex-col items-center h-96");

    novoAnuncio.append('<img src="assets/images/ong-exemplo.jpg" alt="" class="h-40 w-60">');
    novoAnuncio.append('<h1 class="text-xl mt-4 mb-4">' + nomeOng +'</h1>');
    novoAnuncio.append('<p class="text-center"> ' + descricaoOng + '</p>'); 
    $(".container-interno").append(novoAnuncio);

    nomeOng.val("");
    descricaoOng.val("");
}