const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let gameState = {}

function playGame() {
    items = {}
    showQuestion(1)
}

function showQuestion(questionNodeIndex) {
    const questionNode = questionNodes.find(questionNode => questionNode.id === questionNodeIndex)
    questionElement.innerText = questionNode.question
}

function pickedAnswer(answer) {

}

const questionNodes = [
    {
        id: 1,
        question: 'You awake in a moonlit meadow.  On the ground is a boulder, to the north is a witches coven',
        answers: [
            {
                text: 'Roll Boulder',
                nextAnswer: 2
            },
            {
                text: 'Go North',
                nextAnswer: 3
            }
        ]
    }
]

playGame()