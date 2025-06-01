import React, { useState } from 'react';
import { SaveIcon } from 'lucide-react';
export const Settings = ({
  darkMode
}) => {
  const [settings, setSettings] = useState({
    sipServer: '',
    username: '',
    password: '',
    port: '5060',
    outboundProxy: '',
    enableNotifications: true,
    autoAnswer: false
  });
  const handleChange = e => {
    const {
      name,
      value,
      type,
      checked
    } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    // In a real implementation, this would save the settings and configure the SIP client
    alert('Settings saved');
  };
  return <div className={`w-full h-full p-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <h2 className="text-xl font-bold mb-6">SIP Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`} htmlFor="sipServer">
            SIP Server
          </label>
          <input type="text" id="sipServer" name="sipServer" value={settings.sipServer} onChange={handleChange} className={`w-full px-3 py-2 rounded-md border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-blue-500 transition-colors`} placeholder="sip.example.com" required />
        </div>
        <div>
          <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`} htmlFor="username">
            Username
          </label>
          <input type="text" id="username" name="username" value={settings.username} onChange={handleChange} className={`w-full px-3 py-2 rounded-md border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-blue-500 transition-colors`} required />
        </div>
        <div>
          <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`} htmlFor="password">
            Password
          </label>
          <input type="password" id="password" name="password" value={settings.password} onChange={handleChange} className={`w-full px-3 py-2 rounded-md border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-blue-500 transition-colors`} required />
        </div>
        <div>
          <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`} htmlFor="port">
            Port
          </label>
          <input type="text" id="port" name="port" value={settings.port} onChange={handleChange} className={`w-full px-3 py-2 rounded-md border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-blue-500 transition-colors`} />
        </div>
        <div>
          <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`} htmlFor="outboundProxy">
            Outbound Proxy (optional)
          </label>
          <input type="text" id="outboundProxy" name="outboundProxy" value={settings.outboundProxy} onChange={handleChange} className={`w-full px-3 py-2 rounded-md border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-blue-500 transition-colors`} placeholder="proxy.example.com" />
        </div>
        <div className="flex items-center space-x-3">
          <input type="checkbox" id="enableNotifications" name="enableNotifications" checked={settings.enableNotifications} onChange={handleChange} className={`h-4 w-4 rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} text-blue-600 focus:ring-blue-500`} />
          <label className={`text-sm ${darkMode ? 'text-gray-200' : 'text-gray-700'}`} htmlFor="enableNotifications">
            Enable notifications
          </label>
        </div>
        <div className="flex items-center space-x-3">
          <input type="checkbox" id="autoAnswer" name="autoAnswer" checked={settings.autoAnswer} onChange={handleChange} className={`h-4 w-4 rounded ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} text-blue-600 focus:ring-blue-500`} />
          <label className={`text-sm ${darkMode ? 'text-gray-200' : 'text-gray-700'}`} htmlFor="autoAnswer">
            Auto-answer calls
          </label>
        </div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md flex items-center justify-center transition-colors mt-6">
          <SaveIcon size={18} className="mr-2" />
          Save Settings
        </button>
      </form>
      <div className="mt-8 space-y-4">
        <h3 className="text-lg font-semibold mb-4">About</h3>
        <a href="https://www.getlato.com" target="_blank" rel="noopener noreferrer" className={`block px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}>
          Visit getlato.com
        </a>
        <a href="https://www.getlato.com/support" target="_blank" rel="noopener noreferrer" className={`block px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}>
          Support
        </a>
        <a href="https://www.getlato.com/privacy" target="_blank" rel="noopener noreferrer" className={`block px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}>
          Privacy Policy
        </a>
        <div className={`text-center mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <p>Version 1.0.0</p>
          <p>© 2024 Lato Technologies</p>
        </div>
      </div>
    </div>;
};