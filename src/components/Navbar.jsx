import { useState, useEffect } from 'react'
import { Sun, Moon, Send, Menu, X, ArrowUpRight } from 'lucide-react'

function Navbar() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme')
      if (stored) return stored
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'light'
  })

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  const navLinks = [
    { label: 'Услуги', href: '#services' },
    { label: 'Кейсы', href: '#cases' },
    { label: 'Open Source', href: '#opensource' },
    { label: 'Калькулятор', href: '#estimator' },
    { label: 'Процесс', href: '#workflow' },
    { label: 'Контакты', href: '#contact' },
  ]


  return (
    <header className="fixed top-0 left-0 right-0 z-50 liquid-glass-nav transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 md:h-16 flex items-center justify-between">
        {/* Brand */}
        <a 
          href="#" 
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] rounded-lg px-1 py-0.5"
          aria-label="На главную"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0071E3] to-[#2997FF] flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:scale-105 transition-transform duration-200">
            M
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] leading-none">
              Максим Кононенко
            </span>
            <span className="text-[11px] font-mono text-[#86868B] dark:text-[#86868B] leading-tight mt-0.5">
              @wwmaxik
            </span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 ml-2 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Доступен
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Основная навигация">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] rounded-full hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] hover:bg-black/[0.04] dark:hover:bg-white/[0.08] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3]"
            aria-label={theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'}
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Quick Telegram Button */}
          <a
            href="https://t.me/wwmaxik"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-btn-primary !px-4 !py-1.5 !min-h-[36px] text-xs font-medium gap-1.5"
            aria-label="Написать в Telegram"
          >
            <Send size={13} className="translate-y-[-0.5px]" />
            <span>Telegram</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-[#1D1D1F] dark:text-[#F5F5F7] hover:bg-black/[0.04] dark:hover:bg-white/[0.08] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3]"
            aria-label="Открыть меню навигации"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black/[0.06] dark:border-white/[0.08] bg-white/95 dark:bg-[#1C1C1E]/95 backdrop-blur-xl px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7] hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
            >
              <span>{link.label}</span>
              <ArrowUpRight size={14} className="text-[#86868B]" />
            </a>
          ))}
          <div className="pt-2">
            <a
              href="https://t.me/wwmaxik"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full apple-btn-primary gap-2"
            >
              <Send size={15} />
              <span>Обсудить задачу в Telegram</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
