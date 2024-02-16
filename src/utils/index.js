/**
 * 숫자를 원단위로 바꿔주는 함수
 * @param {원단위로 바꿀 숫자 파라미터} num
 * @returns 원단위로 바뀐 string 반환값
 */
export const LocalString = (num) => {
  return num.toLocaleString("ko-KR");
};

/**
 * 시간에 대해 현재시간을 기준으로 n분전 등으로 표기하는 함수
 * @param {시간을 나타내는 string 타입} date
 * @returns
 */
export const elapsedTime = (date) => {
  const start = new Date(date);
  const end = new Date();

  const diff = (end - start) / 1000;

  const times = [
    { name: "년", milliSeconds: 60 * 60 * 24 * 365 },
    { name: "개월", milliSeconds: 60 * 60 * 24 * 30 },
    { name: "일", milliSeconds: 60 * 60 * 24 },
    { name: "시간", milliSeconds: 60 * 60 },
    { name: "분", milliSeconds: 60 },
  ];

  for (const value of times) {
    const betweenTime = Math.floor(diff / value.milliSeconds);

    if (betweenTime > 0) {
      return `${betweenTime}${value.name} 전`;
    }
  }
  return "방금 전";
};
