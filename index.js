function setNewColor() {
    var colors = [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
    ];
    var index = Math.floor(Math.random() * colors.Length);
    var color = $(colors[index]);
    $('body').animate(
        {
          backgroundImage: "radial-gradient(circle, grey 5%, #efd3ce 55%, " + color + " 90%)"
        },
        1000
    );
    $('#quoteMark').animate(
        {
            color: color
        },
        1000
    );
    $('#randoNext').animate(
        {
            color: color
        },
        1000
    );
}

/*
function animateLips() {
    $("#hideQuote").stop();
    $("#hideQuote").fadeOut(100);
    $( "#mouth" ).toggle({ effect: "scale", direction: "horizontal"}).toggle({ effect: "scale", direction: "horizontal", });
    $("#hideQuote").fadeIn(3000);
}
*/

$(document).ready(function() {
    $("#randoButton").click(function() {
        //animateLips();
        setNewColor();
    });
});