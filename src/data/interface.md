# API

- 검색 기록은 로컬 스토리지에서 관리한다.
- 원/달러 변경 버튼의 경우 사용자가 여러번 반복해서 누를 수 있으므로 원/달러는 한번씩 요청 받으면 데이터로 저장해서 불필요한 api 요청을 막는다.
- 입력보드의 자식 요소들은 React.memo로 재렌더링을 막도록 한다.
- dumb 안에는 UI 상태를 갖는 smart가 존재할 수 있다.

### 처음 페이지 로딩 시

response에 있는 data.active_cryptocurrencies에 담겨 있는 코인들의 목록 개수를 가져와서 마지막 페이지를 표현해주기 위한 용도로 쓴다.

- `GET /global`

### 테이블에서 페이지 버튼 클릭 시

페이지 단위는 6개씩 보여주고(1~6, 7~12, ...),
한번의 api 요청으로 180개(페이지당 30개 \* 6개)를 가져와서 db에 저장한다.
저장할 때는 pageNum을 key 값으로, value로는 각 페이지당 30개의 데이터들을 저장한다. (pageNum으로 요청할 때는 \*10을 해줘야 한다.)

- 예를 들어, `[1: [30개], 2: [30개], ...]`

참고로 데이터 정렬은 각 페이지 단위 별로 우리가 따로 해주면 된다.

- `GET /coins/markets`
  - ?vs_currency=${coinCurrency}
  - &per_page=180
  - &page=${pageNum \* 10}
  - &price_change_percentage=1h%2C24h%2C7d

```js
// 24시간 거래량 하단에 들어가는 단위는
// (total_volume / current_price)로 계산해주면 된다.
const MARKETS_DATA_MOCK_USD = [
  {
    market_cap_rank: 1, // 화폐 순위
    id: "bitcoin", // 화폐 id
    symbol: "btc", // 화폐 symbol
    name: "Bitcoin", // 화폐 이름
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579", // 화폐 이미지
    current_price: 26995, // 화폐 가격
    high_24h: 27642, // 고점
    low_24h: 26970, // 저점
    fully_diluted_valuation: 566727402279, // 총 시가
    total_volume: 14996835454, // 24시간 거래량
    price_change_percentage_1h_in_currency: -0.8644832216494487, // 1시간 변동폭
    price_change_percentage_24h_in_currency: -0.5311508724747781, // 24시간 변동폭
    price_change_percentage_7d_in_currency: -2.1389131199195823, // 7일 변동폭
  },
];
```

### 입력보드에서 코인 목록 스크롤 시

- 일단 처음에는 1-6페이지(180개) 가져온 걸로 스크롤해서 볼 수 있게 구현해주고
- 나중에 시간이 남으면, 검색 기능 추가 (type ahead search 구현 가능하고, debounce 처리하면 api 요청도 줄일 수 있다.)
  - `GET /coins/search`

### 차트에 들어갈 코인 데이터 (전체/1년/1개월/1주/1일)

prices 프로퍼티 안에 `[date, price]` 형태의 여러 개의 차트 데이터가 담겨서 온다.

- `GET /coins/${selectedCoinId}/market_chart`
  - ?vs_currency={coinCurrency}
  - &days={max || 365 || 30 || 7 || 1}
  - interval을 daily로 쿼리 넘길지는 고민해보기

```js
const MARKET_CHART_MOCK_USD = {
  prices: [
    [1367107200000, 135.3],
    [1367193600000, 141.96],
    [1367280000000, 135.3],
    [1367366400000, 117],
    [1367452800000, 103.43],
    [1367539200000, 91.01],
    // ...
  ],
};
```

### 입력보드에서 '오늘 얼마가 되었을까?' 버튼 클릭시

1. date에 넘겨줄 데이터는 dd-MM-yyyy 형식이어야 한다.
2. (현재 가격 - 과거 가격 ) / 과거가격 \* 100을 사용자가 입력한 금액에 적용해주기.
3. 계산한 결과는 검색 기록으로 관리되는데, 검색 기록은 localStorage로 관리한다. (통화 단위 변경해도 기록은 변경되지 않는다.)

과거 데이터 (사용자가 입력한 날짜)

- `GET /coins/${selectedCoinId}/history?date={historyDate}`

현재 데이터 (계산을 위해 필요한 현재 데이터)

- `GET /coins/${selectedCoinId}/history?date={currentDate}`

사용할 속성은 다음과 같다.

```js
response.data.market_data.current_price.krw,
  response.data.market_data.current_price.usd;
```

# interface 설계 (대략적인 흐름만)

### zustand로 관리할 store

