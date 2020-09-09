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
    var date = new Date();
    // var hours = date. getMinutes();
    // var time = hours + ":" + minutes;


    templateMessage.find(".messaggio").text(inputText);
    templateMessage.find(".orario").text("14.31");
    templateMessage.addClass("inviato");

    $(".chat-side").append(templateMessage);
    $("#sent").val("");


  }
}

  }
);
