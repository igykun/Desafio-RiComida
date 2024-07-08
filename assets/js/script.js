const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


$("#enviarCorreo").click(function(){
    alert("El correo fue enviado correctamente");


})


$("#guardarFavoritos").click(function(){
    alert("Se ha guardados en tus favoritos");
})


$("h5").dblclick(function(){
    $(this).css({
        "color": "#DC3545"
    });
})
$("h5").click(function(){
    $(this).css({
        "color": "#373A3C"
    });
})


$(".card").click(function(){
    $(".card-text").hide();
})
$(".card").dblclick(function(){
    $(".card-text").show();
})
