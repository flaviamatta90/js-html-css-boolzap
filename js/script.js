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
if (min < 10){
  var time = hour + ":" + "0" + min;
}else {
  var time = hour + ":" + min;
}

// /funzioni generali


// inviare un messaggio inserendolo nel cloud opportuno
function sentMessage(){
  var inputText = $("#sent").val();

  if(inputText != ""){
    var templateMessage = $(".template .inside-chat").clone();

// cloud verde
    templateMessage.find(".messaggio").text(inputText);
    templateMessage.find(".orario").text(time);
    templateMessage.addClass("inviato");

    $(".chat-side").append(templateMessage);
    $("#sent").val("");

// cloud risposta ogni secondo
  setTimeout(function(){
    var bot = ["Ciao", "bene", "E tu?", "Che mi dici?", "Son content* per te!", "Gni"," Uffa", "Bleehh"];
    var ricevuto = $(".template .inside-chat").clone();

    ricevuto.find(".messaggio").text(bot[numeroRandom(0, 8)]);
    ricevuto.find(".orario").text(time);
    $(".chat-side").append(ricevuto);

    }, 1000);

  }
};
// /inviare un messaggio inserendolo nel cloud opportuno


// ricerca amico
$("#cerca").keydown(function() {
  var ricerca = $(this).val().toLowerCase();

  $(".friends").each(function() {
    var nomi = $(this).find(".name").text().toLowerCase();
    if (nomi.includes(ricerca)) {
      $(this).fadeIn();
    } else {
      $(this).fadeOut();
    }
  }
);
}
);
// /ricerca amico


// sparisce al send e appare il microfono

// $("#sent").hover(function() {
//   $(".airplain").addClass("display-none");
//   $(".microphone").removeClass("display-none");
// }
// );


// fine
  }
);
