var timer;
var countDownStart = 10;

function phaseChange(){
	document.body.className = "initialPhase2";  
    timer = setInterval(function(){
    	countDownStart--;
        document.getElementById("countDown").innerHTML = countDownStart;
        if(countDownStart < 0){
        	clearInterval(timer);
        	document.body.className = "initialPhase3";
        }
    },1000);
  }