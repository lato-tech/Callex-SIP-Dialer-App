import React from 'react';
import { PhoneIcon, PhoneIncomingIcon, PhoneOutgoingIcon, VideoIcon } from 'lucide-react';
export const History = ({
  darkMode
}) => {
  const callHistory = [{
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
  }];
  const getIcon = (type, callType) => {
    if (type === 'incoming') return <PhoneIncomingIcon size={18} className="text-green-500" />;
    if (type === 'outgoing' && callType === 'audio') return <PhoneOutgoingIcon size={18} className="text-blue-500" />;
    if (callType === 'video') return <VideoIcon size={18} className="text-purple-500" />;
    return <PhoneIcon size={18} />;
  };
  return <div className={`w-full max-w-md mx-auto ${darkMode ? 'text-white' : ''}`}>
      <div className="space-y-2">
        {callHistory.map(call => <div key={call.id} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-4`}>
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