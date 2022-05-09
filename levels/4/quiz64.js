const start_btn4 = document.querySelector(".start_btn4 button");
const info_box4 = document.querySelector(".info_box4");
const quiz_box4 = document.querySelector(".quiz_box4");
const result_box4 = document.querySelector(".result_box4");
const option_list4 = document.querySelector(".option_list4");
const time_line4 = document.querySelector("header .time_line4");
const timeText4 = document.querySelector(".timer4 .time_left_txt4");
const timeCount4 = document.querySelector(".timer4 .timer_sec4");


/*let progress = setInterval (() => {
    valuecontainer.textContent= `${progressvalue}%`;
    progressbar.style.background= `conic-gradient(
        #b8973d ${progressvalue * 3.6}deg,
        #fcf4de ${progressvalue * 3.6}deg
        )`;
    if (progressvalue==progressendvalue) {
        clearInterval(progress);
    }
    }, speed);*/
    
// if continueQuiz button clicked
start_btn4.onclick = ()=>{
   // info_box.classList.remove("activeInfo"); //hide info box
    quiz_box4.classList.add("activeQuiz4"); //show quiz box
    showQuetions4(0); //calling showQestions function
    queCounter4(1); //passing 1 parameter to queCounter
    startTimer4(15); //calling startTimer function
    startTimerLine4(0); //calling startTimerLine function
}

let timeValue4 =  5;
let que_count4 = 0;
let que_numb4 = 1;
let userScore4 = 0;
let counter4;
let counterLine4;
let widthValue4 = 0;

//const restart_quiz = result_box.querySelector(".buttons .restart");
const resume4 = result_box4.querySelector(".buttons4 .quit4");
const retry4 = result_box4.querySelector(".buttons4 .retry4");

var clicked4 =false;

// if quitQuiz button clicked
 resume4.addEventListener('click',  ()  =>  {
    document.getElementById("popup4").style.display = 'none';
    document.getElementById("popup").style.display = 'none';
    document.getElementById('hint3').style.display = 'block';
    if (progressvalue<100) {
        progressvalue+=20;
    }
    else{
        progressvalue=100;
    }
    valuecontainer.textContent= `${progressvalue}%`;
    progressbar.style.background= `conic-gradient(
        #eb8991 ${progressvalue * 3.6}deg,
    #f5c6cb ${progressvalue * 3.6}deg
        )`;
    
    clicked4=true;

});  


const next_btn4 = document.querySelector("footer .next_btn4");
const bottom_ques_counter4 = document.querySelector("footer .total_que4");

