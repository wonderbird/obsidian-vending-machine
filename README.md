# Obsidian Vending Machine Kata

Vending Machine Kata implemented as an [Obsidian.md](https://obsidian.md/) plugin.

The Vending Machine Kata is described here:

-   [Guy Royse: Vending Machine Kata](https://github.com/guyroyse/vending-machine-kata)
-   [Samman Coaching: Vending Machine Kata](https://sammancoaching.org/kata_descriptions/vending_machine.html)
-   [Codewars: Vending Machine](https://www.codewars.com/kata/586e6d4cb98de09e3800014f/train/javascript)

The instructions used in this implementation are in the file [INSTRUCTIONS.md](./INSTRUCTIONS.md). 

## How to use

-   Clone this repo to a local development folder. For convenience, you can place or symlink this folder in `VaultFolder/.obsidian/plugins/obsidian-vending-machine`.
-   Install [NodeJS](https://nodejs.org/), then run `npm i` in the command line under your repo folder.
-   Run `npm run dev` to compile your plugin from `main.ts` to `main.js`.
-   Make changes to `main.ts` (or create new `.ts` files). Those changes should be automatically compiled into `main.js`.
-   Reload Obsidian to load the new version of your plugin.
-   Enable plugin in settings window.

## Developing

-   Clone this repo.
-   Make sure your [NodeJS](https://nodejs.org/) is at least v16 (`node --version`).
-   `npm i` or `yarn` to install dependencies.
-   `npm run dev` to start compilation in watch mode.

## Testing

There is a setup for writing unit tests using [`Jest`](https://jestjs.io/). To run the test suite you can run

```BASH
npm run test
```

or in watch mode

```BASH
npm run test:watch
```

Due to the Obsidian source code not being open-source Jest's more common mocking patterns don't work, such as `jest.mock('obsidian')`. Instead we use [Jest's manual mocks](https://jestjs.io/docs/manual-mocks) by writing a partial mock module in [`__mocks__/obsidian.js`](./__mocks__/obsidian.js). Note that it does not contain a full mock of `obsidian` and you might need to extend it to test your plugin. If you do, please consider adding your extension to this repo.

## Manually installing the plugin

-   Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/obsidian-vending-machine`.

## Improve code quality with eslint

-   [ESLint](https://eslint.org/) is a tool that analyzes your code to quickly find problems. You can run ESLint against your plugin to find common bugs and ways to improve your code.
-   To use eslint with this project, make sure to install eslint from terminal:
    -   `npm install -g eslint`
-   To use eslint to analyze this project use this command:
    -   `eslint main.ts`
    -   eslint will then create a report with suggestions for code improvement by file and line number.
-   If your source code is in a folder, such as `src`, you can use eslint with this command to analyze all files in that folder:
    -   `eslint .\src\`
