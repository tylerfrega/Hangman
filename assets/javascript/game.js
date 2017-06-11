var game = {

	wordBank: ['horse', 'cowboy', 'gunslinger', 'indian', 'sheriff'],
	currentWord: [],

	//function to produce random word and makes word push word to currentWord array
	getWord: function(){
		var word = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
		this.currentWord.push(word);
		},
	//displays dashes for each letter of word	
	displayWord: function(){
		for(i = 0; i < this.currentWord[0].length; i++){
			document.write("- ");
		}
	}

	};

	game.getWord();
	game.displayWord();

	//tracks keystrokes logs if letter is contained on the word
	document.onkeyup = function(event){
		var word = game.currentWord[0];
		var letter = event.key;

		for(i = 0; i < word.length; i++){
			if (letter === word.charAt(i)){
				console.log("it worked");
			}
		}
	}


 
