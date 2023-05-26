import { useState, useEffect } from "react";

const useMediaQuery = (breakpoint) => {
  /**
   * 주어진 breakpoint 보다 화면이 작을 경우 match 를 true 로 초기화 시킨다
   */
  const [mediaQuery, setMediaQuery] = useState({
    matches: window.innerWidth < breakpoint,
    media: "",
  });

  useEffect(() => {
    /**
     * window.matchMedia 에 쿼리를 전달하여 받은 mediaQueryList 를 가져오고
     * change event handler 를 달아서 주어진 미디어 쿼리를 기반해서 viewport 가 breakpoint 사이에서 변화가 있다면
     * 콜백 함수로 주어진 handleChangeMedia 를 호출한다
     */
    const mediaQueryList = matchMedia(`(max-width: ${breakpoint}px)`);

    const handleChangeMedia = (e) => {
      setMediaQuery(e);
    };

    mediaQueryList.addEventListener("change", handleChangeMedia);

    return () => {
      mediaQueryList.removeEventListener("change", handleChangeMedia);
    };
  }, [breakpoint]);

  return {
    mediaQuery,
  };
};

export default useMediaQuery;