// if Next Que button clicked
next_btn4.onclick = ()=>{
    if(que_count4 < questions4.length - 1){ //if question count is less than total question length
        que_count4++; //increment the que_count value
        que_numb4++; //increment the que_numb value
        showQuetions4(que_count4); //calling showQestions function
        queCounter4(que_numb4); //passing que_numb value to queCounter
        clearInterval(counter4); //clear counter
        clearInterval(counterLine4); //clear counterLine
        startTimer4(timeValue4); //calling startTimer function
        startTimerLine4(widthValue4); //calling startTimerLine function
        timeText4.textContent = "Time Left"; //change the timeText to Time Left
        next_btn4.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter4); //clear counter
        clearInterval(counterLine4); //clear counterLine
        showResult4(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions4(index){
    const que_text4 = document.querySelector(".que_text4");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag4 = '<span>'+ questions4[index].numb4 + ". " + questions4[index].question4 +'</span>';
    let option_tag4 = '<div class="option4"><span>'+ questions4[index].options4[0] +'</span></div>'
    + '<div class="option4"><span>'+ questions4[index].options4[1] +'</span></div>'
    + '<div class="option4"><span>'+ questions4[index].options4[2] +'</span></div>';
  
    que_text4.innerHTML = que_tag4; //adding new span tag inside que_tag
    option_list4.innerHTML = option_tag4; //adding new div tag inside option_tag
    
    const option4 = option_list4.querySelectorAll(".option4");

    // set onclick attribute to all available options
    for(i=0; i < option4.length; i++){
        option4[i].setAttribute("onclick", "optionSelected4(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag4 = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag4 = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected4(answer){
    clearInterval(counter4); //clear counter
    clearInterval(counterLine4); //clear counterLine
    let userAns4 = answer.textContent; //getting user selected option
    let correcAns4 = questions4[que_count4].answer4; //getting correct answer from array
    const allOptions4 = option_list4.children.length;
    
    
    if(userAns4 == correcAns4){ //if user selected option is equal to array's correct answer
        userScore4 += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag4); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore4);
        totalscore += 1;

    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag4); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions4; i++){
            if(option_list4.children[i].textContent == correcAns4){ //if there is an option which is matched to an array answer 
                option_list4.children[i].setAttribute("class", "option4 correct"); //adding green color to matched option
                option_list4.children[i].insertAdjacentHTML("beforeend", tickIconTag4); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions4; i++){
        option_list4.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn4.classList.add("show"); //show the next button if user selected any option
}

function showResult4(){
  
    quiz_box4.classList.remove("activeQuiz4"); //hide quiz box
    result_box4.classList.add("activeResult4"); //show result box
    const scoreText4 = result_box4.querySelector(".score_text4");
    if (userScore4 ==3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag4 = '<span>and congrats! , You got <p>'+ userScore4 +'</p> out of <p>'+ questions4.length +'</p></span>';
        scoreText4.innerHTML = scoreTag4;  //adding new span tag inside score_Text
        userScore4=0;
        retry4.disabled=true;
        resume4.disabled=false;
    }
    else if(userScore4 >= 1){ // if user scored more than 1
        let scoreTag4 = '<span>and nice , You got <p>'+ userScore4 +'</p> out of <p>'+ questions4.length +'</p></span>';
        scoreText4.innerHTML = scoreTag4;
        userScore4=0;
        retry4.disabled=true;
        resume4.disabled=false;
    }
    else if(userScore4 ==0){ // if user scored less than 1
        let scoreTag4 = '<span>and sorry , You got only <p>'+ userScore4 +'</p> out of <p>'+ questions4.length +'</p></span>';
        scoreText4.innerHTML = scoreTag4;
        retry4.addEventListener('click',  ()  =>  {
            result_box4.classList.remove("activeResult4");
             timeValue4 =  15;
             que_count4 = 0;
              que_numb4 = 1;
               counter4;
              counterLine4;
              widthValue4 = 0;
        
            quiz_box4.classList.add("activeQuiz4");
            
    
                 //show quiz box
            //calling startTimerLine function
            
            showQuetions4(0); //calling showQestions function
            queCounter4(1); //passing 1 parameter to queCounter
            startTimer4(15); //calling startTimer function
            //startTimerLine4(0);
             
        
        
        }); 
        retry4.disabled=false;
        resume4.disabled=true;
        }
        console.log(`totalscore${totalscore}`);
       
    
}

function startTimer4(time){
    counter4 = setInterval(timer4, 1000);
    function timer4(){
        timeCount4.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time <= 5){ //if timer is less than 9
            let addZero4 = timeCount4.textContent; 
            timeCount4.textContent = "0" + addZero4; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter4); //clear counter
            timeText4.textContent = "Time Off"; //change the time text to time off
            const allOptions4 = option_list4.children.length; //getting all option items
            let correcAns4 = questions4[que_count4].answer4; //getting correct answer from array
            for(i=0; i < allOptions4; i++){
                if(option_list4.children[i].textContent == correcAns4){ //if there is an option which is matched to an array answer
                    option_list4.children[i].setAttribute("class", "option4 correct"); //adding green color to matched option
                    option_list4.children[i].insertAdjacentHTML("beforeend", tickIconTag4); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions4; i++){
                option_list4.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn4.classList.add("show"); //show the next button if user selected any option
        }
    }
}

/* function startTimerLine4(time){
    counterLine4 = setInterval(timer4, 8);
    function timer4(){
        time += 1; //upgrading time value with 1
        time_line4.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 15){ //if time value is greater than 549
            clearInterval(counterLine4); //clear counterLine
        }
    }
} */

function queCounter4(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag4 = '<span><p>'+ index +'</p> of <p>'+ questions4.length +'</p> Questions</span>';
    bottom_ques_counter4.innerHTML = totalQueCounTag4;  //adding new span tag inside bottom_ques_counter
} 
 