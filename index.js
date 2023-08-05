const hr = document.getElementById('hr');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const msec = document.getElementById('msec');

const start = document.getElementById('btn-1');
const bookmark = document.getElementById('btn-2');
const reset = document.getElementById('btn-3');

const logs = document.getElementById('logs');

let hr1 = 0;
let min1 = 0;
let sec1 = 0;
let mSec1 = 0;
let hr2 = hr1;
let min2 = min1;
let sec2 = sec1;
let mSec2 = mSec1;

let timer = false;
let count = 0;

//start/pause button onclick function ------> will goes to function stopwatch if timer true or viceverse
start.addEventListener('click', ()=>{
    timer = !timer;
    if(timer){
        start.classList.remove('fa-circle-play');
        start.classList.add('fa-circle-pause');
        stopwatch();
    }
    else{
        start.classList.remove('fa-circle-pause');
        start.classList.add('fa-circle-play');
    }
})


//reset function will create timer = false and set every innnerhtml = 0 of display
reset.addEventListener('click', function(){
    timer = false;
    hr.innerHTML = "00";
    min.innerHTML = "00";
    sec.innerHTML = "00";
    msec.innerHTML = "00";
    hr1 = 0;
    min1 = 0;
    sec1 = 0;
    mSec1 = 0;
    start.classList.remove('fa-circle-pause');
    start.classList.add('fa-circle-play');
    logs.innerHTML = " ";
    count= 0;
});


//display logs or time flag on logs-container
bookmark.addEventListener('click', function(){
    if(timer == true){
        count++;
        let timeStr = count + ".  " + hr2 + ":" + min2 + ":" + sec2 + "." + mSec2;
        logs.innerHTML += `<p>${timeStr}<p>`;
    }
});


function stopwatch(){
    if(timer == true){
        mSec1++;

        if(mSec1 == 100){
            sec1++;
            mSec1 = 0;
        }

        if(sec1 == 60){
            min1++;
            sec1 = 0;
            mSec1 = 0;
        }

        if(min1 == 60){
            hr1++;
            min1 = 0;
            sec1 = 0 ;
            mSec1 = 0;
        }

        hr2 = hr1;
        min2 = min1;
        sec2 = sec1;
        mSec2 = mSec1;

        if(hr2 < 10){
            hr2 = "0" +hr2;
        }
        if(min2 < 10){
            min2 = "0" + min2;
        }
        if(sec2 < 10){
            sec2 = "0" + sec2;
        }
        if(mSec2 < 10){
            mSec2 = "0" + mSec2;
        }

        hr.innerHTML = hr2;
        min.innerHTML = min2;
        sec.innerHTML = sec2;
        msec.innerHTML = mSec2;

        setTimeout(stopwatch,10);
    }
}




