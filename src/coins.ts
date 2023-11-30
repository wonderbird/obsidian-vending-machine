export enum Coin {
	Penny = "penny",
	Nickel = "nickel",
	Dime = "dime",
	Quarter = "quarter",
}

export const CoinValues: string[] = Object.keys(Coin)
	.filter((k) => Number.isNaN(k))
	.map((k) => k.toLowerCase());

export const coinIds = ["penny", "nickel", "dime", "quarter"];

export type CoinId = (typeof coinIds)[number];

export const coinLabels: Record<CoinId, string> = {
	penny: "Penny",
	nickel: "Nickel",
	dime: "Dime",
	quarter: "Quarter",
} as const;

export const coinValues: Record<CoinId, number> = {
	penny: 0.01,
	nickel: 0.05,
	dime: 0.1,
	quarter: 0.25,
} as const;
