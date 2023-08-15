// Capital city objects
const capitals = [
  { country: "The United States", capital: "Washington DC" },
  { country: "France", capital: "Paris" },
  { country: "Brazil", capital: "Brasilia" },
  { country: "Australia", capital: "Canberra" },
  { country: "Peru", capital: "Lima" },
  { country: "Argentina", capital: "Buenos Aires" },
  { country: "Turkey", capital: "Ankara" },
  { country: "Jordan", capital: "Amman" },
  { country: "South Africa", capital: "Cape Town" },
  { country: "Ghana", capital: "Accra" },
  { country: "Slovakia", capital: "Bratislava" },
  { country: "Nigeria", capital: "Lagos" },
  { country: "Syria", capital: "Damascus" },
  { country: "England", capital: "London" },
  { country: "Italy", capital: "Rome" },
  { country: "Portugal", capital: "Lisbon" },
  { country: "Germany", capital: "Berlin" },
  { country: "India", capital: "New Delhi" },
];

// Class
class CapitalGuessingGame {
  constructor(capitals) {
    this.capitals = capitals;
    this.score = 0;

    // DOM ELEMENTS
    this.currentQuestionIndex = 0;
    this.incorrectAnswers = 0;
    this.questionElement = document.getElementById("question");
    this.answerInputElement = document.getElementById("answerInput");
    this.scoreElement = document.getElementById("score");
    this.endScreenScore = document.getElementById("scoreDisplay");
    this.submitButton = document.getElementById("submitBtn");
    this.welcomeScreen = document.getElementById("welcomeScreen");
    this.endScreen = document.getElementById("endScreen");
    this.container = document.getElementById("container");
    this.startButton = document.getElementById("startButton");
    this.answerContainer = document.getElementById("answer-container");
    this.nextButton = document.getElementById("next-button");
    this.neweElement = document.createElement("img");
    this.divContainer = document.getElementById("image-container");
    this.GameOver = document.getElementById("game-over");
    this.questionNumber = document.getElementById("question-number");

    //Appending image element
    this.divContainer.appendChild(this.neweElement);

    /*     this.submitButton.addEventListener("click", () => this.checkAnswer());
        this.startButton.addEventListener("click", () => this.startGame());
        this.nextButton.addEventListener("click", () =>
          this.navigateNextQeustion()
        );
        this.renderWelcomeScreen();
        this.renderQuestion(); */
    this.renderQuestion();
  }

  startGame() {
    this.welcomeScreen.style.display = "none";
    this.container.style.display = "block";
    // this.submitButton.addEventListener("click", () => this.checkAnswer());
  }

  renderQuestion() {
    this.questionElement.textContent = `What is the capital of ${
      this.capitals[this.currentQuestionIndex].country
    }?`;
    this.questionElement.classList.add("heading");
    this.answerInputElement.value = "";
    this.neweElement.src = `images/${this.currentQuestionIndex}.jpeg`;
    this.questionNumber.textContent = `${this.currentQuestionIndex + 1}/18`;
  }

  checkAnswer() {
    const userAnswer = this.answerInputElement.value;
    const correctAnswer = this.capitals[this.currentQuestionIndex].capital;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      this.score++;
      this.endScreenScore.innerHTML = this.score;
      this.answerContainer.innerHTML = "Correct Answer!🎉";
    } else {
      this.incorrectAnswers++;
      this.answerContainer.innerHTML = `Wrong answer! The correct answer is ${correctAnswer}.`;

      if (this.incorrectAnswers === 4) {
        this.GameOver.innerHTML = `You suck at Geography 🤣. Game over!`;
        this.submitButton.disabled = true;
        this.endScreen.style.display = "block";
        this.container.style.display = "none";

        return;
      }

      /*if (this.score >= 9) {
            alert("You're almost a pro at Geography.");
            this.submitButton.disabled = true;
            return;
          } */
    }

    if (this.currentQuestionIndex === this.capitals.length) {
      alert(`Game over! Your score is ${this.score}/${this.capitals.length}`);
      this.submitButton.disabled = true;
    }
    this.scoreElement.textContent = `Score: ${this.score}`;
  }
  navigateNextQeustion() {
    this.currentQuestionIndex++;
    this.renderQuestion();
  }
}

// instance of the game
const game = new CapitalGuessingGame(capitals);

const submitButton = document.getElementById("submitBtn");
const startButton = document.getElementById("startButton");
const nextButton = document.getElementById("next-button");

// Event listeners
startButton.addEventListener("click", () => {
  game.startGame();
});

submitButton.addEventListener("click", () => {
  game.checkAnswer();
  game.answerContainer.style.display = "block";
  game.submitButton.style.display = "none";
  game.nextButton.style.display = "block";
});

nextButton.addEventListener("click", () => {
  game.navigateNextQeustion();
  game.submitButton.style.display = "block";
  game.nextButton.style.display = "none";
  game.answerContainer.style.display = "none";
});
