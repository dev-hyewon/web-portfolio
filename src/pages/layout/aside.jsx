import React from 'react';
import profileImg from '@assets/image/google_profile.jpg';
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
