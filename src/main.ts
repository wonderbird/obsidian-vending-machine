import { App, Modal, Plugin, Setting } from "obsidian";
import { Display } from "./display";
import { VendingMachine } from "./vendingMachine";
import { Coin, coinLabels } from "./coins";

export default class VendingMachinePlugin extends Plugin {
	async onload() {
		this.addCommand({
			id: "open-vending-machine",
			name: "Open Vending Machine",
			callback: () => {
				new VendingMachineDialog(this.app).open();
			},
		});
	}
}

export class VendingMachineDialog extends Modal {
	private _display: Display;
	private _vendingMachine: VendingMachine = new VendingMachine(new Display());

	constructor(app: App) {
		super(app);

		this._display = new Display();
		this._vendingMachine = new VendingMachine(this._display);
	}

	onOpen() {
		const { contentEl, titleEl } = this;
		titleEl.setText("Vending Machine");

		const display = contentEl.createEl("div", { text: "" });
		this._display.showIn(display);

		const coinSlot = new Setting(contentEl);

		for (const coinId of coinIds) {
			coinSlot.addButton((button) => {
				button.setButtonText(coinLabels[coinId]);
				button.onClick(() => {
					this._vendingMachine.insertCoin(coinId);
				});
			});
		}
	}

	onClose() {
		const { contentEl } = this;
		contentEl.empty();
	}
}
