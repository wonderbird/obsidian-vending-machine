import { Display } from "./display";

export class VendingMachine {
	private _display: Display;
	private _money: number = 0;

	constructor(display: Display) {
		this._display = display;
		this._display.value = "INSERT COIN";
	}

	insertCoin(penny: string) {
		this._money += 0.01;
		this._display.value = `${this._money.toFixed(2)}`;
	}
}
