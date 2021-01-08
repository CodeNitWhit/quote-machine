let quotesData;
var currentQuote = '',
  currentAuthor = '';

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
        "#73A857",
        "#4cb300",
        "#84145f",
        "#a290b1",
        "#73ceab",
        "#573b5c",
        "#cf5715",
        "#15f4ce",
        "#d1f457",
        "#ff4473",
        "#b1c982",
        "#925cd2",
        "#5089a8",
        "#e58642",
        "#fb7144",
        "#d08155",
        "#a98845",
        "#a2ac11",
        "#dcf3b7",
        "#f3babc",
        "#b7615b",
        "#ae1f51",
        "#21ab79",
        "#b6d3f2",
        "#584809",
        "#98b468",
        "#04fc23",
        "#31324d",
        "#b20b38",
        "#84fe37",
        "#687d6c",
        "#15d038",
        "#ad520c",
        "#40bad3",
        "#b8da30",
        "#448a8a",
        "#84ffaf",
        "#08947e",
        "#b681c0"
    ];
    var index = Math.floor(Math.random() * colors.length);
    var color = colors[index];
    var bodyStr = "radial-gradient(circle, rgba(153,152,152,1) 5%, rgba(239,211,206,1) 55%, " + color + " 90%)";
    var quoteBoxStr = "6px 6px " + color;
    var quoteAuthShadow = "1px 1px " + color;
    var quoteMarkShadow = "2px 2px " + color;
    $("body").css( "background", bodyStr);
    $('#quoteMark').css("color", color);
    $('#randoNext').css("color", color);
    $('.showQuote').css("box-shadow", quoteBoxStr);
    $('#quote-text').css("color", color);
    $('#quote-author').css("text-shadow", quoteAuthShadow);
    $('#open-quote-mark').css("text-shadow", quoteMarkShadow);
}
function animateLips() {
    $(".hideQuote").stop();
    $(".hideQuote").fadeOut(100);
    $( "#lips" ).toggle({ effect: "scale", direction: "vertical"}).toggle({ effect: "scale", direction: "vertical"});
    $( "#mouth" ).toggle({ effect: "scale", direction: "vertical" }).toggle({ effect: "scale", direction: "vertical" });
    $(".hideQuote").fadeIn(3000);
}
function looping() {
    $("#quoteMark").slideToggle(700, looping);
}

function getQuotes() {
    return $.ajax({
      headers: {
        Accept: 'application/json'
      },
      url:
        'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
      success: function (jsonQuotes) {
        if (typeof jsonQuotes === 'string') {
          quotesData = JSON.parse(jsonQuotes);
          console.log('quotesData');
          console.log(quotesData);
        }
      }
    });
}

function getRandomQuote() {
    return quotesData.quotes[
      Math.floor(Math.random() * quotesData.quotes.length)
    ];
  }

function getQuote() {
    let randomQuote = getRandomQuote();
    currentQuote = randomQuote.quote + '"';
    currentAuthor = "-" + randomQuote.author;
}

$(document).ready(function() {
    getQuotes().then(() => {
        getQuote();
      });
    $("#quote").hide();
    looping();
    $("#randoButton").click(function() {
        getQuote();
        $(".dimmable").css("opacity", 1);
        $("#quote").hide();
        animateLips();
        setNewColor();
    });
    $("#quoteMark").click(function() {
        $("#quote").fadeIn(1000);
        $('#tweet-quote-link').attr(
            'href',
            'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
        );
        $('#tumblr-quote-link').attr(
            'href',
            'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
            encodeURIComponent(currentAuthor) +
            '&content=' +
            encodeURIComponent(currentQuote) +
            '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
        );
        $('#quote-text').html(currentQuote);
        $('#quote-author').html(currentAuthor);
        $(".dimmable").css("opacity", 0.3);
    });
    $("#quote").click(function() {
        $("#quote").fadeOut(1000);
        $(".dimmable").css("opacity", 1);
    });
});