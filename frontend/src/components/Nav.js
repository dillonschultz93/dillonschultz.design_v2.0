import React from 'react';
import { Link } from 'gatsby';

const Nav = () => (
  <nav className="blur-bg border-l border-r md:border-b md:border-t-0 border-t border-indigo-100 px-4 py-3 md:rounded-b-2xl md:rounded-t-none rounded-t-2xl fixed left-0 md:top-0 md:bottom-auto bottom-0 w-full z-50">
    <ul className="container px-0 font-bold text-gray-800 flex flex-row items-center justify-between">
      <Link
        className="flex flex-col items-center p-1 bg-transparent rounded-lg hover:text-indigo-500 focus:text-indigo-500 transition-all duration-200 cursor-pointer text-sm box-border w-full"
        to="/"
        activeClassName="bg-indigo-000 text-indigo-500"
      >
        <svg
          className="fill-current"
          width="18"
          height="18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.29289 1.89644c.39053-.39053 1.02369-.39053 1.41422 0l6.57319 6.57322c.2929.29289.2929.76777 0 1.06066s-.7677.29289-1.0606 0L15 9.31065V14.75c0 .5523-.4477 1-1 1H4c-.55228 0-1-.4477-1-1V9.31065l-.21967.21967c-.29289.29289-.76777.29289-1.06066 0s-.29289-.76777 0-1.06066l6.57322-6.57322zm-3.5 5.62132c-.18753.18753-.29289.44189-.29289.7071V14.25h9V8.22486c0-.26521-.1054-.51957-.2929-.7071L9 3.31065 4.79289 7.51776z"
            fill="inherit"
          />
        </svg>
        Home
      </Link>
      <Link
        className="flex flex-col items-center p-1 bg-transparent rounded-lg hover:text-indigo-500 focus:text-indigo-500 transition-all duration-200 cursor-pointer text-sm box-border w-full"
        to="/about"
        activeClassName="bg-indigo-000 text-indigo-500"
      >
        <svg
          className="fill-current"
          width="18"
          height="18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.75575 9.75c-2.77377.5641-5.24967 2.15-5.25574 4.5L1.5 14.2587V15.75h15v-1.5c-.0061-2.35-2.482-3.9359-5.2558-4.5-.6804.2973-1.44127.4637-2.2442.4637-.80293 0-1.56377-.1664-2.24425-.4637zm6.57695 2.3273c1.1881.6719 1.6635 1.4441 1.6673 2.1727H3.00002c.00373-.7286.47921-1.5008 1.66727-2.1727C5.84383 11.4118 7.45673 11.0216 9 11.0216c1.5433 0 3.1562.3902 4.3327 1.0557zM9 7.5c1.2426 0 2.25-1.00736 2.25-2.25S10.2426 3 9 3C7.75736 3 6.75 4.00736 6.75 5.25S7.75736 7.5 9 7.5zm3.75-2.25C12.75 7.32107 11.0711 9 9 9 6.92893 9 5.25 7.32107 5.25 5.25 5.25 3.17893 6.92893 1.5 9 1.5c2.0711 0 3.75 1.67893 3.75 3.75z"
            fill="inherit"
          />
        </svg>
        About
      </Link>
      <Link
        className="flex flex-col items-center p-1 bg-transparent rounded-lg hover:text-indigo-500 focus:text-indigo-500 transition-all duration-200 cursor-pointer text-sm box-border w-full"
        to="/blog"
        activeClassName="bg-indigo-000 text-indigo-500"
      >
        <svg
          className="fill-current"
          width="18"
          height="18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.5 3.75c0-.41421.33579-.75.75-.75h13.5c.4142 0 .75.33579.75.75v6.75c0 .1989-.079.3897-.2197.5303l-3.75 3.75C12.3897 14.921 12.1989 15 12 15H2.25c-.41421 0-.75-.3358-.75-.75V3.75zM3 4.5v9h8.25v-3c0-.4142.3358-.75.75-.75h3V4.5H3z"
            fill="inherit"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.75 6.75c0-.41421.33579-.75.75-.75h9c.4142 0 .75.33579.75.75s-.3358.75-.75.75h-9c-.41421 0-.75-.33579-.75-.75zM3.75 9.75c0-.41421.33579-.75.75-.75h5.25c.4142 0 .75.33579.75.75 0 .4142-.3358.75-.75.75H4.5c-.41421 0-.75-.3358-.75-.75z"
            fill="inherit"
          />
        </svg>
        Blog
      </Link>
      <Link
        className="flex flex-col items-center p-1 bg-transparent rounded-lg hover:text-indigo-500 focus:text-indigo-500 transition-all duration-200 cursor-pointer text-sm box-border w-full"
        to="/projects"
        activeClassName="bg-indigo-000 text-indigo-500"
      >
        <svg
          className="fill-current"
          width="18"
          height="18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.25 3.75c0-.82843.67157-1.5 1.5-1.5h4.5c.8284 0 1.5.67157 1.5 1.5v1.125H15c.8284 0 1.5.67157 1.5 1.5V13.5c0 .8284-.6716 1.5-1.5 1.5H3c-.82843 0-1.5-.6716-1.5-1.5V6.375c0-.82843.67157-1.5 1.5-1.5h2.25V3.75zm1.5 1.125h4.5V3.75h-4.5v1.125zM3 6.375V13.5h12V6.375H3z"
            fill="inherit"
          />
        </svg>
        Projects
      </Link>
      <Link
        className="flex flex-col items-center p-1 bg-transparent rounded-lg hover:text-indigo-500 focus:text-indigo-500 transition-all duration-200 cursor-pointer text-sm box-border w-full"
        to="/contact"
        activeClassName="bg-indigo-000 text-indigo-500"
      >
        <svg
          className="fill-current"
          width="18"
          height="18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.55693 10.5H15v-6H3v7.2974L4.55693 10.5zM1.5 3.75c0-.41421.33579-.75.75-.75h13.5c.4142 0 .75.33579.75.75v7.5c0 .4142-.3358.75-.75.75H5.1l-2.36986 1.9749c-.4885.4071-1.23014.0597-1.23014-.5762V3.75z"
            fill="inherit"
          />
        </svg>
        Contact
      </Link>
    </ul>
  </nav>
);

export default Nav;
