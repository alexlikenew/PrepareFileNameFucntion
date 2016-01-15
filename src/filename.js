function filename(input, lineLength, delimetr) {
  delimetr = delimetr || "\n";
  if(input == ''){
	return '';  
  }
  else if(input !== ''){
  var words = []; //array for split words
  var counter = 0;
  var word = [];
 
  //IF INPUT.LENGTH > LINELENGTH
  if(input.length >lineLength ){
  words = input.split(' ');     //split input string for words by spaces

  for (var index = 1; index < words.length; index += 2) {
   words.splice(index, 0, " ");		//insert spaces as elements
  };
  
 var lastWordWithDot = [];  // array for last word
  var dot = ".";		//array with dot "."
  var extansion = [];
  
if(words[words.length -1].indexOf('.') !== -1)  
{
lastWordWithDot = words[words.length -1].split('.');	// divide last element by dot and push it to extansions
words.pop(); 	//delete last element from array words
words.push(lastWordWithDot[0]);	//push first half of last word as element to array words

extansion = dot.concat(lastWordWithDot[1]);


words.push(extansion);	//push second part of last word with dot "."(extansion) as element to array words 


};



  for (var index = 0; index < words.length; index++) {
   /////////////////////////// /////////// if word length > 10
   
   // if word length > 10 and it is first word
		 if (words[index].length >= lineLength*10+1 && index === 0) {
      word = words[index].split('');
      word.splice(lineLength, 0, delimetr);
	    word.splice(lineLength*2 +1, 0, delimetr);
		word.splice(lineLength*3+2, 0, delimetr);
		word.splice(lineLength*4+3, 0, delimetr);
		word.splice(lineLength*5+4, 0, delimetr);
		word.splice(lineLength*6+5, 0, delimetr);
		word.splice(lineLength*7+6, 0, delimetr);
		word.splice(lineLength*8+7, 0, delimetr);
		word.splice(lineLength*9+8, 0, delimetr);
		word.splice(lineLength*10+9, 0, delimetr);
		
      word = word.join('');
      words[index] = word;
      counter += words[index].length - lineLength;
    }
		else if(words[index].length >= lineLength*9+1 && index === 0) {
      word = words[index].split('');
      word.splice(lineLength, 0, delimetr);
	    word.splice(lineLength*2 +1, 0, delimetr);
		word.splice(lineLength*3+2, 0, delimetr);
		word.splice(lineLength*4+3, 0, delimetr);
		word.splice(lineLength*5+4, 0, delimetr);
		word.splice(lineLength*6+5, 0, delimetr);
		word.splice(lineLength*7+6, 0, delimetr);
		word.splice(lineLength*8+7, 0, delimetr);
		word.splice(lineLength*9+8, 0, delimetr);
		
      word = word.join('');
      words[index] = word;
      counter += words[index].length - lineLength*9;
	  
    }
		else if(words[index].length >= lineLength*8+1 && index === 0) {
      word = words[index].split('');
      word.splice(lineLength, 0, delimetr);
	    word.splice(lineLength*2 +1, 0, delimetr);
		word.splice(lineLength*3+2, 0, delimetr);
		word.splice(lineLength*4+3, 0, delimetr);
		word.splice(lineLength*5+4, 0, delimetr);
		word.splice(lineLength*6+5, 0, delimetr);
		word.splice(lineLength*7+6, 0, delimetr);
		word.splice(lineLength*8+7, 0, delimetr);
		
      word = word.join('');
      words[index] = word;
      counter += words[index].length - lineLength*8;
    }
	   else if(words[index].length >= lineLength*7+1 && index === 0) {
      word = words[index].split('');
      word.splice(lineLength, 0, delimetr);
	    word.splice(lineLength*2 +1, 0, delimetr);
		word.splice(lineLength*3+2, 0, delimetr);
		word.splice(lineLength*4+3, 0, delimetr);
		word.splice(lineLength*5+4, 0, delimetr);
		word.splice(lineLength*6+5, 0, delimetr);
		word.splice(lineLength*7+6, 0, delimetr);
		
      word = word.join('');
      words[index] = word;
      counter += words[index].length - lineLength*7;
    }
    else if(words[index].length >= lineLength*6+1 && index === 0) {
      word = words[index].split('');
      word.splice(lineLength, 0, delimetr);
	    word.splice(lineLength*2 +1, 0, delimetr);
		word.splice(lineLength*3+2, 0, delimetr);
		word.splice(lineLength*4+3, 0, delimetr);
		word.splice(lineLength*5+4, 0, delimetr);
		word.splice(lineLength*6+5, 0, delimetr);
		
      word = word.join('');
      words[index] = word;
      counter += words[index].length - lineLength*6;
    }
    else if(words[index].length >= lineLength*5+1 && index === 0) {
      word = words[index].split('');
      word.splice(lineLength, 0, delimetr);
	    word.splice(lineLength*2 +1, 0, delimetr);
		word.splice(lineLength*3+2, 0, delimetr);
		word.splice(lineLength*4+3, 0, delimetr);
		word.splice(lineLength*5+4, 0, delimetr);
	
      word = word.join('');
      words[index] = word;
      counter += words[index].length - lineLength*5;
    }
	else if(words[index].length >= lineLength*4+1 && index === 0) {
      word = words[index].split('');
      word.splice(lineLength, 0, delimetr);
	    word.splice(lineLength*2 +1, 0, delimetr);
		word.splice(lineLength*3+2, 0, delimetr);
		word.splice(lineLength*4+3, 0, delimetr);
		
      word = word.join('');
      words[index] = word;
      counter += words[index].length - lineLength;
    }
	 else if(words[index].length >= lineLength*3+1 && index === 0) {
      word = words[index].split('');
      word.splice(lineLength, 0, delimetr);
	    word.splice(lineLength*2, 0, delimetr);
		word.splice(lineLength*3, 0, delimetr);
      word = word.join('');
      words[index] = word;
      counter += words[index].length - lineLength;
    }
	  else if(words[index].length >= lineLength*2+1 && index === 0) {
      word = words[index].split('');
      word.splice(lineLength, 0, delimetr);
	    word.splice(lineLength*2, 0, delimetr);
      word = word.join('');
      words[index] = word;
      counter += words[index].length - lineLength;
    }
	else if(words[index].length >= lineLength && index === 0) {
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
   //////////////////////////////// //////////
   
   ///////////////////....../////////if word length < 10
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

	//IF INPUT.LENGTH <= LINELENGTH
else if(input.length <=lineLength){
	return input;
}
}
}

module.exports = filename;

