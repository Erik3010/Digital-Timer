let timeSecond = 0;
let centiSecond = 0;

let secondDigit = document.querySelectorAll('.second'); 
let centiSecDigit = document.querySelectorAll('.centisecond');
// let segment = document.querySelectorAll('.segment');

let digitSegment = [
    [0,1,2,3,4,5],  //0
    [1,2],  //1
    [0,1,6,4,3],    //2
    [0,1,6,2,3],    //3
    [5,6,1,2],  //4
    [0,5,6,2,3],    //5
    [0,5,6,4,3,2],  //6
    [0,1,2],    //7
    [0,1,2,3,4,5,6],  //8
    [0,1,2,5,6]  //9
];

function secondCounter() {
    // setTimeout(() => {
        // let date = new Date();
        // let second = date.getSeconds();
        timeSecond++;
        // let secDigitOne = Math.floor(timeSecond/100);
        let secDigitOne = Math.floor((timeSecond/100)%10)
        // let secDigitTwo = Math.floor(timeSecond/10);
        let secDigitTwo = Math.floor((timeSecond/10)%10);
        let secDigitThree = timeSecond%10;
    
        // console.log("Time: "+timeSecond)
        // console.log(secDigitOne, secDigitTwo, secDigitThree);
    
        displayDigit(secondDigit[0], secDigitOne);
        displayDigit(secondDigit[1], secDigitTwo);
        displayDigit(secondDigit[2], secDigitThree);
    
        // console.log(secDigitTwo, secDigitThree)
    // }, 1)
}

function centiCounter() {
    centiSecond++;

    console.log(centiSecond)

    let cenSecondOne = Math.floor((centiSecond/10)%10);
    let cenSecondTwo = centiSecond%10;

    displayDigit(centiSecDigit[0], cenSecondOne);
    displayDigit(centiSecDigit[1], cenSecondTwo);

    if(centiSecond >= 100) {
        centiSecond = 0;
        secondCounter();
        setTimeout(centiCounter, 10);
    }else{
        setTimeout(centiCounter, 10);
    }
}
// centiCounter();
// setInterval(() => {
//     centiSecond++;

//     console.log(centiSecond)

//     let cenSecondOne = Math.floor(centiSecond%10);
//     let cenSecondTwo = centiSecond%10;

//     displayDigit(centiSecDigit[0], cenSecondOne);
//     displayDigit(centiSecDigit[1], cenSecondTwo);
// }, 100)

// if(centiSecond>=59) centiSecond = 0;

// let counter = 0;
// setTimeout(() => {
//     setInterval(() => {
//         console.log('hi')
//     },1000)
// }, 100)

function displayDigit(digit, num) {
    let segment = digit.querySelectorAll('.segment');
    let current = parseInt(digit.getAttribute('data-value'));
    // console.log(current)

    if(!isNaN(current) && current != num) {
        digitSegment[current].forEach((digitSegment, i) => {
            setTimeout(() => {
                segment[digitSegment].classList.remove('on')
            }, i*45)
        })
    }
    
    if(isNaN(current) || current != num) {
        setTimeout(() => {
            digitSegment[num].forEach((digitSegment, i) => {
                setTimeout(() => {
                    segment[digitSegment].classList.add('on');
                }, i*45)
            })
        }, 250)
        digit.setAttribute('data-value', num);
    }
    
    // console.log(num)

}


// function att(num) {
//     digit[num].setAttribute('data-value', 10);  
// }
// // att();

// let attr = digit[0].getAttribute('data-value');
// console.log(attr)