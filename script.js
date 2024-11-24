const $userChoiceForm = document.querySelector("form#userInput")
const $userChoice = $userChoiceForm.querySelector("#userInput > label > input")
const $computerPick = document.querySelector("div#computerPick div:first-child span")
const $bonusNumber = document.querySelector("div#computerPick div:nth-child(2) span")
const $result = document.querySelector("div#result")

let userChoice = [];
let computerChoice = [];
let bonusNumber = 0;
//숫자 뽑기
let numbers = Array(45)
    .fill(1)
    .map((element, index) =>
    index + element)
console.log(numbers)

// 로또 번호 생성기
function generateLottoNumbers() {
  const nums = new Set();
  while (nums.size < 7) {
    const pickedNumber = Math.floor(Math.random() * 45) + 1;
    nums.add(pickedNumber);

  }
}
// function getLottoNumbers() {
//   const nums = new Set();
//   while (nums.size < 7) {
//     bonusNumber = Math.floor(Mathj.random() * 45) + 1;
//     nums.add(bonusNumber);
//     if (nums.size === 6) {
//       const difference = (arr1, arr2) => {
//         return arr1.filter(x => !arr2.includes(x));
//       };
//       nums = difference(nums, [bonusNumber])
//     }
//   }
//   return Array.from(nums);
// }

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
  computerChoice = i
  $computerPick.textContent = computerChoice

}

const onSubmit = (event) => {
  event.preventDefault()
  userChoice = $userChoice.value.split(",").map(number => (number === "") ? NaN : Number(number))
  if (!testifyInputNumbers(userChoice)) {
    userChoice = []
  }
  $userChoice.value =""
  showComputerPick()

  console.log(userChoice)
  console.log(computerChoice)
}

$userChoiceForm.addEventListener("submit", onSubmit)

