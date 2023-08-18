import React, { useEffect, useState } from 'react';
import Aside from './aside';
import './header.css';

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
        style={{ display: 'none' }}
      />
      <label htmlFor="menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <Aside>
        <button id="aside-close" onClick={closeMenu}>
          닫기
        </button>
      </Aside>
    </div>
  );
};

export default Header;
