import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SNS_Img } from '@/components/icons8';
import { INFO_EMAIL, INPUT_ID_MENU, INPUT_ID_SUB_MENU_LANG } from '@/constant';
import profileImg from '@assets/image/google_profile.jpg';
import veloglogoImg from '@assets/image/velog_logo.svg';
import LanguageIcon from '@assets/svg/icon_language.svg';
import './aside.css';

const Aside = ({ on }) => {
  const { t } = useTranslation();
  const [onLanguageMemu, setOnLanguageMemu] = useState(false);
  const GOOGLE_MAPS_URL = `https://www.google.com/maps/place/${t(
    'location_seoul'
  ).replace(' ', '+')}`;

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
        <h3
          dangerouslySetInnerHTML={{
            __html: t('junior_developer', { name: t('lhw') }),
          }}
        />
        <address className="address-info">
          <a data-icon="📧" title="Email" href={`mailto:${INFO_EMAIL}`}>
            <span>{INFO_EMAIL}</span>
          </a>
          <a data-icon="🏠" title="Google Maps" href={GOOGLE_MAPS_URL}>
            <span>{t('location_seoul')}</span>
          </a>
        </address>
        <address className="sns-link">
          <a
            href="https://velog.io/@dev-hyewon"
            title={t('go_to', { siteName: 'Velog' })}
          >
            <img src={veloglogoImg} alt="velog"></img>
          </a>
          <a
            href="https://github.com/dev-hyewon"
            title={t('go_to', { siteName: 'Github' })}
          >
            {SNS_Img('github')}
          </a>
        </address>
      </header>
      <dl>
        <dt>
          <a data-icon="📃" href="#main-section-intro">
            {t('section_title_introduction')}
          </a>
        </dt>
        <dt>
          <a data-icon="📂" href="#main-section-skill">
            {t('section_title_tech')}
          </a>
        </dt>
        <dt>
          <a data-icon="📂" href="#main-section-project">
            {t('section_title_work')}
          </a>
        </dt>
        <dt>
          <a data-icon="📃" href="#main-section-education">
            {t('section_title_education')}
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
            <span>{t('language_settings')}</span>
          </label>
        </dt>
      </dl>
      <footer>
        <label id="aside-close" htmlFor={INPUT_ID_MENU}>
          {t('btn_close')}
        </label>
      </footer>
    </aside>
  );
};

export default Aside;
