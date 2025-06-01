import React, { useState } from 'react';
import { PhoneIcon, DeleteIcon } from 'lucide-react';
export const Dialer = ({
  onMakeCall,
  darkMode
}) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedExtension, setSelectedExtension] = useState({
    id: 1,
    name: 'Main Line',
    number: '101'
  });
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
  return <div className={`h-full flex flex-col ${darkMode ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="flex-none pt-8 pb-6 px-4">
        <input type="text" className={`w-full text-center text-5xl font-light ${darkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`} value={inputValue} readOnly placeholder="Enter number" />
      </div>
      <div className="flex-1 flex flex-col justify-center max-h-[460px]">
        {keypadButtons.map((row, rowIndex) => <div key={rowIndex} className="flex justify-around mb-4">
            {row.map(button => <button key={button.number} onClick={() => handleKeyPress(button.number)} className="w-[72px] h-[72px] rounded-full flex flex-col items-center justify-center bg-gray-800/80 text-white">
                <span className="text-3xl font-light">{button.number}</span>
                <span className="text-[10px] font-medium mt-1">
                  {button.letters}
                </span>
              </button>)}
          </div>)}
        <div className="flex justify-center space-x-4 mt-4">
          {!inputValue && <div className="w-[72px] h-[72px]" /> // Spacer for empty state
        }
          <button onClick={handleCall} className="w-[72px] h-[72px] bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center">
            <PhoneIcon size={32} />
          </button>
          {inputValue && <button onClick={handleDelete} className="w-[72px] h-[72px] bg-gray-800/80 text-white rounded-full flex items-center justify-center">
              <DeleteIcon size={24} />
            </button>}
        </div>
      </div>
    </div>;
};