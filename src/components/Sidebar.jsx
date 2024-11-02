import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faUsers, faCreditCard, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { name: 'Home', icon: faHome },
    { name: 'Webinars', icon: faUsers },
    { name: 'Billing', icon: faCreditCard },
    { name: 'User Management', icon: faUser },
    { name: 'Settings', icon: faCog },
  ];

  return (
    <div className="relative">
      <button
        className="lg:hidden p-4 text-gray-600"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} className="w-6 h-6" />
      </button>

      <div
        className={`fixed lg:static top-0 left-0 h-full w-[18rem] bg-white border-r-2 border-gray-200 py-6 pl-6 pr-3 flex flex-col transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300 ease-in-out z-20`}
      >
        <div className="mb-10 flex justify-between">
          <button className="py-2 px-3 text-sm rounded-lg bg-[#00264F] text-white">
            Webinar <span className="text-gray-500">.gg</span>
          </button>
          <img className="w-10 h-10 rounded-lg" src="/image.avif" alt="" />
        </div>
        <nav className="space-y-6 text-gray-400 text-lg">
          {menuItems.map((item) => (
            <div
              key={item.name}
              onClick={() => {
                setActiveItem(item.name);
                setIsSidebarOpen(false);
              }}
              className={`flex justify-between items-center px-3 rounded-lg py-3 cursor-pointer ${
                activeItem === item.name ? 'bg-[#E2E6EA] text-blue-900 font-semibold' : ''
              }`}
            >
              <span>{item.name}</span>
              <a href="#" className="flex items-center space-x-3">
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`w-6 h-6 ${activeItem === item.name ? 'text-blue-900' : 'text-gray-400'}`}
                />
              </a>
            </div>
          ))}
        </nav>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;