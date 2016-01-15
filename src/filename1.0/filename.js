function filename(input,lineLength) { 
	


var word = []; 				//array for one word
var wordsInOnLine =[];		//arra for words + spaces + dots

var counter =0;				//counter for one line			

for(var index=0;index < input.length;index++){

//if symbol isn`t a space or last 4 symbols
	if(input[index] !== ' ' && index < input.length -4){ 
	word.push(input[index]); //push symbols to array 'word' 

		if(word.length == lineLength ){		//if one word.length > lineLength
			word.push("\n");				
			counter = 0;
		
		};
	} 
	
//if symbol isn`t a space or a dot ,mean last 4 symbols
	else if(input[index] !== ' ' && input[index] !== '.' && index >= input.length - 4){ 
		
		word.push(input[index]); //push symbols to array 'word' 

			if(word.length == lineLength || word.length == lineLength*2){
				word.push("\n");
				counter = 0;
			};
	} 
//if symbol isn`t a space,mean dot and last 4 symbols
	else if(input[index] == '.' && input[index] !== ' ' && index >= input.length - 4){ 
		
		word = word.join("");
		wordsInOnLine.push(word);
		counter += word.length;
		
		
				if(counter + 4>= lineLength){
		
				wordsInOnLine.push("\n");
				word = [];
				counter = 0;
		
				wordsInOnLine.push(input[index]);
				counter++;
				};	
	}
//if symbol is a space
	else if(input[index] == ' '){
		
		word = word.join("");
		wordsInOnLine.push(word);
		counter += word.length;
		word = [];
		wordsInOnLine.push(input[index]);
		counter++;
			
	};
		//if counter > 10 push break
	if(counter + word.length == lineLength){
		
		wordsInOnLine.push("\n"); 
		counter =0;

	};
}

word = word.join("");
wordsInOnLine = wordsInOnLine.join("");
return wordsInOnLine + word;
  

};

module.exports = filename;

