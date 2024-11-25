const $userChoiceForm = document.querySelector("form#userInput")
const $userChoice = $userChoiceForm.querySelector("#userInput > label > input")
const $computerPick = document.querySelector("div#computerPick div:first-child span")
const $bonusNumber = document.querySelector("div#computerPick div:nth-child(2) span")
const $result = document.querySelector("div#result")

let userChoice = [];
let computerChoice = [];
let bonusNumber = 0;

// 숫자 섞기: Fisher-Yates 알고리즘
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

//숫자 뽑기
let numbers = Array(45)
    .fill(1)
    .map((element, index) =>
    index + element)

// 로또 번호 생성기
function generateLottoNumbers() {
  const nums = new Set();
  while (nums.size < 7) {
    const pickedNumber = Math.floor(Math.random() * 45) + 1;
    if ((nums.size === 6) && (!nums.has(pickedNumber))) {
      bonusNumber = pickedNumber
      console.log(nums, pickedNumber);
      return Array.from(nums)
    } else {
      nums.add(pickedNumber);
    }
  }
}

function testifyInputNumbers(choice) {
  for (let i = 0; i < choice.length; i++) {
    const arrWithoutIndexI = choice.filter(element => element != choice[i])
    if (isNaN(choice[i])) {
      alert("숫자가 아닌 요소가 있습니다.")
      return false
    }
    if (choice[i] < 1 || choice[i] > 45) {
      alert("숫자가 제한 범위를 벗어났습니다. (제한범위: 1 ~ 45)")
      return false
    }
    if ((choice.length === 6) && (arrWithoutIndexI.length < 5)) {
      alert("중복 숫자가 있습니다.")
      return false
    }
  }
  if (choice.length === 6) {
    return true
  } else {
    alert("6개의 숫자가 제시되지 못했습니다.")
    return false
  }
}

const showComputerPick = () => {
  computerChoice = generateLottoNumbers()
  for (let i = 0; i < computerChoice.length; i++) {
    $computerPick.textContent += computerChoice[i]
  }
}

const onSubmit = (event) => {
  event.preventDefault()
  userChoice = $userChoice.value.split(",").map(number => (number === "") ? NaN : Number(number))
  if (!testifyInputNumbers(userChoice)) {
    userChoice = []
  }
  $userChoice.value =""
  showComputerPick()
}

$userChoiceForm.addEventListener("submit", onSubmit)

