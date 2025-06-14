const questions = [
  {
    category: "Politik",
    question: "Was versteht man unter einer deliberativen Demokratie?",
    answers: {
      A: "Eine Form der Demokratie, die auf öffentlicher Diskussion und Argumentation basiert",
      B: "Ein Regierungssystem mit ständigem Volksentscheid",
      C: "Eine besonders schnelle Regierungsform in Krisenzeiten"
    },
    correct: "A"
  },
  {
    category: "Musik",
    question: "Welche Band veröffentlichte das Album „The Wall“?",
    answers: {
      A: "Led Zeppelin",
      B: "Pink Floyd",
      C: "Queen"
    },
    correct: "B"
  },
  {
    category: "80er",
    question: "Welcher dieser Filme stammt aus den 80ern?",
    answers: {
      A: "Pulp Fiction",
      B: "Zurück in die Zukunft",
      C: "Matrix"
    },
    correct: "B"
  }
];

let currentQuestion = 0;

function startQuiz() {
  document.getElementById("start-screen").classList.add("hidden");
  showQuestion();
}

function showQuestion() {
  const question = questions[currentQuestion];
  document.getElementById("question-screen").classList.remove("hidden");
  document.getElementById("question-number").textContent = `Frage ${currentQuestion + 1}`;
  document.getElementById("question-category").textContent = question.category;
  document.getElementById("question-text").textContent = question.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  for (let key in question.answers) {
    const btn = document.createElement("button");
    btn.className = "answer";
    btn.textContent = `${key} ${question.answers[key]}`;
    btn.onclick = () => selectAnswer(key);
    answersDiv.appendChild(btn);
  }

  document.getElementById("progress").textContent = `${currentQuestion + 1}/${questions.length}`;
}

function selectAnswer(selected) {
  // Optional: Feedback / Markierung
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  document.getElementById("question-screen").classList.add("hidden");
  document.getElementById("end-screen").classList.remove("hidden");
}// JavaScript Document
