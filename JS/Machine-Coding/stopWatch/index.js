const timerInput = document.querySelector(".timer_input");
const hrsInput = timerInput.querySelector("#hr");
const minsInput = timerInput.querySelector("#min");
const secsInput = timerInput.querySelector("#sec");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

let timerId ;
//convert our input into secs
//timerinput 
//  1. our input should not take more than 2 digit input 
//  2. asjust the timer before starting 
//start button -> pause button -> start 

startBtn.addEventListener("click", function(){
    let hrs = hrsInput.value || 0 ;
    let mins = minsInput.value || 0 ;
    let secs = secsInput.value || 0;
    console.log(hrs, mins, secs);
    
    let timeInSeconds = convertToSeconds(hrs,mins,secs);
    console.log(timeInSeconds);
    if(startBtn.innerText == "Start"){
        timer(timeInSeconds);
        //pause button
        startBtn.innerText = "Pause";
    }
    else if(startBtn.innerText == "Pause"){
        clearInterval(timerId);
        startBtn.innerText = "Start";
    }
})

resetBtn.addEventListener("click", function(){
    clearInterval(timerId);
    hrsInput.value = 0;
    minsInput.value = 0;
    secsInput.value = 0;
})
function timer(timeInSeconds){
    displayTime(timeInSeconds)
    if(timeInSeconds == 0) return; 
    timerId = setInterval(() => {
        timeInSeconds--
        displayTime(timeInSeconds);
        console.log(timeInSeconds);
        if(timeInSeconds == 0) clearInterval(timerId); 
    }, 1000);
}


function convertToSeconds(hrsInput, minsInput, secsInput){
    return parseInt(hrsInput)*3600 + parseInt(minsInput)*60 + parseInt(secsInput);
}

function displayTime(timeInSeconds){
    
    let hrs = parseInt(timeInSeconds/3600) ;
    let remainingMins = parseInt(timeInSeconds%3600);
    let mins = parseInt(remainingMins/60);
    let secs = remainingMins%60 ; 

    hrsInput.value = hrs;
    minsInput.value = mins;
    secsInput.value = secs;


}


// <=1 -> appends zero
// 1:3:2 -> 01:03:02