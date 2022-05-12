const buttonPlay = document.querySelector(".play");
const buttonStop = document.querySelector(".stop");
const buttonPlus = document.querySelector(".plus");
const buttonMinus = document.querySelector(".minus");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let minutesDisplay = minutes.textContent;
let secondsDisplay = seconds.textContent;
let timerTimeOut;


buttonPlay.addEventListener('click', function countdown (){
    timerTimeOut= setTimeout(function (){
    let newminutes = Number(minutes.textContent);
    let newseconds = Number(seconds.textContent);
  
    if(newseconds<= 0 && newminutes <=0){
      return
    }
    if(newseconds<=0){
      newseconds =60;
      newminutes--
    }
    newseconds = newseconds -1;
    minutes.textContent = String(newminutes);
    seconds.textContent = String(newseconds);
    
    countdown();
  },1000)
});

buttonStop.addEventListener('click', function(){
  clearTimeout(timerTimeOut);
  minutes.textContent = minutesDisplay;
  seconds.textContent = secondsDisplay;

})

buttonPlus.addEventListener('click', function(){
  minutes.textContent = String(Number(minutes.textContent) + 5);
  minutesDisplay = String(Number(minutes.textContent) + 5);
})

buttonMinus.addEventListener('click', function(){
  minutes.textContent = Stri(Number(minutes.textContent)- 5);
  secondsDisplay = String(Number(minutes.textContent) + 5);
  
})