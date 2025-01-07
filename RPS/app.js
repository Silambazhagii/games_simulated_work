const ComputerC = document.getElementById('computer');
const UserC = document.getElementById('user');
const results = document.getElementById('result')
const Choices = document.querySelectorAll('button')

let ComputerChoice;
let UserChoice;
let result;

  Choices.forEach(Choice => Choice.addEventListener('click', (e) =>{
    UserChoice = e.target.id;
    UserC.innerHTML = UserChoice;
    generateChoices()
    getResult()
  }))

function generateChoices(){
    const randomNumber = Math.floor(Math.random() * 3) + 1
  
    if (randomNumber === 1) {
      ComputerChoice = 'rock'
    }
    if (randomNumber === 2) {
      ComputerChoice = 'scissors'
    }
    if (randomNumber === 3) {
      ComputerChoice = 'paper'
    }
    ComputerC.innerHTML = ComputerChoice
}

function getResult() {
    if (ComputerChoice === UserChoice) {
      result = 'its a draw!'
    }
    if (ComputerChoice === 'rock' && UserChoice === "paper") {
      result = 'you win!'
    }
    if (ComputerChoice === 'rock' && UserChoice === "scissors") {
      result = 'you lost!'
    }
    if (ComputerChoice === 'paper' && UserChoice === "scissors") {
      result = 'you win!'
    }
    if (ComputerChoice === 'paper' && UserChoice === "rock") {
      result = 'you lose!'
    }
    if (ComputerChoice === 'scissors' && UserChoice === "rock") {
      result = 'you win!'
    }
    if (ComputerChoice === 'scissors' && UserChoice === "paper") {
      result = 'you lose!'
    }
    results.innerHTML = result
  }