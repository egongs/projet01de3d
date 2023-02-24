let Chrono = function(){
}
Chrono.prototype.chrono = function()
{
    let seconds = 0;
    let minutes = 0;

    function displayTimer() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes == 60) {
        minutes = 0;
    }
    
    let displaySeconds = seconds < 10 ? "0" + seconds : seconds;
    let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    temps = displayMinutes + ":" + displaySeconds
    }

    setInterval(displayTimer, 1000);
}