import React, { useState } from 'react';
import { SaveIcon } from 'lucide-react';
export const Settings = () => {
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
  return <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-6">SIP Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sipServer">
            SIP Server
          </label>
          <input type="text" id="sipServer" name="sipServer" value={settings.sipServer} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="sip.example.com" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input type="text" id="username" name="username" value={settings.username} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input type="password" id="password" name="password" value={settings.password} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="port">
            Port
          </label>
          <input type="text" id="port" name="port" value={settings.port} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="outboundProxy">
            Outbound Proxy (optional)
          </label>
          <input type="text" id="outboundProxy" name="outboundProxy" value={settings.outboundProxy} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="proxy.example.com" />
        </div>
        <div className="mb-4 flex items-center">
          <input type="checkbox" id="enableNotifications" name="enableNotifications" checked={settings.enableNotifications} onChange={handleChange} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
          <label className="ml-2 block text-gray-700" htmlFor="enableNotifications">
            Enable notifications
          </label>
        </div>
        <div className="mb-6 flex items-center">
          <input type="checkbox" id="autoAnswer" name="autoAnswer" checked={settings.autoAnswer} onChange={handleChange} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
          <label className="ml-2 block text-gray-700" htmlFor="autoAnswer">
            Auto-answer calls
          </label>
        </div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center">
          <SaveIcon size={18} className="mr-2" />
          Save Settings
        </button>
      </form>
    </div>;
};