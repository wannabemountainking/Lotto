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

function testifyNumbers() {

}

const onSubmit = (event) => {
  event.preventDefault()
  userChoice = $userChoice.value.split(",").map(number => parseInt(number))
  if (testifyNumbers(userChoice)) {
    return userChoice
  } else {
    return []
  }
}

$userChoiceForm.addEventListener("submit", onSubmit)

