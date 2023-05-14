/* =========================== 인터페이스 구조/전역 상태 관리 =========================== */
/** [인터페이스 구조]
 * - HOMEPAGE
 *    - HEADER
 *      - HEADER - smart
 *      - HEADER - dumb (~Presenter)
 *    - INPUTBOARD
 *      - INPUTBOARD - smart
 *      - INPUTBOARD - dumb (~Presenter)
 *    - CHART
 *      - CHART - smart
 *      - CHART - dumb (~Presenter)
 *    - TABLE
 *      - TABLE - smart
 *      - TABLE - dumb (~Presenter)
 */

export const INTERFACE_RULES = {
  globalState: {},
  props: {},
  state: {},
  function: {},
};

/* [전역 상태 관리] - zustand */
export const IGlobalState = {
  state: {
    selectedCoinId: "", // 사용자가 선택한 코인의 id
    setSelectedCoinId: () => {},
    /**
     * 1) GET `/coins/markets` 요청에 vs_currency로 다시 받아오거나
     * 2) 유틸 함수로 전체 변환하거나
     */
    currency: "krw" || "usd", // 전체 페이지 내 화폐 단위
    setCurrency: () => {}, // 화폐 단위로 새로 get을 요청하거나? 아니면 함수를 만들어서 별도로 변환해주거나?
    currentPageOffSet: 0, // 페이지네이션 시 사용할 페이지 카운터
    setCurrentPageOffSet: () => {},
    coinList: [], // 사용자가 불러온 코인 리스트
    setCoinList: () => {},
  },
};

/* =========================== HOMEPAGE =========================== */
export const IHomePageState = {
  state: {
    historyDate: "dd-mm-yyyy", // 유저 입력 날짜 (입력 보드, 차트)
    setHistoryDate: () => {},
    inputAmount: 0, // 유저 입력 금액 (입력 보드, 차트)
    setInputAmount: () => {},
    calcAmount: 0, // 유저 계산 금액 (입력 보드, 차트)
    setCalcAmount: () => {
      /**
       * 과거 가격과 현재 가격을 가지고 계산?
       * GET `coins/${selectedCoinId}/history?date=${historyDate}`
       * - response.data.market_data.current_price.krw
       * - response.data.market_data.current_price.usd
       */
    },
    historySearchDateList: [], // 유저 보드 검색 기록 (입력 보드, 차트)
    setHistorySearchDataList: () => {},
  },
};

/* =========================== HEADER =========================== */
/* =========================== HEADER - smart =========================== */
export const IHeader = {
  props: {
    changeHistoryDate: IHomePageState.state.setHistoryDate,
    changeInputAmount: IHomePageState.state.setInputAmount,
    changeCalcAmount: IHomePageState.state.setCalcAmount,
    updateHistorySearchList: IHomePageState.state.setHistorySearchDataList,
  },
};

export const IResetInputBoardButton = {
  // 클릭시, 데이터 초기화 (년월일, 입력금액, 선택코인)
  globalState: {
    selectedCoinId: IGlobalState.state.selectedCoinId,
    setSelectedCoinId: IGlobalState.state.setSelectedCoinId,
  },
  props: {
    changeHistoryDate: IHeader.props.changeHistoryDate,
    changeCalcAmount: IHeader.props.changeCalcAmount,
  },
  function: {
    handleResetInputData: () => {
      IResetInputBoardButton.globalState.setSelectedCoinId();
      IResetInputBoardButton.props.changeCalcAmount();
      IResetInputBoardButton.props.changeHistoryDate();
    },
  },
};
export const IChangeCurrencyButton = {
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
  globalState: {
    currency: IGlobalState.state.currency,
    setCurrency: IGlobalState.state.setCurrency,
  },
  state: {
    isToggle: true || false,
    setIsToggle: () => {},
  },
  function: {
    handleToggleCurrency: () => {
      IChangeCurrencyButton.state.setIsToggle();
    },
    handleSelectCurrency: () => {
      IChangeCurrencyButton.globalState.setCurrency();
    },
  },
};
export const IShowSearchHistoryButton = {
  props: {
    updateHistorySearchList: IHeader.props.updateHistorySearchList,
  },
  state: {
    isDown: true || false,
    setIsDown: () => {},
    isHover: true || false,
    setIsHover: () => {},
  },
  function: {
    handleShowDropDown: () => {
      IShowSearchHistoryButton.state.setIsDown();
    },
    handleClearAllSearchHistory: () => {
      IShowSearchHistoryButton.props.updateHistorySearchList([]);
    },
  },
};

