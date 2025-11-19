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
