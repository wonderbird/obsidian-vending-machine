import { Display } from "./display";

export class VendingMachine {
	private _display: Display;
	private _money: number = 0;

	constructor(display: Display) {
		this._display = display;
		this._display.value = "INSERT COIN";
	}

	insertCoin(coinName: string) {
		let coinValue = 0.01;

		if (coinName === "nickel") {
			coinValue = 0.05;
		}
		if (coinName === "dime") {
			coinValue = 0.1;
		}

		this._money += coinValue;
		this._display.value = `${this._money.toFixed(2)}`;
	}
}
