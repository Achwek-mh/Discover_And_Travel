const start_btn6 = document.querySelector(".start_btn6 button");
const info_box6 = document.querySelector(".info_box6");
const quiz_box6 = document.querySelector(".quiz_box6");
const result_box6 = document.querySelector(".result_box6");
const option_list6 = document.querySelector(".option_list6");
const time_line6 = document.querySelector("header .time_line6");
const timeText6 = document.querySelector(".timer6 .time_left_txt6");
const timeCount6 = document.querySelector(".timer6 .timer_sec6");


    
// if continueQuiz button clicked
start_btn6.onclick = ()=>{
   // info_box.classList.remove("activeInfo"); //hide info box
    quiz_box6.classList.add("activeQuiz6"); //show quiz box
    showQuetions6(0); //calling showQestions function
    queCounter6(1); //passing 1 parameter to queCounter
    startTimer6(15); //calling startTimer function
    startTimerLine6

    (0); //calling startTimerLine function
}

let timeValue6 =  6;
let que_count6 = 0;
let que_numb6 = 1;
let userScore6 = 0;
let counter6;
let counterLine6;
let widthValue6 = 0;

//const restart_quiz = result_box.querySelector(".buttons .restart");
const resume6 = result_box6.querySelector(".buttons6 .quit6");
const retry6 = result_box6.querySelector(".buttons .retry");

var clicked6 =false;

// if quitQuiz button clicked
 resume6.addEventListener('click',  ()  =>  {
    document.getElementById("popup6").style.display = 'none';
/*     document.getElementById("popup").style.display = 'none';
 */    document.getElementById('hint5').style.display = 'block';
    if (progressvalue<100) {
        progressvalue+=12;
    }
    else{
        progressvalue=100;
    }
    valuecontainer.textContent= `${progressvalue}%`;
    progressbar.style.background= `conic-gradient(
        #eb8991 ${progressvalue * 3.6}deg,
    #f5c6cb ${progressvalue * 3.6}deg
        )`;
    
    clicked6=true;

});  


const next_btn6 = document.querySelector("footer .next_btn6");
const bottom_ques_counter6 = document.querySelector("footer .total_que6");

