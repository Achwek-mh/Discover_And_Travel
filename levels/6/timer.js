const startmin=5;
let timee = startmin*60;
let rec=0;
var ele=document.getElementById('timerr');
const ctd= setInterval(countdown,1000);
 
  function countdown(){
    const min=Math.floor(timee / 60);
    let secs = timee % 60;
  
   secs=secs <10 ? '0'+secs : secs ;
    ele.innerHTML=`0${min}:${secs}`;
    timee--;
    //stopp = 1;
    if (timee<0){
      timee=0;
      
    ddescritpion.innerHTML='<h3>Game over<h3>' ;
    dismisss.innerHTML='Try again' ;
    
      document.getElementById('finish').style.display="block";
      document.getElementById('icon1').style.display="block";
      document.getElementById('icon2').style.display="none";
      document.getElementById('nexxt').style.display="none";
     

       
    
    }
    else 
    ddescritpion.innerHTML='<h3>Good job !</h3>Your score is ' +totalscore+'.' ;
    
   
  

    }
    function stoop(){
      clearInterval(ctd);
    }