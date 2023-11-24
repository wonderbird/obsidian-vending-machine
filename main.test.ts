import VendingMachinePlugin from "./main";
import { App, PluginManifest } from "obsidian";

jest.mock("obsidian");
(window.setInterval as unknown) = jest.fn();

describe("VendingMachinePlugin", () => {
	let plugin: VendingMachinePlugin;
	beforeEach(async () => {
		plugin = new VendingMachinePlugin(new App(), {} as PluginManifest);
	});

	it("should register open command", async () => {
		const addCommandSpy = jest.spyOn(plugin, "addCommand");
		await plugin.onload();
		expect(addCommandSpy).toHaveBeenCalledWith({
			id: "open-vending-machine",
			name: "Open Vending Machine",
			callback: expect.any(Function),
		});
	});
});
