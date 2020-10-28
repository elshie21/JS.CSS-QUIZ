
const startingMinutes= 10;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');
setInterval(updateCountdown, 1000);
    
{
 interval);('countdown');
function updateCountdown() {
 const minutes = Math.floor(time/60);
     time--;
 let seconds= time % 60;    

  seconds =   seconds < 10? '0'+ seconds : seconds;
countdownEl.innerHTML='${minutes} :${seconds}';
time--;

const startbutton=document.getElementById('start-btn')
startbutton.addEventListener('click',startQuiz)
  console.log('started')
  startbutton.classList.add('hide')
  setNextQuestion

}
function setnextquestion()   {
  showQuestion(shuffelquestion)[currentQuestionindex]
}

function  showQuestion(question) {
    question.Element.innertext=question.question
    question.anserws.forEach(answer =>{
    showQuestion(shuffelquestion[currentQuestionindex])

})

function selectAnswer () {

}

const question = [
    {
        question: "which built-in method sorts the element of an array",
        answers: {
                  answers1: 'change order',
                  answers2:  'order()',
                  answers3:  'sort()',

    },

     correctAnswer: 'answer3'

    },
    {
        question: "can you acess cookie using javacript",
        answers: {
             answers1:'true',
             answers2:'false',
             answers3:'none of the above',

        }, 
          correctAnswer: 'answers1'
    
    
    },
        {
            question: "Arrays in javaScript can be used to store",
            answers: {
                 answers1:'numbers',
                 answers2:'other arrays',
                 answers3:'booleans',
    
            }, 
              correctAnswer: 'answers3'
        
        
        },
    {



