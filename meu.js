const questions = [
    {
        question: "Qual é a montadora do carro Mustang?",
        options: ["Ford", "Chevrolet", "Toyota", "Honda"],
        correctAnswer: "Ford"
    },
    {
        question: "Em que ano foi lançado o modelo Volkswagen Fusca?",
        options: ["1950", "1965", "1972", "1980"],
        correctAnswer: "1965"
    },
    {
        question: "Qual é o carro mais vendido do mundo?",
        options: ["Toyota Corolla", "Volkswagen Golf", "Ford F-Series", "Chevrolet Silverado"],
        correctAnswer: "Toyota Corolla"
    },
    {
        question: "Qual é o país de origem da Ferrari?",
        options: ["Itália", "Alemanha", "Estados Unidos", "França"],
        correctAnswer: "Itália"
    },
    {
        question: "Qual é o nome do SUV compacto da BMW?",
        options: ["X3", "Civic", "Rav4", "Golf"],
        correctAnswer: "X3"
    },
    {
        question: "Qual é o modelo mais vendido da Honda?",
        options: ["Civic", "Accord", "Fit", "CR-V"],
        correctAnswer: "Civic"
    },
    {
        question: "Quem é o fundador da Tesla Motors?",
        options: ["Elon Musk", "Bill Gates", "Mark Zuckerberg", "Jeff Bezos"],
        correctAnswer: "Elon Musk"
    },
    {
        question: "Qual é o modelo esportivo da Chevrolet conhecido como 'muscle car'?",
        options: ["Camaro", "Malibu", "Impala", "Equinox"],
        correctAnswer: "Camaro"
    },
    {
        question: "Qual é o carro mais rápido do mundo?",
        options: ["Bugatti Veyron", "Hennessey Venom F5", "Koenigsegg Jesko", "SSC Tuatara"],
        correctAnswer: "SSC Tuatara"
    },
    {
        question: "Quantas estrelas tem o logotipo da Mercedes-Benz?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "3"
    }
];

let currentQuestion = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");

    questionElement.textContent = questions[currentQuestion].question;

    optionsContainer.innerHTML = "";

    questions[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "option";
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    if (selectedOption === correctAnswer) {
        alert("Resposta correta!");
    } else {
        alert(`Resposta incorreta! A resposta correta é: ${correctAnswer}`);
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz concluído. Parabéns!");
        resetQuiz();
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz concluído. Parabéns!");
        resetQuiz();
    }
}

function resetQuiz() {
    currentQuestion = 0;
    loadQuestion();
}
//////////separar pq o meu cerebro ta fritando prof/////////

let correctAnswers = 0;
let incorrectAnswers = 0;

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    if (selectedOption === correctAnswer) {
        alert("Resposta correta!");
        correctAnswers++;
    } else {
        alert(`Resposta incorreta! A resposta correta é: ${correctAnswer}`);
        incorrectAnswers++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    alert(`Quiz concluído. Parabéns!\nRespostas Corretas: ${correctAnswers}\nRespostas Incorretas: ${incorrectAnswers}`);
    resetQuiz();
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    loadQuestion();
}