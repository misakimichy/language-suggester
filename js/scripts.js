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

    const update = (language, prependImage, appendMessage) => {
      $("#your-language").text(language);
      $(".result-message").prepend(prependImage).append(appendMessage);
    };
    let results = city + project + dogOrCat + environment + size;
    if (results === 5) {
      update(
        "C#",
        '<img src="img/c-sharp.png" alt="C# logo" class="logos">',
        "<p>You can learn how to make games and VR!</p>",
      )
    } else if (results === 6) {
      update(
        "Ruby",
        '<img src="img/ruby.png" alt="Ruby logo" class="logos">',
        "<p>You can learn how to make applications!</p>",
      )
    } else if (results === 7) {
      update(
        'JavaScript',
        '<img src="img/javascript.jpg" alt="JavaScript logo" class="logos">',
        "<p>You can learn how to make cool web applications and games!</p>",
      )
    } else if (results === 8) {
      update(
        "Swift",
        '<img src="img/swift.png" alt="Swift logo" class="logos">',
        "<p>You can learn how to make applications for MacOS, iOS, watchOS and tvOS!</p>",
      )
    } else if (results === 9) {
      update(
        "Go",
        '<img src="img/golang.png" alt="Golang logo" class="logos">',
        "<p>You can learn efficient, fast then beautiful and straight codes!</p>",
      )
    } else if (results === 10) {
      update(
        "Python",
        '<img src="img/python.png" alt="Python logo" class="logos">',
        "<p>You can learn how to make self-driving car!</p>",
      )
    } else {
      $(".modal").modal().fadeIn('fast');
      $(".close").click(function() {
      $(".modal").modal('hide');
      });
      resetMainPage();
    }

  });
  $("#reset-btn").click(function(){
    $("input:radio").prop("checked", false);
    resetMainPage();
    $('form').trigger('reset');
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