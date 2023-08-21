$("h1").css("color", "green");

$("h1").addClass("big-text margin");

$(document).keypress(function(event) {
    $("h1").html(event.key);})

$(document).on('click',function(){
    $("h1").css("color", "purple");
});

$("h1").before("<button>Click</button>");
$("h1").after("<button>Click</button>");
$("h1").prepend("<button>Click</button>");
$("h1").append("<button>Click</button>");
button.remove();
