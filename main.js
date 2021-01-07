function setNewColor() {
    var colors = [
        "#16a085",
        "#27ae60",
        "#2c3e50",
        "#f39c12",
        "#e74c3c",
        "#9b59b6",
        "#FB6964",
        "#342224",
        "#472E32",
        "#BDBB99",
        "#77B1A9",
        "#73A857"
    ];
    var index = Math.floor(Math.random() * colors.length);
    var color = colors[index];
    var backgroundStr = "radial-gradient(circle, rgba(153,152,152,1) 5%, rgba(239,211,206,1) 55%, " + color + " 90%)";
    $("body").css( "background", backgroundStr);
    $('#quoteMark').css("color", color);
    $('#randoNext').css("color", color);
}
function animateLips() {
    $("#hideQuote").stop();
    $("#hideQuote").fadeOut(100);
    $( "#mouth" ).toggle({ effect: "scale", direction: "horizontal"}).toggle({ effect: "scale", direction: "horizontal", });
    $("#hideQuote").fadeIn(3000);
}
$(document).ready(function() {
    $("#randoButton").click(function() {
        animateLips();
        setNewColor();
    });
});