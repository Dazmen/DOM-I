let msTens = document.querySelector('#msTens');
let msHundreds = document.querySelector('#msHundreds');
let secondOnes = document.querySelector('#secondOnes');
let secondTens = document.querySelector('#secpmdTens');
let digits = document.querySelectorAll('.digit');
function timer(){
    msTens.textContent = `${msTens + 1}`
    if(msTens >= 10){
        msTens = 0;
        msHundreds = msHundreds + 1;
    };
    if(msHundreds >= 10){
        msHundreds = 0;
        secondOnes = secondOnes + 1;
    };
    if(secondOnes >= 10){
        secondOnes = 0;
        secondTens = secondTens +1;
    };
    if(secondTens >= 10){
        digits.style.color = 'red';
        window.clearTimeout();
        
    };
};
window.setInterval(timer, 10);