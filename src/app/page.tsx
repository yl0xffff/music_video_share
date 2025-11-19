'use client';

import { useState } from 'react';

export default function Home() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [code, setCode] = useState('');
  const [showLink, setShowLink] = useState(false);
  const [link, setLink] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    // 基本验证
    if (!firstName.trim() || !code.trim()) {
      setError('請輸入 First Name 和代碼 / Please enter First Name and Code');
      setShowLink(false);
      return;
    }

    setLoading(true);
    setError('');
    setShowLink(false);
    setLink('');

    try {
      // 调用服务器端 API 进行验证
      const response = await fetch('/api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          code: code.trim(),
        }),
      });

      const data = await response.json();

      if (data.valid) {
        setShowLink(true);
        setLink(data.link || '');
        setError('');
      } else {
        setShowLink(false);
        setLink('');
        setError(data.error || '輸入的資訊不正確，請重新輸入。 / The information entered is incorrect, please try again.');
      }
    } catch (err) {
      setShowLink(false);
      setLink('');
      setError('網絡錯誤，請稍後再試。 / Network error, please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <header className="w-full border-b border-slate-200/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                Concert Video Library
              </span>
              <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700">
                Beta v0.1.0
              </span>
            </div>
            <div className="flex gap-4 text-sm text-slate-600 dark:text-slate-400">
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                Home
              </a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                Video Library
              </a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                About
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            呂老師學生音樂會視頻庫<br />
            <span className="text-3xl sm:text-4xl lg:text-5xl">Ms. Lu's Student Concert Video Library</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            記錄每一個精彩的音樂瞬間，珍藏學生們的成長足跡<br />
            <span className="text-lg sm:text-xl">Recording every wonderful musical moment, treasuring students' growth journey</span>
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
              搜尋視頻連結 / Search Video Link
            </h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    setShowLink(false);
                    setLink('');
                    setError('');
                  }}
                  onKeyDown={handleKeyDown}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                  placeholder="請輸入 First Name / Please enter First Name"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                    setShowLink(false);
                    setLink('');
                    setError('');
                  }}
                  onKeyDown={handleKeyDown}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                  placeholder="請輸入 Last Name / Please enter Last Name"
                />
              </div>

              <div>
                <label htmlFor="code" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  四位數字代碼 / 4-Digit Code
                </label>
                <input
                  id="code"
                  type="text"
                  value={code}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '').slice(0, 4);
                    setCode(value);
                    setShowLink(false);
                    setLink('');
                    setError('');
                  }}
                  onKeyDown={handleKeyDown}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                  placeholder="請輸入四位數字 / Please enter 4-digit code"
                  maxLength={4}
                />
              </div>

              <button
                onClick={handleSearch}
                disabled={loading}
                className="w-full mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {loading ? '驗證中... / Verifying...' : '搜尋 / Search'}
              </button>

              {error && (
                <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-red-600 dark:text-red-400 text-sm text-center">{error}</p>
                </div>
              )}

              {showLink && link && (
                <div className="mt-6 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-green-800 dark:text-green-300 font-medium mb-3 text-center">
                    找到您的視頻連結：<br />
                    <span className="text-base">Your video link has been found:</span>
                  </p>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors break-all"
                  >
                    {link}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-200/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-slate-600 dark:text-slate-400">
            <p>© 2025 呂老師學生音樂會視頻庫 / Ms. Lu's Student Concert Video Library. 保留所有權利 / All rights reserved.</p>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-500">
              Beta Version 0.1.0
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
