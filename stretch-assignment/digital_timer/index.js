let msTens = document.querySelector('#msTens');
let msHundreds = document.querySelector('#msHundreds');
let secondOnes = document.querySelector('#secondOnes');
let secondTens = document.querySelector('#secondTens');
let digits = document.querySelectorAll('.digit');

let tens = 0;
let hundreds = 0;
let sOnes = 0;
let sTens = 0;

function timer(){
    let intervalTimer = setInterval(()=>{
        tens = tens + 1;
        if(tens >= 10){
            tens = 0;
            hundreds = hundreds + 1;
        };
        if(hundreds >= 10){
            hundreds = 0;
            sOnes = sOnes + 1;
        };
        if(sOnes >= 10){
            sOnes = 0;
            sTens = sTens +1;
        };
        if(sTens === 1){
            digits.className = '.digit .redDigit';
            clearInterval(intervalTimer);
        };
        msTens.textContent = tens;
        msHundreds.textContent = hundreds;
        secondOnes.textContent = sOnes;
        secondTens.textContent = sTens;
    },10);
};

const start = document.createElement('button');
start.textContent = 'start!';
start.style.display = 'block';
start.style.margin = '0 auto';
start.addEventListener('click', timer);

const parentElement = document.querySelector('.digits');
parentElement.append(start);
