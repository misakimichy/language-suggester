const resetMainPage = () => {
  $(".result-message").empty();
  $("form").show();
  $("#subtitle").show();
  $("#reset-btn").hide();
  $(".result").hide();
}

const showResultPage = name => {
  $("form").hide();
  $("#subtitle").hide();
  $("#reset-btn").show();
  $(".result").show();
  $(".name").text(name);
}

$(document).ready(function(){
  $("#reset-btn").hide();
  $("form").submit(function(event){
    event.preventDefault();

    let city = parseInt($("input[name=city]:checked").val());
    let project = parseInt($("input[name=project]:checked").val());
    let dogOrCat = parseInt($("input[name=dog-or-cat]:checked").val());
    let environment= parseInt($("input[name=environment]:checked").val());
    let size = parseInt($("input[name=size]:checked").val());
    let name = $("#name").val();

    showResultPage(name);
    
    if (city + project + dogOrCat + environment + size === 5) {
      $("#your-language").text("C#");
      $(".result-message").prepend('<img src="img/c-sharp.png" alt="C# logo" class="logos">');
      $(".result-message").append("<p>You can learn how to make games and VR!</p>");
    } else if (city + project + dogOrCat + environment + size === 6) {
      $("#your-language").text("Ruby");
      $(".result-message").prepend('<img src="img/ruby.png" alt="Ruby logo" class="logos">');
      $(".result-message").append("<p>You can learn how to make applications!</p>");
    } else if (city + project + dogOrCat + environment + size === 7) {
      $("#your-language").text("JavaScript");
      $(".result-message").prepend('<img src="img/javascript.jpg" alt="JavaScript logo" class="logos">');
      $(".result-message").append("<p>You can learn how to make cool web applications and games!</p>");
    } else if (city + project + dogOrCat + environment + size === 8) {
      $("#your-language").text("Swift");
      $(".result-message").prepend('<img src="img/swift.png" alt="Swift logo" class="logos">');
      $(".result-message").append("<p>You can learn how to make applications for MacOS, iOS, watchOS and tvOS!</p>");
    } else if (city + project + dogOrCat + environment + size === 9) {
      $("#your-language").text("Go");
      $(".result-message").prepend('<img src="img/golang.png" alt="Golang logo" class="logos">');
      $(".result-message").append("<p>You can learn efficient, fast then beautiful and straight codes!</p>");
    } else if (city + project + dogOrCat + environment + size === 10) {
      $("#your-language").text("Python");
      $(".result-message").prepend('<img src="img/python.png" alt="Python logo" class="logos">');
      $(".result-message").append("<p>You can learn how to make self-driving car!</p>");
    } else {
      // alert("Please select everything to see the result!");
      $(".modal").modal();
      $(".close").click(function() {
        $(".modal").modal('hide');
      });
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