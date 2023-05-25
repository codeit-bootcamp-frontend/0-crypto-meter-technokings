/**
 *
 * @param {number} 금액
 * @returns
 * @explain 금액이 소수점 3자리 이상의 작을 때는 첫 유효숫자까지만 표시하고, 그 외엔 화폐 포맷으로 만들어 반환
 */
const formatMoney = (money) => {
  const threshold = 0.001;
  if (money < threshold) {
    let testMoney = money;
    let precision = 3;
    while (precision <= 10) {
      if (testMoney >= threshold) {
        return money.toFixed(precision);
      }
      testMoney *= 10;
      precision += 1;
    }
    return 0;
  }
  return new Intl.NumberFormat().format(money);
};

/**
 * @param {Number} money - 돈의 액수
 * @param {string} currnecy - 화폐 단위, "krw", "usd" 의 string 형식
 * @returns {string} 화면에 보이는 금액 형식의 스트링으로 변환하여 리턴
 */
const formatMoneyToString = (money, currnecy, isFrontDeco = false) => {
  if (!money && money !== 0) return "-";
  const formattedMoney = formatMoney(money);
  if (currnecy === "krw") {
    return isFrontDeco ? `₩${formattedMoney}` : `${formattedMoney}원`;
  }
  return `$${formattedMoney}`;
};

export default formatMoneyToString;
