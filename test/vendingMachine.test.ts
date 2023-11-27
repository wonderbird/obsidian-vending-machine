import { Display } from "../src/display";
import { VendingMachine } from "../src/vendingMachine";

describe("VendingMachine", () => {
	describe("should display", () => {
		it("INSERT COIN when no coins are inserted", () => {
			const display = new Display();
			new VendingMachine(display);
			expect(display.value).toBe("INSERT COIN");
		});

		it.each([
			["0.01", 1],
			["0.02", 2],
			["0.10", 10],
		])(
			"%p when %p pennies are inserted",
			(expectedDisplay: string, numberOfPennies: number) => {
				const display = new Display();
				const machine = new VendingMachine(display);

				for (let i = 0; i < numberOfPennies; i++)
					machine.insertCoin("penny");

				expect(display.value).toBe(expectedDisplay);
			}
		);

		it.each([
			["0.05", 1],
			["0.10", 2],
			["0.50", 10],
		])(
			"%p when %p nickels are inserted",
			(expectedDisplay: string, numberOfNickels: number) => {
				const display = new Display();
				const machine = new VendingMachine(display);

				for (let i = 0; i < numberOfNickels; i++)
					machine.insertCoin("nickel");

				expect(display.value).toBe(expectedDisplay);
			}
		);

		it.each([
			["0.10", 1],
			["0.20", 2],
			["1.00", 10],
		])(
			"%p when %p dimes are inserted",
			(expectedDisplay: string, numberOfDimes: number) => {
				const display = new Display();
				const machine = new VendingMachine(display);

				for (let i = 0; i < numberOfDimes; i++)
					machine.insertCoin("dime");

				expect(display.value).toBe(expectedDisplay);
			}
		);
	});
});
