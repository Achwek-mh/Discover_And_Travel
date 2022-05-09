const start_btn7 = document.querySelector(".start_btn7 button");
const info_box7 = document.querySelector(".info_box7");
const quiz_box7 = document.querySelector(".quiz_box7");
const result_box7 = document.querySelector(".result_box7");
const option_list7 = document.querySelector(".option_list7");
const time_line7 = document.querySelector("header .time_line7");
const timeText7 = document.querySelector(".timer7 .time_left_txt7");
const timeCount7 = document.querySelector(".timer7 .timer_sec7");


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
start_btn7.onclick = ()=>{
   // info_box.classList.remove("activeInfo"); //hide info box
    quiz_box7.classList.add("activeQuiz7"); //show quiz box
    showQuetions7(0); //calling showQestions function
    queCounter7(1); //passing 1 parameter to queCounter
    startTimer7(15); //calling startTimer function
    startTimerLine7

    (0); //calling startTimerLine function
}

let timeValue7 =  7;
let que_count7 = 0;
let que_numb7 = 1;
let userScore7 = 0;
let counter7;
let counterLine7;
let widthValue7 = 0;

//const restart_quiz = result_box.querySelector(".buttons .restart");
const resume7 = result_box7.querySelector(".buttons7 .quit7");
const retry7 = result_box7.querySelector(".buttons .retry");

var clicked7 =false;

// if quitQuiz button clicked
 resume7.addEventListener('click',  ()  =>  {
    document.getElementById("popup7").style.display = 'none';
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
        #eb8991 ${progressvalue * 3.7}deg,
    #f5c7cb ${progressvalue * 3.7}deg
        )`;
    
    clicked7=true;

});  


const next_btn7 = document.querySelector("footer .next_btn7");
const bottom_ques_counter7 = document.querySelector("footer .total_que7");

// if Next Que button clicked
next_btn7.onclick = ()=>{
    if(que_count7 < questions7.length - 1){ //if question count is less than total question length
        que_count7++; //increment the que_count value
        que_numb7++; //increment the que_numb value
        showQuetions7(que_count7); //calling showQestions function
        queCounter7(que_numb7); //passing que_numb value to queCounter
        clearInterval(counter7); //clear counter
        clearInterval(counterLine7); //clear counterLine
        startTimer7(timeValue7); //calling startTimer function
        startTimerLine7(widthValue7); //calling startTimerLine function
        timeText7.textContent = "Time Left"; //change the timeText to Time Left
        next_btn7.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter7); //clear counter
        clearInterval(counterLine7); //clear counterLine
        showResult7(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions7(index){
    const que_text7 = document.querySelector(".que_text7");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag7 = '<span>'+ questions7[index].numb7 + ". " + questions7[index].question7 +'</span>';
    let option_tag7 = '<div class="option7"><span>'+ questions7[index].options7[0] +'</span></div>'
    + '<div class="option7"><span>'+ questions7[index].options7[1] +'</span></div>'
    + '<div class="option7"><span>'+ questions7[index].options7[2] +'</span></div>';
  
    que_text7.innerHTML = que_tag7; //adding new span tag inside que_tag
    option_list7.innerHTML = option_tag7; //adding new div tag inside option_tag
    
    const option7 = option_list7.querySelectorAll(".option7");

    // set onclick attribute to all available options
    for(i=0; i < option7.length; i++){
        option7[i].setAttribute("onclick", "optionSelected7(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag7 = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag7 = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected7(answer){
    clearInterval(counter7); //clear counter
    clearInterval(counterLine7); //clear counterLine
    let userAns7 = answer.textContent; //getting user selected option
    let correcAns7 = questions7[que_count7].answer7; //getting correct answer from array
    const allOptions7 = option_list7.children.length;
    
    
    if(userAns7 == correcAns7){ //if user selected option is equal to array's correct answer
        userScore7 += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag7); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore7);
        totalscore += 1;
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag7); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions7; i++){
            if(option_list7.children[i].textContent == correcAns7){ //if there is an option which is matched to an array answer 
                option_list7.children[i].setAttribute("class", "option7 correct"); //adding green color to matched option
                option_list7.children[i].insertAdjacentHTML("beforeend", tickIconTag7); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions7; i++){
        option_list7.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn7.classList.add("show"); //show the next button if user selected any option
}

function showResult7(){
  
    quiz_box7.classList.remove("activeQuiz7"); //hide quiz box
    result_box7.classList.add("activeResult7"); //show result box
    const scoreText7 = result_box7.querySelector(".score_text7");
    if (userScore7 == 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag7 = '<span>and congrats! , You got <p>'+ userScore7 +'</p> out of <p>'+ questions7.length +'</p></span>';
        scoreText7.innerHTML = scoreTag7;  //adding new span tag inside score_Text
        userScore7=0;
        retry7.disabled=true;
        resume7.disabled=false;
    }
    else if(userScore7 >= 1){ // if user scored more than 1
        let scoreTag7 = '<span>and nice , You got <p>'+ userScore7 +'</p> out of <p>'+ questions7.length +'</p></span>';
        scoreText7.innerHTML = scoreTag7;
        userScore7=0;
        retry7.disabled=true;
        resume7.disabled=false;
    }
   else if(userScore3 ==0){ // if user scored less than 1
        let scoreTag7 = '<span>and sorry , You got only <p>'+ userScore7 +'</p> out of <p>'+ questions7.length +'</p></span>';
        scoreText7.innerHTML = scoreTag7;
        retry7.addEventListener('click',  ()  =>  {
            result_box7.classList.remove("activeResult7");
             timeValue7 =  15;
             que_count7 = 0;
              que_numb7 = 1;
               counter7;
              counterLine7;
              widthValue7 = 0;
        
            quiz_box7.classList.add("activeQuiz7");
            
    
                 //show quiz box
            //calling startTimerLine function
            
            showQuetions7(0); //calling showQestions function
            queCounter7(1); //passing 1 parameter to queCounter
            startTimer7(15); //calling startTimer function
            startTimerLine7(0);
             
        
        
        }); 
        retry7.disabled=false;
        resume7.disabled=true;
        }
    }


function startTimer7(time){
    counter7 = setInterval(timer7, 1000);
    function timer7(){
        timeCount7.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time <= 5){ //if timer is less than 9
            let addZero7 = timeCount7.textContent; 
            timeCount7.textContent = "0" + addZero7; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter7); //clear counter
            timeText7.textContent = "Time Off"; //change the time text to time off
            const allOptions7 = option_list7.children.length; //getting all option items
            let correcAns7 = questions7[que_count7].answer7; //getting correct answer from array
            for(i=0; i < allOptions7; i++){
                if(option_list7.children[i].textContent == correcAns7){ //if there is an option which is matched to an array answer
                    option_list7.children[i].setAttribute("class", "option7 correct"); //adding green color to matched option
                    option_list7.children[i].insertAdjacentHTML("beforeend", tickIconTag7); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions7; i++){
                option_list7.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn7.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimerLine7(time){
    counterLine7 = setInterval(timer7, 8);
    function timer7(){
        time += 1; //upgrading time value with 1
        time_line7.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 15){ //if time value is greater than 749
            clearInterval(counterLine7); //clear counterLine
        }
    }
}

function queCounter7(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag7 = '<span><p>'+ index +'</p> of <p>'+ questions7.length +'</p> Questions</span>';
    bottom_ques_counter7.innerHTML = totalQueCounTag7;  //adding new span tag inside bottom_ques_counter
} 