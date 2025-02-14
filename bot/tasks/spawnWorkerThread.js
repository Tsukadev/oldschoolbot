const { Task } = require('klasa');
const { spawn, Thread, Worker } = require('threads');

module.exports = class extends Task {
	async init() {
		await this.client.tasks.get('prices').syncItems();
		await this.client.tasks.get('prices').fetchOSBPrices();

		this.run();
	}
	async run() {
		if (this.client.killWorkerThread) {
			Thread.terminate(this.client.killWorkerThread);
		}
		this.client.killWorkerThread = await spawn(
			new Worker('../../data/new_monsters/utils/killWorkerFunction')
		).catch(console.error);

		const terminateCb = async () => {
			Thread.terminate(this.client.killWorkerThread);
			process.exit(0);
		};

		process.on('SIGTERM', terminateCb);
		process.on('SIGINT', terminateCb);
	}
};
