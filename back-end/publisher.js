var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://192.168.15.10');
client.on('connect', function () {
setInterval(function() {
client.publish('myTopic', 'Hello mqtt');
console.log('Message Sent');
}, 5000);
});
