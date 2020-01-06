/*var mosca = require('mosca')

var ascoltatore = {
  //using ascoltatore
  type: 'mongo',		
  url: 'mongodb+srv://lucas:Lucas272.@cluster0-vfsdk.mongodb.net/test?retryWrites=true&w=majority',
  pubsubCollection: 'ascoltatori',
  mongo: {}
};

var moscaSettings = {
  port: 1883,
  backend: ascoltatore,
  persistence: {
    factory: mosca.persistence.Mongo,
    url: 'mongodb+srv://lucas:Lucas272.@cluster0-vfsdk.mongodb.net/test?retryWrites=true&w=majority',
  }
};

var server = new mosca.Server(moscaSettings);
server.on('ready', setup);

server.on('clientConnected', function(client) {
	console.log('client connected', client.id);		
});

// Sending data from mosca to clients
var message = {
  topic: '/hello/world',
  payload: 'abcde', // or a Buffer
  qos: 0, // 0, 1, or 2
  retain: false // or true
};
server.publish(message, function() {
  console.log('done!');
});

// fired when a message is received
server.on('published', function(packet, client) {
  console.log('Published', packet.payload);
});

// fired when the mqtt server is ready
function setup() {
  console.log('Mosca server is up and running')
}
*/