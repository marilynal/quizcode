//creating  variables
//selecting the button
var start = document.querySelector("button")
//selecting the time html tag
var timer = document.querySelector(".time")
//select intro page
var page = document.querySelector(".intro")
//select questions div
var quiz = document.querySelector(".questions")
//create a variable current questions so you can grab the next question from an index
var current = 0;
//create button elememt for options
var ans = document.getElementById("alts")



// timer 
// create variable to set max time and counter to count upwards  
var totalTime = 70;
var counter = 0;
var timeleft;

//insert timer function in html page
timer.innerHTML = totalTime

//questions

var questions = [
    {
        question: "What is used to terminate a variable statment?",
        options: ["}", ";", "]", "//"],
        answer: ";"

    },

    {
        question: "String values must be enclosed within ____ when being assigned to variables?",
        options: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },

    {
        question: "How are functions closed?",
        options: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "curly brackets"
    },

    {
        question: "Arrays in JavaScript can be used to store ____?",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"
        ],
        answer: "all of the above"
    },

    {
        question: "What term is used to describe the value of a property in an object?",
        options: ["key", "boolean", "string", "array"],
        answer: "key"

    }
]

//click event
start.addEventListener("click", function () {
    hide();
    begin();
    getAnswer();
    //setting up a function to count down
    var countdown = setInterval(function () {
        counter++;

        timeleft = totalTime - counter;
        timer.innerHTML = timeleft;

        if (timeleft == 0) {
            clearInterval(countdown)
            counter = 0;
        }

    }, 1000);



});

//hide the intro page 
function hide() {
    page.remove();
}

//replace it with questions 1
function begin() {
    //for loop to go through the array
    for (var i = 0; i < questions.length; i++) {
        var ask = questions[i].question;
        quiz.textContent = ask;
        getAnswer();
    }
}

function getAnswer (){
    questions.forEach(cycle => {
        //make the options a string 
        var thing = cycle.options.toString(thing)
        //create a button for the options so they can be clicked
        var choices = document.createElement("button");
        choices.setAttribute("class", "choices");
        choices.innerText = thing;
        
        //event listener to make choice
        choices.addEventListener ("click",selectChoice)
        //display in html
        console.log(ans.appendChild(choices))
    });

}

//function to select answer choice
function selectChoice(event){

    
}

