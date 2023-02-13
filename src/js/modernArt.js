const modernArt = [
    {
      
      question: "1. Which artist is known for coining the term 'Surrealism'?",
      first: "Pablo Picasso",
      second: "Salvador Dali",
      third: "Vincent van Gogh",
      fourth:  "Henri Matisse",
      answer: "Salvador Dali",
      
    },
    {
      question: "2. Which movement is associated with the use of abstract forms and shapes in art?",
      first: "Impressionism",
      second: "Expressionism",
      third: "Futurism",
      fourth:  "Cubism",
      answer: "Cubism",
    },
    
    {
      
      question: "3. Which artist is known for painting the work 'The Persistence of Memory'?",
      first: "Pablo Picasso",
      second: "Salvador Dali",
      third: "Vincent van Gogh",
      fourth: "Henri Matisse",
      answer: "Salvador Dali",



      
    },
    {
      
      question: "4. Which artist is known for creating the painting 'The Scream'?",
      first: "Vincent van Gogh",
      second:  "Salvador Dali",
      third: "Edvard Munch",
      fourth: "Claude Monet",
      answer: "Edvard Munch",

     
      
    },
    {
    
      question: "5. What movement was associated with the use of bold, bright colors and thick brushstrokes?",
      first: "Impressionism",
      second: "Expressionism", 
      third: "Fauvism",
      fourth: "Cubism",
      answer: "Fauvism",

      
     
    },
    {
      
      question: "6. What movement was associated with the use of bright colors, simplified forms, and a focus on movement and speed",
      first: "Impressionism",
      second: "Futurism",
      third: "Surrealism", 
      fourth: "Abstract Expressionism",
      answer: "Futurism",

      
    },
    {

      question: "7. Which artist is known for creating the painting 'Water Lilies'?",
      first: "Claude Monet",
      second: "Paul Cezanne", 
      third: "Paul Gauguin",
      fourth:"Paul Klee",
      answer: "Claude Monet",
     
    },
    {
   
      question: "8. Which artist is known for creating the painting 'Les Demoiselles d'Avignon'?",
      first: "Henri Matisse", 
      second:  "Vincent van Gogh",
      third: "Salvador Dali", 
      fourth: "Pablo Picasso",
      answer: "Pablo Picasso",

      
    },
    {
    
      question: "9. Which artist is known for creating the painting 'Guernica'?",
      first: "Claude Mone", 
      second: "Paul Cezanne", 
      third: "Pablo Picasso", 
      fourth: "Vincent van Gogh",
      answer: "Pablo Picasso",

      
     
    },
    {
      
      question: "10. Which artist is known for creating the sculpture 'The Thinker'?",
      first: "Auguste Rodin",
      second: "Alexander Calder",
      third: "Jean Arp",
      fourth: "Henry Moore",
      answer: "Auguste Rodin",

     
      
    }
  ];
  


let quesStatement = document.getElementById('ques');
let changeQues = document.getElementById('next');
let previousQues = document.getElementById('previous')
let firstLabel = document.getElementById('st');
let secondLabel = document.getElementById('nd');
let thirdLabel = document.getElementById('rd');
let fourthLabel = document.getElementById('th');
let first2 = document.getElementById('first');
let second2 = document.getElementById('second');
let third2 = document.getElementById('third');
let fourth2 = document.getElementById('fourth');
let result = document.getElementById('declaration')
let sub = document.getElementById('sub')

//for changing the question on page forward count
let count = 0;
let miner = modernArt.length;
const counter =  function(){
    count < modernArt.length && (count+=1) ;

    quesStatement.innerHTML = modernArt[count].question;
    firstLabel.innerHTML =modernArt[count].first;
    secondLabel.innerHTML = modernArt[count].second;
    thirdLabel.innerHTML= modernArt[count].third;
    fourthLabel.innerHTML=modernArt[count].fourth;
  
}
changeQues.addEventListener('click', counter)



// reverse of question count
const pre = function(){

    miner>0  && (miner-=1)

    quesStatement.innerHTML = modernArt[miner].question;
    firstLabel.innerHTML =modernArt[miner].first;
    secondLabel.innerHTML = modernArt[miner].second;
    thirdLabel.innerHTML= modernArt[miner].third;
    fourthLabel.innerHTML=modernArt[miner].fourth;
    
}
previousQues.addEventListener('click', pre)

changeQues.addEventListener('click',uncheck)



let marks =0;
const evaluvate = function(){
  let a = 0;
    a < modernArt.length && (a+=1)
    if (first2.checked  && (modernArt[a].first === modernArt[a].answer)){
         marks+=1
         result.innerHTML= marks+'/10'
         
      }

    else if (second2.checked  && (modernArt[a].second === modernArt[a].answer)){
        marks+=1
        result.innerHTML= marks+'/10'
        
    }
    

    else if (third2.checked  && (modernArt[a].third === modernArt[a].answer)){
        marks+=1  
        result.innerHTML= marks+'/10'
    
      }

    else if(fourth2.checked  && (modernArt[a].fourth === modernArt[a].answer)){
    
        
          marks+=1
          result.innerHTML= marks+'/10'
         
        
}

}

sub.addEventListener('click', evaluvate)





function uncheck(){
    first2.checked = false;
    second2.checked=false;
    third2.checked=false;
    fourth2.checked=false;

}