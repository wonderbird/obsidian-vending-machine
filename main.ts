import { App, Modal, Plugin } from "obsidian";

export default class VendingMachinePlugin extends Plugin {
	async onload() {
		this.addCommand({
			id: "open-vending-machine",
			name: "Open Vending Machine",
			callback: () => {
				new VendingMachine(this.app).open();
			},
		});
	}
}

class VendingMachine extends Modal {
	constructor(app: App) {
		super(app);
	}

	onOpen() {
		const { contentEl, titleEl } = this;
		titleEl.setText("Vending Machine");

		contentEl.createEl("div", {
			text: "INSERT COIN",
		});
	}

	onClose() {
		const { contentEl } = this;
		contentEl.empty();
	}
}
