<<<<<<< HEAD
const questions = [
    {
        question:"Q1: When did the Partition of Bengal take place?",
        option1 :"1860",
        option2:"1905",
        option3:"1920",
        option4:"1885",
        ans:"ans2"
    },
    {
        question:"Q2: When was the Gandhi-Irwin Pact signed?",
        option1 :"March 5, 1932",
        option2:"March 10, 1920",
        option3:"March 5, 1931",
        option4:"March 10, 1921",
        ans:"ans3"
    },
    {
        question:"Q3: Which of the following are two works of Kalidasa?",
        option1 :"Raghuvamsha and Kiratarjuniya",
        option2:"Kumara Sambhav and Raghuvamsha",
        option3:"Malti Madhava and Kumara Sambhava",
        option4:"Malti Madhav and Kiratarjuniya",
        ans:"ans2"
    },
    {
        question:"Q4: According to the later Vedic Era beliefs, which of the following Gods were elected democratically?",
        option1 :"Prajapati",
        option2:"Adityas",
        option3:"Vasus",
        option4:"Ashwins",
        ans:"ans1"
    },
    {
        question:"Q5: The Kalinga war was fought in which year of Ashoka reign?",
        option1 :"6",
        option2:"7",
        option3:"8",
        option4:"9",
        ans:"ans3"
    }
];


const ques = document.querySelector(".ques");
const op1 = document.querySelector("#ans1");
const op2 = document.querySelector("#ans2");
const op3 = document.querySelector("#ans3");
const op4 = document.querySelector("#ans4");
const submit = document.querySelector(".submit");

var answers = document.querySelectorAll(".in");
let count=0;
let score = 0;
const enter = document.querySelector(".start");
enter.addEventListener("click",()=>{
    enter.style.display="none";
    document.querySelector(".q").style.display = "block";
    loadQues();

    answers.forEach(e=>{
        e.addEventListener("click",()=>{
            if(e.id === questions[count].ans){
                e.style.background = "#68ed51";
                score++;
                
            }else{
                e.style.background = "red";
               
            }
            count++;
            setTimeout(()=>{
                e.style.background = "#0a0121";
                if(count<questions.length){
                    
                    loadQues();
                }else{
                    document.querySelector(".q").style.display = "none";
                    document.querySelector(".score").style.display = "block";
                    document.querySelector(".s").innerText = `Your score is ${score}/${questions.length}`;

                }
            },800)
            
    
        })
    });

})
document.querySelector(".play").addEventListener('click', () => {
    window.location.reload();
});
const loadQues = ()=>{
    ques.innerText = questions[count].question;
    op1.innerText = questions[count].option1;
    op2.innerText = questions[count].option2;
    op3.innerText = questions[count].option3;
    op4.innerText = questions[count].option4;
}





=======
const questions = [
    {
        question:"Q1: When did the Partition of Bengal take place?",
        option1 :"1860",
        option2:"1905",
        option3:"1920",
        option4:"1885",
        ans:"ans2"
    },
    {
        question:"Q2: When was the Gandhi-Irwin Pact signed?",
        option1 :"March 5, 1932",
        option2:"March 10, 1920",
        option3:"March 5, 1931",
        option4:"March 10, 1921",
        ans:"ans3"
    },
    {
        question:"Q3: Which of the following are two works of Kalidasa?",
        option1 :"Raghuvamsha and Kiratarjuniya",
        option2:"Kumara Sambhav and Raghuvamsha",
        option3:"Malti Madhava and Kumara Sambhava",
        option4:"Malti Madhav and Kiratarjuniya",
        ans:"ans2"
    },
    {
        question:"Q4: According to the later Vedic Era beliefs, which of the following Gods were elected democratically?",
        option1 :"Prajapati",
        option2:"Adityas",
        option3:"Vasus",
        option4:"Ashwins",
        ans:"ans1"
    },
    {
        question:"Q5: The Kalinga war was fought in which year of Ashoka reign?",
        option1 :"6",
        option2:"7",
        option3:"8",
        option4:"9",
        ans:"ans3"
    }
];

const enter = document.querySelector(".start");
const ques = document.querySelector(".ques");
const op1 = document.querySelector("#ans1");
const op2 = document.querySelector("#ans2");
const op3 = document.querySelector("#ans3");
const op4 = document.querySelector("#ans4");
const submit = document.querySelector(".submit");

var answers = document.querySelectorAll(".in");
let count=0;
let score = 0;

enter.addEventListener("click",()=>{
    enter.style.display="none";
    document.querySelector(".q").style.display = "block";
    loadQues();

    answers.forEach(e=>{
        e.addEventListener("click",()=>{
            if(e.id === questions[count].ans){
                e.style.background = "#68ed51";
                score++;
                
            }else{
                e.style.background = "red";
               
            }
            count++;
            setTimeout(()=>{
                e.style.background = "#0a0121";
                if(count<questions.length){
                    
                    loadQues();
                }else{
                    document.querySelector(".q").style.display = "none";
                    document.querySelector(".score").style.display = "block";
                    document.querySelector(".s").innerText = `Your score is ${score}/${questions.length}`;

                }
            },800)
            
    
        })
    });

})
document.querySelector(".play").addEventListener('click', () => {
    window.location.reload();
});
const loadQues = ()=>{
    ques.innerText = questions[count].question;
    op1.innerText = questions[count].option1;
    op2.innerText = questions[count].option2;
    op3.innerText = questions[count].option3;
    op4.innerText = questions[count].option4;
}





>>>>>>> a35bc386b4c05a42e03803026b93295a96e5655e
