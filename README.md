<h1 align="center">CryptoMeter</h1>

<div align="center">

<img style="
    margin-bottom: 0px; 
" src="https://github.com/codeit-bootcamp-frontend/0-crypto-meter-technokings/assets/45449387/247067e8-5962-469c-bde7-7d21f2fd8926"  width="400" />

<br>

[![GitHub Stars](https://img.shields.io/github/stars/codeit-bootcamp-frontend/0-crypto-meter-technokings?style=for-the-badge)](https://github.com/codeit-bootcamp-frontend/0-crypto-meter-technokings/stargazers) [![GitHub Stars](https://img.shields.io/github/issues/codeit-bootcamp-frontend/0-crypto-meter-technokings?style=for-the-badge)](https://github.com/codeit-bootcamp-frontend/henry-kenny-ian-todolist/issues) [![Current Version](https://img.shields.io/badge/version-1.0.0-black?style=for-the-badge)](https://github.com/codeit-bootcamp-frontend/0-crypto-meter-technokings) [![GitHub License](https://img.shields.io/github/license/codeit-bootcamp-frontend/0-crypto-meter-technokings?style=for-the-badge)](https://github.com/codeit-bootcamp-frontend/0-crypto-meter-technokings/license)

<hr>

</div>

### Demo

[CryptoMeter](https://dev--cryptometer-technokings.netlify.app/)



## 프로젝트 소개

<img width="1484" alt="image" src="https://github.com/codeit-bootcamp-frontend/0-crypto-meter-technokings/assets/45449387/78a56ee7-9ec6-4503-b4b2-ba6be821cbdb">

<img width="927" alt="image" src="https://github.com/codeit-bootcamp-frontend/0-crypto-meter-technokings/assets/45449387/425f17e1-7f46-456a-8d65-1c81ee5429ab">


### 개요

특정 날짜에 어떤 코인을 얼마만큼 샀다면 현재 얼마가 되어있을지 바로 확인할 수 있는 웹 기반 서비스입니다.

### 주요 기능 소개

- 코인, 날짜, 금액을 입력하고 현재는 가치가 얼마나 바뀌었는지 계산할 수 있습니다.
- 계산한 코인 종류의 현재 차트를 전체, 1년, 1달, 1주, 1일 단위로 볼 수 있습니다.
- 현재 마켓에 활성화된 모든 코인에 대한 시세표를 볼 수 있고, 페이지별 정렬 기능을 제공합니다.
- 원화와 달러 화폐 단위를 지원합니다. 
- 검색 기록을 조회할 수 있습니다. 검색한 화폐단위 별로 필터링하여 조회하는 기능 또한 제공합니다.

### 목표

- 딱딱한 차트와 복잡한 지표들이 아닌, "만약에~했더라면?" 이라는 재밌는 상상에 기반한 <strong>매력적인</strong> 가상화폐 정보 플랫폼
- 전체 가상화폐 현황과 더불어 코인별 간단한 차트까지 한 번에 확인할 수 있는 <strong>범용성</strong>
- 복잡한 페이지 이동, 회원가입 및 로그인 없이 단일 페이지 내에서 부담없이 사용할 수 있는 <strong>심플함</strong>
- 간편한 공유, sns업로드 기능을 통한 <strong>자연스러운 홍보 효과</strong> 기대

### 기술적 성취

- 라우트가 없는 싱글페이지 앱인 만큼 `dynamic import` 기법을 이용하여 페이지 <strong>로딩속도를 개선</strong>했습니다.
- Smart 컴포넌트와 Dumb 컴포넌트를 구분하여 비즈니스 로직과 뷰 로직을 분리시켜 <strong>개발경험을 개선</strong>했습니다.
- `styled-components`의 props를 십분 활용하여 <strong>스타일 코드를 기능적 코드로부터 격리</strong>시키고 디자인 시스템과 유사한 환경을 구축하였습니다.
- Pagination 기법을 통해 단일 페이지 내에 자칫 무거워질 수 있는 api요청들을 최소화하여 <strong>퍼포먼스 향상</strong>을 이루었습니다.
- 상태 관리 라이브러리로 `Zustand`를 사용하여 transient한 업데이트를 지향하고 <strong>불필요한 재렌더링을 최소화</strong> 하였습니다.
- 웹, 모바일 환경에서도 이용에 불편함이 없도록 <strong>반응형 웹</strong> 디자인을 적용했습니다.

### Tech Stacks

**Language**<br>
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

**CSS**<br>
![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

**Framework**<br>
![React18](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

**State Management Tool**<br>
<a href='https://github.com/pmndrs/zustand' target="_blank"><img alt='GitHub' src='https://file.notion.so/f/s/a57b792c-ff7f-4ced-a1ee-76b277a5976f/Frame_12.svg?id=f32b858d-f1a0-4d0f-8dfb-8442db56320e&table=block&spaceId=73dffc34-6628-4f9c-af7c-57c7f167f31e&expirationTimestamp=1684727819961&signature=d1bwSs24LcJtbeXicGuVhENZ0QfDEBAKL_OsB3SH9zE&downloadName=Frame+12.svg'/></a>

**Collaboration Tool**<br>
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white)

**Version control**<br>
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

**Build Tool**<br>
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

**Deployment**<br>
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

**Others**<br>
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

## Contributors

| [🦥 Kenny](https://github.com/SeyoungCho) | [🪓Henry](https://github.com/wooleejaan) | [🎸 Ian](https://github.com/drizzle96) |
| ----------------------------------------- | ---------------------------------------- | -------------------------------------- |
### [🦥 Kenny](https://github.com/SeyoungCho)
#### 스타일 시스템 구축
- 프로젝트 전역적으로 사용할 수 있는 "마이크로 컴포넌트" 제작
- styled components를 이용하여 마이크로 컴포넌트의 prop만으로 프로젝트에 맞는 폰트, 배경색, 레이아웃 등을 스타일링 할 수 있도록 설계
<img width="400" alt="image" src="https://github.com/codeit-bootcamp-frontend/0-crypto-meter-technokings/assets/45449387/3153b3e5-9d19-4a8f-8528-ac180510da62">

#### InputBoard 컴포넌트 개발
- 사용자 입력 폼 개발 및 반응형 디자인 적용
- react-datepicker 라이브러리 커스텀 디자인 적용
- submit시 api호출 및 입력 데이터와 전역 상태 연동 등 기능 개발 
- 입력 데이터 예외 처리

<img width="440" alt="image" src="https://github.com/codeit-bootcamp-frontend/0-crypto-meter-technokings/assets/45449387/16c3a3f5-4c86-4a55-b13f-2e9d40b469b5"><br>
<img width="440" alt="image" src="https://github.com/codeit-bootcamp-frontend/0-crypto-meter-technokings/assets/45449387/acd85a36-2ca9-4617-aa8e-6ed487cbebe9">

#### 검색기록 기능 개발
- 로컬 스토리지를 이용하여 검색 기록 저장
- 검색기록 열람 기능 구현
- 사용자가 선택한 화폐에 맞는 기록을 보여주는 검색기록 필터링 기능 구현
- 검색기록 삭제 기능 구현

<img width="400" alt="image" src="https://github.com/codeit-bootcamp-frontend/0-crypto-meter-technokings/assets/45449387/7f86ec0e-92bd-4f7b-92da-7404e7ccec4d">

<img width="340" alt="image" src="https://github.com/codeit-bootcamp-frontend/0-crypto-meter-technokings/assets/45449387/b4d49da5-3723-45f7-a76c-37a82df297c1">


#### 전역 상태 관리
- 전역으로 관리할 상태 정의 및 카테고리별로 분류
- zustand를 사용하여 카테고리별 store 개발
- 상태에 따른 액션 정의 및 개발
- api요청을 통해 받아온 코인 정보 캐싱 로직 구현

<hr/>

### [🪓Henry](https://github.com/wooleejaan)
#### 인터페이스 설계
- 컴포넌트별 필요한 props, state, 함수, 구독할 전역 상태 정의
- 컴포넌트별 필요한 api 선택

<img width="500" alt="image" src="https://github.com/codeit-bootcamp-frontend/0-crypto-meter-technokings/assets/45449387/6defe772-43ca-4396-bbae-e74f44f389f2">


#### 필요한 api 설계
- coinGecko api문서를 참고하여 기능별로 필요한 api 정리
- 호출할 api별 필요한 파라미터 정의

<img width="500" alt="image" src="https://github.com/codeit-bootcamp-frontend/0-crypto-meter-technokings/assets/45449387/c6ec58a8-fa57-4b28-a390-2c6249c8c0cf">

#### Chart 컴포넌트 개발
- recharts 라이브러리를 이용하여 프로젝트에 맞는 커스텀 디자인 적용
- api 호출로 받아온 차트 데이터 가공
- 선택한 기간별로 다른 데이터를 적용하여 서로 다른 차트 렌더링 구현
- dynamic import기법을 통한 차트 컴포넌트 lazy loading 구현
- Suspense 컴포넌트를 이용하여 차트 데이터를 불러오는 동안 로딩 애니메이션 적용
- ErrorBoundary 컴포넌트를 이용한 예외 처리

![ezgif-3-5900a7f40f](https://github.com/codeit-bootcamp-frontend/0-crypto-meter-technokings/assets/45449387/6b66b25d-0997-4660-9ee5-37c3235abba6)

#### sns 공유, 링크 복사 기능 개발
- 카카오톡 공유 기능 구현
- 페이스북 게시물 공유 기능 구현
- 링크 복사 기능 구현

<img width="425" alt="image" src="https://github.com/codeit-bootcamp-frontend/0-crypto-meter-technokings/assets/45449387/b87af8af-4c26-422c-89f9-8a78781bc226">

#### 페이지 레이아웃 개발
- 컴포넌트 조립 및 전체 페이지 레이아웃 구성

<hr/>

### [🎸 Ian](https://github.com/drizzle96)

#### 공통 컴포넌트 개발
- 칩, 버튼, select, 가격 변동 폭 UI 컴포넌트 개발
<img width="400" alt="image" src="https://github.com/codeit-bootcamp-frontend/0-crypto-meter-technokings/assets/45449387/304a7d77-512a-4097-aabb-acd9e101fc59">

#### Gnb 컴포넌트 개발
- Gnb 컴포넌트 레이아웃 구성 
- 반응형 디자인 적용
- 화폐 변경, 초기화, 검색기록 UI 개발

<img width="300" alt="image" src="https://github.com/codeit-bootcamp-frontend/0-crypto-meter-technokings/assets/45449387/96592e1a-2355-4ccd-85c2-cfa43a365153">

#### Table 컴포넌트 개발
- semantic 태그를 사용하여 접근성과 SEO를 고려한 UI 구현
- 반응형 디자인 적용
- 뷰포트 사이즈 실시간 변동에도 대응할 수 있는 pagination 로직 설계 및 구현
- 전역 상태에 캐싱된 코인 정보 활용으로 api요청 최소화
<img width="338" alt="image" src="https://github.com/codeit-bootcamp-frontend/0-crypto-meter-technokings/assets/45449387/5617a0b4-d961-4b09-bf7f-13b5779a3e43">

![테이블](https://github.com/codeit-bootcamp-frontend/0-crypto-meter-technokings/assets/45449387/729e1189-35f0-43ce-93b0-66c782919a0f)


#### api 요청 기능 개발
- axios 라이브러리 사용
- axios 커스텀 인스턴스 생성
- interceptor 사용 
- 원활한 비동기 데이터 요청 및 처리를 위한 useAsync 커스텀 훅 개발
