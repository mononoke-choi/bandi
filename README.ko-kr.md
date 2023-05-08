# 반디 🐶 (🏗️🏗️ 작업중이예요 🏗️🏗️)

English | [한국어](./README.ko-kr.md)

Turbo Repo 모노레포 기반 React Native fullstack 보일러플레이트 입니다.
Expo-router, Tamagui, Recoil, Next.js 등의 기술을 지원하며
Android, ios, web 크로스 플랫폼 개발을 목적으로 합니다.

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

- 모노레포를 지원합니다
- React Native의 API 레이어로 Next.js의 Route handler를 사용합니다
- Expo Application Services (EAS) 빌드 혹은 앱스토어 제출이 완료되었을때 Route handler를 이용해 슬랙 메세지를 전송합니다
- Recoil sync를 통해 Recoil을 MMKV Storage 에 저장하여 전역상태를 보존합니다
- Route handler 에 작성된 Swagger 로부터 openAPI specification 을 생성하고 이를 기반으로 REST API fetcher 코드를 자동 생성합니다
- Next.js와 흡사한 파일 시스템 기반 라우팅을 네이티브 개발에서 사용합니다
- 실무에서 자주 쓰이는 예시 코드들이 제공됩니다

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
