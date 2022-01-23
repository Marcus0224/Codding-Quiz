
var questionAnswers = [
    {
        question: "Git is the version control software on your computer. Github is a website that can host remote Git repositiries."
        answer: ["True", "False",],
        correctAnswer: "True"
    },
    {
        question: "The DOM is built into the JavaScript language?"
        answer: ["True", "False",],
        correctAnswer: "False"
    },
    {
        question: "What does CSS stand for?"
        answer: ["Colorful Styles cheet", "Class Styles Sheet", "Cascading Style Sheet", "Computer Sheet Style"],
        correctAnswer: "ana"
    },
    {
        question: "Which statement correctly stores date into the Web storage API? "
        answer: ["localStorage.getItem("lunch", "sandwich");", "localStorage.setItem("lunch", "sandwich");", "setItem.localStorage("lunch", "sandwich");",],
        correctAnswer: "localStorage.setItem("lunch", "sandwich");"
    },
    {
        question: "Who is my wife"
        answer: ["ana", "sony", "lili", "gina"],
        correctAnswer: "ana"
    },
]

var questionIndex = 0
//var titleElement = document.getElementById("question-title")

function getAnswers() {
    var titleElement = document.getElementById("question-title");
    var titleQuestion = questionAnswers[questionIndex];
    titleElement.textContent = titleQuestion.question;

    for (var i = 0; i < questionAnswers[questionIndex].getAnswers.lenght; i++) {
        var listEl = document.createElement("li");
        listEl.textContent = questionAnswers[questionIndex].answer[i];
        listEl.className = "answers";
        document.getElementById("question-answer-container").appendChild(listEl);
    }
    questionIndex++;
    document.querySelector("button")
}

function startQuiz() {
    var buttonEl = document.querySelector("button")
    buttonEl.innerHTML = dataset.toggleText;
    buttonEl.removeAttribute("start")
    buttonEl.setAttribute("next-question")
    console.log
}

buttonEl.addEventListener("click", function () {

})