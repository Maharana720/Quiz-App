/* Develop By Soumya Ranjan Maharana*/
list_questions = [
  {
    question: "Who is the  chairman of Lit?",
    answers: [
      "A. Captain Segun",
      "B. Bola Tinubu",            /*The option will be written in the Array Index So it stands form 0 index.*/
      "C. Susant.K.Rout",
      "D. Olajide Wealth",
    ],
    correct: 2,             /* For option A array index is 0,For B index is 1 continuee.....*/
  },
  {
    question: "What is the color of the sky?",
    answers: ["A. White", "B. Black", "C. Orange", "D. Blue"],
    correct: 3,
  },
  {
    question: "Choose the option below which is not a member of class",
    answers: ["A. Friend function",  "B. Static function",  "C. Virtual function",  "D. None"],
    correct: 0,
  },
  {
    question: "By using whcih key word we define a function in python",
    answers: ["A. Fun","B. DEF", "C. def", "D. None"],
    correct: 2,
  },
  {
    question: "Which operator is support by Python",
    answers: ["in", "all", "any", "None"],
    correct: 2,
  },
  {
    question:"which operator is used to search element in a collection",
    answer:["in","is","lambda","exponential"],
    correct:0,
  }
  
];

const container = document.getElementById("container");
const quizLength = document.getElementById("quiz-length");
const scores = document.getElementById("score");
const scoreText = document.querySelector(".score-text");

// Creating the question box
const questionBox = document.createElement("div");
questionBox.className = "question-box";

// Creating children of question box
const question = document.createElement("h2");
question.id = "question";
const options = document.createElement("div");
options.id = "options";
const nextBtn = document.createElement("button");
nextBtn.className = "next";
nextBtn.textContent = "Next";

// Creating children of options
const ans1 = document.createElement("button");
const ans2 = document.createElement("button");
const ans3 = document.createElement("button");
const ans4 = document.createElement("button");

const answerBtns = [ans1, ans2, ans3, ans4]; // Stored all variable in a declared variable

// Add class question box to container
container.appendChild(questionBox);

// Added the created children to question box
questionBox.appendChild(question);
questionBox.appendChild(options);
questionBox.appendChild(nextBtn);

// Added the answers to the options
options.appendChild(ans1);
options.appendChild(ans2);
options.appendChild(ans3);
options.appendChild(ans4);

let counter = 0;
let score = 0;
let answerSelected = false;

function quiizer() {
  if (counter >= list_questions.length) {
    // Handle end of quiz
    question.innerHTML = `Quiz completed! <br><br> You score ${score} of ${list_questions.length} Questions`;
    question.style.textAlign = "center";
    options.innerHTML = "";
    quizLength.innerHTML = "";
    scoreText.innerHTML = "";
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "block";
  }

  question.innerHTML = list_questions[counter].question;
  const answers = list_questions[counter].answers;

  for (let i = 0; i < answerBtns.length; i++) {
    answerBtns[i].innerHTML = answers[i];
    answerBtns[i].value = i;

    answerBtns[i].disabled = false;
    answerBtns[i].className = "btn";
  }

  quizLength.innerHTML = counter + 1 + " of " + list_questions.length;
}

function check_correct() {
  // if (answerSelected) return;

  nextBtn.style.display = "none";

  answerBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (answerSelected) return; // This is to prevent Multiple Clicks

      answerSelected = true;

      const selectedValue = parseInt(btn.value); //Created to make comparism so as to update the score
      const correctValue = list_questions[counter].correct;

      if (selectedValue === correctValue) {
        score++;
        scores.textContent = score;
        btn.className = "btn correct-ans"; // alternatively btn.classList.add(correct-ans)
      } else {
        btn.className = "btn wrong-ans";
        answerBtns[correctValue].className = "btn correct-ans";
      }

      for (let i = 0; i < answerBtns.length; i++) {
        if (i !== selectedValue) {
          answerBtns[i].disabled = true;
        }
      }
      //                  OR

      //      answerBtns.forEach((btn, i) => {
      //         if (i !== selectedValue) {
      //           btn.disabled = true;
      //         }
      //       });

      nextBtn.style.display = "block";
    });
  });
}

nextBtn.addEventListener("click", function () {
  counter = counter + 1; // Increment counter and handle end of quiz
  answerSelected = false;
  quiizer();
  check_correct();
});

quiizer();
check_correct();
