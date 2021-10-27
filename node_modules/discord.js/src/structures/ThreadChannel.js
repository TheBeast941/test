const TextChannel = require('./TextChannel');
const TextBasedChannel = require('./interfaces/TextBasedChannel');
const Collection = require('../util/Collection');

class ThreadChannel extends TextChannel {
    constructor(guild, data) {
        super(guild, data);
        this.type = "thread";
    }

}

TextBasedChannel.applyToClass(ThreadChannel, true);

module.exports = ThreadChannel;