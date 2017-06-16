
var game = {

	wordBank: ['shwifty', 'squanch', 'birdperson', 'portal', 'plumbus', 'poopybuthole', 'wubalubadubdub'],
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
			var answer = game.answer.join('');
			var nice = new Audio('nice.mp3');
				nice.src = "assets/sound/nice.mp3";
			var bar = new Audio('bar.mp3');
				bar.src = "assets/sound/bar.mp3";
					
			//check for correct answer
			if(word.includes(letter)){
				for(i = 0; i < word.length; i++){
					if(letter === word[i]){
						game.answer[i] = letter;
						correctAnswers.innerHTML = game.answer.join(" ");
						nice.play();

					} 
				}
			}else{
				game.wrongAnswersCounter++;
				game.answerArray.push(letter);
				answers.innerHTML = game.answerArray.join(' ');
				bar.play();
			}

			if(game.wrongAnswersCounter === 6){
				alert('you lose the answer was ' + game.currentWord[0]);
				}else if (word === answer){
				alert('you win');
			}

				}

			}
		

			

		

};
		
	
game.init();

