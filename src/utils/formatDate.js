/**
 * @param {Date} date
 * @returns Date 객체를 받아 "yyyy년 MM월 dd일" 이라는 string으로 포맷하여 반환
 */
const formatDateToString = (date) => {
  return `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일 `;
};

export default formatDateToString;
