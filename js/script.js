const playButton = document.getElementById('play-btn')
const firstdownButton = document.getElementById('firstdown-btn')
const quizContainerElement = document.getElementById ('quiz-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

playButton.addEventListener('click', playGame)

function playGame() {
    console.log('Started')
    playButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    quizContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    firstdownButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

const questions = [
    {
        question: 'Who of these players has won the most Super Bowls with the same team?',
        answers: [
            { text: '"Broadway Joe" Nemeth', correct: false },
            { text: 'Franco Harris', correct: false },
            { text: 'Tom Brady', correct: true },
            { text: 'Nathan Peterman', correct: false },
            { text: 'Marky Mark', correct: false },
            { text: 'Terrell Suggs', correct: false }
        ]
    }
]