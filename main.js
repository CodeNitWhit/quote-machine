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
    var mouthHeight = $("#mouth").css("width");
    var mouthWidth = $("#mouth").css("width");
    var lipsHeight = $("#lips").css("width");
    var lipsWidth = $("#lips").css("width");
    //alert("Lips: " + lipsWidth + " x " + lipsHeight + "\r\nMouth: " + mouthWidth + " x " + mouthHeight);
    $(".hideQuote").stop();
    $(".hideQuote").fadeOut(100);
    $( "#lips" ).toggle({ effect: "scale", direction: "vertical"}).toggle({ effect: "scale", direction: "vertical"});
    $( "#mouth" ).toggle({ effect: "scale", direction: "vertical" }).toggle({ effect: "scale", direction: "vertical" });
    //alert("test");
    //$("#lips").css("transform", "translate(-50%, -50%)");
    //$("#mouth").css("transform", "translate(-50%, -50%)");
    $(".hideQuote").fadeIn(4000);
}
$(document).ready(function() {
    $("#randoButton").click(function() {
        animateLips();
        setNewColor();
    });
});