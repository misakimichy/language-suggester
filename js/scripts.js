const resetMainPage = () => {
  $("form").show();
  $("#subtitle").show();
  $("#reset-btn").hide();
  $(".result").hide();
}

const showResultPage = () => {
  $("form").hide();
  $("#subtitle").hide();
  $("#reset-btn").show();
  $(".result").show();
}

$(document).ready(function(){
  $("#reset-btn").hide();
  $("form").submit(function(event){
    event.preventDefault();
    showResultPage();

    let city = parseInt($("input[name=city]:checked").val());
    let project = parseInt($("input[name=project]:checked").val());
    let dogOrCat = parseInt($("input[name=dog-or-cat]:checked").val());
    let environment= parseInt($("input[name=environment]:checked").val());
    let size = parseInt($("input[name=size]:checked").val());
    
    if (city + project + dogOrCat + environment + size === 5) {
      $("#your-language").text("C#");
      $("#language-logo").prepend('<img src="img/c-sharp.png" alt="C# logo" class="logos">')
    } else if (city + project + dogOrCat + environment + size === 6) {
      $("#your-language").text("Ruby");
      $("#language-logo").prepend('<img src="img/ruby.png" alt="Ruby logo" class="logos">')
    } else if (city + project + dogOrCat + environment + size === 7) {
      $("#your-language").text("JavaScript");
      $("#language-logo").prepend('<img src="img/javascript.jpg" alt="JavaScript logo" class="logos">')
    } else if (city + project + dogOrCat + environment + size === 8) {
      $("#your-language").text("Swift");
      $("#language-logo").prepend('<img src="img/swift.png" alt="Swift logo" class="logos">')
    } else if (city + project + dogOrCat + environment + size === 9) {
      $("#your-language").text("Go");
      $("#language-logo").prepend('<img src="img/golang.png" alt="Golang logo" class="logos">');
    } else if (city + project + dogOrCat + environment + size === 10) {
      $("#your-language").text("Python");
      $("#language-logo").prepend('<img src="img/python.png" alt="Python logo" class="logos">')
    } else {
      alert("Please select everything to see the result!");
      resetMainPage();
    }
  });
  $("#reset-btn").click(function(){
    $("input:radio").prop("checked", false);
    resetMainPage();
  })
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