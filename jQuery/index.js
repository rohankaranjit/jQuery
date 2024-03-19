



$("h1").css("color", "green");

$("h1").addClass("big-text margin");

$(document).keypress(function(event) {
    $("h1").html(event.key);})

$(document).on('click',function(){
    $("h1").css("color", "purple");
});

//Adding and Removing Elements
$("h1").before("<button>Click</button>");
$("h1").after("<button>Click</button>");
$("h1").prepend("<button>Click</button>");
$("h1").append("<button>Click</button>");
button.remove();


//Adding animations

$("h1").hide();
$("h1").show();
$("h1").toggle(); //both hide and show

$("h1").fadeIn();
$("h1").fadeOut();
$("h1").fadeToggle();//both fadeIn and fadeOut

//We can also chain it
$("h1").slideUp().slideDown().animate({"opacity:0.5"});

//For Custom CSS
$("h1").animate({"opacity:0.5"});
$("h1").animate({"margin:20px"});
