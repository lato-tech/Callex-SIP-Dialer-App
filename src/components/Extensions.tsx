import React, { useState } from 'react';
import { PlusIcon, TrashIcon, PhoneIcon, VideoIcon } from 'lucide-react';
export const Extensions = ({
  darkMode
}) => {
  const [extensions, setExtensions] = useState([{
    id: 1,
    name: 'Main Line',
    number: '101',
    server: 'sip.example.com'
  }, {
    id: 2,
    name: 'Sales',
    number: '102',
    server: 'sip.example.com'
  }]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newExtension, setNewExtension] = useState({
    name: '',
    number: '',
    server: ''
  });
  const handleAddExtension = e => {
    e.preventDefault();
    setExtensions([...extensions, {
      id: Date.now(),
      ...newExtension
    }]);
    setNewExtension({
      name: '',
      number: '',
      server: ''
    });
    setShowAddForm(false);
  };
  const handleDeleteExtension = id => {
    setExtensions(extensions.filter(ext => ext.id !== id));
  };
  return <div className={`w-full h-full p-4 ${darkMode ? 'text-white bg-gray-900' : 'text-gray-900 bg-gray-50'}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Extensions</h2>
        <button onClick={() => setShowAddForm(true)} className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-colors">
          <PlusIcon size={20} />
        </button>
      </div>
      <div className="space-y-3">
        {extensions.map(extension => <div key={extension.id} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm p-4`}>
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h3 className="font-semibold text-base">{extension.name}</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {extension.number}
                </p>
                <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  {extension.server}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button className={`p-2 rounded-full transition-colors ${darkMode ? 'text-green-400 hover:bg-gray-700' : 'text-green-500 hover:bg-green-50'}`} aria-label="Audio call">
                  <PhoneIcon size={18} />
                </button>
                <button className={`p-2 rounded-full transition-colors ${darkMode ? 'text-blue-400 hover:bg-gray-700' : 'text-blue-500 hover:bg-blue-50'}`} aria-label="Video call">
                  <VideoIcon size={18} />
                </button>
                <button onClick={() => handleDeleteExtension(extension.id)} className={`p-2 rounded-full transition-colors ${darkMode ? 'text-red-400 hover:bg-gray-700' : 'text-red-500 hover:bg-red-50'}`} aria-label="Delete extension">
                  <TrashIcon size={18} />
                </button>
              </div>
            </div>
          </div>)}
      </div>
      {showAddForm && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 w-full max-w-md shadow-xl`}>
            <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Add New Extension
            </h3>
            <form onSubmit={handleAddExtension} className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  Name
                </label>
                <input type="text" value={newExtension.name} onChange={e => setNewExtension({
              ...newExtension,
              name: e.target.value
            })} className={`w-full p-2 rounded-md border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-blue-500 transition-colors`} required />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  Number
                </label>
                <input type="text" value={newExtension.number} onChange={e => setNewExtension({
              ...newExtension,
              number: e.target.value
            })} className={`w-full p-2 rounded-md border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-blue-500 transition-colors`} required />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  Server
                </label>
                <input type="text" value={newExtension.server} onChange={e => setNewExtension({
              ...newExtension,
              server: e.target.value
            })} className={`w-full p-2 rounded-md border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-blue-500 transition-colors`} required />
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button type="button" onClick={() => setShowAddForm(false)} className={`px-4 py-2 text-sm font-medium rounded-md ${darkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors`}>
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
                  Add Extension
                </button>
              </div>
            </form>
          </div>
        </div>}
    </div>;
};