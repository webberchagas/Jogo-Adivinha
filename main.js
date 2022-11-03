// Variáveis
const screen1 =  document.querySelector(".screen1")
const screen2 =  document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let randomNumber = calculatorRandomNumber()
let xAttempts = 1

// Eventos
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", function(e) {
  if(e.key == "Enter" && screen1.classList.contains('hide')){
    handleResetClick()
  }
})

// Funções 

function handleTryClick(e){
  e.preventDefault()

  let inputNumber = document.querySelector("#inNumber")
  
  if(Number(inputNumber.value) == randomNumber){
    toggleScreen()
    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`
  }
  
  inputNumber.value = ""
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = calculatorRandomNumber()
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function calculatorRandomNumber(){
  let result = Math.round(Math.random() * 10)
  return result
}