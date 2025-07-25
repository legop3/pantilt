const http = require('http')

const address = '192.168.0.20'
const username = 'admin'
const password = 'wormy'


const credentials = Buffer.from(`${username}:${password}`).toString('base64')

// const options = {
//     hostname: '192.168.0.20',
//     port: 80,
//     path: '/pantiltcontrol.cgi?PanSingleMoveDegree=30&TiltSingleMoveDegree=30&PanTiltSingleMove=1',
//     method: 'GET',
//     headers: {
//         'Authorization': `Basic ${credentials}`
//     }
// }

// const req = http.request(options, (res) => {
//     let data = '';
  
//     res.on('data', (chunk) => {
//       data += chunk;
//     });
  
//     res.on('end', () => {
//       console.log('Response:', data);
//     });
//   });
  
//   req.on('error', (e) => {
//     console.error(`Problem with request: ${e.message}`);
//   });
  
//   req.end();

// 1 up
// 7 down
// 3 left
// 5 right
// 4 home

function moveCamera(degrees, direction) {
    
    let parsedDirection
    switch (direction) {
        case 'up':
            parsedDirection = 1
            break;

        case 'down':
            parsedDirection = 7
            break;

        case 'left':
            parsedDirection = 3
            break;

        case 'right':
            parsedDirection = 5
            break;

        case 'home':
            parsedDirection = 4
            break;
    
        default:
            console.error('Invalid direction!', direction)
            break;
    }


    const path = `/pantiltcontrol.cgi?PanSingleMoveDegree=${degrees}&TiltSingleMoveDegree=${degrees}&PanTiltSingleMove=${parsedDirection}`
    console.log('path: ', path)

    const options = {
        hostname: address,
        port: 80,
        path: path,
        method: 'GET',
        headers: {
            'Authorization': `Basic ${credentials}`
        }
    }

    const req = http.request(options, (res) => {
        let data = '';
    
        res.on('data', (chunk) => {
        data += chunk;
        });
    
        res.on('end', () => {
        console.log('Response:', data);
        });
    });
    
    req.on('error', (e) => {
        console.error(`Problem with request: ${e.message}`);
    });
    
    req.end();

}

moveCamera(10, 'left')