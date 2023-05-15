
# Bandi 🐶 (🏗️🏗️ WIP 🏗️🏗️)

English | [한국어](./README.ko-kr.md)

This is fullstack React Native opinionated boilerplate with Expo-router, Tamagui, Recoil and Next.js supporting 
Android, iOS and Web based on turbo repo

## Tech Stack

- [Turbo Repo](https://turbo.build/repo)
- [TypeScript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)
- [React Native For Web](https://necolas.github.io/react-native-web/)
- [React](https://react.dev/)
- [Recoil](https://recoiljs.org/)
- [Expo](https://docs.expo.dev/)
- [Expo Router](https://expo.github.io/router/docs)
- [MMKVStorage](https://github.com/mrousavy/react-native-mmkv)
- [FlashList (Virtualized list for Native)](https://shopify.github.io/flash-list/)
- [Tanstack Virtual (Virtualized list for Web)](https://tanstack.com/virtual)
- [React-native-debugger](https://github.com/jhen0409/react-native-debugger)
- [Detox](https://wix.github.io/Detox/)
- [Tamagui](https://tamagui.dev/)
- [Next.js](https://nextjs.org/)
- [Swagger](https://swagger.io/)
- [Solito](https://solito.dev/)
- [Orval](https://orval.dev/)
- [Svgr](https://react-svgr.com/)

## What you get more

- Mono repository support
- Use Route handler of Next.js as an API layer of React Native
- Send Slack message using Route handler when your Expo Application Services (EAS) build or submission has completed
- Recoil sync with MMKV Storage for State persistence
- Generate REST API fetchers based on openAPI specification generated by Swagger written in Route handler
- File system-based routing of Native app like Next.js
- Real world examples

## Folder Structure

```
├───apps
│   └───native
│   └───web
├───packages
│   └───api
│   └───eslint-config-custom
│   └───tsconfig
│   └───ui
```

## Supported platforms

- Android (React-Native 0.71.6)
- iOS (React-Native 0.71.6)
- Web (React-Native 0.71.6)

### Todo

- Web
  - Examples
    - ~~Svgr usage~~
    - ~~Migrate to app directory~~
    - ~~Add app header and bottom navigation for consistent UI between native and web~~
    - ~~Solito~~
    - CSR, SSR, SSG, ISR, On-demand ISR
    - ~~Parallel route~~
    - Conditional route
    - ~~Intercepting route~~
    - Shared element transition
  - ~~Recoil sync~~
  - ~~Cypress~~
- Native
  - Examples
    - ~~Svgr usage~~
    - ~~Solito~~
    - ~~Shared element transition~~
  - ~~Replace async storage with mmkv storage~~
  - ~~Fix broken detox~~
  - handling dotenv sensitive data
- Docs
  - apps/native
  - apps/web
  - packages/api
  - packages/ui
