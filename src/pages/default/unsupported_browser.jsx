import React from 'react';
import logo_naver_whale from '@assets/image/Naver_whale_logo.png';
import logo_samsung_internet from '@assets/image/Samsung_Internet_logo.svg.png';
import '@pages/default/unsupported_browser.css';

const UnsuppotedBrowser = () => {
  return (
    <div className='center'>
      <h2>지원되지 않는 브라우저입니다.</h2>
      크로미움 계열의 브라우저 또는 사파리로 접속 바랍니다.
      <br />
      아래와 같은 브라우저를 추천합니다.
      <dl className='browserList'>
        <dd>
          <img
            src="https://img.icons8.com/color/48/chrome--v1.png"
            alt="chrome--v1"
          />
          크롬 - Chrome
        </dd>
        <dd>
          <img
            src="https://img.icons8.com/color/48/ms-edge-new.png"
            alt="ms-edge-new"
          />
          엣지 - Edge
        </dd>
        <dd>
          <img src={logo_naver_whale} alt='logo_naver_whale'/>
          네이버 웨일 - Naver Whale
        </dd>
        <dd>
          <img src={logo_samsung_internet} alt='logo_samsung_internet'/>
          삼성 인터넷 - Samsung Internet
        </dd>
        <dd>
          <img
            src="https://img.icons8.com/color/48/safari--v1.png"
            alt="safari--v1"
          />
          사파리 - Safari
        </dd>
      </dl>
      <span>
        icons by <a href="https://icons8.com">Icons8</a>
      </span>
    </div>
  );
};

export default UnsuppotedBrowser;
