$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $(".result").show();
    $("#your-language").text("test");
  });
});