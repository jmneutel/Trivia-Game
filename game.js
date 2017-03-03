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


    },

       question4: {

        question: 'Name the most recent expansion team formed.',
        choices: ['Bobcats', 'Magic', 'Grizzlies', 'Clippers'],
        answer: "Bobcats"


    },

        question5: {

        question: 'The 1994 Nuggets were the first 8 seed to ever upset a 1 seed in the playoffs, what team did they upset?',
        choices: ['Thunder', 'Lakers', 'Warriors', 'Spurs'],
        answer: "Thunder"


    },

        question6: {

        question: 'Name the team that is originally from Minneapolis but moved in the 60\'s.',
        choices: ['Lakers', 'Rockets', 'Timberwolves', 'Spurs'],
        answer: "Lakers"


    },

        question7: {

        question: 'Name the only NBA team to ever be located in San Diego other than the Clippers.',
        choices: ['Rockets', 'Bulls', 'Timberwolves', 'Warriors'],
        answer: "Rockets"


    },

        question8: {

        question: 'What team used to be called the Syracuse Nationals?',
        choices: ['76ers', 'Wizards', 'Pistons', 'Nets'],
        answer: "76ers"


    },

        question9: {

        question: 'What team did the original Twin Towers play for?',
        choices: ['Rockets', 'Lakers', 'Spurs', 'Pistons'],
        answer: "Rockets"


    },

        question10: {

        question: 'What team originated in Philadelphia before the 76ers?',
        choices: ['Warriors', 'Suns', 'Cavs', 'Raptors'],
        answer: "Warriors"


    }

};

// Varialbles for timer
var intervalId;
var timerNumber;

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

        Q1();

    });

}


startGame();


function Q1() {

    var newquestion = questionGenerator(triviaQuestions.question1);
    $('#contentArea').html('');
    $('#contentArea').append(newquestion);
    run();

    function run() {
        timerNumber = 30;
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
            unansweredScreen(triviaQuestions.question1.answer, Q2);
            unansweredCounter++;

        }

    };


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

    $("#contentArea").one("click", ".answer", function() {
        // incorrectAnswerCounter++;
        console.log("Incorrect!");
        incorrectScreen(triviaQuestions.question2.answer, Q3);

    })

    $("#contentArea").one("click", "#correct", function() {
        // correctAnswerCounter++;
        console.log("Correct!");
        correctScreen(Q3);

    })

    function run() {
        timerNumber = 30;
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
            unansweredScreen(triviaQuestions.question2.answer, Q3);
            unansweredCounter++;

        }

    }

}


function Q3() {

    var newquestion = questionGenerator(triviaQuestions.question3);
    $('#contentArea').html('');
    $('#contentArea').append(newquestion);
    stop();
    run();

    $("#contentArea").one("click", ".answer", function() {

        // incorrectAnswerCounter++;
        console.log("Incorrect!");
        incorrectScreen(triviaQuestions.question3.answer, Q4);
        // console.log("This many incorrect answers: " + incorrectAnswerCounter);
        // console.log("This many correct answers: " + correctAnswerCounter);

    })

    $("#contentArea").one("click", "#correct", function() {
        // correctAnswerCounter++;
        console.log("Correct!");
        correctScreen(Q4);
        // console.log("This many incorrect answers: " + incorrectAnswerCounter);
        // console.log("This many correct answers: " + correctAnswerCounter);
    })

    function run() {
        timerNumber = 30;
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
            unansweredScreen(triviaQuestions.question3.answer, Q4);
            unansweredCounter++;

        }

    }

}

function Q4() {

    var newquestion = questionGenerator(triviaQuestions.question4);
    $('#contentArea').html('');
    $('#contentArea').append(newquestion);
    stop();
    run();

    $("#contentArea").one("click", ".answer", function() {
        // incorrectAnswerCounter++;
        console.log("Incorrect!");
        incorrectScreen(triviaQuestions.question4.answer, Q5);

    })

    $("#contentArea").one("click", "#correct", function() {
        // correctAnswerCounter++;
        console.log("Correct!");
        correctScreen(Q5);

    })

    function run() {
        timerNumber = 30;
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
            unansweredScreen(triviaQuestions.question4.answer, Q5);
            unansweredCounter++;

        }

    }

}

function Q5() {

    var newquestion = questionGenerator(triviaQuestions.question5);
    $('#contentArea').html('');
    $('#contentArea').append(newquestion);
    stop();
    run();

    $("#contentArea").one("click", ".answer", function() {
        // incorrectAnswerCounter++;
        console.log("Incorrect!");
        incorrectScreen(triviaQuestions.question5.answer, Q6);

    })

    $("#contentArea").one("click", "#correct", function() {
        // correctAnswerCounter++;
        console.log("Correct!");
        correctScreen(Q6);

    })

    function run() {
        timerNumber = 30;
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
            unansweredScreen(triviaQuestions.question5.answer, Q6);
            unansweredCounter++;

        }

    }

}

function Q6() {

    var newquestion = questionGenerator(triviaQuestions.question6);
    $('#contentArea').html('');
    $('#contentArea').append(newquestion);
    stop();
    run();

    $("#contentArea").one("click", ".answer", function() {
        // incorrectAnswerCounter++;
        console.log("Incorrect!");
        incorrectScreen(triviaQuestions.question6.answer, Q7);

    })

    $("#contentArea").one("click", "#correct", function() {
        // correctAnswerCounter++;
        console.log("Correct!");
        correctScreen(Q7);

    })

    function run() {
        timerNumber = 30;
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
            unansweredScreen(triviaQuestions.question6.answer, Q7);
            unansweredCounter++;

        }

    }

}

