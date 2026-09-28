import { ArrowRight, Send, Github, ExternalLink, Code2, Cpu, Globe, Star } from 'lucide-react'

function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const metrics = [
    {
      value: '50+',
      label: 'Проектов на GitHub',
      detail: 'Rust, Python, React, AI',
      icon: Code2,
    },
    {
      value: '14 ★',
      label: 'driftwm-settings',
      detail: 'Open-source утилита на Rust',
      icon: Star,
    },
    {
      value: 'sferus24.ru',
      label: 'Коммерческий продакшен',
      detail: 'Портал для УК в Красноярске',
      icon: Globe,
    },
    {
      value: '100%',
      label: 'Официально (НПД)',
      detail: 'Договор, акты и чеки ФНС',
      icon: Cpu,
    },
  ]

  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 overflow-hidden w-full max-w-full">
      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        {/* Apple Pill Status Badge */}
        <div className="inline-flex flex-wrap sm:flex-nowrap items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full liquid-glass-pill mb-6 sm:mb-8 text-center max-w-full">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
          <span className="text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
            Максим Кононенко
          </span>
          <span className="text-black/20 dark:text-white/20">•</span>
          <span className="text-xs text-[#6E6E73] dark:text-[#A1A1A6]">
            Красноярск (UTC+7)
          </span>
          <span className="text-black/20 dark:text-white/20 hidden md:inline">•</span>
          <span className="text-xs font-medium text-[#0071E3] dark:text-[#2997FF] hidden md:inline">
            Full-stack & Системный инженер
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-6 leading-[1.12] sm:leading-[1.08] break-words">
          Инженерная автоматизация,{' '}
          <span className="text-[#0071E3] dark:text-[#2997FF] block sm:inline">
            веб-системы и AI-агенты.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#6E6E73] dark:text-[#A1A1A6] mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
          Создаю современные веб-платформы для бизнеса (<a href="https://sferus24.ru" target="_blank" rel="noopener noreferrer" className="text-[#0071E3] dark:text-[#2997FF] underline hover:opacity-80">sferus24.ru</a>), автономных AI-ассистентов с векторным поиском, системные приложения на Rust и надежных Telegram-ботов. Официальный договор НПД, чистый код и строгие сроки.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 w-full">
          <button
            onClick={() => scrollTo('estimator')}
            className="apple-btn-primary w-full sm:w-auto gap-2 group"
          >
            <span>Рассчитать стоимость</span>
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-150" />
          </button>

          <a
            href="https://t.me/wwmaxik"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-btn-secondary w-full sm:w-auto gap-2"
          >
            <Send size={15} />
            <span>Обсудить в Telegram</span>
          </a>

          <a
            href="https://github.com/wwmaxik"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-btn-secondary w-full sm:w-auto gap-2"
          >
            <Github size={16} />
            <span>GitHub (50+ репо)</span>
          </a>
        </div>

        {/* Bento Metric Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4 text-left w-full">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="apple-card p-3.5 sm:p-5 md:p-6 transition-all duration-200 min-w-0"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#0071E3]/10 dark:bg-[#2997FF]/15 text-[#0071E3] dark:text-[#2997FF] flex items-center justify-center mb-2.5 sm:mb-3 flex-shrink-0">
                <m.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
              </div>
              <div className="text-base sm:text-2xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-1 font-mono truncate">
                {m.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] leading-tight mb-1 truncate">
                {m.label}
              </div>
              <div className="text-[10px] sm:text-xs text-[#86868B] dark:text-[#86868B] leading-snug line-clamp-2">
                {m.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Hero
