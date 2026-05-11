let displayTimer = document.getElementById("timer")

let totallTimeLeft = 1500;
let interval;

let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")

function updateTimer() {
    let convertMinutes = Math.floor(totallTimeLeft / 60);
    let convertSeconds = totallTimeLeft % 60;

    displayTimer.textContent = `${convertMinutes.toString().padStart(2, "0")} : ${convertSeconds.toString().padStart(2, "0")}`

}

start.addEventListener("click", function (){
interval = setInterval(()=>{
totallTimeLeft --;
updateTimer();

    if (totallTimeLeft === 0) {
        alert("time is up")
        clearInterval(interval)
        totallTimeLeft = 1500;
        updateTimer();
    }
    saveData()
    saveTotalTimeLeft()
},1000)

   

})

stop.addEventListener("click", function (){
    clearInterval(interval);
    updateTimer();
    saveData()
    saveTotalTimeLeft()
})

reset.addEventListener("click", function (){
   clearInterval(interval);
   totallTimeLeft = 1500;
    updateTimer();
    saveData()
    saveTotalTimeLeft()
   

})

function saveData (){
    localStorage.setItem("data", JSON.stringify(displayTimer.textContent))
}

function saveTotalTimeLeft (){
    localStorage.setItem ("timeLeft", totallTimeLeft)
}

// saveData();
function showData (){
    let result = localStorage.getItem("data")
    if(result){
        displayTimer.textContent = JSON.parse(result)
    }

   let displayTimeLeftLocal =  localStorage.getItem("timeLeft")
   if(displayTimeLeftLocal){
    displayTimeLeftLocal = Number(displayTimeLeftLocal)
  totallTimeLeft = displayTimeLeftLocal
   }
    
}

showData();



























// let timerText = document.getElementById("timer")

// let totallTimeLeft = 1500;
// let interval;

// let start = document.getElementById("start")
// let stop = document.getElementById("stop")
// let reset = document.getElementById("reset")

// function updateTimer() {
//     let convertMinutes = Math.floor(totallTimeLeft / 60);
//     let convertSeconds = totallTimeLeft % 60

//     timerText.textContent = `${convertMinutes.toString().padStart(2, "0")} :
//     ${convertSeconds.toString().padStart(2, "0")}`
//     saveData();

// }

// start.addEventListener("click", function () {
//     interval = setInterval(() => {
//         totallTimeLeft--;
//         updateTimer();

//     }, 1000)
//     saveData();
// })

// stop.addEventListener("click", function () {
//     clearInterval(interval);
//     updateTimer();
//     // saveData();
// })

// reset.addEventListener("click", function () {
//     clearInterval(interval)
//     totallTimeLeft = 1500;
//     alert("time is up ")
//     updateTimer();

//     if (totallTimeLeft === 0) {
//         clearInterval(interval)
//         updateTimer();
//     }
//     // saveData();

// })

// function saveData() {
//     localStorage.setItem("data", JSON.stringify(timerText.textContent))
// }

// function showData() {
//     let result = localStorage.getItem("data")
//     if (result) {
//         timerText.textContent = JSON.parse(result)
//     }
// }

// showData();





















