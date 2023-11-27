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
	});
});