```js
const coinListStore = create((set) => ({
  coinCurrency: "krw" || "usd",
  coinList: { coinCurrency_pageNum: [{}, {}, {}], ... },
  dropdownCoinOptionList: [],
  // {
  //   "krw_1" : [
  //     {
  //       id: "bitcoin",
  //       ...
  //     },
  //     {...},
  //     ...
  //   ],
  //   "usd_1" : [],
  //   "krw_2" ; [],
  //   ...
  // }
  // coinList 사용 시: coinList[`${coinCurrency}_${pageNum}`]
  // 1. store coinList에 `${coinCurrency}_${pageNum}` 가 key값으로 있는지 확인
  // 2. 있으면 그대로 사용
  // 3. 없으면 store의 getCoinList 호출하고 리턴 결과를 사용
  getCoinList: () => {
    // GET /coins/markets
  },
  getDropdownList: ()=>{
    // coinList중 처음에 불러운 6페이지 데이터를 하나의 배열로 병합하여 반환
  },
  getCoinListLength: () => {
    // GET /global/
  },
  set: () => {},
}));
```

```js
const userSelectStore = create((set) => ({
  selectedCoinId: "", // 유저가 선택한 코인 id
  historyDate: "", // 유저가 선택한 날짜 (for 입력보드, 차트)
  selectMoney: 0, // 유저 선택 금액 (for 입력보드, 차트)
  selectMoneyToCalc: 0, // 유저 선택 금액을 계산한 금액 (for 입력보드, 차트)
  isUpperSelectMoneyToCalc: false, // 계산 금액이 지금이라면 올랐는지 떨어졌는지
  getUserCharData: () => {
    // GET /coins/:id/market_chart
  },
  getCoinHistory: () => {
    // GET /coins/:id/history
  },
  set: () => {},
}));
```

### GNB

```js
/* =========================== HEADER =========================== */
/* =========================== HEADER - smart =========================== */
const IResetInputBoardButton = {
  // 클릭 시, 모든 데이터 초기화 (년월일, 입력금액, 선택코인)
  userStore: userSelectStore,
};
const IChangeCurrencyButton = {
  coinStore: coinListStore,
  state: {
    isToggle: true || false,
    setIsToggle: () => {},
  },
};
const IShowSearchHistoryButton = {
  userStore: userSelectStore,
  state: {
    isClick: true || false,
    setIsClick: () => {},
  },
};

/* =========================== HEADER - dumb =========================== */
const IResetInputBoardButtonPresenter = {
  props: {
    handleClickResetButton: IResetInputBoardButton.userStore.set({
      selectedCoinId: "",
      historyDate: "",
      selectMoney: 0,
      selectMoneyToCalc: 0,
      userSearchedCoinList: [],
    }),
  },
};
const IChangeCurrencyButtonPresenter = {
  props: {
    isToggle: IChangeCurrencyButton.state.isToggle,
    currency: IChangeCurrencyButton.coinStore.coinCurrency,
    handleClickChangeCurrency: IChangeCurrencyButton.coinStore.set({
      coinCurrency: "krw" || "usd",
    }),
    handleClickToggleCurrency: IChangeCurrencyButton.state.setIsToggle,
  },
};
const IShowSearchHistoryButtonPresenter = {
  props: {
    isClick: IShowSearchHistoryButton.state.isClick,
    history: localStorage.getItem(),
    handleClickDropDown: () => IShowSearchHistoryButton.state.setIsClick,
    handleClickClearAllSearchHistory: IShowSearchHistoryButton.userStore.set({
      // localStorage.setItem()으로 초기화
    }),
  },
};
```

### Input board

