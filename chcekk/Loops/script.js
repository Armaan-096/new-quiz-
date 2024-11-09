const questions = [
    {
        question: "1. Which loop is best when you know the exact number of times to repeat?",
        answers: ["for loop", "while loop", "do...while loop", "for...in loop"],
        correct: 0
    },
    {
        question: "2. Which loop repeats as long as a condition is true, checking the condition at the start each time?",
        answers: ["for loop", "while loop", "do...while loop", "for...of loop"],
        correct: 1
    },
    {
        question: "3. Which loop will always run the code inside at least once, even if the condition is false?",
        answers: ["for loop", "while loop", "do...while loop", "for...in loop"],
        correct: 2
    },
    {
        question: "4. Which loop is used to go through each property in an object?",
        answers: ["for loop", "while loop", "do...while loop", "for...in loop"],
        correct: 3
    },
    {
        question: "5. Which loop is used to go through each item in an array or string?",
        answers: ["for...of loop", "for...in loop", "while loop", "do...while loop"],
        correct: 0
    },
    {
        question: "6. Which loop will stop running when a condition becomes false?",
        answers: ["for loop", "while loop", "do...while loop", "all of them"],
        correct: 3
    },
    {
        question: "7. In a for loop, what part decides how many times the loop runs?",
        answers: ["Initialization", "Condition", "Update", "All of these"],
        correct: 3
    },
    {
        question: "8. Which loop will always run the code inside at least one time?",
        answers: ["for loop", "while loop", "do...while loop", "for...of loop"],
        correct: 2
    },
    {
        question: "9. Which loop is often used to go through every item in an array?",
        answers: ["for loop", "while loop", "do...while loop", "for...of loop"],
        correct: 3
    },    
    {
        question: "10. What will the following code output?\n\n`for (let i = 0; i < 3; i++) { console.log(i); }`",
        answers: ["0, 1, 2", "1, 2, 3", "0, 1, 2, 3", "1, 2"],
        correct: 0
    },
    {
        question: "11. What will the following code output?\n\n`for (let i = 1; i <= 3; i++) { console.log(i); }`",
        answers: ["1, 2, 3", "1, 2, 3, 4", "0, 1, 2", "Error"],
        correct: 0
    },
    {
        question: "12. What will the following code output?\n\n`let i = 5;\nwhile (i > 2) {\n  console.log(i);\n  i--;\n}`",
        answers: ["5, 4, 3", "5, 4, 3, 2", "5, 4, 3, 2, 1", "Error"],
        correct: 0
    },
    {
        question: "13. How many types of loops are there in JavaScript?",
        answers: ["3", "4", "5", "6"],
        correct: 2
    },
    {
        question: "14. Do all programming languages have loops?",
        answers: ["Yes", "No", "Some do", "Depends on the language"],
        correct: 0
    },
    {
        question: "15. The JavaScript `for...in` statement loops through the properties of which type of data?",
        answers: ["Object", "Array", "Function", "None of these"],
        correct: 0
    },
    {
        question: "16. What does the `while` loop do in JavaScript?",
        answers: ["Loops through a block of code while a condition is false", "Loops through a block of code while a condition is true", "Loops through the code exactly 5 times", "Loops indefinitely"],
        correct: 1
    },
    {
        question: "17. In a `while` loop, what happens if the condition is never false?",
        answers: ["The loop runs once", "The loop runs infinitely", "The loop stops immediately", "The loop runs a specific number of times"],
        correct: 1
    },
    {
        question: "18. The `for...in` loop is used to iterate over the elements of an array.",
        answers: ["True", "False"],
        correct: 1
    },
    {
        question: "19. The `for...of` loop is used to iterate over the properties of an object.",
        answers: ["True", "False"],
        correct: 1
    },
    {
        question: "20. The `for...of` loop is generally used for iterating over values of an array.",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "21. In a `for...in` loop, the variable represents the values of an object.",
        answers: ["True", "False"],
        correct: 1
    },
    {
        question: "22. A `for...of` loop can be used to iterate over the characters in a string.",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "23. What does the `for...in` loop iterate over in an object?",
        answers: ["Values", "Keys", "Both Keys and Values", "None of these"],
        correct: 1
    },
    {
        question: "24. Can the `for...in` loop be used to iterate over an array’s values directly?",
        answers: ["Yes", "No", "Only in objects", "Not for arrays"],
        correct: 1
    },
    {
        question: "How can a loop be used in a music player application?",
        answers: ["To play songs in a playlist sequentially","To update the progress bar while the song plays","To repeat a song once it finishes","All of the above"],
        correct: 3
    }
           
];

let currentQuestion = 0;
const answersState = Array(questions.length).fill(null); // null = not attempted
let startTime = Date.now();
let timeLeft = 20 * 60; // 30 minutes in seconds
const timerElement = document.getElementById('timer');
const progressBar = document.getElementById('progress-bar');

