var pigLatin = function(word) {
  var vowelArray = ['a', 'e', 'i', 'o', 'u'];
  var firstLetter = word.charAt(0);
  var startsWithVowel = false;

  for(var i = 0; i < vowelArray.length; ++i) {
    if (firstLetter === vowelArray[i]) {
      startsWithVowel = true;
    }
  }

  if (startsWithVowel === true) {
    return word.concat("ay");
  }
};
