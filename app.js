// var request = require('request')
// var username = 'admin'
// var password = 'wormy'
// var options = {
// //   url: 'http://localhost:1234/api/res/xyz',
//   auth: {
//     user: username,
//     password: password
//   }
// }
var needle = require('needle')
var url = 'http://192.168.0.120/pantiltcontrol.cgi'


function down(degrees) {
    // request.post(`http://192.168.0.120/pantiltcontrol.cgi`, options)
    needle.post(url, `PanSingleMoveDegree=${degrees}&TiltSingleMoveDegree=${degrees}&PanTiltSingleMove=7`)
}

down('10')