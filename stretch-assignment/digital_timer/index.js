let msTens = document.querySelector('#msTens');
console.log(msTens);
let msHundreds = document.querySelector('#msHundreds');
console.log(msHundreds);
let secondOnes = document.querySelector('#secondOnes');
console.log(secondOnes);
let secondTens = document.querySelector('#secondTens');
console.log(secondTens);
let digits = document.querySelectorAll('.digit');
console.log(digits);

// function timer(){
//     msTens.textContent = 0;
//     msHundreds.textContent = 0;
//     secondOnes.textContent = 0;
//     secondTens.textContent = 0;
//     let interval = setInterval(function(){
//         msTens = msTens + 1;
//         if(msTens >= 10){
//             msTens = 0;
//             msHundreds = msHundreds + 1;
//         };
//         if(msHundreds >= 10){
//             msHundreds = 0;
//             secondOnes = secondOnes + 1;
//         };
//         if(secondOnes >= 10){
//             secondOnes = 0;
//             secondTens = secondTens +1;
//         };
//         if(secondTens >= 10){
//             digits.className = '.digit .redDigit';
//             clearTimeout(interval());
//         };
//     },10);
// };
msTens.textContent = 0;
msHundreds.textContent = 0;
secondOnes.textContent = 0;
secondTens.textContent = 0;

let myTimer = setInterval(timer,10);
function timer(){
    msTens = msTens + 1;
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
        digits.className = '.digit .redDigit';
        clearTimeout(CB());
    };
    
};

const start = document.createElement('button');
start.textContent = 'start!';
start.style.display = 'block';
start.style.margin = '0 auto';
start.addEventListener('click', myTimer);
const parentElement = document.querySelector('.digits');
parentElement.append(start);
console.log(CB)