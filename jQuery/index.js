$("h1").css("color", "green");

$("h1").addClass("big-text margin");

$(document).keypress(function(event) {
    $("h1").html(event.key);})

$(document).on('click',function(){
    $("h1").css("color", "purple");
});
