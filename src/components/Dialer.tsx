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
  const handleKeyPress = key => {
    setInputValue(prev => prev + key);
  };
  const handleDelete = () => {
    setInputValue(prev => prev.slice(0, -1));
  };
  const handleCall = () => {
    if (inputValue.trim()) {
      onMakeCall(inputValue, 'audio', selectedExtension);
    }
  };
  const keypadButtons = [[{
    number: '1',
    letters: ''
  }, {
    number: '2',
    letters: 'ABC'
  }, {
    number: '3',
    letters: 'DEF'
  }], [{
    number: '4',
    letters: 'GHI'
  }, {
    number: '5',
    letters: 'JKL'
  }, {
    number: '6',
    letters: 'MNO'
  }], [{
    number: '7',
    letters: 'PQRS'
  }, {
    number: '8',
    letters: 'TUV'
  }, {
    number: '9',
    letters: 'WXYZ'
  }], [{
    number: '*',
    letters: ''
  }, {
    number: '0',
    letters: '+'
  }, {
    number: '#',
    letters: ''
  }]];
  return <div className={`h-full flex flex-col ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <button onClick={() => setShowExtensions(!showExtensions)} className={`flex items-center space-x-2 px-3 py-1 rounded-lg ${darkMode ? 'bg-gray-800 text-gray-200 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            <span>{selectedExtension.name}</span>
            <ChevronDownIcon size={16} />
          </button>
        </div>
        <input type="text" className={`w-full text-center text-3xl font-light py-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`} value={inputValue} readOnly placeholder="Enter number" />
      </div>
      <div className="flex-1 px-2">
        {keypadButtons.map((row, rowIndex) => <div key={rowIndex} className="flex justify-around mb-4">
            {row.map(button => <button key={button.number} onClick={() => handleKeyPress(button.number)} className={`w-[72px] h-[72px] rounded-full flex flex-col items-center justify-center ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-900 hover:bg-gray-100'} shadow-sm`}>
                <span className="text-3xl font-light">{button.number}</span>
                <span className="text-xs mt-1 font-medium">
                  {button.letters}
                </span>
              </button>)}
          </div>)}
      </div>
      <div className="p-4 flex justify-center space-x-4">
        <button onClick={handleCall} className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center" aria-label="Call">
          <PhoneIcon size={28} />
        </button>
        {inputValue && <button onClick={handleDelete} className={`w-16 h-16 rounded-full flex items-center justify-center ${darkMode ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-white text-gray-600 hover:bg-gray-100'}`} aria-label="Delete">
            <DeleteIcon size={24} />
          </button>}
      </div>
    </div>;
};