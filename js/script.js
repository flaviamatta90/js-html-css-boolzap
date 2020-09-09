// start
$(document).ready(
  function (){

// funzioni generali
$(".sent-message").click(
  function(){
    sentMessage();
  }
);

$("#sent").keyup(
  function(event){
    if(event.which == 13){
      sentMessage();
    }
  }
);

function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var d = new Date();
hour = d.getHours();
min = d.getMinutes();

// /funzioni generali

// inviare un messaggio inserendolo nel cloud opportuno

function sentMessage(){
  var inputText = $("#sent").val();

  if(inputText != ""){
    var templateMessage = $(".template .inside-chat").clone();

// cloud verde
    templateMessage.find(".messaggio").text(inputText);
    templateMessage.find(".orario").text(hour + ":" + min);
    templateMessage.addClass("inviato");

    $(".chat-side").append(templateMessage);
    $("#sent").val("");

// cloud risposta ogni secondo
  setTimeout(function(){
    var bot = ["Ciao", "bene", "E tu?", "Che mi dici?", "Son content* per te!", "Gni"," Uffa", "Bleehh"];
    var ricevuto = $(".template .inside-chat").clone();

    ricevuto.find(".messaggio").text(bot[numeroRandom(0, 8)]);
    ricevuto.find(".orario").text(hour + ":" + min);
    $(".chat-side").append(ricevuto);

    }, 1000);

  }
};



// fine
  }
);
