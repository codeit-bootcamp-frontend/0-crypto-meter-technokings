/* =========================== 인터페이스 구조/전역 상태 관리 =========================== */
/** [각 컴포넌트별 인터페이스 구조]
 *   userStore: {},
 *   coinStore: {},
 *   props: {},
 *   state: {},
 *   func: {},
 */

// zustand로 관리한 전역 상태 store
const coinListStore = {
  /**
   * 페이지 내 화폐 단위 변경 2가지 선택지
   * - GET 요청 (GET `/coins/markets?vs_currency={currency}`)
   * - convert 함수 실행 후 coinCurrency 업데이트
   */
  coinCurrency: "krw" || "usd",
  coinList: [],
  coinListPageOffset: 0, // 페이지네이션 시 사용할 오프셋

  getCoinList: () => {
    // GET `/coins/markets`
  },

  set: () => {},
};
const userSelectStore = {
  selectedCoinId: "", // 유저가 선택한 코인 id
  historyDate: "", // 유저가 선택한 날짜 (for 입력보드, 차트)
  userSearchedCoinList: [],
  selectMoney: 0, // 유저 선택 금액 (for 입력보드, 차트)
  /**
   * 과거 가격과 현재 가격을 가지고 계산?
   * GET `coins/${selectedCoinId}/history?date=${historyDate}`
   * - response.data.market_data.current_price.krw
   * - response.data.market_data.current_price.usd
   */
  selectMoneyToCalc: 0, // 유저 선택 금액을 계산한 금액 (for 입력보드, 차트)
  isUpperSelectMoneyToCalc: false, // 계산 금액이 지금이라면 올랐는지 떨어졌는지

  getUserCharData: () => {
    // GET /coins/${selectedCoinId}/market_chart
  },

  set: () => {},
};

/* =========================== HEADER =========================== */
/* =========================== HEADER - smart =========================== */
const IResetInputBoardButton = {
  // 클릭 시, 모든 데이터 초기화 (년월일, 입력금액, 선택코인)
  userStore: userSelectStore,
};
const IChangeCurrencyButton = {
  /**
   * 클릭 시, 화폐 단위 변경(krw <=> usd) : 입력보드, 차트, 테이블의 금액 단위, 검색기록
   *  - 입력 보드
   *    - 입력보드 헤딩 문장 : 원 <=> $
   *    - 입력보드 금액 입력란 : 원(₩) <=> USD($)
   *    - 입력보드 자동완성 금액 버튼 : 원 <=> USD
   *  - 차트
   *    - 차트 헤딩 문장 : ₩ <=> $
   *    - 차트 내부 picker : ₩ <=> $ (예를 들어, $333,333,333)
   *  - 테이블
   *    - 테이블 내 금액(가격, 총 시가, 24시간 거래량) : ₩ <=> $
   *    - 검색 기록 : 원 <=> $
   */
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
const IResetInputBoardButtonContainer = {
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
const IChangeCurrencyButtonContainer = {
  props: {
    isToggle: IChangeCurrencyButton.state.isToggle,
    currency: IChangeCurrencyButton.coinStore.coinCurrency,
    handleClickChangeCurrency: IChangeCurrencyButton.coinStore.set({
      coinCurrency: "krw" || "usd",
    }),
    handleClickToggleCurrency: IChangeCurrencyButton.state.setIsToggle,
  },
};
const IShowSearchHistoryButtonContainer = {
  props: {
    isClick: IShowSearchHistoryButton.state.isClick,
    handleClickDropDown: () => IShowSearchHistoryButton.state.setIsClick,
    handleClickClearAllSearchHistory: IShowSearchHistoryButton.userStore.set({
      userSearchedCoinList: [],
    }),
  },
};

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
const IInputBoardContainer = {
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
const IChartContainer = {
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
const ITableContainer = {
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

// export는 무시해주세요.
export {
  IResetInputBoardButton,
  IChangeCurrencyButton,
  IShowSearchHistoryButton,
  IResetInputBoardButtonContainer,
  IChangeCurrencyButtonContainer,
  IShowSearchHistoryButtonContainer,
  IInputBoard,
  IInputBoardContainer,
  IChart,
  IChartContainer,
  ITable,
  ITableContainer,
};
