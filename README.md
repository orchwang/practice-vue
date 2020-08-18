<p align="center">
  <br>
  <img width="200" src="./src/assets/logo/orchwang.png" alt="logo of orchwang">
  <br>
  <br>
</p>

# Intro

Vue 연습을 위한 저장소. 다양한 형태의 웹 어플리케이션 기능을 Vue 로 구현해 보는 것을 목표로 하오크 

# Preview

## Environments

- Vue CLI
- NodeJS : LTS
- Typescript

## Stacks

- SCSS
- Vue Router
- VueX
- Mocha
- Chai
- Cypress

# App

본 프로젝트의 주 목적은 백엔드 시스템과 연동하여 동작하느 Vue 학습이다. 이를 위해 `각종 통계를 제공하는 대시보드`를 가정한다.

# SCSS

## Main SCSS

모든 Module SCSS 를 `import` 하며 App 전반에 걸쳐 적용해야 하는 스타일을 정의한다.

```
/src/scss/main.scss
```

## Module SCSS

Color System, Typo 등 각종 모듈 SCSS 를 정의한다.

```
/src/scss/_modulename.scss
```

# Vue Router

Vue CLI 의 설정을 이용해 `router/index.ts` 를 정의했다. 모든 라우터는 이곳에서 세팅한다.

```
/src/router/index.ts
```