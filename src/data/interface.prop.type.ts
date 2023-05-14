/* =========================== HEADER =========================== */
interface IHeader {
  changeHistoryDate: () => void;
  changeInputAmount: () => void;
  changeCalcAmount: () => void;
  updateHistorySearchList: () => void;
}
interface IResetInputBoardButton {
  changeHistoryDate: () => void;
  changeCalcAmount: () => void;
  // stylesProps: object,
}
interface IShowSearchHistoryButton {
  updateHistorySearchList: () => void;
  // stylesProps: object,
}
interface IResetInputBoardButtonPresenter {
  imgSrc: string;
  handleResetInputData: () => void;
  // styleProps: object;
}
interface IChangeCurrencyButtonPresenter {
  imgSrc: string;
  isToggle: boolean;
  currency: string;
  handleSelectCurrency: () => void;
  handleToggleCurrency: () => void;
  // styleProps: object;
}
interface IShowSearchHistoryButtonPresenter {
  isDown: boolean;
  isHover: boolean;
  handleCheckHover: () => void;
  handleShowDropDown: () => void;
  handleClearAllSearchHistory: () => void;
  // styleProps: object;
}

/* =========================== INPUTBOARD =========================== */
interface IInputBoard {
  historyDate: string;
  setHistoryDate: () => void;
  inputAmount: number;
  setInputAmount: () => void;
  calcAmount: number;
  setCalcAmount: () => void;
  historySearchDateList: object[];
  setHistorySearchDataList: () => void;
  // styleProps: object;
}
interface IInputBoardPresenter {
  isDownInputDate: boolean;
  handleShowInputDate: () => void;
  date: string;
  amount: number;
  handleChangeHistoryDate: () => void;
  isDownCointList: boolean;
  handleShowCoinList: () => void;
  handleChangeAmount: () => void;
  handleUpdateCalcAmount: () => void;
  handleInfiniteScrollLoadData: () => void;
  // styleProps: object;
}

/* =========================== CHART =========================== */
interface IChart {
  historyDate: string;
  inputAmount: number;
  calcAmount: number;
  // styleProps: object;
}
interface IChartPresenter {
  isUpper: boolean;
  chartWidth: number;
  chartHeight: number;
  chartData: number[][];
  isSelect: boolean;
  handleChangeChartData: () => void;
  handleClickButton: () => void;
  handleShareMyChart: () => void;
  // stylesProps: object,
}

/* =========================== TABLE =========================== */
interface ITable {
  isDesc: boolean;
  setIsDesc: () => void;
  buttonList: boolean[];
  setButtonList: () => void;
  currentPageIndex: number;
  setCurrentPageIndex: () => void;
  // stylesProps: object,
}
interface ITablePresenter {
  coinList: object[];
  currency: string;
  isDesc: boolean;
  handleChangeSort: () => void;
  handleLoadNextData: () => void;
  buttonList: boolean[];
  handleClickPageButton: () => void;
  handleClickNextButton: () => void;
  handleClickPrevButton: () => void;
  // stylesProps: object,
}
