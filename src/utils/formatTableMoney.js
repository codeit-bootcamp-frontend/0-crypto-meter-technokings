/**
 * @param {*} money: 돈의 액수(number)
 * @returns 테이블에 보이는 금액 형식의 스트링으로 변환하여 리턴
 */
const formatTableMoney = (money, unit) => {
  if (!money) return "";

  const formattedMoney = new Intl.NumberFormat().format(money);
  if (unit === "krw") {
    return `￦${formattedMoney}`;
  }
  if (unit === "usd") {
    return `$${formattedMoney}`;
  }
  return `${formattedMoney}`;
};

export default formatTableMoney;
