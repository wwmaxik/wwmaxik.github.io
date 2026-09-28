import { ArrowRight, Send, CheckCircle2, ShieldCheck, Zap, Code2 } from 'lucide-react'

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
      label: 'Завершенных решений',
      detail: 'Боты, интеграции, парсеры',
      icon: Code2,
    },
    {
      value: '24–72ч',
      label: 'Срок запуска MVP',
      detail: 'Быстрый старт без проволочек',
      icon: Zap,
    },
    {
      value: '100%',
      label: 'Официально (НПД)',
      detail: 'Договор, акты и чеки для юрлиц',
      icon: ShieldCheck,
    },
    {
      value: '99.9%',
      label: 'Стабильность систем',
      detail: 'Легковесная инфраструктура',
      icon: CheckCircle2,
    },
  ]

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Apple Pill Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-medium text-[#6E6E73] dark:text-[#A1A1A6]">
            Инженер-разработчик • Красноярск (UTC+7)
          </span>
          <span className="text-black/20 dark:text-white/20">•</span>
          <span className="text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
            Самозанятый (НПД)
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-6 leading-[1.08]">
          Инженерная автоматизация бизнеса.{' '}
          <span className="text-[#0071E3] dark:text-[#2997FF] block sm:inline">
            Боты и API за 1–3 дня.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#6E6E73] dark:text-[#A1A1A6] mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
          Разрабатываю надежные Telegram-боты, платежные шлюзы, интеграции со службами логистики (СДЭК) и парсеры данных. Чистая архитектура, строгие сроки и работа по официальному договору.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16">
          <button
            onClick={() => scrollTo('estimator')}
            className="apple-btn-primary w-full sm:w-auto gap-2 group"
          >
            <span>Рассчитать проект</span>
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
        </div>

        {/* Bento Metric Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-left">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="apple-card p-5 md:p-6 transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-[#0071E3]/10 dark:bg-[#2997FF]/15 text-[#0071E3] dark:text-[#2997FF] flex items-center justify-center mb-3">
                <m.icon size={18} />
              </div>
              <div className="text-2xl md:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-1 font-mono">
                {m.value}
              </div>
              <div className="text-xs md:text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] leading-tight mb-1">
                {m.label}
              </div>
              <div className="text-[11px] md:text-xs text-[#86868B] dark:text-[#86868B] leading-snug">
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
