const questions = [
    {
        question: "1. What is a function in JavaScript?",
        answers: ["A block of code that performs a specific task", "A loop that repeats code", "An object method", "A conditional statement"],
        correct: 0
    },
    {
        question: "2. Which keyword is used to declare a function in JavaScript?",
        answers: ["function", "var", "const", "let"],
        correct: 0
    },
    {
        question: "3. How do you call a function in JavaScript?",
        answers: ["functionName()", "call functionName()", "invoke functionName()", "None of the above"],
        correct: 0
    },
    {
        question: "4. Can a function return multiple values?",
        answers: ["Yes, using an object or array", "No, a function can only return one value", "Yes, but only through parameters", "Yes, if the function is asynchronous"],
        correct: 0
    },
    {
        question: "5. Which of the following is the correct syntax for a function declaration?",
        answers: ["function myFunction()", "myFunction function()", "function: myFunction()", "function = myFunction()"],
        correct: 0
    },
    {
        question: "6. What is a parameter in a function?",
        answers: ["A variable used inside the function", "A value passed into a function", "A function inside another function", "A return value of a function"],
        correct: 1
    },
    {
        question: "7. Can a function have multiple parameters?",
        answers: ["Yes", "No", "Only one", "Only two"],
        correct: 0
    },
    {
        question: "8. What happens if a function is called without passing parameters?",
        answers: ["It returns undefined", "It throws an error", "It uses default values for parameters", "It does nothing"],
        correct: 2
    },
    {
        question: "9. How do you define a function with parameters in JavaScript?",
        answers: ["function functionName(parameter1, parameter2) {}", "function functionName() {parameter1, parameter2}", "functionName(parameter1, parameter2) {}", "function functionName() { parameter1, parameter2 }"],
        correct: 0
    },
    {
        question: "10. Can parameters in a function be optional?",
        answers: ["Yes, by assigning default values", "No, parameters must always be provided", "Yes, but only in arrow functions", "Yes, if the function is a constructor"],
        correct: 0
    },
    {
        question: "11. Which of the following is a correct way to pass parameters to a function?",
        answers: ["myFunction(value1, value2)", "myFunction(value1: value2)", "functionName(value1 => value2)", "None of the above"],
        correct: 0
    },
    {
        question: "12. What happens if a function parameter is not provided when calling the function?",
        answers: ["It gets the value undefined", "It throws an error", "The function won't execute", "It defaults to null"],
        correct: 0
    },
    {
        question: "13. What does the `return` statement do in a function?",
        answers: ["It stops the function execution and gives a value back", "It stops the function execution", "It starts a new loop", "It resets the function"],
        correct: 0
    },
    {
        question: "14. Can a function return another function?",
        answers: ["Yes", "No", "Only in arrow functions", "Only in anonymous functions"],
        correct: 0
    },
    {
        question: "15. Are functions important in JavaScript?",
        answers: ["Yes", "No", "Sometimes", "Only for large projects"],
        correct: 0
    },
    {
        question: "16. Why are functions important in JavaScript?",
        answers: ["They allow us to reuse code", "They help organize code", "They make code easier to understand", "All of the above"],
        correct: 3
    },
    {
        question: "17. What is a function declaration in JavaScript?",
        answers: ["A way to define a function", "A way to call a function", "A way to store data", "A way to repeat a code"],
        correct: 0
    },
    {
        question: "18. What is function invocation in JavaScript?",
        answers: ["The process of calling or executing a function", "The process of defining a function", "The process of writing a function", "The process of storing a function"],
        correct: 0
    },
    {
        question: "19. What is an object in JavaScript?",
        answers: ["A collection of key-value pairs", "A type of loop", "A data type for numbers", "A function"],
        correct: 0
    },
    {
        question: "20. How do you access the properties of an object in JavaScript?",
        answers: ["Using square brackets []", "Using dot notation .", "Both A and B", "Using the for loop"],
        correct: 2
    },
    {
        question: "21. Can an object in JavaScript store multiple data types?",
        answers: ["Yes", "No", "Only strings", "Only numbers"],
        correct: 0
    },
    {
        question: "22. Which of the following is a valid way to define an object in JavaScript?",
        answers: ["var obj = { name: 'John', age: 30 }", "var obj = (name: 'John', age: 30)", "var obj = [name, age]", "var obj = 'John, 30'"],
        correct: 0
    },
    {
        question: "23. Can an object in JavaScript have functions as its properties?",
        answers: ["Yes", "No", "Only if the function is named", "Only in certain conditions"],
        correct: 0
    },
    {
        question: "24. What is the primary use of `{}` (curly braces) in JavaScript?",
        answers: ["Defining functions", "Creating code blocks and objects", "Defining arrays", "Accessing properties of an array"],
        correct: 1
    },
    {
        question: "25. What do `[]` (square brackets) represent in JavaScript?",
        answers: ["Code blocks", "Arrays and array indexing", "Functions", "Loops"],
        correct: 1
    },
    {
        question: "26. How can you access the property name` from an object ..person = {name: 'John', age: 30}`?",
        answers: ["person.name", "person['name']", "both of the above", "person.get('name')"],
        correct: 2
    },
    {
        question: "27. What is the correct way to access the property `age` in the object `person = {name: 'Alice', age: 25}` using bracket notation?",
        answers: ["person.age", "person['age']", "person.get('age')", "person['Alice']"],
        correct: 1
    },
    {
        question: "28. Why are objects considered the most important concept in JavaScript?",
        answers: ["Objects store key-value pairs which are essential for most tasks in JavaScript", "Objects are not important in JavaScript", "JavaScript does not support objects", "Objects are only used for styling HTML elements"],
        correct: 0
    },
    {
        question: "29. In JavaScript, an object is a collection of which of the following?",
        answers: ["Values", "Properties", "Functions", "Arrays"],
        correct: 1
    },
    {
        question: "30. Can you add new properties to an existing JavaScript object?",
        answers: ["Yes, by using dot notation", "No", "No, properties cannot be added", "Never"],
        correct: 0
    },
    {
        question: "31. Can object properties be deleted in JavaScript?",
        answers: ["Yes, using the delete operator", "No, object properties are immutable", "Yes, but only read-only properties", "Yes, but only in arrays"],
        correct: 0
    },
    {
        question: "32. Which of the following is true about JavaScript object properties?",
        answers: ["They are always in alphabetical ordered", "They can be changed, added, or deleted", "They cannot be modified after creation", "They can only store numbers"],
        correct: 1
    },
    {
        question: "33. What is a nested object in JavaScript?",
        answers: ["An object inside another object", "An array inside an object", "An object with no properties", "A function inside an object"],
        correct: 0
    },
    {
        question: "34. How do you access a property of a nested object in JavaScript?",
        answers: ["object.property.subproperty", "object[subproperty].property", "object.property.subproperty()", "You cannot access nested object properties"],
        correct: 0
    },
    {
        question: "35. Given the object `person = {name: 'John', address: {city: 'New York', zip: '10001'}}`, how would you access the `city` value?",
        answers: ["person.address.city", "person = city", "none of the above", "person.city"],
        correct: 0
    },
    {
        question: "36. Object methods are actions that can be performed on objects.",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "37. The `this` keyword refers to the object that is executing the current piece of code in JavaScript.",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "38. How can you display an object's properties in JavaScript?",
        answers: ["Using console.log()", "Using document.write()", "By accessing each property individually", "All of the above"],
        correct: 3
    },
    {
        question: "39. What will the following code output: `console.log(Object.keys({name: 'Alice', age: 25}))`?",
        answers: ["['name', 'age']", "['Alice', 25]", "['name', 'Alice', 'age', 25]", "undefined"],
        correct: 0
    },
    {
        question: "40. What is the purpose of the `new` keyword in JavaScript?",
        answers: ["To create a new object from a constructor function", "To create a new function", "To call an existing method", "To define a new variable"],
        correct: 0
    },
    {
        question: "41. How do you define an empty object in JavaScript?",
        answers: ["let obj = [];", "let obj = {};","let obj = new Object();", "let obj = null;"],
        correct: 1
    },
    {
        question: "42. Can an object have properties with the same name?",
        answers: ["Yes", "No", "It depends on the browser", "Only in strict mode"],
        correct: 1
    },
    {
        question: "43. What will `delete object.property` do?",
        answers: ["Remove the property", "Change the property value", "Print the property value", "None of the above"],
        correct: 0
    },
    {
        question: "44. What does the `Object.keys()` method return?",
        answers: ["The values of an object", "The properties of an object", "A string representation of the object", "An array of the object"],
        correct: 1
    },
    {
        question: "45. Can an object in JavaScript store functions as properties?",
        answers: ["Yes", "No", "Only in strict mode", "Only in classes"],
        correct: 0
    },
    {
        question: "46. What is the purpose of passing parameters to a function?",
        answers: ["To allow the function to accept inputs", "To define the function's scope", "To return multiple values", "To execute the function only once"],
        correct: 0
    },
    {
        question: "47. Can an object in JavaScript store arrays or other objects as properties?",
        answers: ["Yes", "No", "Only strings", "Only numbers"],
        correct: 0
    },
    {
        question: "48. What is a nested function in JavaScript?",
        answers: ["A function inside another function", "A function that calls itself", "A function that uses loops", "A function that returns an object"],
        correct: 0
    },
    {
        question: "49. Why do we use objects in JavaScript?",
        answers: ["To store and manage multiple values", "To perform mathematical calculations", "To write loops", "To create HTML elements"],
        correct: 0
    },
    {
        question: "50. In JavaScript, an Object can only store values of the same data type.",
        answers: ["True","False"],
        correct: 0
    }
];

let currentQuestion = 0;
const answersState = Array(questions.length).fill(null); // null = not attempted
let startTime = Date.now();
let timeLeft = 30 * 60; // 30 minutes in seconds
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
