import { Display } from "../src/display";
import { VendingMachine } from "../src/vendingMachine";

describe("VendingMachine", () => {
	describe("should display", () => {
		it("INSERT COIN when no coins are inserted", async () => {
			const display = new Display();
			new VendingMachine(display);
			expect(display.value).toBe("INSERT COIN");
		});
	});
});
