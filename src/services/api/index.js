import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_COINGECKO_BASE_URL,
  headers: { "x-cg-pro-api-key": import.meta.env.VITE_COINGECKO_API_KEY },
  timeout: 5000,
});

instance.interceptors.response.use(
  (response) => {
    const { data } = response;
    return data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Axios API를 사용하여 전역 암호화폐 시장 정보를 가져오는 함수
 *
 * @returns {Promise} - 전역 암호화폐 시장 정보를 담고 있는 Promise 객체
 */
const AxiosGlobal = () => {
  return instance.request({ url: "/global" });
};

/**
 * Axios API를 사용하여 암호화폐 시장 정보를 가져오는 함수
 *
 * @param {string} - 시장 정보를 조회할 통화
 * @param {number} - 페이지당 표시할 암호화폐 수
 * @param {number} - 조회할 페이지 번호
 * @param {boolean[]} [includesPriceChange=[true, true, true]] - (옵셔널)가격 변동 정보를 포함할지 여부의 배열
 *   - 인덱스 0: 1시간 가격 변동 포함 여부
 *   - 인덱스 1: 24시간 가격 변동 포함 여부
 *   - 인덱스 2: 7일 가격 변동 포함 여부
 * @returns {Promise} - 암호화폐 시장 정보를 담고 있는 Promise 객체
 */
const AxiosMarkets = async (
  currency,
  coinsPerPage,
  pageNum,
  includesPriceChange = [true, true, true]
) => {
  const unitPriceChange = ["1h", "24h", "7d"];
  let priceChangeQuery = "";
  for (let i = 0; i < unitPriceChange.length; i += 1) {
    priceChangeQuery += includesPriceChange[i] && `${unitPriceChange[i]}%2C`;
  }

  return instance.request({
    url: `/coins/markets?vs_currency=${currency}&per_page=${coinsPerPage}&page=${pageNum}&price_change_percentage=${priceChangeQuery}`,
  });
};

/**
 * Axios API를 사용하여 특정 암호화폐의 시장 차트 정보를 가져오는 함수
 *
 * @param {string} - 시장 차트 정보를 조회할 암호화폐 식별자
 * @param {string} - 통화
 * @param {string} - 조회할 기간
 * @returns {Promise} - 암호화폐 시장 차트 정보를 담고 있는 Promise 객체
 */
const AxiosMarketChart = async (coinId, currency, days) => {
  return instance.request({
    url: `/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`,
  });
};

/**
 * Axios API를 사용하여 특정 암호화폐의 특정 날짜의 정보를 가져오는 함수
 *
 * @param {string} - 암호화폐 식별자
 * @param {string} - 조회할 날짜(ex. "21-05-2023")
 * @returns {Promise} - 암호화폐 정보를 담고 있는 Promise 객체
 */
const AxiosHistory = async (coinId, date) => {
  return instance.request({
    url: `/coins/${coinId}/history?date=${date}`,
  });
};

/**
 * AAxios API를 사용하여 암호화폐 검색 결과를 가져오는 함수
 *
 * @param {string} - 검색할 암호화폐 이름의 일부 또는 티커
 * @returns {Promise} - 암호화폐 검색 결과를 담고 있는 Promise 객체
 */
const AxiosSearch = async (query) => {
  return instance.request({
    url: `/search?query=${query}`,
  });
};

export {
  AxiosGlobal,
  AxiosMarkets,
  AxiosMarketChart,
  AxiosHistory,
  AxiosSearch,
};
