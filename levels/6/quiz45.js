const start_btn5 = document.querySelector(".start_btn5 button");
const info_box5 = document.querySelector(".info_box5");
const quiz_box5 = document.querySelector(".quiz_box5");
const result_box5 = document.querySelector(".result_box5");
const option_list5 = document.querySelector(".option_list5");
const time_line5 = document.querySelector("header .time_line5");
const timeText5 = document.querySelector(".timer5 .time_left_txt5");
const timeCount5 = document.querySelector(".timer5 .timer_sec5");


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
start_btn5.onclick = ()=>{
   // info_box.classList.remove("activeInfo"); //hide info box
    quiz_box5.classList.add("activeQuiz5"); //show quiz box
    showQuetions5(0); //calling showQestions function
    queCounter5(1); //passing 1 parameter to queCounter
    startTimer5(15); //calling startTimer function
    startTimerLine5(0); //calling startTimerLine function
}

let timeValue5 =  5;
let que_count5 = 0;
let que_numb5 = 1;
let userScore5 = 0;
let counter5;
let counterLine5;
let widthValue5 = 0;

//const restart_quiz = result_box.querySelector(".buttons .restart");
const resume5 = result_box5.querySelector(".buttons5 .quit5");
const retry5 = result_box5.querySelector(".buttons5 .retry5");

var clicked5 =false;

// if quitQuiz button clicked
 resume5.addEventListener('click',  ()  =>  {
    document.getElementById("popup5").style.display = 'none';
    document.getElementById("popup").style.display = 'none';
    document.getElementById('hint4').style.display = 'block';
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
    
    clicked5=true;

});  


const next_btn5 = document.querySelector("footer .next_btn5");
const bottom_ques_counter5 = document.querySelector("footer .total_que5");

// if Next Que button clicked
next_btn5.onclick = ()=>{
    if(que_count5 < questions5.length - 1){ //if question count is less than total question length
        que_count5++; //increment the que_count value
        que_numb5++; //increment the que_numb value
        showQuetions5(que_count5); //calling showQestions function
        queCounter5(que_numb5); //passing que_numb value to queCounter
        clearInterval(counter5); //clear counter
        clearInterval(counterLine5); //clear counterLine
        startTimer5(timeValue5); //calling startTimer function
        startTimerLine5(widthValue5); //calling startTimerLine function
        timeText5.textContent = "Time Left"; //change the timeText to Time Left
        next_btn5.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter5); //clear counter
        clearInterval(counterLine5); //clear counterLine
        showResult5(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions5(index){
    const que_text5 = document.querySelector(".que_text5");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag5 = '<span>'+ questions5[index].numb5 + ". " + questions5[index].question5 +'</span>';
    let option_tag5 = '<div class="option5"><span>'+ questions5[index].options5[0] +'</span></div>'
    + '<div class="option5"><span>'+ questions5[index].options5[1] +'</span></div>'
    + '<div class="option5"><span>'+ questions5[index].options5[2] +'</span></div>';
  
    que_text5.innerHTML = que_tag5; //adding new span tag inside que_tag
    option_list5.innerHTML = option_tag5; //adding new div tag inside option_tag
    
    const option5 = option_list5.querySelectorAll(".option5");

    // set onclick attribute to all available options
    for(i=0; i < option5.length; i++){
        option5[i].setAttribute("onclick", "optionSelected5(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag5 = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag5 = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected5(answer){
    clearInterval(counter5); //clear counter
    clearInterval(counterLine5); //clear counterLine
    let userAns5 = answer.textContent; //getting user selected option
    let correcAns5 = questions5[que_count5].answer5; //getting correct answer from array
    const allOptions5 = option_list5.children.length;
    
    
    if(userAns5 == correcAns5){ //if user selected option is equal to array's correct answer
        userScore5 += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag5); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore5);
        totalscore += 1;

    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag5); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions5; i++){
            if(option_list5.children[i].textContent == correcAns5){ //if there is an option which is matched to an array answer 
                option_list5.children[i].setAttribute("class", "option5 correct"); //adding green color to matched option
                option_list5.children[i].insertAdjacentHTML("beforeend", tickIconTag5); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions5; i++){
        option_list5.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn5.classList.add("show"); //show the next button if user selected any option
}

function showResult5(){
  
    quiz_box5.classList.remove("activeQuiz5"); //hide quiz box
    result_box5.classList.add("activeResult5"); //show result box
    const scoreText5 = result_box5.querySelector(".score_text5");
    if (userScore5 ==3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag5 = '<span>and congrats! , You got <p>'+ userScore5 +'</p> out of <p>'+ questions5.length +'</p></span>';
        scoreText5.innerHTML = scoreTag5;  //adding new span tag inside score_Text
        userScore5=0;
        retry5.disabled=true;
        resume5.disabled=false;
    }
    else if(userScore5 >= 1){ // if user scored more than 1
        let scoreTag5 = '<span>and nice , You got <p>'+ userScore5 +'</p> out of <p>'+ questions5.length +'</p></span>';
        scoreText5.innerHTML = scoreTag5;
        userScore5=0;
        retry5.disabled=true;
        resume5.disabled=false;
    }
    else if(userScore5 ==0){ // if user scored less than 1
        let scoreTag5 = '<span>and sorry , You got only <p>'+ userScore5 +'</p> out of <p>'+ questions5.length +'</p></span>';
        scoreText5.innerHTML = scoreTag5;
        retry5.addEventListener('click',  ()  =>  {
            result_box5.classList.remove("activeResult5");
             timeValue5 =  15;
             que_count5 = 0;
              que_numb5 = 1;
               counter5;
              counterLine5;
              widthValue5 = 0;
        
            quiz_box5.classList.add("activeQuiz5");
            
    
                 //show quiz box
            //calling startTimerLine function
            
            showQuetions5(0); //calling showQestions function
            queCounter5(1); //passing 1 parameter to queCounter
            startTimer5(15); //calling startTimer function
            startTimerLine5(0);
             
        
        
        }); 
        retry5.disabled=false;
        resume5.disabled=true;
        }
        console.log(`totalscore${totalscore}`);
       
    
}

function startTimer5(time){
    counter5 = setInterval(timer5, 1000);
    function timer5(){
        timeCount5.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time <= 5){ //if timer is less than 9
            let addZero5 = timeCount5.textContent; 
            timeCount5.textContent = "0" + addZero5; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter5); //clear counter
            timeText5.textContent = "Time Off"; //change the time text to time off
            const allOptions5 = option_list5.children.length; //getting all option items
            let correcAns5 = questions5[que_count5].answer5; //getting correct answer from array
            for(i=0; i < allOptions5; i++){
                if(option_list5.children[i].textContent == correcAns5){ //if there is an option which is matched to an array answer
                    option_list5.children[i].setAttribute("class", "option5 correct"); //adding green color to matched option
                    option_list5.children[i].insertAdjacentHTML("beforeend", tickIconTag5); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions5; i++){
                option_list5.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn5.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimerLine5(time){
    counterLine5 = setInterval(timer5, 8);
    function timer5(){
        time += 1; //upgrading time value with 1
        time_line5.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 15){ //if time value is greater than 549
            clearInterval(counterLine5); //clear counterLine
        }
    }
}

function queCounter5(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag5 = '<span><p>'+ index +'</p> of <p>'+ questions5.length +'</p> Questions</span>';
    bottom_ques_counter5.innerHTML = totalQueCounTag5;  //adding new span tag inside bottom_ques_counter
} 
 