/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
import { useState } from "react";

/**
 * 비동기 함수를 처리하고 해당 함수의 실행 결과와 상태를 관리하는 커스텀 훅
 *
 * @param {function} asyncFunction - 비동기 함수
 * @returns {object} - 데이터, 로딩 상태, 에러, 비동기 함수 호출을 관리하는 객체
 * @example
 * const { data, loading, error, callAsyncFunction: fetchGlobalData} = useAsync(AxiosSearch);
 * @expmple fetch 함수 사용: (async () => {await fetchGlobalData();})();
 */
const useAsync = (asyncFunction) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const callAsyncFunction = async (...args) => {
    setLoading(true);
    setError(null);
    try {
      const result = await asyncFunction(...args);
      setData(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, callAsyncFunction };
};

export default useAsync;
