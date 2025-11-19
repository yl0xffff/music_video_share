'use client';

import { useState } from 'react';

export default function Home() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [code, setCode] = useState('');
  const [showLink, setShowLink] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = () => {
    // 验证输入（不区分大小写）
    const normalizedFirstName = firstName.trim().toLowerCase();
    const normalizedLastName = lastName.trim().toLowerCase();
    const normalizedCode = code.trim();

    if (
      normalizedFirstName === 'jeremy' &&
      normalizedLastName === 'yang' &&
      normalizedCode === '6248'
    ) {
      setShowLink(true);
      setError('');
    } else {
      setShowLink(false);
      setError('輸入的資訊不正確，請重新輸入。');
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
            <div className="text-xl font-bold text-slate-900 dark:text-white">
              音樂會視頻庫
            </div>
            <div className="flex gap-4 text-sm text-slate-600 dark:text-slate-400">
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                首頁
              </a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                視頻庫
              </a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                關於
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
            呂老師學生音樂會視頻庫
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            記錄每一個精彩的音樂瞬間，珍藏學生們的成長足跡
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 text-center">
              搜尋視頻連結
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
                    setError('');
                  }}
                  onKeyDown={handleKeyDown}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                  placeholder="請輸入 First Name"
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
                    setError('');
                  }}
                  onKeyDown={handleKeyDown}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                  placeholder="請輸入 Last Name"
                />
              </div>

              <div>
                <label htmlFor="code" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  四位數字代碼
                </label>
                <input
                  id="code"
                  type="text"
                  value={code}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '').slice(0, 4);
                    setCode(value);
                    setShowLink(false);
                    setError('');
                  }}
                  onKeyDown={handleKeyDown}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                  placeholder="請輸入四位數字"
                  maxLength={4}
                />
              </div>

              <button
                onClick={handleSearch}
                className="w-full mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                搜尋
              </button>

              {error && (
                <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-red-600 dark:text-red-400 text-sm text-center">{error}</p>
                </div>
              )}

              {showLink && (
                <div className="mt-6 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-green-800 dark:text-green-300 font-medium mb-3 text-center">
                    找到您的視頻連結：
                  </p>
                  <a
                    href="https://drive.google.com/file/d/1fNfNqn7AMT0Y3C7tIMFqlvSjkH144SMz/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors break-all"
                  >
                    https://drive.google.com/file/d/1fNfNqn7AMT0Y3C7tIMFqlvSjkH144SMz/view?usp=drive_link
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
            <p>© 2024 呂老師學生音樂會視頻庫. 保留所有權利.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
