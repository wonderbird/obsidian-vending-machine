import { Display } from "./display";

export class VendingMachine {
	private _display: Display;

	constructor(display: Display) {
		this._display = display;
		this._display.value = "INSERT COIN";
	}
}