/* =========================== HEADER - dumb =========================== */
export const IResetInputBoardButtonPresenter = {
  props: {
    imgSrc: "",
    handleResetInputData: IResetInputBoardButton.function.handleResetInputData,
    styleProps: {},
  },
};
export const IChangeCurrencyButtonPresenter = {
  props: {
    imgSrc: "",
    isToggle: IChangeCurrencyButton.state.isToggle,
    currency: IChangeCurrencyButton.globalState.currency,
    handleSelectCurrency: IChangeCurrencyButton.function.handleSelectCurrency,
    handleToggleCurrency: IChangeCurrencyButton.function.handleToggleCurrency,
    styleProps: {},
  },
};
export const IShowSearchHistoryButtonPresenter = {
  props: {
    isDown: IShowSearchHistoryButton.state.isDown,
    isHover: IShowSearchHistoryButton.state.isHover,
    handleCheckHover: () => IShowSearchHistoryButton.state.setIsHover,
    handleShowDropDown: IShowSearchHistoryButton.function.handleShowDropDown,
    handleClearAllSearchHistory:
      IShowSearchHistoryButton.function.handleClearAllSearchHistory,
    styleProps: {},
  },
};

/* =========================== INPUTBOARD =========================== */
/* =========================== INPUTBOARD - smart =========================== */
export const IInputBoard = {
  globalState: {
    currentPageOffSet: IGlobalState.state.currentPageOffSet,
    setCurrenPageOffSet: IGlobalState.state.setCurrentPageOffSet,
    coinList: IGlobalState.state.coinList, // 무한 스크롤 시, 리스트 업데이트
    setCoinList: IGlobalState.state.setCoinList,
    selectedCoinId: IGlobalState.state.selectedCoinId, // 목록에서 코인 선택 시 업데이트
    setSelectedCoinId: IGlobalState.state.setSelectedCoinId,
  },
  props: {
    historyDate: IHomePageState.state.historyDate,
    setHistoryDate: IHomePageState.state.setHistoryDate,
    inputAmount: IHomePageState.state.inputAmount,
    setInputAmount: IHomePageState.state.setInputAmount,
    calcAmount: IHomePageState.state.calcAmount,
    setCalcAmount: IHomePageState.state.setCalcAmount,
    historySearchDateList: IHomePageState.state.historySearchDateList,
    setHistorySearchDataList: IHomePageState.state.setHistorySearchDataList,
  },
  state: {
    isDownInputDate: true || false,
    setIsDownInputDate: () => {},
    isDownCointList: true || false,
    setIsDownCointList: () => {},
  },
  function: {
    handleChangeHistoryDate: () => {
      IInputBoard.props.setHistoryDate();
    },
    handleChangeAmount: () => {
      IInputBoard.props.setInputAmount();
    },
    handleUpdateCalcAmount: () => {
      IInputBoard.props.setCalcAmount();
      IInputBoard.props.setHistorySearchDataList();
    },
    handleShowCoinList: () => {
      IInputBoard.state.setIsDownCointList();
    },
    handleShowInputDate: () => {
      IInputBoard.state.setIsDownInputDate();
    },
    handleInfiniteScrollLoadData: () => {
      // 무한 스크롤 시, get 요청과 함께 PageOffSet 업데이트
      IInputBoard.globalState.setCurrenPageOffSet();
    },
  },
};

/* =========================== INPUTBOARD - dumb =========================== */
export const IInputBoardPresenter = {
  // 참고 : https://www.npmjs.com/package/react-datepicker
  props: {
    // date select button
    isDownInputDate: IInputBoard.state.isDownInputDate,
    handleShowInputDate: IInputBoard.function.handleShowInputDate,
    date: IInputBoard.props.historyDate,
    amount: IInputBoard.props.inputAmount,
    handleChangeHistoryDate: IInputBoard.function.handleChangeHistoryDate,
    // coinlist select button
    isDownCointList: IInputBoard.state.isDownCointList,
    handleShowCoinList: IInputBoard.function.handleShowCoinList,
    // amount select button
    handleChangeAmount: IInputBoard.function.handleChangeAmount,
    // calcAmount submit button
    handleUpdateCalcAmount: IInputBoard.function.handleUpdateCalcAmount,
    handleInfiniteScrollLoadData:
      IInputBoard.function.handleInfiniteScrollLoadData,
    styleProps: {},
  },
};

