import React, { useEffect, useState } from 'react';
import profileImg from '@assets/image/google_profile.jpg';
import './styles.css';

const Header = () => {
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (on) {
      document.body.style = 'overflow: hidden';
      return () => (document.body.style = 'overflow: auto');
    }
  }, [on]);

  const toggleMenu = () => setOn(!on);
  const closeMenu = () => setOn(false);

  return (
    <div id="header-wrapper">
      <input
        type="checkbox"
        id="menu-icon"
        checked={on}
        onChange={toggleMenu}
      />
      <label htmlFor="menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <nav id="menu-content">
        <header>
          <img src={profileImg}></img>
          <h4>Junior Developer. 이혜원</h4>
        </header>
        <dl>
          <dt>
            <a data-icon="📃" href="#main-section-intro" onClick={closeMenu}>
              자기소개
            </a>
          </dt>
          <dt>
            <a data-icon="📁" href="#main-section-skill" onClick={closeMenu}>
              기술 스택
            </a>
          </dt>
          <dt>
            <a data-icon="📁" href="#main-section-project" onClick={closeMenu}>
              프로젝트
            </a>
          </dt>
          <dt>
            <a
              data-icon="📃"
              href="#main-section-education"
              onClick={closeMenu}
            >
              학력/이력
            </a>
          </dt>
          <dt>
            <button onClick={closeMenu}>취소</button>
          </dt>
        </dl>
      </nav>
    </div>
  );
};

export default Header;
