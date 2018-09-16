var timer = null;

var phaseChange = function(phase) {
    document.body.className = "initialPhase"+phase;
    clearInterval(timer);
    var countDownStart = 10;
    document.getElementById('countDown').innerHTML = countDownStart;
    if (phase == 2){
        timer = setInterval(function()  {
            countDownStart = countDownStart-1;
            document.getElementById('countDown').innerHTML = countDownStart;
            if (countDownStart <= 0) {
                phaseChange(3);
            }
        }, 1000);
    } else if (phase == 3) {
        var message = setTimeout(function(){
            var randumNum = Math.round(Math.random()*10);
            console.log(randumNum);
            if (randumNum >= 5) {
                phaseChange(4);
            }else{
                phaseChange(5);
            }
        }, 3000);
    }
}