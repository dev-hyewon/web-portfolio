import React from 'react';
import './styles.css';

const EducationArticle = () => {
  return (
    <article id="main-section-education" className="section-wrapper">
      <header>
        <h1>
          <a data-icon="📃" href="#main-section-education">
            학력 및 이력
          </a>
        </h1>
        <h4>IT 전공 주니어 개발자입니다.</h4>
      </header>
      <section id="univercity-article">
        <div>
          <h3>서울여자대학교</h3>
          <h5>2017.03 - 2021.02</h5>
          <details open>
            <summary>디지털미지어학과</summary>
            <ul>
              <li>제1전공 : 공학사</li>
              <li>총 이수 학점:</li>
            </ul>
          </details>
          <details open>
            <summary>정보보호학과</summary>
            <ul>
              <li>제2전공 : 공학사</li>
              <li>암호학개론</li>
            </ul>
          </details>
          <details open>
            <summary>소프트웨어융합학과</summary>
            <ul>
              <li>부전공</li>
              <li>인공지능</li>
              <li>알고리즘</li>
            </ul>
          </details>
        </div>
      </section>
      <section>
        <h3>자격증</h3>
        <ul>
          <li>정보처리기사</li>
        </ul>
      </section>
    </article>
  );
};

export default EducationArticle;
