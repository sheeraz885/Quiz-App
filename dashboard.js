let div = document.getElementsByClassName('quiz-selection')[0];
let child = div.children;
let headingName = document.getElementById('Name');

let bgChange = (value) => {
    let body = document.getElementsByTagName('body')[0];
    if (value === 'white') {
        body.style.backgroundColor = "#fff";
        body.style.color = "#333333";
        for (i = 0; i < child.length; i++) {
            child[i].style.backgroundColor = '#333333'
        }
        headingName.style.color = " #5cb9ff ";
    } else {
        body.style.backgroundColor = "#333333";
        body.style.color = "white";
        for (i = 0; i < child.length; i++) {
            child[i].style.backgroundColor = '#fff';
        }
    }
}

function goToPage(quizType) {
    window.localStorage.setItem("quizType", quizType);
    window.location.href = "./Quizes/HTMLQuiz.html";
}

//logout
var logout = () =>{

    window.location.replace("./index.html");
   
}