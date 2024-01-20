$(() => {
    $.ajax({
        type: "GET",
        url: "https://localhost:7070/State",
        success: loadStates,
        header: {},
        contentType: "application/json",
        dataType: "json",
    });

    $("#btn-sign-up").click(() => {
        const values = {
          name: $("#Voluntario-nome")[0].value,
         // Estado: $("#Voluntario-estado")[0].value,
          email: $("#Voluntario-email")[0].value,
          password: $("#Voluntario-senha")[0].value,
          role: "voluntario",
          cityId: $("#Voluntario-city")[0].value,
          
          
        }
        if (!values.name) {
            alert("nome não informado!");
            $("#Voluntario-nome").addClass("invalid");
            return;  
        }
        $("#Voluntario-nome").removeClass("invalid");

        // if (!values.Estado) {
        //     alert("Estado não informado!");
        //     $("#Voluntario-estado").addClass("invalid");
        //     return;  
        // }
        $("#Voluntario-estado").removeClass("invalid");

        if (!values.cityId) {
            alert("Cidade não informado!");
            $("#Voluntario-city").addClass("invalid");
            return;  
        }
        $("#Voluntario-city").removeClass("invalid");

        if (!values.email) {
            alert("Email não informado!");
            $("#Voluntario-email").addClass("invalid");
            return;  
        }
        $("#Voluntario-email").removeClass("invalid");

        if (!values.password) {
            alert("Senha não informado!");
            $("#Voluntario-senha").addClass("invalid");
            return;  
        }
        $("#Voluntario-senha").removeClass("invalid");

        console.log(values);
        sendDataBase(values);
        
    });
    
})

function sendDataBase(values){
    $.ajax({
        type: "POST",
        url: "https://localhost:7070/User",
        data: JSON.stringify(values),
        contentType: "application/json",
        dataType: "json",
    });
}

function loadStates(item){
    console.log(item);
    item.forEach(linha => {
        
        const stateOption = `
            <option value="${linha.id}">${linha.name}</option>
        `;
        $(`#ngo-state`).append($(stateOption));
    });
}

function loadCity(){
    event.preventDefault();
    var id = document.getElementById('ngo-state').value;
    $.ajax({
        type: "GET",
        url: `https://localhost:7070/City/${id}`,
        success: loadCityHtml,
        header: {},
        contentType: "application/json",
        datatype: "json",
    });
}

function loadCityHtml(item){
    var limpa = document.getElementById("ngo-city");
    limpa.innerText = "";
    item.forEach(linha => {
        
        const cityOption = `
            <option value="${linha.id}">${linha.name}</option>
        `;
        $(`#ngo-city`).append($(cityOption));
    });
}