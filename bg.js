const body = document.querySelector("body");

const IMG_NUMBER = 5;

function genRandom() {
    const number =  Math.ceil(Math.random() * IMG_NUMBER);
    return number
}

function handleImagLoad() {
    console.log("finish loading");
    
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/img_${imgNumber}.jpg`
    image.classList.add('bgImage')
    body.appendChild(image)
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();
