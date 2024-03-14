const Turn = require('node-turn');
const server = new Turn({
  listeningPort: 3478,
  relayAddress: 'https://turn-server-s41y.onrender.com',
  relayPort: 3478,
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
});
