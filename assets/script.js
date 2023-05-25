var start = document.querySelector(".start-btn")

const quizArry = [
    {
        id: "1",
        question: "What is URL?",
        options: [
            "Uniform Resource Locators",
            "Uniform Resource Libraries",
            "Unicorn Reptile Lizard",
            "Uniform Repository Libraries",
        ],
        correct: "Uniform Resource Locators",

    },

    {
        id: "2",
        question: "What is meta?",
        options: [
            "Zucker Punch",
            "Data in space",
            "Data about data",
            "Teemo in lol",
        ],
        correct: "Datat about data"
    },

    {
        id: "3",
        question: "What is dom?",
        options: [
            "Document Object Model",
            "Document Obstical Monster",
            "Designated Operation Model",
            "Designated Open Modem",
        ],
        correct: "Document object model"
    },

    {
        id: "4",
        question: "What is API?",
        options: [
            "Application Project Integration",
            "Application Programming Interface",
            "Another Program on the Internet",
            "Alien Project Interrogation",
        ],
        correct: "Application Programming Interface"
    },

    {
        id: "5",
        question: "What is HTTP?",
        options: [
            "Hyper Text Transfer Protocol",
            "Hyper Text Tranmision Protocol",
            "Hyper Text Transformer Protocol",
            "Hyper Text Terrestrial Protocol",
        ],
        correct: "Hyper Text Transfer Protocol"
    },

    {
        id: "6",
        question: "What is CSS?",
        options: [
            "Cascading Style Sheets",
            "Counting Style Sheets",
            "Counting Simple Sheets",
            "Carpenter Steak Sandwich",
        ],
        correct: "Cascading Style Sheets"
    },

    {
        id: "7",
        question: "What is NaN?",
        options: [
            "Short hand for nanny",
            "Non applicable Note",
            "Not a Number",
            "Never again Never",
        ],
        correct: "Not a Number"
    },

    {
        id: "8",
        question: "What is meta?",
        options: [
            "Zucker Punch",
            "Data in space",
            "Data about data",
            "Teemo in lol",
        ],
        correct: "Datat about data"
    },

    {
        id: "9",
        question: "What defines a string?",
        options: [
            "Quotations",
            "Parentheses",
            "Carrots",
            "Curly Brackets",
        ],
        correct: "Quotations"
    },

    {
        id: "10",
        question: "What is Null?",
        options: [
            "Lack of any value",
            "Gandhi's caloric intake",
            "Money wasted by government",
            "All of the above",
        ],
        correct: "All of the above"
    },
]

start.addEventListener("click", function () {
    // start will begin quiz
    startQuiz()
    // starts timer
    setTime()
    // hides start button and timer
    
})

var quizIndex = 0

function startQuiz() {
    document.querySelector("#question").textContent = quizArry[quizIndex].question
    document.querySelector("#awnser-buttons").innerHTML = ""
    for (var i = 0; i < 4; i++) {
        var button = document.createElement("button");
        button.textContent = quizArry[quizIndex].options[i]
        button.setAttribute("class", "btn")
        button.onclick = checkAwnser
        document.querySelector("#awnser-buttons").append(button)
    }
}

function checkAwnser() {
    console.log(this)
    // if else statment if awnser is correct
    if (quizArry[quizIndex].correct===this.textContent) {
        
    } else {
        false
    }
    // make quizIndex go up 1
    quizIndex ++
    // execute start quiz
    startQuiz()
}



// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score