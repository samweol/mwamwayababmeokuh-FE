/**
 * post 목업 데이터
 */
export const postData = [
  {
    key: 1,
    userName: "삼월",
    artist: "루시",
    updatedAt: "12m",
    content:
      "세상이 끝나도 너와 나는 같이 놀 수 있을 거야 세상이 끝나도 오늘 하루는 절대 잊지 못할 거야",
    images: [],
    liked: true,
  },
  {
    key: 2,
    userName: "둥둥",
    artist: "태연",
    updatedAt: "1m",
    content: "To.X 노래 진짜 좋아요",
    images: [],
    liked: true,
  },
  {
    key: 3,
    userName: "삼월",
    artist: "루시",
    updatedAt: "2m",
    content: "루시 콘서트 언제해 ?",
    images: [],
    liked: true,
  },
];

/**
 * 바텀 모달창 메뉴 리스트 목업 데이터
 */
export const menuData = [
  {
    key: 1,
    label: "삭제하기",
    onClickHandler: () => {},
  },
  {
    key: 2,
    label: "수정하기",
    onClickHandler: () => {},
  },
];

/**
 * 유저데이터
 */
export const userData = {
  uid: 3,
  nickname: "삼월",
  email: "samweol@test.com",
  bio: null,
  role: "general",
  artistDTOList: [
    {
      aid: 1,
      name: "김태연",
    },
    {
      aid: 2,
      name: "김효연",
    },
    {
      aid: 3,
      name: "티파니",
    },
  ],
};
