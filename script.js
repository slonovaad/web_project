function setCountdown() {
    if (timeLeft) {
        let minutes = Math.floor(timeLeft/60);
        let seconds = timeLeft % 60;
        if (seconds < 10){
            seconds = '0' + seconds;
        }
        countdownEl.innerHTML = `${minutes}:${seconds}`;
        timeLeft -= 1;
    }
    else {
        costEl.innerHTML = "3 000 руб.";
        countdownEl.innerHTML = "Время вышло!";
        countdownEl.classList.toggle('dark');
    }
}

function buy() {
    alert("С вашей карты списано три миллиона денег :)");
}

 
let countdownEl = document.getElementById('countdown');
let costEl = document.getElementById('cost');
let timeLeft = 2 * 60;
setInterval(setCountdown, 1000);

let button = document.getElementById('buy');
button.addEventListener('click', buy);