/* =========================== CHART =========================== */
/* =========================== CHART - smart =========================== */
export const IChart = {
  globalState: {
    selectedCoinId: IGlobalState.state.selectedCoinId,
    currency: IGlobalState.state.currency,
  },
  props: {
    historyDate: IHomePageState.state.historyDate,
    inputAmount: IHomePageState.state.inputAmount,
    calcAmount: IHomePageState.state.calcAmount,
  },
  state: {
    chartData: {},
    setChartData: () => {
      // GET `/coins/{selectedCoinId}/market_chart?vs_currency=krw&days=7`
    },
    isSelect: true || false,
    setIsSelect: () => {},
  },
  function: {
    handleShareMyChart: () => {
      // 카카오만 key 필요
    },
    handleChangeChartData: () => {
      IChart.state.setChartData();
    },
    handleClickButton: () => {
      IChart.state.setIsSelect();
    },
  },
};

/* =========================== CHART - dumb =========================== */
export const IChartPresenter = {
  props: {
    isUpper: IChart.props.calcAmount > 0, // 그때 샀으면 올랐을텐데 => 초록색, 아니면 => 빨간색
    chartWidth: 0, // https://recharts.org/en-US/examples/SimpleAreaChart
    chartHeight: 0,
    chartData: IChart.state.chartData,
    isSelect: IChart.state.isSelect,
    handleChangeChartData: IChart.function.handleChangeChartData,
    handleClickButton: IChart.function.handleClickButton,
    handleShareMyChart: IChart.function.handleShareMyChart,
    stylesProps: {},
  },
};

/* =========================== TABLE =========================== */
/* =========================== TABLE - smart =========================== */
export const ITable = {
  globalState: {
    setSelectedCoinId: IGlobalState.state.setSelectedCoinId,
    currency: IGlobalState.state.currency,
    currentPageOffSet: IGlobalState.state.currentPageOffSet,
    setCurrentPageOffSet: IGlobalState.state.setCurrentPageOffSet,
    coinList: IGlobalState.state.coinList,
    setCoinList: IGlobalState.state.setCoinList,
  },
  state: {
    isDesc: true || false, // 오름차순인지 내림차순인지 체크 state
    setIsDesc: () => {},
    buttonList: [], // new Array(전체 데이터 길이).fill(false) && buttonList[currentPageIndex + 1]
    setButtonList: () => {},
    currentPageIndex: 0,
    setCurrentPageIndex: () => {},
  },
  function: {
    handleLoadNextData: () => {
      // GET `/coins/markets`
      // 하단에 버튼 클릭시 데이터 받아오고, 여기서 업데이트한 페이지 번호로 UI 지정
    },
    handleClickPageButton: () => {
      ITable.state.setButtonList();
      ITable.globalState.setCurrentPageOffSet(); // currentPage를 buttonList의 index로 활용
    },
    handleClickNextButton: () => {},
    handleClickPrevButton: () => {},
    handleChangeSort: () => {
      ITable.state.setIsDesc();
    },
  },
};

/* =========================== TABLE - dumb =========================== */
export const ITablePresenter = {
  props: {
    coinList: ITable.globalState.coinList,
    currency: ITable.globalState.currency,
    isDesc: ITable.state.isDesc,
    handleChangeSort: ITable.function.handleChangeSort,
    handleLoadNextData: ITable.function.handleLoadNextData,
    buttonList: ITable.state.buttonList, // buttonList 를 기반으로 페이지 번호 UI 생성
    handleClickPageButton: ITable.function.handleClickPageButton,
    handleClickNextButton: ITable.function.handleClickNextButton,
    handleClickPrevButton: ITable.function.handleClickPrevButton,
  },
};

/** 만약 <table>를 사용한다면,
 *
 * <table>
 *  <tr onClick={handleChangeSort}> // 이벤트 위임
 *    <th>순위</th>
 *    <th>화폐이름/이미지</th>
 *    <th>가격</th>
 *    <th>총 시가</th>
 *    <th>24시간 거래량</th>
 *    <th>1시간 변동폭</th>
 *    <th>24시간 변동폭</th>
 *    <th>7일 변동폭</th>
 *  </tr>
 *  {coinList?.map(coin => {
 *    return (
 *      <tr>
 *        <td>{coin.market_cap_rank}</td>
 *        <td>{coin.name, coin.image}</td>
 *        <td>{coin.current_price}</td>
 *        <td>{coin.fully-diluted_valuation}</td>
 *        <td>{coin.total_volu}</td>
 *        <td>{coin.price_change_percentage_1h_in_currency}</td>
 *        <td>{coin.price_change_percentage_24h_in_currency}</td>
 *        <td>{coin.price_change_percentage_7d_in_currency}</td>
 *      </tr>
 *    )
 *  })}
 * </table>
 */
