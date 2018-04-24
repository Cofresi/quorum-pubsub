const quorumPubsub = require('../src/quorum-pubsub');
const ipfsapi = require('ipfs-api');

const ipfs = ipfsapi('/ip4/127.0.0.1/tcp/5001');
// Topic to monitor
const topic = '12345essentialtopicipfsmodule';

ipfs.id()
	.then((identity) => {
		const qpubsub = new quorumPubsub(ipfs, identity.id);
// Callback for receiving a message from the network
		const receiveMsg = (topic, msg) => {
			console.log(`Received msg ${msg} for topic ${topic}`);
		};

// Callback for when a peer connected to a database
		const onPeerConnected = (id, peer) => {
			console.log(`New peer '${peer}' connected to '${id}'`)
		};

		qpubsub.subscribe(topic, receiveMsg, onPeerConnected);

		setTimeout(() => {
			const msg = 'banana';
			qpubsub.publish(topic, msg);
		}, 10000);

	});