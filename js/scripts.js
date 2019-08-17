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
    
    // Prepare results for when the form submits
    // Default will assume result === 5, aka C#
    let language = "C#";
    let prependImage = '<img src="img/c-sharp.png" alt="C# logo" class="logos">';
    let appendMessage = "<p>You can learn how to make games and VR!</p>";
    let results = city + project + dogOrCat + environment + size;

    if (results === 6) {
      language = "Ruby";
      prependImage = '<img src="img/ruby.png" alt="Ruby logo" class="logos">';
      appendMessage = "<p>You can learn how to make applications!</p>";
    } else if (results === 7) {
      language = 'JavaScript';
      prependImage = '<img src="img/javascript.jpg" alt="JavaScript logo" class="logos">'
      appendMessage = "<p>You can learn how to make cool web applications and games!</p>"
    } else if (results === 8) {
      language = "Swift";
      prependImage = '<img src="img/swift.png" alt="Swift logo" class="logos">';
      appendMessage = "<p>You can learn how to make applications for MacOS, iOS, watchOS and tvOS!</p>";
    } else if (results === 9) {
      language = "Go";
      prependImage = '<img src="img/golang.png" alt="Golang logo" class="logos">';
      appendMessage = "<p>You can learn efficient, fast then beautiful and straight codes!</p>";
    } else if (results === 10) {
      language = "Python";
      prependImage = '<img src="img/python.png" alt="Python logo" class="logos">';
      appendMessage = "<p>You can learn how to make self-driving car!</p>";
    } else {
      // alert("Please select everything to see the result!");
      $(".modal").modal().fadeIn('fast');
      $(".close").click(function() {
      $(".modal").modal('hide');
      });
      resetMainPage();
    }
      // Update the page with
      $("#your-language").text(language);
      $(".result-message").prepend(prependImage).append(appendMessage);
      return
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