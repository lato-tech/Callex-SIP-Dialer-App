import React, { useState } from 'react';
import { SearchIcon } from 'lucide-react';
export const Contacts = ({
  darkMode
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [contacts] = useState([{
    id: 1,
    name: 'John Doe',
    number: '101',
    email: 'john@example.com'
  }, {
    id: 2,
    name: 'Jane Smith',
    number: '102',
    email: 'jane@example.com'
  }]);
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchQuery.toLowerCase()) || contact.number.includes(searchQuery));
  return <div className={`w-full max-w-md mx-auto ${darkMode ? 'text-white' : ''}`}>
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-4 mb-4`}>
        <div className="relative">
          <input type="text" placeholder="Search contacts..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className={`w-full pl-10 pr-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'}`} />
          <SearchIcon size={20} className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
        </div>
      </div>
      <div className="space-y-2">
        {filteredContacts.map(contact => <div key={contact.id} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-4`}>
            <h3 className="font-semibold">{contact.name}</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {contact.number}
            </p>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {contact.email}
            </p>
          </div>)}
      </div>
    </div>;
};