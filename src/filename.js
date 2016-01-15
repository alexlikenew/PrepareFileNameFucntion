function filename(input, lineLength, delimetr) {
  delimetr = delimetr || "\n";
  var words = []; //array for split words
  var counter = 0;
  var word = [];
  words = input.split(' '); //split input string for words
  for (var index = 1; index < words.length; index += 2) {
    words.splice(index, 0, " ");
  }

  for (var index = 0; index < words.length; index++) {
    /////////// if word length > 10
    // if word length > 10 and it is first word
    if (words[index].length >= lineLength && index === 0) {
      word = words[index].split('');
      word.splice(lineLength, 0, delimetr);
      word = word.join('');
      words[index] = word;
      counter += words[index].length - lineLength;
    }
    //if word length > 10 and it is not first word
    else if (words[index].length >= lineLength && index !== 0) {
      word = words[index].split('');
      word.splice(lineLength - counter, 0, delimetr);
      word = word.join('');
      words[index] = word;
      counter += words[index].length;
    }
    //////////
    ///////// word length < 10
    //if it is first word
    else if (index === 0 && words[index].length <= lineLength) {
      counter += words[index].length;
    }
    //if words length in line < 10
    else if (counter + words[index].length <= lineLength + 1) {
      counter += words[index].length;
    }
    //if word length > 10
    else if (counter + words[index].length > lineLength + 1) {
      words.splice(index, 0, delimetr);
      counter = 0;

      if (words[index].length >= lineLength) {
        counter = 0;
      }
      else {
        counter += words[index].length;
      }
    }
  }
  words = words.join("");
  return words;
}

module.exports = filename;

