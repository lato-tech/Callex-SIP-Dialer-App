import React, { useState } from 'react';
import { PhoneIcon, PhoneIncomingIcon, PhoneOutgoingIcon, VideoIcon, SearchIcon } from 'lucide-react';
export const History = ({
  darkMode
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [callHistory] = useState([{
    id: 1,
    number: '101',
    name: 'John Doe',
    type: 'incoming',
    callType: 'audio',
    timestamp: '2024-01-20 14:30',
    duration: '5:23'
  }, {
    id: 2,
    number: '102',
    name: 'Jane Smith',
    type: 'outgoing',
    callType: 'video',
    timestamp: '2024-01-20 13:15',
    duration: '12:07'
  }]);
  const filteredHistory = callHistory.filter(call => call.name.toLowerCase().includes(searchQuery.toLowerCase()) || call.number.includes(searchQuery));
  const getIcon = (type, callType) => {
    if (type === 'incoming') return <PhoneIncomingIcon size={18} className="text-green-500" />;
    if (type === 'outgoing' && callType === 'audio') return <PhoneOutgoingIcon size={18} className="text-blue-500" />;
    if (callType === 'video') return <VideoIcon size={18} className="text-purple-500" />;
    return <PhoneIcon size={18} />;
  };
  return <div className={`relative h-full w-full ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="sticky top-0 p-4 bg-inherit">
        <div className="relative">
          <input type="text" placeholder="Search call history..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className={`w-full pl-10 pr-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'}`} />
          <SearchIcon size={20} className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
        </div>
      </div>
      <div className="p-4 space-y-2">
        {filteredHistory.map(call => <div key={call.id} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm p-4`}>
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-opacity-10">
                  {getIcon(call.type, call.callType)}
                </div>
                <div>
                  <h3 className="font-semibold">{call.name}</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {call.number}
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    {call.timestamp}
                  </p>
                </div>
              </div>
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {call.duration}
              </span>
            </div>
          </div>)}
      </div>
    </div>;
};