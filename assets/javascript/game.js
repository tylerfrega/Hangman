
var game = {

	wordBank: ['shwifty', 'squanch', 'birdperson', 'portal', 'plumbus', 'wubalubadubdub', 'glipglop'],
	currentWord: [],
	answer: [],
	wrongAnswersCounter: 0,
	answerArray: [],
	

	init: function(){
		this.getWord();
		this.displayWord();
		this.checkWord();
		
	},

	//gets random word form wordbank, displays dashes 
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
			var alphabet = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
			var letter = event.key;
			var correctAnswers = document.getElementById('letters');
			var answers = document.getElementById('wrongAnswers');
			var word = game.currentWord[0];
			var answer = game.answer.join('');
			//audio
			var nice = new Audio('nice.mp3');
				nice.src = "assets/sound/nice.mp3";
			var bar = new Audio('bar.mp3');
				bar.src = "assets/sound/bar.mp3";
			var schwifty = new Audio('schwifty.mp3');
				schwifty.src = "assets/sound/schwifty.mp3";
			//morty heads
			var mortyOne = document.getElementById('one');
			var mortyTwo = document.getElementById('two');
			var mortyThree = document.getElementById('three');
			var mortyFour = document.getElementById('four');
			var mortyFive = document.getElementById('five');
			var mortySix = document.getElementById('six');

					
			//check for correct answer
	if(alphabet.includes(letter)){

				if(word.includes(letter) ){
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
	}

				//displays morty heads for how many guesses left
			 if (word === answer){
					schwifty.play();
					game.getWord();
					game.displayWord();
					correctAnswers.innerHTML = 'YOU WIN WABALUBADUBDUB!!!';
				}else if(game.wrongAnswersCounter === 1){
					mortyOne.style.display = 'none';
				}else if(game.wrongAnswersCounter === 2){
					mortyTwo.style.display = 'none';
				}else if(game.wrongAnswersCounter === 3){
					mortyThree.style.display = 'none';
				}else if(game.wrongAnswersCounter === 4){
					mortyFour.style.display = 'none';
				}else if(game.wrongAnswersCounter === 5){
					mortyFive.style.display = 'none'
				}else if(game.wrongAnswersCounter === 6){
					mortySix.style.display = 'none';
					alert('you lose the answer was ' + game.currentWord[0]);
				}
				}		
				

			}


			

		

		

};
		

	
game.init();
