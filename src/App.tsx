import React, { useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Dialer } from './components/Dialer';
import { CallScreen } from './components/CallScreen';
import { Settings } from './components/Settings';
import { IncomingCall } from './components/IncomingCall';
import { Contacts } from './components/Contacts';
import { Extensions } from './components/Extensions';
import { History } from './components/History';
export function App() {
  const [activeScreen, setActiveScreen] = useState('dialer');
  const [incomingCall, setIncomingCall] = useState(null);
  const [activeCall, setActiveCall] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  // Handle navigation between screens
  const navigateTo = screen => {
    setActiveScreen(screen);
  };
  // Handle incoming call
  const handleIncomingCall = call => {
    setIncomingCall(call);
  };
  // Handle accepting call
  const handleAcceptCall = () => {
    if (incomingCall) {
      setActiveCall(incomingCall);
      setActiveScreen('call');
      setIncomingCall(null);
    }
  };
  // Handle rejecting call
  const handleRejectCall = () => {
    setIncomingCall(null);
  };
  // Handle making a call
  const handleMakeCall = (number, callType = 'audio', extension = null) => {
    setActiveCall({
      number,
      type: callType,
      extension,
      recording: true,
      startTime: new Date()
    });
    setActiveScreen('call');
  };
  // Handle ending a call
  const handleEndCall = () => {
    setActiveCall(null);
    setActiveScreen('dialer');
  };
  return <div className={`flex flex-col w-full min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50'}`}>
      <Header activeScreen={activeScreen} darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />
      <main className="flex-1 flex flex-col items-center p-4 pb-20">
        {activeScreen === 'dialer' && <Dialer onMakeCall={handleMakeCall} darkMode={darkMode} />}
        {activeScreen === 'call' && activeCall && <CallScreen call={activeCall} onEndCall={handleEndCall} darkMode={darkMode} />}
        {activeScreen === 'settings' && <Settings darkMode={darkMode} />}
        {activeScreen === 'contacts' && <Contacts darkMode={darkMode} />}
        {activeScreen === 'extensions' && <Extensions darkMode={darkMode} />}
        {activeScreen === 'history' && <History darkMode={darkMode} />}
      </main>
      <Navigation activeScreen={activeScreen} navigateTo={navigateTo} darkMode={darkMode} />
      {incomingCall && <IncomingCall call={incomingCall} onAccept={handleAcceptCall} onReject={handleRejectCall} darkMode={darkMode} />}
    </div>;
}