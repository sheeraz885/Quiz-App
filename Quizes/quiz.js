
//logout
var logout = () =>{

    window.location.replace("../index.html");
    localStorage.removeItem('login');
}


// HTML Quiz Data
var htmlQuiz = [
    { question: "HTML stands for?", 
        options: ["Hyper Text Markup Language", "Hyperlinks Text Markup Language", "Hyper Tool Markup Language", "Hyper Text Transfer Language"], 
        answer: "Hyper Text Markup Language" },

    { question: "Which tag is used to insert an image?", 
        options: ["<img>", "<image>", "<pic>"], 
        answer: "<img>" },

    { question: "What does the <title> tag define?", 
        options: ["The page title shown in the browser tab", "The main heading of the page", "The URL of the page", "The footer of the page"], 
        answer: "The page title shown in the browser tab" },

    { question: "Which is the correct way to create an ordered list?", 
        options: ["<ul>", "<list>", "<ol>", "<order>"], 
        answer: "<ol>" },

    { question: "What does the <br> tag represent?", 
        options: ["A line break", "A horizontal line", "A paragraph break", "A page break"], 
        answer: "A line break" },

    { question: "Which HTML tag is used to create a hyperlink?", 
        options: ["<a>", "<link>", "<href>", "<url>"], 
        answer: "<a>" },

    { question: "Which is the correct tag for the largest heading?", 
        options: ["<h1>", "<h6>", "<header>"], 
        answer: "<h1>" },
    { question: "How can you create a numbered list?", 
        options: ["<ul>", "<ol>", "<list>", "<num>"], 
        answer: "<ol>" },

    { question: "What is the purpose of the <meta> tag?", 
        options: ["Define metadata", "Add a hyperlink", "Create a paragraph", "Insert an image"], 
        answer: "Define metadata" },

    { question: "Which attribute is used to specify the destination of a link?", 
        options: ["href", "src"], 
        answer: "href" }
];

// CSS Quiz Data
var cssQuiz = [
    { question: "CSS stands for?", 
        options: ["Cascading Style Sheets", "Creative Style Selector", "Coded Syntax Style", "Cascading Style Syntax"], 
        answer: "Cascading Style Sheets" },

    { question: "Which CSS property is used to change the text color?", 
        options: ["text-color", "color", "font-color"], 
        answer: "color" },

    { question: "How do you add a comment in CSS?", 
        options: ["// This is a comment", "/* This is a comment */", "<!-- This is a comment -->", "# This is a comment"],
        answer: "/* This is a comment */" },

    { question: "Which CSS property controls text size?", 
        options: ["font-size", "text-style", "text-size", "font-style"], 
        answer: "font-size" },

    { question: "What is the default value of the `position` property?", 
        options: ["static", "relative", "absolute", "fixed"],
         answer: "static" },

    { question: "Which property is used to align text to the center?", 
        options: ["text-align", "align-text", "center"], 
        answer: "text-align" },

    { question: "Which CSS property is used to make text bold?", 
        options: ["font-style", "font-weight", "text-bold", "text-style"], 
        answer: "font-weight" },

    { question: "Which CSS unit is NOT relative?", 
        options: ["em", "rem", "%"], 
        answer: "px" },

    { question: "Which property is used to change the background color?", 
        options: ["background-color", "color", "bg-color", "bg"], 
        answer: "background-color" },

    { question: "What does the `z-index` property control?", 
        options: ["The stacking order of elements", "The visibility of an element", "The width of an element", "The height of an element"], 
        answer: "The stacking order of elements" }
];

