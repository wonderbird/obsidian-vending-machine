# Obsidian Sample Plugin

This is a modified version of the [sample plugin](https://github.com/obsidianmd/obsidian-sample-plugin) for [Obsidian](https://obsidian.md).

This project uses Typescript to provide type checking and documentation.
The repo depends on the latest plugin API (obsidian.d.ts) in Typescript Definition format, which contains TSDoc comments describing what it does.

**Note:** The Obsidian API is still in early alpha and is subject to change at any time!

This sample plugin demonstrates some of the basic functionality the plugin API can do.

- Adds a ribbon icon, which shows a Notice when clicked.
- Adds a command "Open Sample Modal" which opens a Modal.
- Adds a plugin setting tab to the settings page.
- Registers a global click event and output 'click' to the console.
- Registers a global interval which logs 'setInterval' to the console.

## Wonderbird's modifications

- Selected pull requests to the original repo are available in the `dev` branch of this repository

## Acknowledgements

Many thanks ❤️ to

- the authors of the [Original Obsidian Sample Plugin](https://github.com/obsidianmd/obsidian-sample-plugin)
- [hjonasson](https://github.com/hjonasson) for the [testing setup pull request](https://github.com/obsidianmd/obsidian-sample-plugin/pull/79)
- [Evan Bonsignori](https://github.com/Ebonsignori) for the [automate release pull request](https://github.com/obsidianmd/obsidian-sample-plugin/pull/72/files)
- [JetBrains](https://www.jetbrains.com/?from=generator-kata-net-core) who provide an [Open Source License](https://www.jetbrains.com/community/opensource/) for my projects

## First time developing plugins?

Quick starting guide for new plugin devs:

- Check if [someone already developed a plugin for what you want](https://obsidian.md/plugins)! There might be an existing plugin similar enough that you can partner up with.
- Make a copy of this repo as a template with the "Use this template" button (login to GitHub if you don't see it).
- Clone your repo to a local development folder. For convenience, you can place this folder in your `.obsidian/plugins/your-plugin-name` folder.
- Install NodeJS, then run `npm i` in the command line under your repo folder.
- Run `npm run dev` to compile your plugin from `main.ts` to `main.js`.
- Make changes to `main.ts` (or create new `.ts` files). Those changes should be automatically compiled into `main.js`.
- Reload Obsidian to load the new version of your plugin.
- Enable plugin in settings window.
- For updates to the Obsidian API run `npm update` in the command line under your repo folder.

## Releasing new releases

### Manually

- Update your `manifest.json` with your new version number, such as `1.0.1`, and the minimum Obsidian version required for your latest release.
- Update your `versions.json` file with `"new-plugin-version": "minimum-obsidian-version"` so older versions of Obsidian can download an older version of your plugin that's compatible.
- Create new GitHub release using your new version number as the "Tag version". Use the exact version number, don't include a prefix `v`. See here for an example: https://github.com/obsidianmd/obsidian-sample-plugin/releases
- Upload the files `manifest.json`, `main.js`, `styles.css` as binary attachments. Note: The manifest.json file must be in two places, first the root path of your repository and also in the release.
- Publish the release.

> You can simplify the version bump process by running `npm version patch`, `npm version minor` or `npm version major` after updating `minAppVersion` manually in `manifest.json`.
> The command will bump version in `manifest.json` and `package.json`, and add the entry for the new version to `versions.json`

### Automatically

In [.github/release.yml](.github/workflows/release.yml) replace "sample-plugin" with the name of your plugin on the following line,

```yml
PLUGIN_NAME: sample-plugin
```

After updating your plugin name, you can create and push a tag. For example,

```bash
git tag 1.2.3
git push origin 1.2.3
```

Then [release.yml](.github/workflows/release.yml) will automatically:

1. Update `manifest.json`, `package.json`, and `package-lock.json` with the version from your tag.
2. Commit the updates to your repo (that you will need to pull down locally before making further changes)
3. Create a new release for your tag in your [repo's Releases](https://github.com/wonderbird/obsidian-sample-plugin/releases).

Afterward, you should manually update the release notes detailing your changes, and update your `versions.json` file with the minimum version of Obsidian your plugin supports.

**Note:** Tag names must be in the format `x.y.z` without prefixing a `v`, for instance `1.0.0` is valid, but `v1.0.0` is not.

## Adding your plugin to the community plugin list

- Check https://github.com/obsidianmd/obsidian-releases/blob/master/plugin-review.md
- Publish an initial version.
- Make sure you have a `README.md` file in the root of your repo.
- Make a pull request at https://github.com/obsidianmd/obsidian-releases to add your plugin.

## How to use

- Clone this repo.
- Make sure your NodeJS is at least v16 (`node --version`).
- `npm i` or `yarn` to install dependencies.
- `npm run dev` to start compilation in watch mode.

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

- Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`.

## Improve code quality with eslint (optional)

- [ESLint](https://eslint.org/) is a tool that analyzes your code to quickly find problems. You can run ESLint against your plugin to find common bugs and ways to improve your code.
- To use eslint with this project, make sure to install eslint from terminal:
  - `npm install -g eslint`
- To use eslint to analyze this project use this command:
  - `eslint main.ts`
  - eslint will then create a report with suggestions for code improvement by file and line number.
- If your source code is in a folder, such as `src`, you can use eslint with this command to analyze all files in that folder:
  - `eslint .\src\`

## Funding URL

You can include funding URLs where people who use your plugin can financially support it.

The simple way is to set the `fundingUrl` field to your link in your `manifest.json` file:

```json
{
    "fundingUrl": "https://buymeacoffee.com"
}
```

If you have multiple URLs, you can also do:

```json
{
    "fundingUrl": {
        "Buy Me a Coffee": "https://buymeacoffee.com",
        "GitHub Sponsor": "https://github.com/sponsors",
        "Patreon": "https://www.patreon.com/"
    }
}
```

## API Documentation

See https://github.com/obsidianmd/obsidian-api
