let score = localStorage.getItem('finalScore');
let totalQuestions = localStorage.getItem('totalQuestions');
let correctAnswers = localStorage.getItem('correctAnswers');
let wrongAnswers = totalQuestions - correctAnswers;

// Display results dynamically
let per = document.getElementById('score-percentage').innerText = score + "%";
let totalQuestion = document.getElementById('total-questions').innerText = totalQuestions;
let correctAns = document.getElementById('correct-answers').innerText = correctAnswers;
let wrongAns = document.getElementById('wrong-answers').innerText = wrongAnswers;

// Pass/Fail Logic
const resultTitle = document.getElementById('result-title');
if (score >= 50) {
    resultTitle.innerText = "Congratulations! You Passed ";
} else {
    resultTitle.innerText = "Sorry! You Failed ";
    resultTitle.setAttribute("class",'fail');
}

// Clear stored data after displaying
localStorage.removeItem('finalScore');
localStorage.removeItem('totalQuestions');
localStorage.removeItem('correctAnswers');
    
function goToMain(){
    window.location.href = '../dashboard.html';
}
  
