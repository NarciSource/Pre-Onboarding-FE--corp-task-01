# 기업과제1. 깃헙 이슈 목록 확인 페이지 만들기

> 깃헙 공개 저장소(https://github.com/angular/angular-cli )의 이슈 목록과 상세 내용을 확인


## 🚩 목차
- [🛠️ 기술 스택](#%EF%B8%8F-기술-스택)
- [🎥 데모](#-데모)
- [⚙️ 주요 기능](#%EF%B8%8F-주요-기능)
- [🪝 사용한 리액트 훅](#-사용한-리액트-훅)
- [🎨 UI](#-ui)
- [📂 프로젝트 구조](#-프로젝트-구조)
- [🚀 실행 방법](#-실행-방법)

## 🛠️ 기술 스택
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![CSS](https://img.shields.io/badge/CSS3-%231572B6?style=flat-square&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/HTML5-%23E34F26?style=flat-square&logo=html5&logoColor=white)
- [![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black)](https://reactjs.org) [![CRA](https://img.shields.io/badge/Create%20React%20App-09D3AC?style=flat-square&logo=createreactapp&logoColor=white)](https://create-react-app.dev/) [![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white)](https://reactrouter.com/en/main)
- [![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white)](https://sass-lang.com/) [![styled-components](https://img.shields.io/badge/styled%20components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white)](https://styled-components.com/)
- [React ContextAPI](https://react.dev/reference/react/useContext)
- [Octokit REST API](https://github.com/octokit)


## 🎥 데모
<img alt="Demo" src="https://github.com/NarciSource/Pre-Onboarding-FE--corp-task-01/assets/26417221/3bd6ad02-6705-4ddd-bdda-3cfa684c5955" width="30%" />


## ⚙️ 주요 기능

- 목록, 상세 페이지 - Outlet을 이용하여 한 페이지 안에서 렌더링
- 이슈 목록 Github REST API 사용
- 이슈 목록은 코멘트 순
- 다섯번째 셀마다 광고 이미지 배너 출력
- 화면을 아래로 스크롤 하면 목록을 더 불러오기

## 🪝 사용한 리액트 훅

- React hooks - useState, useEffect, useContext
- React Router hooks - useLocation, useNavigate

## 🎨 UI
<img alt="목록 페이지" src="https://github.com/NarciSource/Pre-Onboarding-FE--corp-task-01/assets/26417221/685ee452-fd7b-43b7-a719-712827164f5f" width="30%"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img alt="상세 피이지" src="https://github.com/NarciSource/Pre-Onboarding-FE--corp-task-01/assets/26417221/688830a4-1027-4dfa-9b2d-9cd519bbab3d" width="30%"/>

## 📂 프로젝트 구조
```
corp-task--01
├─ .git
├─ .gitignore
├─ .env.local
├─ package-lock.json
├─ package.json
├─ public
│  ├─ ads.jpg
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
├─ README.md
└─ src
   ├─ App.css
   ├─ App.jsx
   ├─ App.test.js
   ├─ components
   │  ├─ AdsComp.jsx
   │  ├─ IssueComp.jsx
   │  ├─ IssueHeaderComp.jsx
   │  └─ LoadMore.jsx
   ├─ index.css
   ├─ index.js
   ├─ logo.svg
   ├─ network
   │  └─ callIssues.js
   ├─ pages
   │  ├─ Detail.jsx
   │  └─ List.jsx
   ├─ reportWebVitals.js
   ├─ router
   │  └─ router.jsx
   ├─ setupTests.js
   └─ store
      └─ store.js

```

## 🚀 실행 방법

### 추가 정보

.env 파일로 REACT_APP_GITHUB_AUTH에 [사용자 엑세스 토큰 추가](https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api#authentication)로 호출 횟수(시간 당 60회) 제한 해결

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

