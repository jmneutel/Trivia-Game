var triviaQuestions = [

    {

        question: 'Who has the most championships in the NBA?',
        choices: ['Celtics', 'Lakers', 'Bulls', 'Spurs', 'Warriors'],
        answer: "Celtics"
    },

    {

        question: 'Which player has scored the most points in NBA history?',
        choices: ['Kareem Abdul Jabar', 'Kobe Bryant', 'Michael Jordan', 'Karl Malone', 'Lebron James'],
        answer: "Kareem Adbul Jabar"


    },

    {

        question: 'Which player has scored the most points in a single game?',
        choices: ['Wilt Chamberlain', 'Kobe Bryant', 'Michael Jordan', 'Lebron James'],
        answer: "Wilt Chamberlain"


    },

    {

        question: 'Name the most recent expansion team formed.',
        choices: ['Bobcats', 'Magic', 'Grizzlies', 'Clippers'],
        answer: "Bobcats"


    },

    {

        question: 'The 1994 Nuggets were the first 8 seed to ever upset a 1 seed in the playoffs, what team did they upset?',
        choices: ['Thunder', 'Lakers', 'Warriors', 'Spurs'],
        answer: "Thunder"


    },

    {

        question: 'Name the team that is originally from Minneapolis but moved in the 60\'s.',
        choices: ['Lakers', 'Rockets', 'Timberwolves', 'Spurs'],
        answer: "Lakers"


    },

    {

        question: 'Name the only NBA team to ever be located in San Diego other than the Clippers.',
        choices: ['Rockets', 'Bulls', 'Timberwolves', 'Warriors'],
        answer: "Rockets"


    },

    {

        question: 'What team used to be called the Syracuse Nationals?',
        choices: ['76ers', 'Wizards', 'Pistons', 'Nets'],
        answer: "76ers"


    },

    {

        question: 'What team did the original Twin Towers play for?',
        choices: ['Rockets', 'Lakers', 'Spurs', 'Pistons'],
        answer: "Rockets"


    },

    {

        question: 'What team originated in Philadelphia before the 76ers?',
        choices: ['Warriors', 'Suns', 'Cavs', 'Raptors'],
        answer: "Warriors"


    }

];

// Varialbles for timer
var intervalId;
var timerNumber;
var questionCounter = 0;

// Variables for Correct and Incorrect counters //
var correctAnswerCounter = 0;
var incorrectAnswerCounter = 0;
var unansweredCounter = 0;


function startGame() {
    //Make an onLoad button
    stop();
    $('#contentArea').html('');
    var startbutton = $("<div><button id='startbutton'>Start</button></div>");
    $("#contentArea").append(startbutton);
    $(startbutton).on("click", function() {


        console.log("hi");
        //Run question 1

        question();

    });

}


startGame();

function run() {
    timerNumber = 15;
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
        unansweredScreen(triviaQuestions[questionCounter]);
        unansweredCounter++;
        questionCounter++;

    }

};

$("#contentArea").on("click", ".answer", function() {
    console.log("Incorrect!");
    incorrectAnswerCounter++;
    incorrectScreen(triviaQuestions[questionCounter]);
    questionCounter++;
})

$("#contentArea").on("click", "#correct", function() {
    console.log("Correct!");
    correctAnswerCounter++;
    correctScreen();
    questionCounter++;
})


function question() {
    if (questionCounter >= triviaQuestions.length) {
        results();
        questionCounter = 0
    } else {
        var newquestion = questionGenerator(triviaQuestions[questionCounter]);
        $('#contentArea').html('');
        $('#contentArea').append(newquestion);
        run();
    }

}


function questionGenerator(questionObj) {
    var question = questionObj.question;
    var choices = questionObj.choices;
    // Delete all of the content in the area//
    console.log("Content deleted");
    var questionContainer = $("<div id='q-container'>")
        // Place content for Question One below//
    var questionDiv = $("<div id='question'></div>");
    // var questionArray = [];
    // questionContainer.append(questionArray);
    questionDiv.html("<h4>" + question + "</h4>");
    questionContainer.append(questionDiv);
    

    var sort = [];
    for (var i = 1; i < choices.length; i++) {

       
       sort.push("<p class='answer'><button>" + choices[i] + "</button></p>")
     
    }
    
    sort.push("<p id='correct'><button>" + choices[0] + "</button></p>");

    sort.sort(function() { return 0.5 - Math.random() });

    questionContainer.append(sort);
    console.log(sort);
    // for (var i = 1; i < choices.length; i++) {

    //     questionContainer.append("<p class='answer'><button>" + choices[i] + "</button></p>");

    // }
    // questionContainer.append("<p id='correct'><button>" + choices[0] + "</button></p>");

    return questionContainer;

};

function results() {

    stop();
    $('#contentArea').html('');
    var resultsUnanswered = '<h4 class="results"">Number of unanswered questions: ' + unansweredCounter + '</h4>';
    var resultsCorrect = '<h5 class="results">Number of correct answers: ' + correctAnswerCounter + '</h5>';
    var resultsIncorrect = '<h6 class="results">Number of incorrect answers: ' + incorrectAnswerCounter + '</h6>';
    $("#contentArea").append(resultsCorrect);
    $("#contentArea").append(resultsIncorrect);
    $("#contentArea").append(resultsUnanswered);
    var restartButton = $("<div><button id='restartButton'>Restart</button></div>");
    $("#contentArea").append(restartButton);
    $(restartButton).on("click", function() {
        console.log("hi");
        //Run question 1
        correctAnswerCounter = 0;
        incorrectAnswerCounter = 0;
        unansweredCounter = 0;

        question();

        })

    }

function correctScreen() {

    stop();
    $('#show_timer').html(" ");
    $('#contentArea').html("<p class='screens'>That answer is correct!</p>");
    setTimeout(question, 3000);

}


function incorrectScreen(quesObj) {

    stop();
    $('#show_timer').html(" ");
    $('#contentArea').html("<p class='screens'>That answer is incorrect! The correct answer is: " + quesObj.answer + "</p>");
    setTimeout(question, 3000);

}

function unansweredScreen(questObj) {

    stop();
    $('#show_timer').html(" ");
    $('#contentArea').html("<p class='screens'>No answer chosen! The correct answer is: " + questObj.answer + "</p>");
    setTimeout(question, 3000);

}

//  The stop function
function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval to the clearInterval function.
    clearInterval(intervalId);
}
