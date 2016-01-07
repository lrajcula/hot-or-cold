
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


});

var header = $('#feedback');
var form = $('form');
var guessList = $('#guessList');
var userGuess = '';
var secretNumber;
var count = 0;
//stops the default form behavior and accepts user input
form.submit(function(event){
	event.preventDefault();
	userGuess = parseInt(form.find('input[type=text]').val());
	//validate the number so it's not a decimal or words
	if (userGuess % 1 !== 0 || (userGuess.trim() == "")) {
		alert("Please enter a number");
		return
	}
	//validate the number so it's between 1 and 100
	if (userGuess > 100 || userGuess < 1) {
		alert("Please enter a number between 1 and 100");
		return
	}
	form.find('input[type=text]').val('');
	compareGuess(userGuess, secretNumber);
	appendUserGuess(userGuess);
	counter();
});

//define secret number
function getSecretNumber(){  
	return Math.floor(Math.random()*100) + 1;
}

//logic that tells the user if they're hot or cold and
//outputs that logic to #feedback
function compareGuess (userGuess, secretNumber){
if (userGuess === secretNumber) {
	return 'You win';
}
else if (Math.abs(userGuess - secretNumber) > 50) {
	$("#feedback").text("Freezing Cold"); 	
	console.log('Freezing Code');
}
else if (Math.abs(userGuess - secretNumber) > 30 && Math.abs(userGuess - secretNumber) < 50) {		
	$("#feedback").text("Cold");
	console.log('Cold');
}
else if (Math.abs(userGuess - secretNumber) > 20 && Math.abs(userGuess - secretNumber) < 30) {		
	$("#feedback").text("Getting Warm");
	console.log('Getting Warm');
}
else if (Math.abs(userGuess - secretNumber) > 10 && Math.abs(userGuess - secretNumber) < 20) {		
	$("#feedback").text("Hot");
	console.log('Hot');
}
else {			
	$("#feedback").text("Fire Hot");
	console.log('Fire Hot');
}
}
//store the users guess into the ul
function appendUserGuess (userGuess){
	$("#guessList").append("<li>" + userGuess + "</li>");
}

//count the number of guesses
function counter(){
	count++;
	$("#count").text(count);
}

newGame();
function newGame () {
	secretNumber = getSecretNumber();
	console.log(secretNumber);
	$("#feedback").text("Make a Guess");
	count = 0;
	$("#count").text(count);
	$("#guessList").html('');
}
$('.new').click(newGame);


