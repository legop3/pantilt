var request = require('request')
var sleep = require('sleep')
var cron = require('node-cron')
var username = 'admin'
var password = 'wormy'
var options = {
  url: 'http://192.168.0.120/pantiltcontrol.cgi',
  auth: {
    user: username,
    password: password
  }
}
// var needle = require('needle')
var urlin = 'http://192.168.0.20/pantiltcontrol.cgi'
// var options = {
//     username: username,
//     password: password
// }

async function up(degrees) {
    request.post({
        url: urlin,
        body: `PanSingleMoveDegree=${degrees}&TiltSingleMoveDegree=${degrees}&PanTiltSingleMove=1`,
    }, function(error, response, body){console.log(body);
    })
    await new Promise(resolve => setTimeout(resolve, degrees/15*1000));

}

async function down(degrees) {
    request.post({
        url: urlin,
        body: `PanSingleMoveDegree=${degrees}&TiltSingleMoveDegree=${degrees}&PanTiltSingleMove=7`,
    }, function(error, response, body){console.log(body);
    })
    await new Promise(resolve => setTimeout(resolve, degrees/15*1000));

}

async function left(degrees) {
    request.post({
        url: urlin,
        body: `PanSingleMoveDegree=${degrees}&TiltSingleMoveDegree=${degrees}&PanTiltSingleMove=3`,
    }, function(error, response, body){console.log(body);
    })
    await new Promise(resolve => setTimeout(resolve, degrees/15*1000));

}

async function right(degrees) {
    request.post({
        url: urlin,
        body: `PanSingleMoveDegree=${degrees}&TiltSingleMoveDegree=${degrees}&PanTiltSingleMove=5`,
    }, function(error, response, body){console.log(body);
    
    })
    await new Promise(resolve => setTimeout(resolve, degrees/15*1000));

}

async function home() {
        request.post({
            url: urlin,
            body: `PanTiltSingleMove=4`,
        }, function(error, response, body){console.log(body);
        })
        await new Promise(resolve => setTimeout(resolve, 15000));

}

(() => {
    // await down(10)
    // await up(10)
    // // left('10')
    // // right('10')
    // // home()
    cron.schedule('* * * * *', () =>{
        await down(getRandomInt(0,100))
        await up(getRandomInt(0, 180))
    
    })


})()






function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  