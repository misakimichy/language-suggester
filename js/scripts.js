$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("form").hide();
    $(".result").show();

    let city = parseInt($("input[name=city]:checked").val());
    let project = parseInt($("input[name=project]:checked").val());
    let dogOrCat = parseInt($("input[name=dog-or-cat]:checked").val());
    let environment= parseInt($("input[name=environment]:checked").val());
    let size = parseInt($("input[name=size]:checked").val());
    if (city + project + dogOrCat + environment + size === 5) {
      $("#your-language").text("C#");
    } else if (city + project + dogOrCat + environment + size === 6) {
      $("#your-language").text("Ruby");
    } else if (city + project + dogOrCat + environment + size === 7) {
      $("#your-language").text("JavaScript");
    } else if (city + project + dogOrCat + environment + size === 8) {
      $("#your-language").text("Swift");
    } else if (city + project + dogOrCat + environment + size === 9) {
      $("#your-language").text("Go");
    } else if (city + project + dogOrCat + environment + size === 10) {
      $("#your-language").text("Python");
    } else {
      alert("Please select everything to see the result!");
      $("form").show();
      $(".result").hide();
    }
  });
});


/*
Show result depends on the number checked of radio button, value = 1 or 2

Result: value
C#: 5
JavaScript: 6
Ruby: 7
Swift: 8
Go: 9
Python: 10
*/