// if Next Que button clicked
next_btn6.onclick = ()=>{
    if(que_count6 < questions6.length - 1){ //if question count is less than total question length
        que_count6++; //increment the que_count value
        que_numb6++; //increment the que_numb value
        showQuetions6(que_count6); //calling showQestions function
        queCounter6(que_numb6); //passing que_numb value to queCounter
        clearInterval(counter6); //clear counter
        clearInterval(counterLine6); //clear counterLine
        startTimer6(timeValue6); //calling startTimer function
        startTimerLine6(widthValue6); //calling startTimerLine function
        timeText6.textContent = "Time Left"; //change the timeText to Time Left
        next_btn6.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter6); //clear counter
        clearInterval(counterLine6); //clear counterLine
        showResult6(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions6(index){
    const que_text6 = document.querySelector(".que_text6");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag6 = '<span>'+ questions6[index].numb6 + ". " + questions6[index].question6 +'</span>';
    let option_tag6 = '<div class="option6"><span>'+ questions6[index].options6[0] +'</span></div>'
    + '<div class="option6"><span>'+ questions6[index].options6[1] +'</span></div>'
    + '<div class="option6"><span>'+ questions6[index].options6[2] +'</span></div>';
  
    que_text6.innerHTML = que_tag6; //adding new span tag inside que_tag
    option_list6.innerHTML = option_tag6; //adding new div tag inside option_tag
    
    const option6 = option_list6.querySelectorAll(".option6");

    // set onclick attribute to all available options
    for(i=0; i < option6.length; i++){
        option6[i].setAttribute("onclick", "optionSelected6(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag6 = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag6 = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected6(answer){
    clearInterval(counter6); //clear counter
    clearInterval(counterLine6); //clear counterLine
    let userAns6 = answer.textContent; //getting user selected option
    let correcAns6 = questions6[que_count6].answer6; //getting correct answer from array
    const allOptions6 = option_list6.children.length;
    
    
    if(userAns6 == correcAns6){ //if user selected option is equal to array's correct answer
        userScore6 += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag6); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore6);
        totalscore += 1;
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag6); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions6; i++){
            if(option_list6.children[i].textContent == correcAns6){ //if there is an option which is matched to an array answer 
                option_list6.children[i].setAttribute("class", "option6 correct"); //adding green color to matched option
                option_list6.children[i].insertAdjacentHTML("beforeend", tickIconTag6); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions6; i++){
        option_list6.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn6.classList.add("show"); //show the next button if user selected any option
}

function showResult6(){
  
    quiz_box6.classList.remove("activeQuiz6"); //hide quiz box
    result_box6.classList.add("activeResult6"); //show result box
    const scoreText6 = result_box6.querySelector(".score_text6");
    if (userScore6 == 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag6 = '<span>and congrats! , You got <p>'+ userScore6 +'</p> out of <p>'+ questions6.length +'</p></span>';
        scoreText6.innerHTML = scoreTag6;  //adding new span tag inside score_Text
        userScore6=0;
        retry6.disabled=true;
        resume6.disabled=false;
    }
    else if(userScore6 >= 1){ // if user scored more than 1
        let scoreTag6 = '<span>and nice , You got <p>'+ userScore6 +'</p> out of <p>'+ questions6.length +'</p></span>';
        scoreText6.innerHTML = scoreTag6;
        userScore6=0;
        retry6.disabled=true;
        resume6.disabled=false;
    }
   else if(userScore3 ==0){ // if user scored less than 1
        let scoreTag6 = '<span>and sorry , You got only <p>'+ userScore6 +'</p> out of <p>'+ questions6.length +'</p></span>';
        scoreText6.innerHTML = scoreTag6;
        retry6.addEventListener('click',  ()  =>  {
            result_box6.classList.remove("activeResult6");
             timeValue6 =  15;
             que_count6 = 0;
              que_numb6 = 1;
               counter6;
              counterLine6;
              widthValue6 = 0;
        
            quiz_box6.classList.add("activeQuiz6");
            
    
                 //show quiz box
            //calling startTimerLine function
            
            showQuetions6(0); //calling showQestions function
            queCounter6(1); //passing 1 parameter to queCounter
            startTimer6(15); //calling startTimer function
            startTimerLine6(0);
             
        
        
        }); 
        retry6.disabled=false;
        resume6.disabled=true;
        }
    }


function startTimer6(time){
    counter6 = setInterval(timer6, 1000);
    function timer6(){
        timeCount6.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time <= 5){ //if timer is less than 9
            let addZero6 = timeCount6.textContent; 
            timeCount6.textContent = "0" + addZero6; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter6); //clear counter
            timeText6.textContent = "Time Off"; //change the time text to time off
            const allOptions6 = option_list6.children.length; //getting all option items
            let correcAns6 = questions6[que_count6].answer6; //getting correct answer from array
            for(i=0; i < allOptions6; i++){
                if(option_list6.children[i].textContent == correcAns6){ //if there is an option which is matched to an array answer
                    option_list6.children[i].setAttribute("class", "option6 correct"); //adding green color to matched option
                    option_list6.children[i].insertAdjacentHTML("beforeend", tickIconTag6); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions6; i++){
                option_list6.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn6.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimerLine6(time){
    counterLine6 = setInterval(timer6, 8);
    function timer6(){
        time += 1; //upgrading time value with 1
        time_line6.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 15){ //if time value is greater than 649
            clearInterval(counterLine6); //clear counterLine
        }
    }
}

function queCounter6(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag6 = '<span><p>'+ index +'</p> of <p>'+ questions6.length +'</p> Questions</span>';
    bottom_ques_counter6.innerHTML = totalQueCounTag6;  //adding new span tag inside bottom_ques_counter
} 