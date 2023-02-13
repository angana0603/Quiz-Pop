const quizeData= [
    {
        question: "1. Which of the following is not a type of music notation?",
        first:  "Standard notation", 
        second: "Tab notation", 
        third:  "Morse code notation", 
        fourth: "Graphics notation",
         ans:   "Morse code notation",
        
    },
    {
        question: "2. What is the most common time signature in classical music?",
        first:  "3/4", 
        second: "4/4", 
        third:  "5/4", 
        fourth: "6/8",
         ans:   "4/4",
        
    },
    {
        question: " 3. Which of the following is not a type of instrument in a symphony orchestra?",
        first: "Violin",
        second: "Piano",
        third : "Harp",
        fourth: "Theremin",
        ans: "Theremin",
    },
    {
        question: "4. What is the most common key in pop music?",
        first: "C Major",
        second: "G Major",
        third: "D Major",
        fourth: "A Major",
        ans: "C Major",
    },
    {
        question: "5. Which of the following is not a type of chord? ",
        first: "Major",
        second: "Minor",
        third: "Diminshed",
        fourth: "Flat",
        ans: "Flat",
    },
    {
        question: "6. Which of the following is not a type of music genre?",
        first: "Jazz",
        second: "Blues",
        third: "Rock",
        fourth: "Applesauce",
        ans: "Applesauce",
    },
    {
        question:"7. Which of the following is not a type of music theory?",
        first: "Harmony",
        second: "Counterpont",
        third: "Cooking",
        fourth: "Form",
        ans: "ans1",
    },
    {
        question: "8. What is the most common tempo marking in classical music?",
        first: "Allegro",
        second: "Andante",
        third: "Adagio",
        fourth: "Moderato",
        ans: "ans4",
    },
    {
        question: "9. Which of the following is not a type of musical form?",
        first: "Sonata",
        second: "Symphony",
        third: "Concerto",
        fourth: "Spaghetti",
        ans: "Spaghetti",
    },
    {
        question: "10. Which of the following is not a type of music notation software?",
        first: "Sibelius",
        second: "Finale",
        third: "MuseScore",
        fourth: "Microsoft Word",
        ans: "Microsoft Word",
    },
]
    const timeLeft = document.querySelector('.time_left')
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
    let count = 11;
    let countdown;


//    10 questions & answers with option arry

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
    
    submit.addEventListener('click',() => {
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












    