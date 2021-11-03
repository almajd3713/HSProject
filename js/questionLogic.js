
let questions = [
  {
    id: 0,
    question: "Q: Which of the follwing may lead to CP ?",
    answer: ["Breaking a Bone", "Encephalitis", "Fever", "Arthrites"],
    right: "Encephalitis"
  }, {
    id: 1,
    question: "Q: Which of the following is NOT a treatment for CP ?",
    answer: ["Physical Therapy", "Injections", "Using Glasses", "Surgery"],
    right: "Using Glasses"  
  }, {
    id: 2,
    question: "Q: What parts of the body are NOT affected by CP ?",
    answer: ["Lungs", "Hands", "Brain", "Joints"],
    right: "Lungs"
  }, {
    id: 3,
    question: "Q: How should we react if we learned that someone close has the disease ?",
    answer: ["Isolate them and call 998", "Advice them to seek medical attention", "Give them Injections", "Forget it because it'll be gone in a few days"],
    right: "Advice them to seek medical attention"
  }
]

let currentQuestion = 0
let questionChange = (id, question, answer) => {
  question.style.opacity = 0
  answer.forEach(ans => {ans.style.opacity = 0; ans.style.backgroundColor = "#6f64be";})
  setTimeout(() => {
    question.textContent = questions.find(q => q.id === id).question
    answer.forEach((ans, i) => {
      ans.textContent = questions.find(q => q.id === id).answer[i]
    })
    question.style.opacity = 1
    answer.forEach(ans => { ans.style.opacity = 1})
  }, 500);
}

let answerPicker = (boxes, answer) => {
  boxes.forEach(box => {
    box.addEventListener("click", () => {
      boxes.forEach(box2 => {
        if(box2.textContent === answer) {
          box2.style.backgroundColor = "green"
        }
        else box2.style.backgroundColor = "red"
      })
    })
  })
}

export default () => {
  let right = document.querySelector(".right")
  let left = document.querySelector(".left")
  let questionBox = document.querySelector(".question")
  let answerBoxes = document.querySelectorAll(".answer")

  questionChange(0, questionBox, answerBoxes)
  answerPicker(answerBoxes, questions[currentQuestion].right)
  left.addEventListener("click", e => {
    if(currentQuestion - 1 > -1) {
      questionChange(currentQuestion - 1, questionBox, answerBoxes)
      currentQuestion -= 1
      answerPicker(answerBoxes, questions[currentQuestion].right)
    } else return false
  })
  right.addEventListener("click", e => {
    if(currentQuestion + 1 !== questions.length) {
      questionChange(currentQuestion + 1, questionBox, answerBoxes)
      currentQuestion += 1
      answerPicker(answerBoxes, questions[currentQuestion].right)
    } else return false
  })
}