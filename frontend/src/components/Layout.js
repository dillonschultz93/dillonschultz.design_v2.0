import React from 'react';
import Nav from './Nav.js';
import Footer from './Footer.js';

const Layout = ({ children }) => (
  <div className="relative pushToBottom">
    <div className="pb-80">
      <Nav />
      <main className="md:mt-32 mt-12 mb-4">{children}</main>
      <Footer />
    </div>
  </div>
);

export default Layout;