// Timer function
const countdown = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerElement.textContent = `Time left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timeLeft--;
    if (timeLeft < 0) {
        clearInterval(countdown);
        submitQuiz(); // Automatically submit the quiz when time's up
    }
}, 1000);

// Create question boxes
const questionBox = document.getElementById('question-box');
for (let i = 0; i < questions.length; i++) {
    const questionDiv = document.createElement('div');
    questionDiv.textContent = i + 1;
    questionDiv.classList.add('question-status');
    questionDiv.onclick = () => goToQuestion(i);
    questionBox.appendChild(questionDiv);
}

function updateQuestionBox() {
    const questionStatus = document.querySelectorAll('.question-status');
    questionStatus.forEach((box, index) => {
        box.classList.remove('current', 'answered', 'skipped');
        if (answersState[index] === null) {
            if (index === currentQuestion) {
                box.classList.add('current');
            }
        } else if (answersState[index] === false) {
            box.classList.add('skipped');
        } else {
            box.classList.add('answered'); // Mark as answered without color
        }
    });

    updateProgressBar();
}

function updateProgressBar() {
    const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

function displayQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question').textContent = question.question;
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = index;
        input.checked = answersState[currentQuestion] === index;
        label.appendChild(input);
        label.appendChild(document.createTextNode(answer));
        answersDiv.appendChild(label);
    });

    document.getElementById('next').style.display = currentQuestion === questions.length - 1 ? 'none' : 'inline-block';
    document.getElementById('submit').style.display = currentQuestion === questions.length - 1 ? 'inline-block' : 'none';
}

function goToQuestion(index) {
    saveAnswer();
    currentQuestion = index;
    displayQuestion();
    updateQuestionBox();
}

function saveAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        answersState[currentQuestion] = parseInt(selectedAnswer.value);
    } else {
        answersState[currentQuestion] = false; // Mark as skipped if no answer selected
    }
}

function nextQuestion() {
    saveAnswer();
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
    }
    displayQuestion();
    updateQuestionBox();
}

function prevQuestion() {
    saveAnswer();
    if (currentQuestion > 0) {
        currentQuestion--;
    }
    displayQuestion();
    updateQuestionBox();
}

function submitQuiz() {
    saveAnswer(); // Save last answer
    let score = 0;
    let attempted = 0;
    let skipped = 0;

    questions.forEach((question, index) => {
        const questionDiv = document.querySelector(`#question-box .question-status:nth-child(${index + 1})`);
        const modalQuestionDiv = document.querySelector(`#question-box-modal .question-box-modal-item:nth-child(${index + 1})`);

        if (answersState[index] !== null) {
            attempted++;
            if (answersState[index] === question.correct) {
                score++;
                modalQuestionDiv.style.backgroundColor = '#b4d6fc';
            } else {
                modalQuestionDiv.style.backgroundColor = '#ffc355';
            }
            modalQuestionDiv.onclick = () => showPopover(index); // Show popover on click
        } else {
            skipped++;
        }
    });

    const endTime = Date.now();
    const timeTaken = Math.floor((endTime - startTime) / 1000); // Time taken in seconds
    const minutesTaken = Math.floor(timeTaken / 60);
    const secondsTaken = timeTaken % 60;

    document.getElementById('attempted').textContent = attempted;
    document.getElementById('skipped').textContent = skipped;
    document.getElementById('correct').textContent = score;
    document.getElementById('time-taken').textContent = `${minutesTaken}m ${secondsTaken}s`;
    document.getElementById('final-score').textContent = `You have scored ${score} out of ${questions.length}.`;

    showModal();
}

// Show modal
function showModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Initialize the first question
displayQuestion();
updateQuestionBox();

// Create question boxes for modal
function createQuestionBoxes() {
    const questionBoxModal = document.getElementById('question-box-modal');

    for (let i = 1; i <= questions.length; i++) {
        const questionDiv = document.createElement('div');
        questionDiv.textContent = `${i}`;
        questionDiv.classList.add('question-box-modal-item');
        questionBoxModal.appendChild(questionDiv);
    }
}

// Call the function to create question boxes
createQuestionBoxes();

// Popover functionality
function showPopover(index) {
    const popover = document.getElementById('popover');
    const question = questions[index];
    const submittedAnswerIndex = answersState[index];
    const correctAnswerIndex = question.correct;

    document.getElementById('popover-question').textContent = question.question;
    const submittedAnswerElement = document.getElementById('popover-submitted-answer');
    const correctAnswerElement = document.getElementById('popover-correct-answer');

    submittedAnswerElement.textContent = question.answers[submittedAnswerIndex];
    correctAnswerElement.textContent = question.answers[correctAnswerIndex];

    if (submittedAnswerIndex === correctAnswerIndex) {
        submittedAnswerElement.style.color = 'green';
    } else {
        submittedAnswerElement.style.color = 'red';
    }
    correctAnswerElement.style.color = 'green';

    popover.style.display = 'block';
    // popover.style.top = `${event.clientY}px`;
    // popover.style.left = `${event.clientX}px`;
}

// Close the popover
function closePopover() {
    document.getElementById('popover').style.display = 'none';
}
