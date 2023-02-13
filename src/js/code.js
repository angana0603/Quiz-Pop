const quizeData= [
    {
        question: "1. What is the correct syntax for an if statement in Python",
        first: "if (condition):",
        second: "if condition",
        third: "if: condition",
        fourth: "if condition:",
        ans: "if condition:",
    },
    {
        question: "2. Which of the following is not a data type in JavaScript?",
        first: "String",
        second: "Number",
        third: "Boolean",
        fourth: "Arraylist",
        ans: "Arraylist",
    },
    {
        question: " 3. Which of the following is used to declare a variable in Java?",
        first: "var",
        second: "let",
        third : "const",
        fourth: "int",
        ans: "int",
    },
    {
        question: "4. What is the correct syntax for a for loop in C#?",
        first: "for i=0 to 10",
        second: "for (i = 0; i <= 10; i++)",
        third: "for (int i = 0; i <= 10)",
        fourth: "for i in range (0, 10)",
        ans: "ans2",
    },
    {
        question: "5. Which of the following is not a looping structure in PHP? ",
        first: "while",
        second: "for",
        third: "do-while",
        fourth: "foreach",
        ans: "ans4",
    },
    {
        question: "6. Which of the following is not a valid operator in C++ ?",
        first: "+",
        second: "-",
        third: "*",
        fourth: "$",
        ans: "ans4",
    },
    {
        question:"7.In which programming language is 'print' used for displaying output?",
        first: "Python",
        second: "JavaScript",
        third: "Java",
        fourth: "C++",
        ans: "ans1",
    },
    {
        question: "8. What is the correct syntax for a function in Ruby?",
        first: "function name()",
        second: "def name",
        third: "function name",
        fourth: "def name()",
        ans: "ans4",
    },
    {
        question: "9. Which of the following is not a type of variable in Swift?",
        first: "Int",
        second: "String",
        third: "Double",
        fourth: "Object",
        ans: "ans4",
    },
    {
        question: "10.   In which programming language is '#'used for commenting?",
        first: "Python",
        second: "JavaScript",
        third: "Java",
        fourth: "C++",
        ans: "ans4",
    },
];
 
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const myScore = document.querySelector('#myScore');
 
let questionCount = 0;
let score = 0;

const loadQuestion = ()=>{
    const questionList = quizeData[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.first;
    option2.innerText = questionList.second;
    option3.innerText = questionList.third;
    option4.innerText = questionList.fourth;
    


}
loadQuestion();
const getCheckAnswer = () =>{
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
        
    });
    return answer;
}

const deselectAll = ()=>{
    answers.forEach((curAnsElem)=> curAnsElem.checked = false);
}

submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizeData[questionCount].ans){
        score++;
    };
      questionCount++;

         deselectAll();

    if(questionCount < quizeData.length){
        loadQuestion();
    }
    else{
        myScore.innerHTML = `<h3> You scored ${score}/${quizeData.length}</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>`;
        myScore.classList.remove('scoreArea');
}
});