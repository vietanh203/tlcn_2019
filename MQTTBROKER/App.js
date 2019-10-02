var mosca = require('mosca');
var mqtt = require('mqtt');
var wsAddress = 'ws://127.0.0.1:1884';
var axios = require('axios');

//config mqtt 
var settings = {
    port: 1885,
    stats: false,
    http: {
        port: 1884,
        static: __dirname + "/public",
        bundle: true
    }
};


///call API 


axios.get('http://json.iotvision.vn/api/DieuKhienThietBi?MaThietBi=TB015')
  .then(function (response) {
    // handle success
    console.log("-----Call tu API -----");
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });



var mqttServer = new mosca.Server(settings);
var mqttClient = mqtt.connect(wsAddress,{ keepalive : 0});

mqttServer.on('published',function(packet,client){
    console.log(packet.payload.toString());
});


mqttServer.on('subscribed',function(topic,client){
    console.log(topic);
});

mqttServer.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});