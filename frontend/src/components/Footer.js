import React from 'react';

const Footer = () => (
  <footer className="text-gray-700 text-center absolute w-full bottom-0 mb-14">
    <div className="container border-t border-indigo-100 py-8">
      <p>&copy; {new Date().getFullYear()}, Dillon Schultz</p>
      <p>Made with Gatsby & 🍕</p>
      <p className="text-small">
        The cool blob on the home page was inspired by the work of{' '}
        <a
          className="link"
          href="https://twitter.com/georgedoescode"
          target="_blank"
          rel="noreferrer"
        >
          @georgedoescode
        </a>
        .
      </p>
    </div>
  </footer>
);

export default Footer;
