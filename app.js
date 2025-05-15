const question = [
    {
        'que': 'Which of the following is a markup language',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'What year was JavaScript launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'None of the above',
        'correct': 'b'
    },
    {
        'que': 'What does CSS stand for?',
        'a': 'Hypertext Markup Language',
        'b': 'Cascading Style Sheets',
        'c': 'JavaScript Object Notation',
        'd': 'Helicopters Terminals Motorboats Lamborghinis',
        'correct': 'b'
    },
];

let index = 0;
let correct = 0;
const total = question.length;

const queBox = document.getElementById("queBox");
const optionInputs = document.querySelectorAll(".options");

const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = question[index];
    queBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
    const ans = getAnswer();
    if (ans === question[index].correct) {
        correct++;
    }
    index++;
    loadQuestion();
};

const getAnswer = () => {
    let answer;
    optionInputs.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
};

const reset = () => {
    optionInputs.forEach((input) => {
        input.checked = false;
    });
};

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
        <h3>Thank you for playing the quiz!</h3>
        <h2>Your score: ${correct} / ${total}</h2>
    `;
};

loadQuestion();
