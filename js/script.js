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

function random(min, max) {
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
    var bot = ["Ciao", "bene", "E tu?", "Che mi dici?", "Son content* per te!", "Gni"," Uffa", "Bleehh", "Seeee...ciaooo!", "Buongiorno", "Buonasera", "Eilàà", "Daaaiii???", "Anche secondo me!", "Non so quello... che preferisci", "OK!!!", "Mangiamo???"];
    var ricevuto = $(".template .inside-chat").clone();

    ricevuto.find(".messaggio").text(bot[random(0, 16)]);
    ricevuto.find(".orario").text(time);

    $(".chat-side").append(ricevuto);

    }, 1000);

  }
};
// /inviare un messaggio inserendolo nel cloud opportuno


// ricerca amico
$("#cerca").keyup(function() {
  var ricerca = $(this).val().toLowerCase();

  $(".friends").each(function() {
    var nomi = $(this).find(".name").text().toLowerCase();
    if (nomi.includes(ricerca)) {
      $(this).show();
    } else {
      $(this).hide();
    }
  }
);
}
);
// /ricerca amico


// sparisce al send e appare il microfono

// $(".microphone").focus(
//   function() {
//   $(".airplain").show();
//   $(".microphone").hide();
// }
// );


// Cancellare il messaggio
$(".inside-chat").click(
  function(){
    $(this).find(".popup").show();
  }
);

$(".ghost").click(
  function(){
    $(this).parents(".inside-chat").hide();
  }
);

// /Cancellare il messaggio
// $(".inside-chat").removeClass("active");
//
// $(document).on("click", ".friends",
// function(){
//   var dataContatto = $(this).attr(".data-contatto");
//
//   $(".avatar-chat").addClass("display-none");
//   if ($(".friends").hasClass("active") == true) {
//     $(".friends").removeClass("active");
//     $(".different-chat").removeClass("active");
//     $(".inside-chat").removeClass("active");
//   }
//
//   $(this).addClass("active");
//   $(".different-chat [data-contatto = "" + dataContatto + ""]").addClass("active");
//
//   $(".inside-chat [data-contatto = "" + dataContatto + ""]").addClass("active");

// $(".friends").click(
//   function(){
//
//     var mexActive = $(".chat-side");
//     mexActive.addClass(".nascosto");
//     mexActive.removeClass(".active");
//
//   }
//
// );

// }
// );

// cambiare conversazione

// /cambiare conversazione


// fine
  }
);
