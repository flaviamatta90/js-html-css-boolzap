// start
$(document).ready(
  function (){


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

var d = new Date();
hour = d.getHours();
min = d.getMinutes();

function sentMessage(){
  var inputText = $("#sent").val();

  if(inputText != ""){
    var templateMessage = $(".template .inside-chat").clone();

    templateMessage.find(".messaggio").text(inputText);
    templateMessage.find(".orario").text(hour + ":" + min);
    templateMessage.addClass("inviato");

    $(".chat-side").append(templateMessage);
    $("#sent").val("");
  }

  setTimeout(function(){
    var bot = ["ciao", "bene"];

    var ricevuto = $(".template .inside-chat").clone();

    ricevuto.find(".messaggio").text(bot[1]);
    ricevuto.find(".orario").text(hour + ":" + min);
    $(".chat-side").append(ricevuto);

    }, 1000);

}




  }
);
