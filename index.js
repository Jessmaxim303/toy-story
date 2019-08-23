var mainInput = document.getElementById('main__input');
var mainButton = document.getElementById('main__button');
var mainClearButton = document.querySelector('.main__clear--button');
var jsQuestion = document.querySelector('.js__question');
var jsAnswer = document.querySelector('.js__answer');
var eBall = document.querySelector('.eight__ball');
var answers = ['It is certain', 'It is decidedly so.', 'Without a doubt.', 'Yes - definitely.', 'You may rely on it.', 'As I see it, yes.', 
               'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.',
               'Cannot predict now.', 'Concentrate and ask again.', 'Dont count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.'] 

mainButton.addEventListener('click', mainEvent);
mainClearButton.addEventListener('click', clearButton);

function mainEvent(){
	giveAnswer();
	clearInputs();
};

function giveAnswer(){
	var item = answers[Math.floor(Math.random()*answers.length)];
  eBall.classList.remove('eight__ball');
	jsQuestion.innerHTML = ` "${mainInput.value}"`;
	jsAnswer.innerHTML = ` "${item}"`;
	mainClearButton.classList.add('active__button');
};

function clearInputs(){
	mainInput.value = '';
};

function clearButtonActiveState(){
	mainClearButton.classList.remove('active__button');
	console.log('clear b');
}

function clearButton(){
	console.log('clear')
	jsQuestion.innerHTML = " ";
	jsAnswer.innerHTML = " ";
	eBall.classList.add('eight__ball');
	clearButtonActiveState();
}

