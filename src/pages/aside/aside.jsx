import React, { useEffect, useState } from 'react';
import { SNS_Img } from '@/components/icons8';
import { INPUT_ID_MENU, INPUT_ID_SUB_MENU_LANG } from '@/constant';
import profileImg from '@assets/image/google_profile.jpg';
import veloglogoImg from '@assets/image/velog_logo.svg';
import LanguageIcon from '@assets/svg/icon_language.svg';
import './aside.css';

const Aside = ({ on }) => {
  const [onLanguageMemu, setOnLanguageMemu] = useState(false);

  useEffect(() => {
    if (!on) {
      setOnLanguageMemu(false);
    }
  }, [on]);

  const toggleSubMemu = (e, setter) => {
    const { target } = e;
    setter(target.checked);
  };

  return (
    <aside id="default-aside">
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
        <dt>
          <input
            type="checkbox"
            id={INPUT_ID_SUB_MENU_LANG}
            checked={onLanguageMemu}
            onChange={(e) => toggleSubMemu(e, setOnLanguageMemu)}
            style={{ display: 'none' }}
          />
          <label htmlFor={INPUT_ID_SUB_MENU_LANG}>
            <img src={LanguageIcon} width="24px" />
            <span>Language</span>
          </label>
        </dt>
      </dl>
      <footer>
        <label id="aside-close" htmlFor={INPUT_ID_MENU}>
          닫기
        </label>
      </footer>
    </aside>
  );
};

export default Aside;
