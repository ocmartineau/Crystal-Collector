//Variables

var targetNumber = Math.floor(Math.random() * 101) + 19;
var startingNumber = 0;
var playerWins = 0;
var playerLosses = 0;
var crystalOneValue = Math.floor(Math.random() * 11) + 1;
var crystalTwoValue = Math.floor(Math.random() * 11) + 1;
var crystalThreeValue = Math.floor(Math.random() * 11) + 1;
var crystalFourValue = Math.floor(Math.random() * 11) + 1;

//Setting the Board

$('#wins').text(playerWins)
$('#losses').text(playerLosses)
$('#random-number').text(targetNumber)


// Check for functioning randoms
console.log(targetNumber);
console.log(crystalOneValue)
console.log(crystalTwoValue)
console.log(crystalThreeValue)
console.log(crystalFourValue)




//Setting functions

function reset() {
    targetNumber = Math.floor(Math.random() * 101) + 19;
    $('#random-number').text(targetNumber);
    startingNumber = 0;
    $('#playernumber').text(startingNumber);
    crystalOneValue = Math.floor(Math.random() * 11) + 1;
    crystalTwoValue = Math.floor(Math.random() * 11) + 1;
    crystalThreeValue = Math.floor(Math.random() * 11) + 1;
    crystalFourValue = Math.floor(Math.random() * 11) + 1;
}

function loss() {
    alert("You've lost!");
    playerLosses++;
    $("#losses").text(playerLosses);
    startingNumber = 0;
    reset();
}
var startingNumber = 0


function win() {
    alert("You win!");
    playerWins++;
    $("#wins").text(playerWins)
    startingNumber = 0;
    reset();

}

$("#crystal1").on('click', function() {


    startingNumber = crystalOneValue + startingNumber;
    console.log(startingNumber)
    $('#playernumber').text(startingNumber);

    // Win/Lose Conditions

    if (startingNumber == targetNumber) {

        win();

    }
    if (startingNumber > targetNumber) {

        loss();
    }


});

$("#crystal2").on('click', function() {


    startingNumber = crystalTwoValue + startingNumber;
    console.log(startingNumber)
    $('#playernumber').text(startingNumber);

    // Win/Lose Conditions

    if (startingNumber == targetNumber) {

        win();

    }
    if (startingNumber > targetNumber) {

        loss();
    }


});

$("#crystal3").on('click', function() {


    startingNumber = crystalThreeValue + startingNumber;
    console.log(startingNumber)
    $('#playernumber').text(startingNumber);

    // Win/Lose Conditions

    if (startingNumber == targetNumber) {

        win();

    }
    if (startingNumber > targetNumber) {

        loss();
    }


});

$("#crystal4").on('click', function() {


    startingNumber = crystalFourValue + startingNumber;
    console.log(startingNumber)
    $('#playernumber').text(startingNumber);

    // Win/Lose Conditions

    if (startingNumber == targetNumber) {

        win();

    }
    if (startingNumber > targetNumber) {

        loss();
    }


});