import moveCamera from "./cameraMove.js";


function moveRandom() {
    console.log('moving camera randomly')
    let randomIndex = getRndInteger(1, 5)
    let randomDirection = ['up', 'down', 'left', 'right', 'home'][randomIndex]


    let randomDegrees = getRndInteger(10, 30)

    console.log('random direction', randomDirection, 'random degrees', randomDegrees)

    moveCamera(randomDegrees, randomDirection)
    
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

(function loop() {
    var rand = (getRndInteger(10, 30) * 1000);
    console.log(rand, 'ms delay')
    setTimeout(function() {
            moveRandom();
            loop();  
    }, rand);
}());