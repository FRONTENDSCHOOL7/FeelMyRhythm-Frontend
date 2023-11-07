<h1 align="center">Feel My Rhythm 🎧</h1>
</br>

<p align="center">
<img width="700" alt="logo 복사본" src='./public/Thumbnail.png'>
</p>

</br>

#### 💫 Feel My Rhythm 배포 링크 및 테스트 계정

💡 [Feel My Rhythm](https://www.feelmyrhythm.com '바로가기')

```수정하기
ID: test1115@test.com
PW: test1115*
```

</br>

#### 💻 프로젝트 상세 진행 과정 엿보기

💡[프로젝트 구글 시트](https://docs.google.com/spreadsheets/d/1-1brcFSSZEuCGJYREySDQQqzf1r9IUlHcseddHbIGrU/edit?pli=1#gid=0)

</br>

#### 📚 프로젝트 발표 자료

💡[내용](주소)

</br>

## 1.서비스 소개

🎧 <em>감정과 음악, 그리고 사람을 연결하는 <strong>Feel My Rhythm</strong>입니다.</em>

- Youtube의 음악 영상을 업로드하고, 취향이 맞는 사람들과 소통해 보세요!

- AI 감정 분석 기능을 통해 나의 감정에 공감하는 사람들을 만나 보세요!

</br>

## 2. 팀 소개

안녕하세요, 저희는 멋쟁이사자처럼 프론트엔드스쿨 7기 🍙 삼김조 🍙입니다.

</br>

| 조병민           | 김소희 | 김정아 | 김지윤 |
| ---------------- | ------ | ------ | ------ |
| photo            | photo  | photo  | photo  |
| FE / Team Leader | FE     | FE     | FE     |

</br>

## 3. 역할 분담

🗂[GoogleDocs 요구사항 명세](https://docs.google.com/spreadsheets/d/1-1brcFSSZEuCGJYREySDQQqzf1r9IUlHcseddHbIGrU/edit?pli=1#gid=2124562970)

</br>

## 4. 개발 기간 (23.10.16 ~ 23.11.07)

| 주차                      |                                                                                                     |
| ------------------------- | --------------------------------------------------------------------------------------------------- |
| 1주차 </br> 10.16 ~ 10.22 | - 주제 선정, 기술 스택 및 협업툴 선정, 컨벤션 정리 </br> - Figma UI 디자인 작업, 기능 요구사항 명세 |
| 2주차 </br> 10.23~ 10.29  | - 기획 구체화 </br> - 페이지별 UI 구현                                                              |
| 3주차 </br> 10.30~ 11.05  | - 분담한 페이지 별 API 기능 구현 </br> - 테스트 후 테스트 케이스 작성 및 수정                       |
| 4주차 </br> 11.06~ 11.07  | - 최종 테스트 및 버그 수정 </br> - 배포                                                             |

## 5. 개발 환경

### 💛 기술 스택

<div>
    <img src="https://img.shields.io/badge/React-grey?style=for-the-badge&logo=React&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/Recoil-grey?style=for-the-badge&logo=Recoil&logoColor=3578E5"/>
  <img src="https://img.shields.io/badge/javascript-grey?style=for-the-badge&logo=javascript&logoColor=f7df1e" />
  <img src="https://img.shields.io/badge/styled components-grey?style=for-the-badge&logo=styled-components&logoColor=DB7093"/>
</br> 
    <img src="https://img.shields.io/badge/Axios-grey?style=for-the-badge&logo=Axios&logoColor=5A29E4"/>
  <img src="https://img.shields.io/badge/React Query-grey?style=for-the-badge&logo=React Query&logoColor=FF4154"/>
  <img src="https://img.shields.io/badge/React Router-grey?style=for-the-badge&logo=React Router&logoColor=CA4245"/>
  <img src="https://img.shields.io/badge/Prettier-grey?style=for-the-badge&logo=Prettier&logoColor=F7B93E"/>
  <img src="https://img.shields.io/badge/ESLint-grey?style=for-the-badge&logo=ESLint&logoColor=4B32C3"/>
   <img src="https://img.shields.io/badge/GitHub-grey?style=for-the-badge&logo=GitHub&logoColor=181717"/>
</div>

- 리액트 상태관리 라이브러리로, 전역 상태 관리를 용이하게 그리고 리액트의 컴포넌트 기반 아키텍처와 잘 어우러 질수 있게 리코일을 사용했습니다.
- 데이터를 가져오고 캐시하고, 동기화 하는 복잡한 로직을 추상화하여 쉽게 데이터를 관리할수 있게 리액트 쿼리를 사용했습니다.

## 프로젝트 관리

Github Issues / Github Pull Requests

## 배포

 </br>

### 컨벤션

#### commit 컨벤션

| 분류          | 컨벤션                                  |
| ------------- | --------------------------------------- |
| 기능 구현     | "feat(기능분류) : 설명 (#이슈번호)"     |
| 버그 수정     | "fix(기능분류) : 내용 (#이슈번호)"      |
| 설정 변경     | "chore : 내용 (#이슈번호)"              |
| 코드 리팩토링 | "refactor(기능분류) : 내용 (#이슈번호)" |

</br>

#### eslint

```js
module.exports = {
  root: true,
  env: {
    es6: true
  },
  extends: ['react-app', 'eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
  rules: {
    'no-var': 'error',
    'no-multiple-empty-lines': 'error',
    // 'no-console': ['error', {allow: ['warn', 'error', 'info']}],
    eqeqeq: 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-key': 'error',
    'dot-notation': 'error',
    'linebreak-style': 0,
    'no-unused-vars': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ]
  }
};
```

</br>

#### prettier

```js
module.exports = {
  printWidth: 120,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  bracketSameLine: true,
  jsxBracketSameLine: true,
  arrowParens: 'always',
  quoteProps: 'as-needed'
};
```

</br>

## 6.협업 과정

## 7. 프로젝트 폴더 구조

```

📁 FeelMyRhythm
├──📁 .github
├──📁 .husky
├──📁 node_modules
├──📁 public
├──📁 src
│   ├──📁 Apis
│   ├──📁 Assets
│   │   ├──📁 style
│   │   │   ├──📄 GlobalStyle
│   │   ├──📁 images
│   ├──📁 Components
│   │   ├──📁 Chat
│   │   ├──📁 Default
│   │   ├──📁 Emotion
│   │   ├──📁 Floolwers
│   │   ├──📁 Followings
│   │   ├──📁 Home
│   │   ├──📁 Post
│   │   ├──📁 Randing
│   │   ├──📁 Sign
│   │   ├──📁 wite
│   │   └──📁 Profile
│   ├──📁 Hooks
│   ├──📁 Pages
│   │   ├──📁 Chat
│   │   ├──📁 Default
│   │   ├──📁 Emotion
│   │   ├──📁 Followers
│   │   ├──📁 Followings
│   │   ├──📁 Home
│   │   ├──📁 Post
│   │   ├──📁 Randing
│   │   ├──📁 Sign
│   │   ├──📁 write
│   │   └──📁 Profile
│   ├──📁 Router
│   ├──📁 Store
│   └──📁 Util
├──📄 .env
├──📄 .eslintrc.js
├──📄 .gitignore
├──📄 .prettierrc.js
├──📄 package-lock.json
├──📄 package.json
└──📄 README.md

```

<br />

## 8. 기능 소개

### 1) 시작 화면

| 스플래시                                                                                                                                                                                                         | 로그인                                                                                                                                                                                                  | 회원가입과 프로필 설정                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="src/assets//gifs//%EC%8A%A4%ED%94%8C%EB%9E%98%EC%8B%9C%2C%20%EB%A1%9C%EA%B7%B8%EC%9D%B8%2C%20%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85//%EC%8A%A4%ED%94%8C%EB%9E%98%EC%8B%9C.gif" width="196" height="424"> | <img src="src/assets//gifs//%EC%8A%A4%ED%94%8C%EB%9E%98%EC%8B%9C%2C%20%EB%A1%9C%EA%B7%B8%EC%9D%B8%2C%20%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85//%EB%A1%9C%EA%B7%B8%EC%9D%B8.gif" width="196" height="424"> | <img src="src/assets/gifs/%EC%8A%A4%ED%94%8C%EB%9E%98%EC%8B%9C%2C%20%EB%A1%9C%EA%B7%B8%EC%9D%B8%2C%20%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85//%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85%EA%B3%BC%ED%94%84%EB%A1%9C%ED%95%84%EC%84%A4%EC%A0%95.GIF" width="196" height="424"> |

### 2) 홈

| 전체 게시글 보기                                                                                                            | 이미지에 마우스 올리면 동영상 재생                                                                                                                                                          | 무한스크롤                                                                                                          |
| --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| <img src="src/assets/gifs/홈/%EC%A0%84%EC%B2%B4%EA%B2%8C%EC%8B%9C%EA%B8%80%EB%B3%B4%EA%B8%B0.gif" width="196" height="424"> | <img src="src/assets/gifs/홈//%EC%9D%B4%EB%AF%B8%EC%A7%80%EC%97%90%20%EB%A7%88%EC%9A%B0%EC%8A%A4%20%EC%98%AC%EB%A6%AC%EB%A9%B4%20%EB%8F%99%EC%98%81%EC%83%81.gif" width="196" height="424"> | <img src="src/assets//gifs//%ED%99%88//%EB%AC%B4%ED%95%9C%EC%8A%A4%ED%81%AC%EB%A1%A4.gif" width="196" height="424"> |

| 팔로우를 하지 않을때와 계정검색                                                                                                 | 팔로우 글만 보기                                                                                  | 내가 팔로우 하는 계정이 글을 안 올렸을때                                                             |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/haileyja/haileyja/assets/105365063/08ead09c-9dd2-4086-9dbd-9ea3d8561f05" width="196" height="424"> | <img src="src/assets/gifs/홈/내가 팔로우 하는 유저가 글을 올렸을때.gif" width="196" height="424"> | <img src="src/assets/gifs/홈/내가 팔로우 하는 계정이 글을 안 올렸을때.GIF" width="196" height="424"> |

### 3) 채팅

| 채팅 입력하기 (실제 작동 x)                                                |
| -------------------------------------------------------------------------- |
| <img src="src/assets/gifs/채팅방/채팅방입력.gif" width="196" height="424"> |

### 4) 감정 AI 검색

| 웃는 표정                                                                                            | 슬픈표정                                                                                             | 화난표정                                                                                             |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| <img src="src/assets/gifs/감정AI/%EC%9B%83%EB%8A%94%ED%91%9C%EC%A0%95.GIF" width="196" height="424"> | <img src="src/assets/gifs/감정AI/%EC%9A%B0%EB%8A%94%ED%91%9C%EC%A0%95.GIF" width="196" height="424"> | <img src="src/assets/gifs/감정AI/%ED%99%94%EB%82%9C%ED%91%9C%EC%A0%95.GIF" width="196" height="424"> |

### 5) 게시글

| 게시글 작성                                                                                                                             | 게시글 검색 및 감정 필터링                                                                                                                                                 | 감정 선택 후 게시글 보기                                                                                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="src/assets/gifs//%EA%B2%8C%EC%8B%9C%EA%B8%80//%EA%B2%8C%EC%8B%9C%EA%B8%80%20%EC%9E%91%EC%84%B1.gif" width="196" height="424"> | <img src="src/assets/gifs/게시글//%EA%B2%8C%EC%8B%9C%EA%B8%80%EA%B2%80%EC%83%89%20%EB%B0%8F%20%EA%B0%90%EC%A0%95%ED%95%84%ED%84%B0%EB%A7%81.gif" width="196" height="424"> | <img src="src/assets/gifs//%EA%B2%8C%EC%8B%9C%EA%B8%80//%EA%B0%90%EC%A0%95%EC%84%A0%ED%83%9D%ED%9B%84%20%EA%B2%8C%EC%8B%9C%EA%B8%80%20%EB%B3%B4%EA%B8%B0.gif" width="196" height="424"> |

| 게시글 좋아요                                                                                | 게시글 수정                                                                                  | 게시글 작성시 유튜브 영상 상세보기                                                       |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| <img src="src/assets/gifs/게시글//%EC%A2%8B%EC%95%84%EC%9A%94.gif" width="196" height="424"> | <img src="src/assets/gifs/게시글/게시글%20수정하고%20확인하기.gif" width="196" height="424"> | <img src="src/assets/gifs/게시글/유튜브%20영상%20상세보기.gif" width="196" height="424"> |

### 6) 댓글

| 댓글 작성                                                                                                      | 댓글 삭제                                                                                                               |
| -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| <img src="src/assets/gifs/댓글/%EB%8C%93%EA%B8%80%20%EB%82%A8%EA%B8%B0%EA%B8%B0.gif" width="196" height="424"> | <img src="src/assets/gifs/댓글/%EB%8C%93%EA%B8%80%20%EC%82%AD%EC%A0%9C%ED%95%98%EA%B8%B0.gif" width="196" height="424"> |

### 7) 프로필

| 내 프로필 페이지                                                                                                                                                    | 좋아요한 글을 작성자가 삭제한 경우                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="src/assets/gifs/프로필/%EB%82%B4%EA%B0%80%20%EC%9E%91%EC%84%B1%ED%95%9C%20%EA%B2%8C%EC%8B%9C%EA%B8%80%20%EB%B3%B4%EA%B8%B0.gif" width="196" height="424"> | <img src="src/assets/gifs/%ED%94%84%EB%A1%9C%ED%95%84//%EC%82%AD%EC%A0%9C%ED%95%9C%20%EA%B8%80%EC%9D%84%20%EC%A2%8B%EC%95%84%ED%95%98%EB%8A%94%20%EA%B8%80%EC%97%90%20%EB%8B%B4%EC%95%84%EB%91%94%20%EA%B2%BD%EC%9A%B0%20%EC%98%88%EC%99%B8%EC%B2%98%EB%A6%AC.gif" width="196" height="424"> |

| 프로필 수정                                                                                                       | 다크모드                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| <img src="src/assets/gifs/프로필//%ED%94%84%EB%A1%9C%ED%95%84%20%EC%88%98%EC%A0%95.gif" width="196" height="424"> | <img src="src/assets/gifs/%ED%94%84%EB%A1%9C%ED%95%84//%EB%8B%A4%ED%81%AC%EB%AA%A8%EB%93%9C.gif" width="196" height="424"> |

### 8) 태블릿 화면 구현

| 홈화면                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="src/assets/gifs///%ED%83%9C%EB%B8%94%EB%A6%BF//%ED%99%88%ED%99%94%EB%A9%B4%20%ED%83%9C%EB%B8%94%EB%A6%BF.gif" width="576" height="768"> |

| 게시글 작성                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="src/assets/gifs//%ED%83%9C%EB%B8%94%EB%A6%BF//%EA%B2%8C%EC%8B%9C%EA%B8%80%EC%9E%91%EC%84%B1%ED%83%9C%EB%B8%94%EB%A6%BF.gif" width="576" height="768"> |

| 다른 유저의 프로필 보기 (좋아하는 글)                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="src/assets/gifs//%ED%83%9C%EB%B8%94%EB%A6%BF//%EB%8B%A4%EB%A5%B8%EC%82%AC%EB%9E%8C%ED%94%84%EB%A1%9C%ED%95%84%EB%B3%B4%EA%B8%B0%ED%83%9C%EB%B8%94%EB%A6%BF.gif" width="576" height="768"> |

| 다크모드                                                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="src/assets/gifs//%ED%83%9C%EB%B8%94%EB%A6%BF/./%EB%8B%A4%ED%81%AC%EB%AA%A8%EB%93%9C%20%ED%83%9C%EB%B8%94%EB%A6%BF.gif" width="576" height="768"> |
