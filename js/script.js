const playButton = document.getElementById('play-btn');
const quizContainerElement = document.getElementById ('quiz-container');

playButton.addEventListener('click', playGame);

function playGame() {
    playButton.classList.add('hide');
    quizContainerElement.classList.remove('hide');
    setNextQuestion();
};

function setNextQuestion() {

}

function selectAnswer() {

}

const questions = [
    {
        question: 'Which player has won the most Super Bowls with the same team?',
        answers: [
            { text: 'Broadway Joe Nemeth' correct: false };
            { text: 'Franco Harris' correct: false };
            { text: 'Tom Brady' correct: true };
            { text: 'Nathan Peterman' correct: false };
            { text: 'Marky Mark' correct: false };
            { text: 'Terrell Suggs' correct: false };
        ]
    }
]

