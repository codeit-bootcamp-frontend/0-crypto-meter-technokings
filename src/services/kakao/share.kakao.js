const createKaKaoShareButton = () => {
  // TODO: content.imageUrl에 이미지 넣어도 출력 안 되는 문제

  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(import.meta.env.VITE_KAKAO_KEY);
    }
    kakao.Link.createDefaultButton({
      container: "#kakao-link-btn",
      objectType: "feed",
      content: {
        title: "Cryptometer Technokings",
        description: "#거물급투자자 #카카오 #Cryptometer",
        imageUrl: "https://i.ibb.co/tsdspp7/favicon.webp",
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      social: {
        likeCount: 9999,
        commentCount: 9999,
        sharedCount: 9999,
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        {
          title: "앱으로 보기",
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  }
};

export default createKaKaoShareButton;
