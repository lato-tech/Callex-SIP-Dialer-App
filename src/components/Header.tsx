import React from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';
export const Header = ({
  activeScreen,
  darkMode,
  onToggleDarkMode
}) => {
  const getTitle = () => {
    switch (activeScreen) {
      case 'dialer':
        return 'Calliex';
      case 'contacts':
        return 'Contacts';
      case 'history':
        return 'Call History';
      case 'extensions':
        return 'Extensions';
      case 'settings':
        return 'Settings';
      default:
        return 'Calliex';
    }
  };
  return <header className={`w-full ${darkMode ? 'bg-gray-800' : 'bg-blue-600'} text-white shadow-md`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">{getTitle()}</h1>
          <button onClick={onToggleDarkMode} className="p-2 rounded-full hover:bg-opacity-20 hover:bg-white" aria-label={darkMode ? 'Enable light mode' : 'Enable dark mode'}>
            {darkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </button>
        </div>
      </div>
    </header>;
};