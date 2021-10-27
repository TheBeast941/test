const AbstractHandler = require('./AbstractHandler');

class ThreadCreateHandler extends AbstractHandler {
    handle(packet) {
    const client = this.packetManager.client;
    const data = packet.d;
    client.actions.ChannelCreate.handle(data);
  }
}

/**
 * Emitted whenever a thread is created.
 * @event Client#threadCreate
 * @param {Thread} thread The thread that was created
 */

module.exports = ThreadCreateHandler;