function Q7() {

    var newquestion = questionGenerator(triviaQuestions.question7);
    $('#contentArea').html('');
    $('#contentArea').append(newquestion);
    stop();
    run();

    $("#contentArea").one("click", ".answer", function() {
        // incorrectAnswerCounter++;
        console.log("Incorrect!");
        incorrectScreen(triviaQuestions.question7.answer, Q8);

    })

    $("#contentArea").one("click", "#correct", function() {
        // correctAnswerCounter++;
        console.log("Correct!");
        correctScreen(Q8);

    })

    function run() {
        timerNumber = 30;
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
            unansweredScreen(triviaQuestions.question7.answer, Q8);
            unansweredCounter++;

        }

    }

}

function Q8() {

    var newquestion = questionGenerator(triviaQuestions.question8);
    $('#contentArea').html('');
    $('#contentArea').append(newquestion);
    stop();
    run();

    $("#contentArea").one("click", ".answer", function() {
        // incorrectAnswerCounter++;
        console.log("Incorrect!");
        incorrectScreen(triviaQuestions.question8.answer, Q9);

    })

    $("#contentArea").one("click", "#correct", function() {
        // correctAnswerCounter++;
        console.log("Correct!");
        correctScreen(Q9);

    })

    function run() {
        timerNumber = 30;
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
            unansweredScreen(triviaQuestions.question8.answer, Q9);
            unansweredCounter++;

        }

    }

}

function Q9() {

    var newquestion = questionGenerator(triviaQuestions.question9);
    $('#contentArea').html('');
    $('#contentArea').append(newquestion);
    stop();
    run();

    $("#contentArea").one("click", ".answer", function() {
        // incorrectAnswerCounter++;
        console.log("Incorrect!");
        incorrectScreen(triviaQuestions.question9.answer, Q10);

    })

    $("#contentArea").one("click", "#correct", function() {
        // correctAnswerCounter++;
        console.log("Correct!");
        correctScreen(Q10);

    })

    function run() {
        timerNumber = 30;
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
            unansweredScreen(triviaQuestions.question9.answer, Q10);
            unansweredCounter++;

        }

    }

}

function Q10() {

    var newquestion = questionGenerator(triviaQuestions.question10);
    $('#contentArea').html('');
    $('#contentArea').append(newquestion);
    stop();
    run();

    $("#contentArea").one("click", ".answer", function() {
        // incorrectAnswerCounter++;
        console.log("Incorrect!");
        incorrectScreen(triviaQuestions.question10.answer, results);

    })

    $("#contentArea").one("click", "#correct", function() {
        // correctAnswerCounter++;
        console.log("Correct!");
        correctScreen(results);

    })

    function run() {
        timerNumber = 30;
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
            unansweredScreen(triviaQuestions.question10.answer, results);
            unansweredCounter++;

        }

    }

}


function results() {

    stop();
    $('#contentArea').html('');
    var resultsUnanswered = '<h4 id="unansweredResult">Number of unanswered questions: ' + unansweredCounter + '</h4>';
    var resultsCorrect = '<h5 id="correctResult">Number of correct answers: ' + correctAnswerCounter + '</h5>';
    var resultsIncorrect = '<h6 id="incorrectResult">Number of incorrect answers: ' + incorrectAnswerCounter + '</h6>';
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
        Q1_2();


    });


}

function Q1_2() {

    
    var newquestion = questionGenerator(triviaQuestions.question1);
    $('#contentArea').html('');
    $('#contentArea').append(newquestion);
    run();



    $("#contentArea").one("click", ".answer", function() {

        console.log("Incorrect!");
        incorrectScreen(triviaQuestions.question1.answer, Q2);

    })

    $("#contentArea").one("click", "#correct", function() {

        console.log("Correct!");
        correctScreen(Q2);


    })

    function run() {
        timerNumber = 30;
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
            unansweredScreen(triviaQuestions.question1.answer, Q2);
            unansweredCounter++;

        }

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
    questionDiv.html("<h4>" + question + "</h4>");
    questionContainer.append(questionDiv);
    for (var i = 1; i < choices.length; i++) {

        questionContainer.append("<p class='answer'><button>" + choices[i] + "</button></p>");

    }
    questionContainer.append("<p id='correct'><button>" + choices[0] + "</button></p>");

    return questionContainer;

};

function correctScreen(Next) {

    stop();
    $('#show_timer').html(" ");
    $('#contentArea').html("<p class='screens'>That answer is correct!</p>");
    setTimeout(Next, 3000);

}


function incorrectScreen(answer, Next) {

    stop();
    $('#show_timer').html(" ");
    $('#contentArea').html("<p class='screens'>That answer is incorrect! The correct answer is: " + answer + "</p>");
    setTimeout(Next, 5000);

}

function unansweredScreen(answer, Next) {

    stop();
    $('#show_timer').html(" ");
    $('#contentArea').html("<p class='screens'>No answer chosen! The correct answer is: " + answer + "</p>");
    setTimeout(Next, 3000);

}

//  The stop function
function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval to the clearInterval function.
    clearInterval(intervalId);
}
