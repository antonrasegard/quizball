const playButton = document.getElementById('play-btn')
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
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function selectAnswer() {

}

const questions = [
    {
        question: 'Which player has won the most Super Bowls with the same team?',
        answers: [
            { text: 'Broadway Joe Nemeth', correct: false },
            { text: 'Franco Harris', correct: false },
            { text: 'Tom Brady', correct: true },
            { text: 'Nathan Peterman', correct: false },
            { text: 'Marky Mark', correct: false },
            { text: 'Terrell Suggs', correct: false }
        ]
    }
]