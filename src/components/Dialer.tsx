import React, { useState } from 'react';
import { PhoneIcon, DeleteIcon, VideoIcon, ChevronDownIcon } from 'lucide-react';
export const Dialer = ({
  onMakeCall,
  darkMode
}) => {
  const [inputValue, setInputValue] = useState('');
  const [showExtensions, setShowExtensions] = useState(false);
  const [selectedExtension, setSelectedExtension] = useState({
    id: 1,
    name: 'Main Line',
    number: '101'
  });
  const [callType, setCallType] = useState('audio');
  const extensions = [{
    id: 1,
    name: 'Main Line',
    number: '101'
  }, {
    id: 2,
    name: 'Sales',
    number: '102'
  }, {
    id: 3,
    name: 'Support',
    number: '103'
  }];
  const handleKeyPress = key => {
    setInputValue(prev => prev + key);
  };
  const handleDelete = () => {
    setInputValue(prev => prev.slice(0, -1));
  };
  const handleCall = () => {
    if (inputValue.trim()) {
      onMakeCall(inputValue, callType, selectedExtension);
    }
  };
  const toggleExtensions = () => {
    setShowExtensions(!showExtensions);
  };
  const selectExtension = extension => {
    setSelectedExtension(extension);
    setShowExtensions(false);
  };
  return <div className={`w-full max-w-md mx-auto ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6`}>
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <button onClick={toggleExtensions} className={`flex items-center space-x-2 px-3 py-1 rounded-lg ${darkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            <span>{selectedExtension.name}</span>
            <ChevronDownIcon size={16} />
          </button>
          <div className="flex space-x-2">
            <button onClick={() => setCallType('audio')} className={`p-2 rounded-lg ${callType === 'audio' ? darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600' : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
              <PhoneIcon size={20} />
            </button>
            <button onClick={() => setCallType('video')} className={`p-2 rounded-lg ${callType === 'video' ? darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600' : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
              <VideoIcon size={20} />
            </button>
          </div>
        </div>
        <input type="text" className={`w-full text-2xl text-center font-medium py-3 border-b-2 ${darkMode ? 'bg-gray-800 text-white border-gray-600 focus:border-blue-500' : 'bg-white text-gray-800 border-gray-200 focus:border-blue-500'}`} value={inputValue} readOnly placeholder="Enter number" />
      </div>
      {showExtensions && <div className={`absolute z-10 mt-1 w-48 rounded-md shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
          {extensions.map(ext => <button key={ext.id} onClick={() => selectExtension(ext)} className={`block w-full text-left px-4 py-2 text-sm ${darkMode ? 'text-gray-200 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'} ${selectedExtension.id === ext.id ? darkMode ? 'bg-gray-600' : 'bg-gray-100' : ''}`}>
              {ext.name} ({ext.number})
            </button>)}
        </div>}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map(key => <button key={key} onClick={() => handleKeyPress(key)} className={`aspect-square flex items-center justify-center text-2xl font-medium rounded-full p-4 ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-50 text-gray-800 hover:bg-gray-100'}`}>
            {key}
          </button>)}
      </div>
      <div className="flex justify-center mt-6 space-x-4">
        <button onClick={handleCall} className={`${callType === 'video' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-green-500 hover:bg-green-600'} text-white rounded-full p-4`} aria-label={`${callType === 'video' ? 'Video Call' : 'Audio Call'}`}>
          {callType === 'video' ? <VideoIcon size={24} /> : <PhoneIcon size={24} />}
        </button>
        <button onClick={handleDelete} className={`rounded-full p-4 ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`} aria-label="Delete">
          <DeleteIcon size={24} />
        </button>
      </div>
    </div>;
};