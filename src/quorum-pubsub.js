const Pubsub = require('orbit-db-pubsub');

class quorumPubsub extends Pubsub {
	constructor(ipfs, id) {
		super(ipfs, id);
	}
}
module.exports = quorumPubsub;