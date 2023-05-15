import PropTypes from "prop-types";

// IResetInputBoardButtonContainer.PropTypes
const IResetInputBoardButtonContainer = {
  handleClickResetButton: PropTypes.func,
};
// IChangeCurrencyButtonContainer.PropTypes
const IChangeCurrencyButtonContainer = {
  isToggle: PropTypes.bool,
  currency: PropTypes.string,
  handleClickChangeCurrency: PropTypes.func,
  handleClickToggleCurrency: PropTypes.func,
};
// IShowSearchHistoryButtonContainer.PropTypes
const IShowSearchHistoryButtonContainer = {
  isClick: PropTypes.bool,
  handleClickDropDown: PropTypes.func,
  handleClickClearAllSearchHistory: PropTypes.func,
};
// IInputBoardContainer.PropTypes
const IInputBoardContainer = {
  currency: PropTypes.string,
  isClickToggleInputDate: PropTypes.bool,
  handleClickInputData: PropTypes.func,
  userSelectDate: PropTypes.string,
  userSelectMoney: PropTypes.number,
  handleClickChangeHistoryDate: PropTypes.func,
  isClickToggleCoinList: PropTypes.bool,
  handleClickCoinList: PropTypes.func,
  handleClickChangeMoney: PropTypes.func,
  handleClickUpdateCalcedMoney: PropTypes.func,
  handleScrollLoadData: PropTypes.func,
};
// IChartContainer.PropTypes
const IChartContainer = {
  isChartData: PropTypes.bool,
  currentButton: PropTypes.array,
  currentChartDataIndex: PropTypes.number,
  isUpper: PropTypes.bool,
  chartWidth: PropTypes.number,
  chartHeight: PropTypes.number,
  chartData: PropTypes.object,
  handleClickChipButton: PropTypes.func,
  handleClickShareMyChart: PropTypes.func,
  handleClickChangeChartData: PropTypes.func,
};
// ITableContainer.PropTypes
const ITableContainer = {
  coinList: PropTypes.array,
  currency: PropTypes.string,
  isDesc: PropTypes.bool,
  buttonList: PropTypes.array,
  currentPageIndx: PropTypes.number,
  handleClickChangeSort: PropTypes.func,
  handleClickNextButton: PropTypes.func,
  handleClickPrevButton: PropTypes.func,
};

export {
  IResetInputBoardButtonContainer,
  IChangeCurrencyButtonContainer,
  IShowSearchHistoryButtonContainer,
  IInputBoardContainer,
  IChartContainer,
  ITableContainer,
};
