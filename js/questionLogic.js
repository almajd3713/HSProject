
let questions = [
  {
    id: 0,
    question: "Q: what is better, galug or gulag ?",
    answer: ["gaaaaluuuuug !", "gulag fo sho", "kill me", "later"]
  }, {
    id: 1,
    question: "Q: did you ever hear the tragedy of darth plagueis the wise ?",
    answer: ["i thought not", "anakin beste", "naw ibo", "agnulaG"]   
  }
]

let currentQuestion = 0
let questionChange = (id, question, answer) => {
  question.style.opacity = 0
  answer.forEach(ans => ans.style.opacity = 0)
  setTimeout(() => {
    question.textContent = questions.find(q => q.id === id).question
    answer.forEach((ans, i) => {
      ans.textContent = questions.find(q => q.id === id).answer[i]
    })
    question.style.opacity = 1
    answer.forEach(ans => ans.style.opacity = 1)
  }, 500);
}

export default () => {
  let right = document.querySelector(".right")
  let left = document.querySelector(".left")
  let questionBox = document.querySelector(".question")
  let answerBoxes = document.querySelectorAll(".answer")

  questionChange(0, questionBox, answerBoxes)
  left.addEventListener("click", e => {
    if(currentQuestion - 1 > -1) {
      questionChange(currentQuestion - 1, questionBox, answerBoxes)
      currentQuestion -= 1
    } else return false
  })
  right.addEventListener("click", e => {
    if(currentQuestion + 1 !== questions.length) {
      questionChange(currentQuestion + 1, questionBox, answerBoxes)
      currentQuestion += 1
    } else return false
  })
}