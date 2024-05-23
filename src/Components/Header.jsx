import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const menuItems = [
    {
      title: 'Home',
      key: '/',
    },
    {
      title: 'Projects',
      key: '/projects',
    },
  ];

  const pathname = window.location.pathname;

  return (
    <div className="text-white font-mont fixed top-0 left-0 right-0 z-50">
      <div className="flex bg-theme justify-between items-center p-2 shadow-lg">
        <div className="flex justify-between items-center w-full">
          <Link to="/">
            <h1 className="text-4xl font-semibold hover:text-yellow-500 cursor-pointer">Yaniv</h1>
          </Link>
        </div>

        <div className="flex">
          {menuItems.map((item) => (
            <li
              key={item.key}
              className={`list-none mx-5 px-5 ${item.key === pathname && 'bg-white text-black rounded-md'}`}
            >
              <Link to={item.key}>{item.title}</Link>
            </li>
          ))}
        </div>
      </div>

      {showMenu && (
        <div className="md:hidden flex flex-col items-start justify-start w-full mt-5">
          {menuItems.map((item) => (
            <li
              key={item.key}
              className={`list-none mt-5 ${item.key === pathname && 'bg-white text-black rounded-md px-5'}`}
            >
              <Link to={item.key}>{item.title}</Link>
            </li>
          ))}
        </div>
      )}
    </div>
  );
}

export default Header;
