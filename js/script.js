// start
$(document).ready(
  function (){

    $("#send").keyup(
      function(event){
        if(event.which == 13){
          var inputValue = $("#send").val();

          if(inputValue != ""){
            var elemento = $(".template  h4").clone();
            elemento.prepend(inputValue);
            $(".chat-none").append(elemento);
            $("#send").val("");
          }
        }
      }
    );


  }
);
