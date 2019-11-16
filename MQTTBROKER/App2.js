var mosca = require('mosca');
var mqtt = require('mqtt');
var wsAddress = 'ws://127.0.0.1:1884';
//var callApi = require('./apiCaller/callApi');
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

// Accepts the connection if the username and password are valid
var authenticate = function(client, username, password, callback) {
    console.log(true);
    var authorized = (username === 'alice' && password.toString() === 'secret');
    if (authorized) client.user = username;
    callback(null, authorized);
  }
  
  // In this case the client authorized as alice can publish to /users/alice taking
  // the username from the topic and verifing it is the same of the authorized user
  var authorizePublish = function(client, topic, payload, callback) {
    console.log(topic);
    callback(null, client.user == topic.split('/')[1]);
  }
  
  // In this case the client authorized as alice can subscribe to /users/alice taking
  // the username from the topic and verifing it is the same of the authorized user
  var authorizeSubscribe = function(client, topic, callback) {
    console.log(true);
    callback(null, client.user == topic.split('/')[1]);
  }


var server = new mosca.Server(settings);
 //var mqttClient = mqtt.connect('ws://localhost:1884',{username:'alice',password:'secret'});
server.on('ready', setup);

function setup() {
//   server.authenticate = authenticate;
//   server.authorizePublish = authorizePublish;
//   server.authorizeSubscribe = authorizeSubscribe;
}