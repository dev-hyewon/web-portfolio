//브라우저 지원 여부 확인
export const checkBrowser = () => {
  const { userAgent } = navigator;
  const isChromium = userAgent.includes('Chrome');
  const isSafari = userAgent.includes('Safari');

  return isChromium || isSafari;
};
