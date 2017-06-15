
// var game = {

// 	wordBank: ['horse', 'cowboy', 'gunslinger', 'sheriff', 'outlaw', 'bandit', 'tumbleweed'],
// 	currentWord: [],
// 	correctAnswers: [],
// 	wrongAnswers: [],
// 	wrongAnswersDisplay: [],
// 	wrongGuess: 0,

// 	//function to produce random word and push word to currentWord array
// 	getWord: function(){
// 		var word = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
// 		this.currentWord.push(word);
// 	},
// 	//displays dashes for each letter of word	
// 	displayWord: function(){
// 		for(i = 0; i < this.currentWord[0].length; i++){
// 			this.correctAnswers[i] = "_";		
// 		}
// 		var el = document.getElementById('letters');
// 		el.innerHTML = this.correctAnswers.join(" ");
// 	},

// 	displayWrongAnswers: function(){
// 		var el = document.getElementById('wrongAnswers');
// 		el.innerHTML = this.wrongAnswers.join(' ');
// 	}

	

// 	};

// 	game.getWord();
// 	game.displayWord();
	

// 	//tracks keystrokes displays letter if word contains letter
// 	document.onkeyup = function logKey(event){
// 		var word = game.currentWord[0];
// 		var letter = event.key;
// 		var correctAnswers = document.getElementById('letters');
// 		var wrongAnswers = document.getElementById('wrongAnswers');

// 		for(i = 0; i < word.length; i++){
// 			if (letter === word.charAt(i)){
// 				game.correctAnswers[i] = letter;
// 				correctAnswers.innerHTML = game.correctAnswers.join(" ");
// 			}
			
// 			if (letter !== word.charAt(i)){
// 				game.wrongAnswers[i] = letter;
// 				game.wrongAnswers.splice(1);
// 				game.wrongAnswersDisplay.push(game.wrongAnswers[0]);


// 				}
// 			}
// 		};
			

// 		






























	var wordBank = ['horse', 'cowboy', 'gunslinger', 'sheriff', 'outlaw', 'bandit', 'tumbleweed'];
	var word = wordBank[Math.floor(Math.random() * wordBank.length)];
	var answer = [];
	var wrongAnswersCounter = 0;
	var answerArray = [];
	


	//gets random word form wordband, displays dashes 
	function getWord(){
		var letters = document.getElementById('letters');
		
		for(i = 0; i < word.length; i++){
		answer[i] = "_";
		}

		letters.innerHTML = answer.join(" ");
	};


function checkWord(){
	document.onkeyup = function logKey(event){
		var letter = event.key;
		var correctAnswers = document.getElementById('letters');
		var answers = document.getElementById('wrongAnswers');
		
				
		//check for correct answer
		if(word.includes(letter)){
			for(i = 0; i < word.length; i++){
				if(letter === word[i]){
					answer[i] = letter;
					correctAnswers.innerHTML = answer.join(" ");
				} 
			}
		}else{
			wrongAnswersCounter++;
			answerArray.push(letter);
			answers.innerHTML = answerArray.join(' ');
		
		}

		if(wrongAnswersCounter === 6){
			alert('you lose');
		}

	}
};

		
		getWord();
		checkWord();
		
