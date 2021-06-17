# [Rule of Three](https://www.github.com/ericorruption/rule-of-three)

Calculate rule of three math problems effortlessly. This app aims to be a write-once, deploy everywhere application.

- [Web app](https://www.ruleofthr.ee) (Doubles as a [PWA](https://developers.google.com/web/progressive-web-apps/))
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/rule-of-3/)
- [Chrome](https://chrome.google.com/webstore/detail/rule-of-three/liplmhhmejhbdabigmdcbcehomhbjcdb)
- [Expo](https://expo.io/@ericorruption/rule-of-three)
- [Android](https://play.google.com/store/apps/details?id=com.ericquanz.ruleofthree)
- [iOS](https://itunes.apple.com/us/app/rule-of-three-dreisatz/id1372814954?ls=1&mt=8)

## Dependencies

Each platform targetted has different requirements.

- [Node.js v8+](https://nodejs.org/) (and [NPM](https://npmjs.com))
- [React Native dependencies](https://facebook.github.io/react-native/docs/getting-started.html) will give you an overview of mobile platform requirements.
- [Electron Packager](https://github.com/electron-userland/electron-packager) gives you the requirements for desktop app releases.

### Publishing

You need **paid** accounts to publish your app in the following platforms.

- [iOS & OSX](https://developer.apple.com/programs/enroll/) ($100 yearly)
- [Android](https://play.google.com/apps/publish) ($25 one time)
- [Windows / Edge](https://developer.microsoft.com/en-us/dashboard) ($45 one time)
- [Chrome](https://chrome.google.com/webstore/developer/dashboard) ($5 one time)

## Installing

- Clone the project
- In a terminal, navigate to the project folder and run `npm install`

### Generating assets

I created a base 1024x1024 icon in a graphics software, then ran `npm run icon`
to generate the additional sizes.
The other assets were generated with [this favicon generator](http://realfavicongenerator.net/).

## Running

To run the project on [Expo](http://expo.io/) (a mobile app platform, analog to play/app store) and on the web, you run `npm start`. Follow the instructions afterwards.

You can execute `npm run` for an overview of all scripts available.

## Deployment

The project has different npm scripts to handle the different builds and deployments.

- Extensions should be uploaded by hand in [their](#) [respective](https://chrome.google.com/webstore/developer/dashboard) [websites](https://addons.mozilla.org/en-US/developers/)
- Android apps should be registered in Play Store. For each new version you should upload the generated `.apk` file.
- iOS apps should be sent to the app store either via xCode or the Application Loader.

## Contributing

Fork it. Branch it. Push it. PR it.

## TODO

- Desktop app signing / packaging
- https://microsoft.github.io/react-native-windows/
- Edge browser extension
- iOS deployment again
- Mobile App Release automation
- menu bar app
- browser extension firefox / chrome
- npx expo-optimize
