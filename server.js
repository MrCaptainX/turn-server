const Turn = require('node-turn');

const config = require('./config.json');

const server = new Turn({
  listeningPort: config.listeningPort,
  relayAddress: config.relayAddress,
  relayPort: config.relayPort,
  authMech: 'none',
  debugLevel: 'DEBUG'
});

server.start((err) => {
  if (err) {
    console.error('Error starting TURN server:', err);
  } else {
    console.log('TURN server started');
  }
});