//getting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = document.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
const timeCount = quiz_box.querySelector(".timer .timer_sec");
const timeLine = quiz_box.querySelector("header .time_line");
const timeOff = quiz_box.querySelector("header .text");


//if start quiz button clicked

start_btn.onclick = ()=> {
    info_box.classList.add("activeInfo");  //show the info box
}


//if Exit  button clicked
exit_btn.onclick = ()=> {
    info_box.classList.remove("activeInfo"); //hide thee info box
}

//if Continue   button clicked
continue_btn.onclick = ()=> {
    info_box.classList.remove("activeInfo"); //hide thee info box
    quiz_box.classList.add("activeQuiz"); //Show the quiz box
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}




let que_count = 0;
let que_numb = 1;
let counter;
let counterLine;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;


const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");
restart_quiz.onclick = ()=>{
quiz_box.classList.add("activeQuiz");    
result_box.classList.remove("activeResult");

let que_count = 0;
let que_numb = 1;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;

showQuestions(que_count);
queCounter(que_numb);
clearInterval(counter);
startTimer(timeValue);
clearInterval(counterLine);
startTimerLine(widthValue);
next_btn.style.display = "none";
timeOff.textContent = "Time left";


}
quit_quiz.onclick = ()=>{
    window.location.reload();
}

//If next button Clicked
next_btn.onclick = ()=>{
if(que_count < questions.length -1){  // este if e para caso as questoes acabe
    que_count++;                // isso adiciona mais itens no contador e passa para o show questions
    que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    next_btn.style.display = "none";
    timeOff.textContent = "Time left";
}else{
    clearInterval(counter);
  
    clearInterval(counterLine);
    console.log("Questions completed");
    showResultBox();
}

    
}

//getting questions and options from array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
   
    let que_tag = '<span>' +  questions[index].numb +". "+  questions[index].question+ '</span>';  // questions[index].numb  adiciona os numeros antes do titulo e da resposta
    let option_tag = '<div class="option">'  +questions[index].options[0]+ '<span></span></div>' // +questions[index].options[0]+ faz a seleção das respostas
                    + '<div class="option">' +questions[index].options[1]+ '<span></span></div>'
                    + '<div class="option">' +questions[index].options[2]+ '<span></span></div>'
                    + '<div class="option">' +questions[index].options[3]+ '<span></span></div>';
    

    que_text.innerHTML = que_tag;   // faz a inserção do conteudo ao html qtag
    option_list.innerHTML = option_tag;  // faz a inserção do conteudo ao html option tag

    const option = option_list.querySelectorAll(".option");
    for(let i = 0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");

    }
} 


let tickIcon = '<div class="icon tick"><i class="fa fa-check"></i></div>';
let crossIcon = '   <div class="icon cross"><i class="fa fa-times"></i></div>';

function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
let userAns = answer.textContent;
let correctAns = questions[que_count].answer;
let allOptions = option_list.children.length;
if(userAns ==  correctAns){
    userScore += 1;

    answer.classList.add("correct");
    console.log("Answer is Correct");
    answer.insertAdjacentHTML("beforeend", tickIcon);  // Isso adiciona ao HTML o tickIcon "icone de certo".

    
}else{
    answer.classList.add("incorrect");
    console.log("Answer is wrong");
    answer.insertAdjacentHTML("beforeend", crossIcon);  // Isso adiciona ao HTML o crossIcon "icone de X incorreto".


    //if answer is incorrect the automatically selected the correct answer
    for( let i = 0; i < allOptions; i++){
        if(option_list.children[i].textContent == correctAns){
            option_list.children[i].setAttribute("class", "option correct");
            option_list.children[i].insertAdjacentHTML("beforeend", tickIcon); 
         

        }

    }

}

// once user selected disabled all options
for (let i = 0; i < allOptions; i++){
    option_list.children[i].classList.add("disabled");
}
next_btn.style.display = "block";
}
function showResultBox(){
    info_box.classList.remove("activeInfo"); //hide thee info box
    quiz_box.classList.remove("activeQuiz"); // hide the quiz box
    result_box.classList.add("activeResult"); // show the result boxz
    const scoreText = result_box.querySelector(".score_text");
    if(userScore > 3){
        let scoreTag = '<span>and congrats!, You got  <p>' + userScore + '</p> out of <p>' + questions.length + '</p> </span>';
        scoreText.innerHTML = scoreTag;
        

    }else if(userScore > 1){
        let scoreTag = '<span>and nice, You got  <p>' + userScore + '</p> out of <p>' + questions.length + '</p> </span>';
        scoreText.innerHTML = scoreTag;
        

    }

    else{
        let scoreTag = '<span>and sorry, You got only <p>' + userScore + '</p> out of <p>' + questions.length + '</p> </span>';
        scoreText.innerHTML = scoreTag;
        

    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
      
    }
        if(time < 0) {
        
            clearInterval(counter);
       
            timeCount.textContent="00";
            let userAns = answer.textContent;
            let correctAns = questions[que_count].answer;
            timeOff.textContent = "Time off";
        

   

            for( let i = 0; i < allOptions; i++){
                if(option_list.children[i].textContent == correctAns){
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIcon); 
                 
        
                }
        
            }

            for (let i = 0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled");
            }
            next_btn.style.display = "block";
        
        }
        
        
    }





function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1;
        console.log(time);
       
       timeLine.style.width = time + "px";
    }
        if(time > 449) {
            clearInterval(counterLine);
           
         
        }
       
}


















function queCounter(index){
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>' + index + '</p>Of<p>' + questions.length + '</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}


