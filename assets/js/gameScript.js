const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-options')

let gameState = {}

function playGame() {
    items = {}
    showQuestion(1)
}

function showQuestion(questionNodeIndex) {
    const questionNode = questionNodes.find(questionNode => questionNode.id === questionNodeIndex)
    questionElement.innerText = questionNode.question
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }

  questionNode.answers.forEach(answer => {
      if (showAnswer(answer)) {
          const button = document.createElement('button')
          button.innerText = answer.text
          button.classList.add('buttons')
          button.addEventListener('click', () => pickedAnswer(answer))
          answerButtonsElement.appendChild(button)
      }
  })
}

function showAnswer(answer) {
    return true
}

function pickedAnswer(answer) {
  const nextQuestionNodeId = answer.nextQuestion
  if (questionNodeIndex <= 0) {
    return playGame()
  }
  showQuestion(questionNodeIndex)
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
    },
    {
        id: 2,
        question: 'You roll the boulder which reveals a secret passageway to a catacomb.  In the catacomb is a sarcophagus and passageway north',
        answers: [
            {
                text: 'Open Sarcophagus',
                nextAnswer: 4
            }
        ]
    },
        {
        id: 3,
        question: 'The witches attack you.  You are Dead.',
        answers: [
            {
                text: 'Roll Boulder',
                nextAnswer: -1
            }
        ]
    }
]

playGame()