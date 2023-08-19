import React from 'react';
import { SNS_Img } from '@/components/icons8';
import profileImg from '@assets/image/google_profile.jpg';
import veloglogoImg from '@assets/image/velog_logo.svg';
import './aside.css';

const Aside = ({ children }) => {
  return (
    <aside>
      <header>
        <figure>
          <img
            src={profileImg}
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          ></img>
        </figure>
        <h4>Junior Developer. 이혜원</h4>
        <address className="sns-link">
          <a href="https://velog.io/@dev-hyewon" title="Velog 바로가기">
            <img src={veloglogoImg} alt="velog"></img>
          </a>
          <a href="https://github.com/dev-hyewon" title="Github 바로가기">
            {SNS_Img('github')}
          </a>
        </address>
      </header>
      <dl>
        <dt>
          <a data-icon="📃" href="#main-section-intro">
            자기소개
          </a>
        </dt>
        <dt>
          <a data-icon="📂" href="#main-section-skill">
            기술 스택
          </a>
        </dt>
        <dt>
          <a data-icon="📂" href="#main-section-project">
            프로젝트
          </a>
        </dt>
        <dt>
          <a data-icon="📃" href="#main-section-education">
            학력/이력
          </a>
        </dt>
      </dl>
      {children}
    </aside>
  );
};

export default Aside;
