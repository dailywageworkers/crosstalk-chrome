# Cross Talk Chrome Extension

## Development
1. Clone the repository.
2. Install [yarn](https://yarnpkg.com): `npm install -g yarn`.
3. Run `yarn`.
4. Change the package's name and description on `package.json`.
5. Change the name of your extension on `src/manifest.json`.
6. Run `npm run start`
7. Load your extension on Chrome following:
    1. Access `chrome://extensions/`
    2. Check `Developer mode`
    3. Click on `Load unpacked extension`
    4. Select the `build` folder.
8. Have fun.

## Deployment

- Run `npm run build`
- Get the output in build folder

-------------

Built from [chrome-extension-firebase-webpack-boilerplate](https://github.com/aravindballa/chrome-extension-firebase-webpack-boilerplate)