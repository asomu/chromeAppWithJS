const span = document.querySelector(".js-h3"),
h3 = span.querySelector("h3"),
input = document.querySelector("input"),
playBtn = document.querySelector("button"),
js_guess = document.querySelector(".js-guess"),
guess = js_guess.querySelector("input"),
status = document.querySelector(".js-status"),
result = document.querySelector(".js-result"),
result_h4 = result.querySelector("h4"),
h4 = status.querySelector("h4");


function updateMax(){
    const h3_text = `Generate a number between 0 and ${input.value}`
    h3.textContent = h3_text;
}

function updatePlay(){
    const targetNumber = Math.floor(Math.random() * input.value) + 1;
    const guessNumber = guess.value;
    const msg = `You choose: ${guessNumber}, the machine choose: ${targetNumber}`  
    h4.innerText = msg;
    judgeNumber(guessNumber, targetNumber);
}

function judgeNumber(guessNumber, targetNumber){
    let msg = ``;
    if (guessNumber == targetNumber){
        msg = `You Win!`;
    }
    else{
        msg = `You Lost!`;
    }
    result_h4.innerText = msg;
}

input.addEventListener("change", updateMax);
playBtn.addEventListener("click", updatePlay)
