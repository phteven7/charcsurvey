// todo list 
// implement a result function with weights and specific result
// implement a retake quiz button that will help with reseting the quiz
// implement a weights score for each of the questions and answers

// more meat lovers or cheese lover or fruit
// what kind of occasion 
// ask questions about event and fun stuff
// add new question drink and other pairings 


var answers = [];


// create questions here
var questions = [
    new Question("How many people are gonna be eating?", ["1-2", "2-4","6-9", "10+"]),
    new Question("Is this the main dish?", ["Main Dish", "Side Dish"]),
    new Question("How hungry is everyone?", ["Starving","Hungry", "Just looking for a snack"]),
    new Question("What kind of occassion are you catering for?", ["Birthday", "Party","Family Gathering", "No special occasion"]),
    new Question("Is your group more cheese lovers or meat lovers?", ["Cheese", "Meat"]),
    new Question("Are you going to be pairing the board with anything else?", ["Wine", "Other Sides","Main Entrees", "No"]),

];


//creates the quiz function which takes in the question array with question objects
function Quiz(questions) {
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.answer = function(choice) {
    answers.push(choice)
    console.log(choice)
    removeElements(document.querySelectorAll('.btn'));
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

function displayQuestion() {
    if(quiz.isEnded()) {
        //removeElements(document.querySelectorAll('#question'));
        showButton();
        console.log(answers);
        showResult(answers);
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options

        var choices = quiz.getQuestionIndex().choices;

        var buttonCon = document.getElementById("btnCon");

        for(var i = 0; i < choices.length; i++) {
            
            var btn = document.createElement("button");
            btn.setAttribute("class", "btn");
            btn.setAttribute("id", "btn" + i)
            btn.innerHTML = choices[i]
            buttonCon.append(btn)

            answer('btn' + i, choices[i])

            // var element = document.getElementById("choice" + i);
            // element.innerHTML = choices[i];
            // answer("btn" + i, choices[i]);
        }

        
        // showProgress();
    }
};

function answer(id, answer) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.answer(answer);
        displayQuestion();
    }
};
 

//function to help remove buttons after each question answered
function removeElements(elements){
    for(var i = 0; i < elements.length; i++){
        elements[i].parentNode.removeChild(elements[i]);
    }
}

function shopNow() {
    window.open('https://sagracia08.wixsite.com/my-site/boards', '_blank').focus();
}

function resetQuiz() {
    window.location.reload();
}

function showButton() {
    document.querySelector('.btn2').style.display = 'block';
    document.querySelector('.btn3').style.display = 'block';
}

function showResult(answers) {
    var element = document.getElementById("question");
    element.style.fontSize = "40px";

    if(answers[0] = '1-2') {
        element.innerHTML = "We recommend the <u>Mini</u> Board"
    }
   if(answers[0] = '2-5') {
        element.innerHTML = "We recommend the <u>Small</u> Board"
    }
    if(answers[0] = '6-9') {
        element.innerHTML = "We recommend the <u>Medium</u> Board"
    }
    if(answers[0] = '10+') {
        element.innerHTML = "We recommend the <u>Large</u> Board"
    }
}

  // create questions
var quiz = new Quiz(questions);
 
// display quiz
displayQuestion();




// function showProgress() {
//     var currentQuestionNumber = quiz.questionIndex + 1;
//     var element = document.getElementById("progress");
//     element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
// };

