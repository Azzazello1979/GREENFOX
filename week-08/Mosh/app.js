const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

// 2. Register a listener
emitter.on('messageLogged', (event) => {
  console.log('Listener called', event);
});

logger.log('message');

