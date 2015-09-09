var pigLatin = function(word) {
  var vowelArray = ['a', 'e', 'i', 'o', 'u'];
  var firstLetter = word.charAt(0);
  var startsWithVowel = false;
  var counter = 0;
  var totalConsonants = 0;
  var consonantsArray = [];
  var wordArray = word.split("")

  for(var i = 0; i < vowelArray.length; ++i) {
    if (firstLetter === vowelArray[i]) {
      startsWithVowel = true;
    }
  }

  if (startsWithVowel === true) {
      return word.concat("ay");
  }

  else if (startsWithVowel === false) {
    for(var j = 0; j < wordArray.length; ++j) {
      counter = 0;
      for(var i = 0; i <vowelArray.length; ++i) {
        if (wordArray[j] === vowelArray[i]) {
          ++counter;
        }
      }
      if (counter === 0) {
        consonantsArray.push(wordArray[j]);
        ++totalConsonants;
      }

      else {
        break;
      }
    }

    consonantsArray.reverse();
    var consonants = wordArray.slice(0, totalConsonants);
    var vowels = wordArray.slice(totalConsonants, wordArray.length);
    return vowels.concat(consonants).concat("ay").join("");
  }
};
