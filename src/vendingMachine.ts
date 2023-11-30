import { Display } from "./display";
import { Coin, CoinId, coinValues } from "./coins";

export class VendingMachine {
	private _display: Display;
	private _money: number = 0;

	constructor(display: Display) {
		this._display = display;
		this._display.value = "INSERT COIN";
	}

	insertCoin(coinId: Coin) {
		this._money += coinValues[coinId];
		this._display.value = `${this._money.toFixed(2)}`;
	}
}
