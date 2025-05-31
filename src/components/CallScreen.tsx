import React, { useEffect, useState } from 'react';
import { PhoneOffIcon, MicOffIcon, MicIcon, VolumeXIcon, Volume2Icon } from 'lucide-react';
export const CallScreen = ({
  call,
  onEndCall
}) => {
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setDuration(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const formatTime = seconds => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  const toggleSpeaker = () => {
    setIsSpeakerOn(!isSpeakerOn);
  };
  return <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col items-center mb-8">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-3">
          <span className="text-2xl font-bold text-blue-600">
            {call.number ? call.number.charAt(0).toUpperCase() : '?'}
          </span>
        </div>
        <h2 className="text-xl font-bold">{call.number || 'Unknown'}</h2>
        <p className="text-gray-500">Call in progress</p>
        <p className="text-lg font-medium mt-2">{formatTime(duration)}</p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <button onClick={toggleMute} className={`flex flex-col items-center ${isMuted ? 'text-red-500' : 'text-gray-700'}`}>
          <div className="bg-gray-100 p-3 rounded-full mb-1">
            {isMuted ? <MicOffIcon size={24} /> : <MicIcon size={24} />}
          </div>
          <span className="text-sm">Mute</span>
        </button>
        <button onClick={toggleSpeaker} className={`flex flex-col items-center ${isSpeakerOn ? 'text-blue-500' : 'text-gray-700'}`}>
          <div className="bg-gray-100 p-3 rounded-full mb-1">
            {isSpeakerOn ? <Volume2Icon size={24} /> : <VolumeXIcon size={24} />}
          </div>
          <span className="text-sm">Speaker</span>
        </button>
        <button onClick={onEndCall} className="flex flex-col items-center text-red-500">
          <div className="bg-red-100 p-3 rounded-full mb-1">
            <PhoneOffIcon size={24} />
          </div>
          <span className="text-sm">End</span>
        </button>
      </div>
    </div>;
};