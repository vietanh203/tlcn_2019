var mosca = require('mosca');
var mqtt = require('mqtt');
var wsAddress = 'ws://127.0.0.1:1884';
var callApi = require('./apiCaller/callApi');
// var axios = require('axios');

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

var mqttServer = new mosca.Server(settings);
var mqttClient = mqtt.connect(wsAddress, { keepalive: 0 });

mqttServer.on('published', function (packet, client) {


    if ((typeof packet.payload) === 'object' && packet.payload.toString().includes('topic')) {
        console.log(packet.payload.toString());
            dataObject = JSON.parse(packet.payload.toString());

            if (!dataObject.online) {
                callApi(`api/devices/${dataObject.topic}`, 'PUT', {
                    data: dataObject.valueControll ? { status: dataObject.status, valueControll: dataObject.valueControll } : { status: dataObject.status },
                    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTMOqIEPDtG5nIE5naMSpYSIsImlhdCI6MTU3MTIwOTM1MX0.ghULmfQqzxAIbnkdD1bu4ZFDqNkMEZJMXgAHhZ8XP8s'
                }).then(res => {
                    if (res) console.log(res.data);
                });


            console.log(client.id + ' is publish message : ' + packet.payload.toString())
        }

    }
    console.log('published : ' + packet.payload.toString());
});


mqttServer.on('subscribed', function (topic, client) {
    console.log('subscribe : ' + topic);
    let check = topic.search(client.id);
    
    if (check!=-1) {
        mqttClient.publish(topic, JSON.stringify({ topic: topic, connect: true, online: true }));
        callApi(`api/devices/${client.id}`, 'PUT', {
            connect: true,
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTMOqIEPDtG5nIE5naMSpYSIsImlhdCI6MTU3MTIwOTM1MX0.ghULmfQqzxAIbnkdD1bu4ZFDqNkMEZJMXgAHhZ8XP8s'
        }).then(res => {
            console.log(client.id + ' is online');
        })
    }

});

mqttServer.on('unsubscribed', function (topic, client) {
    console.log('unsubscribe : ' + topic);
    let check = topic.search(client.id);
    
    if (check!=-1) {
        mqttClient.publish(topic, JSON.stringify({ topic: topic, connect: false, online: true }));
        console.log(topic, client.id);
        callApi(`api/devices/${client.id}`, 'PUT', {
            connect: false,
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTMOqIEPDtG5nIE5naMSpYSIsImlhdCI6MTU3MTIwOTM1MX0.ghULmfQqzxAIbnkdD1bu4ZFDqNkMEZJMXgAHhZ8XP8s'
        }).then(res => {
            console.log(client.id + ' is offline');
        })
    }
});

mqttServer.on('clientConnected', function (client) {
    console.log('client connected', client.id);
});
mqttServer.on('clientDisconnected', function (client) {
    console.log('client disconnected', client.id);
});