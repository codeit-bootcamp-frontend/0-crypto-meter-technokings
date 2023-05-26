import { produce } from "immer";
import { create } from "zustand";

const coinStore = (set, get) => ({
  coinDB: {},
  /**
   * @param {number} pagiNationNum
   * @param {string} currency
   * @returns {boolean} 인자로 받은 페이지네이션 넘버에 해당하는 페이지네이션이 coinDB에 있는지 여부를 반환
   */
  checkCache: (pageNum, currency) => {
    if (pageNum === 0) return true;
    const { coinDB } = get();
    if (`${currency}_${pageNum}` in coinDB) return true;
    return false;
  },
  /**
   *
   * @param {number} pageNum slice할 페이지(180개 단위) 번호
   * @param {string} currency 화폐 단위
   * @param {number} startIdx 페이지 slice의 시작 인덱스
   * @param {number} length 가져올 페이지 slice의 길이
   * @returns 페이지 번호에서 시작 인덱스부터 길이에 해당하는 페이지 슬라이스를 반환
   */
  getPageSlice: (pageNum, currency, startIdx, length) => {
    const { coinDB } = get();
    return coinDB[`${currency}_${pageNum}`].slice(startIdx, startIdx + length);
  },
  /**
   * @param {coinObject[]} coinList 180개 코인 객체가 담긴 배열
   * @param {number} pageNum coinDB에 저장할 페이지(180개 단위) 번호
   * @param {string} currency 화폐 단위
   * @description 파라미터로 받은 정보를 coinDB에 저장
   * @example addPageToCache(newCoinListFromApiCall, 3, selectedCurrency)->"krw_3":[...]으로 DB에 저장
   */
  addPageToCache: (coinList, pageNum, currency) => {
    set(
      produce((draft) => {
        // eslint-disable-next-line no-param-reassign
        draft.coinDB[`${currency}_${pageNum}`] = coinList;
      })
    );
  },
});

const useCoinStore = create(coinStore);
export default useCoinStore;
