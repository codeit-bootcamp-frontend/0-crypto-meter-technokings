/**
 * @param {*} money: 돈의 액수(number)
 * @returns 화면에 보이는 금액 형식의 스트링으로 변환하여 리턴
 */
const formatMoneyToString = (money, unit) => {
  const formattedMoney = new Intl.NumberFormat().format(money);
  if (unit === "krw") {
    return `${formattedMoney}원`;
  }
  return `$${formattedMoney}`;
};

export default formatMoneyToString;