```js
/* =========================== INPUTBOARD =========================== */
/* =========================== INPUTBOARD - smart =========================== */
const IInputBoard = {
  userStore: userSelectStore,
  coinStore: coinListStore,
  state: {
    isClickToggleInputDate: true || false,
    setIsClickToggleInputDate: () => {},
    isClickToggleCoinList: true || false,
    setIsClickToggleCoinList: () => {},
  },
  func: {
    handleClickUpdateCalcedMoney: () => {
      IInputBoard.userStore.set({
        selectMoneyToCalc: "여기에 계산된 값이 들어갑니다.",
        userSearchedCoinList: "계산한 값을 이 배열에 추가합니다.",
      });
    },
    handleScrollLoadData: () => {
      // 스크롤 시, get 요청과 함께 PageOffSet 업데이트
      IInputBoard.coinStore.set({
        coinListPageOffset: "여기에 업데이트된 Offset이 들어갑니다.",
      });
    },
  },
};
/* =========================== INPUTBOARD - dumb =========================== */
const IInputBoardPresenter = {
  // 참고 : https://www.npmjs.com/package/react-datepicker
  props: {
    // 현재 통화단위
    currency: IInputBoard.coinStore.coinCurrency,
    // 날짜 선택 버튼
    isClickToggleInputDate: IInputBoard.state.isClickToggleInputDate,
    handleClickInputData: () => IInputBoard.state.setIsClickToggleInputDate,
    userSelectDate: IInputBoard.userStore.historyDate,
    userSelectMoney: IInputBoard.userStore.selectMoney,
    handleClickChangeHistoryDate: () => {
      IInputBoard.userStore.set({
        historyDate: "선택한 날짜가 업데이트됩니다.",
      });
    },
    // 코인 목록 선택 버튼
    isClickToggleCoinList: IInputBoard.state.isClickToggleCoinList,
    handleClickCoinList: () => IInputBoard.state.setIsClickToggleCoinList,
    // 코인 구매 가격 선택 버튼
    handleClickChangeMoney: () => {
      IInputBoard.userStore.set({
        selectMoney: "변경한 금액이 업데이트됩니다.",
      });
    },
    // 그때 샀더라면 계산 버튼
    handleClickUpdateCalcedMoney: IInputBoard.func.handleClickUpdateCalcedMoney,
    handleScrollLoadData: IInputBoard.func.handleScrollLoadData,
  },
};
```

### Chat

```js
/* =========================== CHART =========================== */
/* =========================== CHART - smart =========================== */
const IChart = {
  coinStore: coinListStore,
  userStore: userSelectStore,
  state: {
    isChartData: coinListStore.coinList.lenght !== 0,
    currentChartDataIndex: 0,
    setCurrentChartDataIndex: () => {},
    chipButton: [true, false, false, false, false],
    setChipButton: () => {},
    userChartData: {}, // id값으로 GET 해와서 담기 (useEffect)
  },
  func: {
    handleClickShareMyChart: () => {
      // 카카오는 key 발급 필요?
    },
    handleClickChangeChartData: () => {
      IChart.state.setCurrentChartDataIndex();
      IChart.state.setChipButton();
      IChart.userStore.getUserCharData(); // 여기에 index에 맞는 기간 설정해서 GET 요청
    },
  },
};
/* =========================== CHART - dumb =========================== */
const IChartPresenter = {
  props: {
    isChartData: IChart.state.isChartData, // false면 dummy data 보여주기
    currentButton: IChart.state.currentButton,
    currentChartDataIndex: IChart.state.currentChartDataIndex,
    isUpper: IChart.userStore.isUpperSelectMoneyToCalc, // 그때 샀으면 올랐을텐데 => 초록색, 아니면 => 빨간색
    chartWidth: 0, // https://recharts.org/en-US/examples/SimpleAreaChart 반응형에 맞게 넘겨주기
    chartHeight: 0,
    chartData: IChart.state.userChartData,
    handleClickChipButton: () => IChart.state.setChipButton,
    handleClickShareMyChart: IChart.func.handleClickShareMyChart,
    handleClickChangeChartData: IChart.func.handleClickChangeChartData,
  },
};
```

### Table

```js
/* =========================== TABLE =========================== */
/* =========================== TABLE - smart =========================== */
const ITable = {
  coinStore: coinListStore,
  userStore: userSelectStore,
  state: {
    isDesc: true || false, // 오름차순인지 내림차순인지 체크
    setIsDesc: () => {},
    buttonList: [], // new Array(전체 데이터 길이).fill(false) && buttonList[currentPageIndex + 1]
    setButtonList: () => {},
    currentPageIndex: 0,
    setCurrentPageIndex: () => {},
  },
  func: {
    handleClickPageButton: () => {
      // 하단에 버튼 클릭시 데이터 받아오고, 여기서 업데이트한 페이지 번호로 UI 지정
      ITable.coinStore.getCoinList();
      ITable.state.setCurrentPageIndex();
    },
    handleClickNextButton: () => {},
    handleClickPrevButton: () => {},
    handleClickChangeSort: () => {},
  },
};
/* =========================== TABLE - dumb =========================== */
const ITablePresenter = {
  props: {
    coinList: ITable.coinStore.coinList,
    currency: ITable.coinStore.coinCurrency,
    isDesc: ITable.state.isDesc,
    buttonList: ITable.state.buttonList,
    currentPageIndx: ITable.state.currentPageIndex,
    handleClickChangeSort: ITable.func.handleClickChangeSort,
    handleClickNextButton: ITable.func.handleClickNextButton,
    handleClickPrevButton: ITable.func.handleClickPrevButton,
  },
};
```
