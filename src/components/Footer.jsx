import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [language, setLanguage] = useState('ENG');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '-');
  };

  return (
    <footer className="border-t border-gray-200 py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLanguage(lang => lang === 'ENG' ? 'HIN' : 'ENG')}
            className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 transition"
          >
            {language}
          </button>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600">IN</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <span>{formatTime(currentTime)}</span>
          <span className="text-gray-400">|</span>
          <span>{formatDate(currentTime)}</span>
        </div>

        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Wasim Akram. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
