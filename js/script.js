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

    $(".container-chat.active").append(templateMessage);

    var element = document.querySelector(".container-chat.active .inside-chat:last-child");

    element.scrollIntoView();

// cloud risposta ogni secondo
  setTimeout(function(){
    var bot = ["Ciao", "bene", "E tu?", "Che mi dici?", "Son content* per te!", "Gni"," Uffa", "Bleehh", "Seeee...ciaooo!", "Buongiorno", "Buonasera", "Eilàà", "Daaaiii???", "Anche secondo me!", "Non so quello... che preferisci", "OK!!!", "Mangiamo???"];
    var ricevuto = $(".template .inside-chat").clone();

    $("#sent").val("");

    ricevuto.find(".messaggio").text(bot[random(0, 16)]);
    ricevuto.find(".orario").text(time);

    $(".container-chat.active").append(ricevuto);

    var element = document.querySelector(".container-chat.active .inside-chat:last-child");

    element.scrollIntoView();
    
    }, 1000);

  }
};
// /inviare un messaggio inserendolo nel cloud opportuno


// ricerca amico
$("#cerca").keyup(function() {
  var ricerca = $(this).val().toLowerCase();

  if (ricerca == "") {
    $(".friends").show();
  } else {
    $(".friends").each(function() {
      var nomi = $(this).find(".contact-name").text().toLowerCase();
      if (nomi.includes(ricerca)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    })
  }
});
// /ricerca amico


// sparisce al send e appare il microfono

$(".airplain-microphone").hover(
  function() {
  $(".airplain").show();
  $(".microphone").hide();
}
);


// Cancellare il messaggio
$(document).on("click", ".arrow",
function(){
  $(this).siblings(".popup").toggle();

  $(".ghost").click(
    function(){
      $(this).parents(".inside-chat").hide();
    }
  );
})


// /Cancellare il messaggio

// passare da una chat all'altra

$(".friends").click(
   function(){
     $(".friends").removeClass("active");
     $(this).addClass("active");

     var dataContatto = $(this).attr("data-contatto");

     $(".container-chat").removeClass("active");

     $('.container-chat[data-contatto="'+dataContatto+'"]').addClass('active');

      var img = $(this).find("img").attr("src");
      var name = $(this).find(".contact-name").text();
      var time =$(this).find(".contact-lastmess").text();

      $(".right .avatar-chat img").attr("src", img);
      $(".right .name-right").text(name);
      $(".right .ultimo-accesso time").text(time);
   }
 );


// emoticon
$(".smile").click(
  function(){
    $(".container-lista-emoticon").show()
  }
);

$(".lista-emoticon li").click(function(){
  $(".container-lista-emoticon").hide();
  var emoticon = $(this).html();
  var inputText = $("#sent").val();
  $("#sent").val(inputText + emoticon);
  $("#sent").focus();
})
// /emoticon

// fine
  }
);
