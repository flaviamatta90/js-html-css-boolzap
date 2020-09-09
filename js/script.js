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


function sentMessage(){
  var inputText = $("#sent").val();

  if(inputText != ""){
    var templateMessage = $(".template .inside-chat").clone();

    var d = new Date();
    hour = d.getHours();
    min = d.getMinutes();


    templateMessage.find(".messaggio").text(inputText);
    templateMessage.find(".orario").text(hour + ":" + min);
    templateMessage.addClass("inviato");

    $(".chat-side").append(templateMessage);
    $("#sent").val("");


  }
}

  }
);
