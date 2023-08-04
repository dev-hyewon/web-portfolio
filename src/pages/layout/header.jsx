import React, { useEffect, useState } from 'react';
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
        <div>
          <h4>Junior Developer. 이혜원</h4>
        </div>
        <dl>
          <dt>section1</dt>
          <dt>section2</dt>
          <dt>section3</dt>
          <dt>section4</dt>
          <dt>section5</dt>
          <dt>section6</dt>
          <dt>section7</dt>
          <dt>
            <button onClick={closeMenu}>취소</button>
          </dt>
        </dl>
      </nav>
    </div>
  );
};

export default Header;
