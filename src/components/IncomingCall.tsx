import React from 'react';
import { PhoneIcon, PhoneOffIcon } from 'lucide-react';
export const IncomingCall = ({
  call,
  onAccept,
  onReject
}) => {
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 m-4">
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-3 animate-pulse">
            <span className="text-2xl font-bold text-blue-600">
              {call.number ? call.number.charAt(0).toUpperCase() : '?'}
            </span>
          </div>
          <h2 className="text-xl font-bold">{call.number || 'Unknown'}</h2>
          <p className="text-gray-500">Incoming call</p>
        </div>
        <div className="flex justify-center space-x-6">
          <button onClick={onReject} className="bg-red-500 hover:bg-red-600 text-white rounded-full p-4" aria-label="Reject call">
            <PhoneOffIcon size={24} />
          </button>
          <button onClick={onAccept} className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4" aria-label="Accept call">
            <PhoneIcon size={24} />
          </button>
        </div>
      </div>
    </div>;
};