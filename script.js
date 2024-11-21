const $userChoiceForm = document.querySelector("form#userInput")
const $userChoice = $userChoiceForm.querySelector("input")
const $computerPick = document.querySelector("div#computerPick div:first-child span")
const $bonusNumber = document.querySelector("div#computerPick div:nth-child(2) span")
const $result = document.querySelector("div#result")

let userChoice = [];
let computerChoice = [];
//숫자 뽑기
let numbers = Array(45)
    .fill(1)
    .map((element, index) =>
    index + element)
console.log(numbers)

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const computerPickAmongNumbers = () => {
  for (let i = 1; i <= 6; i++) {
    let randomPickedNum = numbers.splice(getRandomInt(0, numbers.length), 1)[0]
    computerChoice.push(randomPickedNum)
  }
  return [computerChoice, numbers];
}

function testifyInputNumbers(choice) {
  for (let i = 0; i < choice.length; i++) {
    const arrWithoutIndexI = choice.filter(element => element != choice[i])
    if (isNaN(choice[i])) {
      return false
    }
    if (choice[i] < 1 || choice[i] > 45) {
      return false
    }
    if (arrWithoutIndexI.length < 5) {
      return false
    }
  }
  return (choice.length === 6)
}

const onSubmit = (event) => {
  event.preventDefault()
  userChoice = $userChoice.value.split(",").map(number => (number === "") ? NaN : Number(number))
  if (!testifyInputNumbers(userChoice)) {
    userChoice = []
  }
}

$userChoiceForm.addEventListener("submit", onSubmit)

