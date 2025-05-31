import React from 'react';
import { PhoneIcon, UsersIcon, HistoryIcon, Settings2Icon, GridIcon } from 'lucide-react';
export const Navigation = ({
  activeScreen,
  navigateTo,
  darkMode
}) => {
  const navItems = [{
    id: 'dialer',
    icon: PhoneIcon,
    label: 'Dialer'
  }, {
    id: 'contacts',
    icon: UsersIcon,
    label: 'Contacts'
  }, {
    id: 'history',
    icon: HistoryIcon,
    label: 'History'
  }, {
    id: 'extensions',
    icon: GridIcon,
    label: 'Extensions'
  }, {
    id: 'settings',
    icon: Settings2Icon,
    label: 'Settings'
  }];
  return <nav className={`fixed bottom-0 left-0 right-0 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <div className="flex justify-around items-center px-2 py-2">
        {navItems.map(({
        id,
        icon: Icon,
        label
      }) => <button key={id} onClick={() => navigateTo(id)} className={`flex flex-col items-center p-2 rounded-lg transition-colors
              ${activeScreen === id ? darkMode ? 'text-blue-400' : 'text-blue-600' : darkMode ? 'text-gray-400' : 'text-gray-600'}
              hover:${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <Icon size={20} />
            <span className="text-xs mt-1">{label}</span>
          </button>)}
      </div>
    </nav>;
};