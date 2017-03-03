var triviaQuestions = {

    question1: {

        question: 'Who has the most championships in the NBA?',
        choices: ['Celtics', 'Lakers', 'Bulls', 'Spurs', 'Warriors'],
        answer: "Celtics"
    },

    question2: {

        question: 'Which player has scored the most points in NBA history?',
        choices: ['Kareem Abdul Jabar', 'Kobe Bryant', 'Michael Jordan', 'Karl Malone', 'Lebron James'],
        answer: "Kareem Adbul Jabar"


    },

    question3: {

        question: 'Which player has scored the most points in a single game?',
        choices: ['Wilt Chamberlain', 'Kobe Bryant', 'Michael Jordan', 'Lebron James'],
        answer: "Wilt Chamberlain"


    }

};

// Varialbles for timer
var intervalId;
var timerNumber;

// Variables for Correct and Incorrect counters //
var correctAnswerCounter = 0;
var incorrectAnswerCounter = 0;


function startGame() {
    //Make an onLoad button
    stop();
    $('#contentArea').html('');
    var startbutton = $("<div><button>Start</button></div>");
    $("#contentArea").append(startbutton);
    $(startbutton).on("click", function() {


        console.log("hi");
        //Run question 1

        Q1();

    });

}


startGame();


function Q1() {

    var newquestion = questionGenerator(triviaQuestions.question1);
    $('#contentArea').html('');
    $('#contentArea').append(newquestion);
    run();


    $("#contentArea").on("click", ".answer", function() {

        console.log("Incorrect!");
        incorrectAnswerCounter++;
        incorrectScreen(triviaQuestions.question1.answer, Q2);
        
    })

    $("#contentArea").on("click", "#correct", function() {

        console.log("Correct!");
        correctAnswerCounter++;
        correctScreen(Q2);
        

    })

}

function Q2() {

    var newquestion = questionGenerator(triviaQuestions.question2);
    $('#contentArea').html('');
    $('#contentArea').append(newquestion);
    stop();
    run();

    $("#contentArea").on("click", ".answer", function() {

        console.log("Incorrect!");
        incorrectScreen(triviaQuestions.question2.answer, Q3);

    })

    $("#contentArea").on("click", "#correct", function() {

        console.log("Correct!");
        correctScreen(Q3);

    })



}


function Q3() {

 var newquestion = questionGenerator(triviaQuestions.question3);
    $('#contentArea').html('');
    $('#contentArea').append(newquestion);
    stop();
    run();

    $("#contentArea").on("click", ".answer", function() {

    console.log("Incorrect!");
    incorrectScreen(triviaQuestions.question3.answer, Q4);
    // console.log("This many incorrect answers: " + incorrectAnswerCounter);
    // console.log("This many correct answers: " + correctAnswerCounter);

    })

    $("#contentArea").on("click", "#correct", function() {

    console.log("Correct!");
    correctScreen(Q3);
    // console.log("This many incorrect answers: " + incorrectAnswerCounter);
    // console.log("This many correct answers: " + correctAnswerCounter);
    })


}

 


function questionGenerator(questionObj) {
    var question = questionObj.question;
    var choices = questionObj.choices;
    // Delete all of the content in the area//
    console.log("Content deleted");
    var questionContainer = $("<div id='q-container'>")
        // Place content for Question One below//
    var questionDiv = $("<div id='question'></div>");
    questionDiv.html("<h4>" + question + "</h4>");
    questionContainer.append(questionDiv);
    for (var i = 1; i < choices.length; i++) {

        questionContainer.append("<p class='answer'><button>" + choices[i] + "</button></p>");

    }
    questionContainer.append("<p id='correct'><button>" + choices[0] + "</button></p>");

    return questionContainer;

};

function correctScreen(Next){

stop();
$('#show_timer').html(" ");
$('#contentArea').html('That answer is correct!');
setTimeout(Next, 3000);

}


function incorrectScreen(answer, Next){

stop();
$('#show_timer').html(" ");
$('#contentArea').html('That answer is incorrect! The correct answer is: ' + answer);
setTimeout(Next, 5000);

}



function run() {
    timerNumber = 60;
    intervalId = setInterval(decrement, 1000);
    console.log(intervalId);
}

function decrement() {
    //  Reset the timer //

    //  Decrease number by one //
    timerNumber--;

    //  Show the number in the #show-number tag.
    $("#show_timer").html("<h3>Time Left: " + timerNumber + "</h3>");

    //  Once number hits zero...
    if (timerNumber === 0) {
        // Stop the timer //
        //  Alert the user that time is up.
        console.log("Time Up!");
        stop();

    }

};

//  The stop function
function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval to the clearInterval function.
    clearInterval(intervalId);
}
