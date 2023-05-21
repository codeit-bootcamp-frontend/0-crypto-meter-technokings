/**
 * @param {Date} date
 * @param {boolean} isQuery "dd-MM-yyyy"의 쿼리스트링에 이용할 형식으로 포맷하게 해주는 옵션
 * @returns Date 객체를 받아 "yyyy년 MM월 dd일" 또는 "dd-MM-yyyy" 이라는 string으로 포맷하여 반환
 */
const formatDateToString = (date, isQuery = false) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return isQuery ? `${day}-${month}-${year}` : `${year}년 ${month}월 ${day}일`;
};

export default formatDateToString;
