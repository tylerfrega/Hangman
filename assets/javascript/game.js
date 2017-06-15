
var game = {

	wordBank: ['horse', 'cowboy', 'gunslinger', 'sheriff', 'outlaw', 'bandit', 'tumbleweed'],
	currentWord: [],
	answer: [],
	wrongAnswersCounter: 0,
	answerArray: [],
	

	init: function(){
		this.getWord();
		this.displayWord();
		this.checkWord();
	},

	//gets random word form wordband, displays dashes 
	getWord: function(){
		var word = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
		this.currentWord.push(word);
	},
	//displays dashes for each letter of word	
	displayWord: function(){
		for(i = 0; i < this.currentWord[0].length; i++){
			this.answer[i] = "_";		
		}
		var el = document.getElementById('letters');
		el.innerHTML = this.answer.join(" ");
	},


	checkWord: function(){

		document.onkeyup = function logKey(event){
			var letter = event.key;
			var correctAnswers = document.getElementById('letters');
			var answers = document.getElementById('wrongAnswers');
			var word = game.currentWord[0];
			
					
			//check for correct answer
			if(word.includes(letter)){
				for(i = 0; i < word.length; i++){
					if(letter === word[i]){
						game.answer[i] = letter;
						correctAnswers.innerHTML = game.answer.join(" ");
					} 
				}
			}else{
				game.wrongAnswersCounter++;
				game.answerArray.push(letter);
				answers.innerHTML = game.answerArray.join(' ');
			}

			if(game.wrongAnswersCounter === 6){
				alert('you lose');
				}

			}
		}

};
		
	
game.init();