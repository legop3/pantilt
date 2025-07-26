import moveCamera from "./cameraMove.js";
import { spawn } from "child_process"
import fs from 'node:fs'


function moveRandom() {
    console.log('moving camera randomly')
    let randomIndex = getRndInteger(1, 5)
    let randomDirection = ['up', 'down', 'left', 'right', 'home'][randomIndex]


    let randomDegrees = getRndInteger(10, 30)

    console.log('random direction', randomDirection, 'random degrees', randomDegrees)

    moveCamera(randomDegrees, randomDirection)

    // exec()
    // `flite -t "${randomDirection} ${randomDegrees} Degrees."

    let outtext = `${randomDirection} ${randomDegrees} Degrees.`

    spawn('flite', ['-t', outtext])
    fs.writeFile('outs/b64.txt', Buffer.from(outtext).toString('base64'), (err) => {
        console.log('fs err', err)
    })
    
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