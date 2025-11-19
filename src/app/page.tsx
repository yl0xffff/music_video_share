export default function Home() {
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

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">0</div>
            <div className="text-slate-600 dark:text-slate-400">視頻總數</div>
          </div>
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">0</div>
            <div className="text-slate-600 dark:text-slate-400">學生人數</div>
          </div>
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">0</div>
            <div className="text-slate-600 dark:text-slate-400">音樂會場次</div>
          </div>
        </div>

        {/* Video Grid Placeholder */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
            最新視頻
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-200/50 dark:border-slate-700/50 hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-indigo-400 dark:text-indigo-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                    視頻標題 {item}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    學生姓名 · 2024年
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 dark:border-slate-700/50">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            歡迎瀏覽我們的音樂會視頻
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            這裡記錄了學生們在音樂道路上的每一個重要時刻，每一場音樂會都是成長的見證。
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
            瀏覽全部視頻
          </button>
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
