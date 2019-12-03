const question = document.getElementById("question");
const choices = Array.from
(document.getElementsByClassName("choice-text"));
const displayQueCount = document.getElementById("displayQueCount");
const displayScore = document.getElementById("displayScore");

let currentQue = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQue = [];

let questions = [
  {
    question: "question 1",
    choice1: "question 1",
    choice2: "question 1",
    choice3: "question 1",
    choice4: "question 1",
    answer: 1,
  },
  {
    question: "question 2",
    choice1: "question 2",
    choice2: "question 2",
    choice3: "question 2",
    choice4: "question 2",
    answer: 2,
  },
  {
    question: "question 3",
    choice1: "question 3",
    choice2: "question 3",
    choice3: "question 3",
    choice4: "question 3",
    answer: 3,
  }
];

const correct_bonus = 10;
const max_que = 3;

  startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQue = [...questions];
    // console.log(availableQue);
    getNewQue();
  }

  getNewQue = () => {

    if(availableQue.length === 0 || questionCounter >= max_que){
      localStorage.setItem("mostRecentScore", score);
      return window.location.assign("/end.html");
    }

    questionCounter++;

    displayQueCount.innerText = `${questionCounter}/${max_que}`;

    const questionIndex = Math.floor(Math.random() * availableQue.length);

    currentQue = availableQue[questionIndex];
    question.innerText = currentQue.question;

    choices.forEach( choice => {
      const number = choice.dataset["number"];
      choice.innerText = currentQue["choice" + number];
    });

    availableQue.splice(questionIndex, 1);

    acceptingAnswers = true;
    
  }

  choices.forEach(choice => {
    choice.addEventListener("click", e => {
      if(!acceptingAnswers) return;

      acceptingAnswers = false;

      const selectedChoice = e.target;
      const selectedAnswer = selectedChoice.dataset["number"];
      
      // console.log(selectedAnswer == currentQue.answer);

      const classToApply = selectedAnswer == currentQue.answer ? "correct" : "incorrect";

      if(classToApply === "correct"){
        incrementScore(correct_bonus);
      } else{
        incrementScore(0);
      }

      selectedChoice.parentElement.classList.add(classToApply);      

      setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);     
        getNewQue();   
      }, 1000);

      
    });
  })

  incrementScore = num =>{
    score += num;
    displayScore.innerText = score;
  }

  

startGame();