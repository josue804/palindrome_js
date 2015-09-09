var palindrome = function(word) {
  return word.toLowerCase().split("").reverse().join("") === word.toLowerCase();
}

$(function() {
  $("form#palindrome").submit(function(event) {
    var word = $("input#input").val();
    var result = palindrome(word);

    $(".output").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
