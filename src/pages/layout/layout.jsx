import React from 'react';
import Footer from './footer';
import Header from './header';

const Layout = (props) => {
  return (
    <div className="layout-wrapper">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
