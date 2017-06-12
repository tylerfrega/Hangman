	//tracks keystrokes logs if letter is contained on the word
	document.onkeyup = function logKey(event){
		var word = game.currentWord[0];
		var letter = event.key;


		for(i = 0; i < word.length; i++){
			if (letter === word.charAt(i)){
				console.log("it worked");

			}
		}
	}

var game = {

	wordBank: ['horse', 'cowboy', 'gunslinger', 'indian', 'sheriff'],
	currentWord: [],
	answerArray: [],

	//function to produce random word and push word to currentWord array
	getWord: function(){
		var word = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
		this.currentWord.push(word);
		},
	//displays dashes for each letter of word	
	getDashes: function(){
		for(i = 0; i < this.currentWord[0].length; i++){
			this.answerArray[i] = "_";		
		}
	},

	displayDashes: function(){
		var el = document.getElementById('letters');
		el.innerHTML = this.answerArray.join(" ");
	},

	gameLoop: function(){
		var remainingLetters = currentWord.length;
		while(remainingLetters > 0){
			var el = document.getElementById('letters');
			el.innerHTML = this.answerArray.join(" ");
		}

	}

	};

	game.getWord();
	game.getDashes();
	game.displayDashes();













// var wordBank = ['horse', 'cowboy', 'gunslinger', 'indian', 'sheriff'];

// var word = wordBank[Math.floor(Math.random() * wordBank.length )];

// var answerArray = [];

// for(i = 0; i< word.length; i++){
// 	answerArray[i] = "_";
// }

// var remainingLetters = word.length;

// while(remainingLetters > 0) {
// 	var el = document.getElementById('letters');
// 	el.innerHTML = answerArray.join("");

// 	var guess = prompt("guess a letter");
// 	if(guess === null){
// 		break;
// 	}else if (guess.length !== 1){
// 		alert("enter a single letter");
// 	}else {
// 		for(i = 0; i < word.length; i++){
// 			if(word[i] === guess){
// 				answerArray[i] = guess;
// 				remainingLetters--;
// 			}
// 		}
// 	}
// }


// el.innerHTML = answerArray.join(" ");
// alert("you win");

