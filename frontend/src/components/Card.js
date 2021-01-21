import React from 'react';
import { Link } from 'gatsby';

const Card = ({ children, href, outside }) =>
  outside ? (
    <a
      className="bg-white border block border-indigo-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out cursor-pointer mb-6"
      href={href}
    >
      {children}
    </a>
  ) : (
    <Link
      className="bg-white border block border-indigo-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out cursor-pointer mb-6"
      to={href}
    >
      {children}
    </Link>
  );
export default Card;
