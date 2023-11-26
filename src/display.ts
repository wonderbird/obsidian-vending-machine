export class Display {
	private _value: string = "";
	private _htmlElement: HTMLElement = document.createElement("div");

	public get value(): string {
		return this._value;
	}

	public set value(value: string) {
		this._value = value;
		this._htmlElement.innerText = value;
	}

	public bindToParent(parent: HTMLElement) {
		this._htmlElement = parent.createEl("div", {
			text: this.value,
		});
	}
}
