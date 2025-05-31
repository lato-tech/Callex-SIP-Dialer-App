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
        return 'Callex';
      case 'contacts':
        return 'Contacts';
      case 'history':
        return 'Call History';
      case 'extensions':
        return 'Extensions';
      case 'settings':
        return 'Settings';
      default:
        return 'Callex';
    }
  };
  return <header className={`w-full ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="px-4 py-3">
        <div className="flex justify-between items-center">
          <div>
            <h1 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {getTitle()}
            </h1>
            {activeScreen === 'dialer' && <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                by Lato Technologies
              </p>}
          </div>
          <button onClick={onToggleDarkMode} className={`p-2 rounded-full ${darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`} aria-label={darkMode ? 'Enable light mode' : 'Enable dark mode'}>
            {darkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
          </button>
        </div>
      </div>
    </header>;
};