// JavaScript Quiz Data
var jsQuiz = [
    { question: "Which symbol is used to declare a variable in JavaScript?", 
        options: ["let", "var", "const", "All of the above"], 
        answer: "All of the above" },

    { question: "How do you write a single-line comment in JavaScript?", 
        options: ["// This is a comment", "/* This is a comment */", "<!-- This is a comment -->", "# This is a comment"], 
         answer: "// This is a comment" },

    { question: "Which method is used to parse a string into an integer?",
         options: ["parseInt()", "Number()"], 
         answer: "parseInt()" },

    { question: "What does `NaN` represent in JavaScript?", 
         options: ["Not a Number", "Negative a Number", "Null and NaN"], 
         answer: "Not a Number" },

    { question: "Which keyword is used to define a constant in JavaScript?", 
         options: ["const", "var", "let", "constant"], 
         answer: "const" },
    { question: "Which function is used to convert a string to lowercase?",
         options: ["toLowerCase()", "toLower()", "lowerCase()", "convertLowerCase()"], 
         answer: "toLowerCase()" },

    { question: "Which operator is used to check both value and type in JavaScript?", 
        options: ["==", "===", "="], 
        answer: "===" },

    { question: "Which built-in method combines the elements of an array into a string?", 
        options: ["concat()", "join()", "combine()", "merge()"], 
        answer: "join()" },

    { question: "What is the purpose of the `isNaN()` function?", 
        options: ["Check if a value is a number", "Check if a value is not a number", "Convert a value to a number", "Round a number"], 
        answer: "Check if a value is not a number" },

    { question: "Which event is triggered when a user clicks on an HTML element?", 
        options: ["onmouseover", "onclick", "onchange"],
         answer: "onclick" }
];

//get selected user quiz from local stoarge
var selectedQuiz = localStorage.getItem('quizType');
var quizData;
var currentQuestionIndex = 0;

// conditions 
if (selectedQuiz === 'html') {
    quizData = htmlQuiz;
} else if (selectedQuiz === 'css') {
    quizData = cssQuiz;
} else if (selectedQuiz === 'js') {
    quizData = jsQuiz;
}

// Function to render question and options
function renderQuestion() {
    if (quizData && currentQuestionIndex < quizData.length) {
        var quizObject = quizData[currentQuestionIndex];
        document.getElementById('question').innerText = quizObject.question;

        var options = document.getElementById('options');
        options.innerHTML = ''; 

        for (var i = 0; i < quizObject.options.length; i++) {
            var optionContainer = document.createElement('div');

            var optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = 'quizOption';
            optionInput.id = 'option' + i;
            optionInput.value = quizObject.options[i]
           

            var optionLabel = document.createElement('label');
            optionLabel.setAttribute('for', 'option' + i);
            optionLabel.innerText = quizObject.options[i];

            optionContainer.appendChild(optionInput);
            optionContainer.appendChild(optionLabel);
            options.appendChild(optionContainer);
           
        }
    } 
}

function TimeDisplay() {
    let timeDiv = document.getElementById('time');
    let timeRemaining = 300;

    let timer = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(timer); 
            endQuiz();
        } else {
            timeRemaining--;
            let minutes = Math.floor(timeRemaining / 60);
            let seconds = timeRemaining % 60;
            timeDiv.innerText = `${minutes}:${seconds.toString().padStart(2, '0')}`; 
        }
    }, 1000);
}

let count = 0;

//functions to check the answers

function checkAnswer() {
    let options = document.getElementsByName('quizOption');
    var selectedAnswer;

    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selectedAnswer = options[i].value;
            // console.log(selectedAnswer);
            break;
        }
    }

    if (selectedAnswer) {
        let correctAnswer = quizData[currentQuestionIndex].answer;
        // console.log(correctAnswer);
        if (selectedAnswer === correctAnswer) {
            count++;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < quizData.length) {
            renderQuestion();
        } else {
            endQuiz();
        }

    } else {
        alert("Please select an option.");
    }
}

//END QUiz Function 
function endQuiz(){
    let totalQuestions = quizData.length;
            let perc = Math.round((count / totalQuestions) * 100);
            localStorage.setItem('finalScore', perc);
            localStorage.setItem('totalQuestions', totalQuestions);
            localStorage.setItem('correctAnswers', count);
            window.location.replace("./finish.html");

}



// Next button 
document.getElementById('next-button').onclick = function () {
    checkAnswer();
};

// render question of the first question & display timer
renderQuestion();
TimeDisplay();
