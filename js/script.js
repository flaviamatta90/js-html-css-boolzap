// start
$(document).ready(
  function (){

    var messaggioUtente = [];
    for(var i = 0; i < messaggioUtente.length; i++){
    var elemento = $(".chat-none").clone();
    elemento.prepend(messaggioUtente[i]);
    // elemento.children("span").text("V").addClass("red");
    $(".inside-chat-none").append(elemento);
  }

    $("#send").keyup(
      function(event){
        if(event.which == 13){
          var inputValue = $("#send").val();

          if(inputValue != ""){
            var elemento = $(".chat-none").clone();
            elemento.prepend(inputValue);
            $(".chat-none").append(elemento);
            $("#send").val("");
          }
        }
      }
    );



  }
);
