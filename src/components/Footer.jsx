import { Send, Github, Mail, MapPin, ArrowUp, MessageSquare } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="pt-20 pb-12 px-4 sm:px-6 border-t border-black/[0.06] dark:border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto">
        {/* Main CTA Card */}
        <div className="apple-card p-6 sm:p-12 text-center mb-12 sm:mb-16 relative overflow-hidden bg-gradient-to-b from-white to-[#F5F5F7] dark:from-[#1C1C1E] dark:to-[#161617] min-w-0 w-full">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass-pill mb-6 max-w-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
              <span className="text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7] truncate">
                Свободен для 1 нового проекта на этой неделе
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-4">
              Готовы запустить автоматизацию?
            </h2>

            <p className="text-xs sm:text-base text-[#6E6E73] dark:text-[#A1A1A6] mb-8 leading-relaxed">
              Напишите мне в Telegram. Расскажите о вашей задаче своими словами — я предложу оптимальную архитектуру и назову точные сроки и стоимость уже сегодня.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
              <a
                href="https://t.me/wwmaxik"
                target="_blank"
                rel="noopener noreferrer"
                className="apple-btn-primary w-full sm:w-auto gap-2 text-xs sm:text-sm"
                aria-label="Написать Максиму в Telegram"
              >
                <Send size={15} className="flex-shrink-0" />
                <span className="truncate">Написать в Telegram @wwmaxik</span>
              </a>

              <a
                href="mailto:github_wwmaxik@mail.ru"
                className="apple-btn-secondary w-full sm:w-auto gap-2 text-xs sm:text-sm"
                aria-label="Написать на email"
              >
                <Mail size={15} className="flex-shrink-0" />
                <span className="truncate">github_wwmaxik@mail.ru</span>
              </a>
            </div>
          </div>
        </div>

        {/* Info & Socials Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="font-semibold text-sm text-[#1D1D1F] dark:text-[#F5F5F7]">
              Максим Кононенко (wwmaxik)
            </div>
            <div className="text-xs text-[#86868B] flex items-center gap-1.5 mt-0.5">
              <MapPin size={12} />
              <span>Красноярск, Россия (UTC+7)</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://t.me/wwmaxik"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-medium text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#0071E3] dark:hover:text-[#2997FF] transition-colors p-2 rounded-lg hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
            >
              <MessageSquare size={16} />
              <span>Telegram</span>
            </a>

            <a
              href="https://github.com/wwmaxik"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-medium text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#0071E3] dark:hover:text-[#2997FF] transition-colors p-2 rounded-lg hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>

            <a
              href="mailto:github_wwmaxik@mail.ru"
              className="flex items-center gap-2 text-xs font-medium text-[#6E6E73] dark:text-[#A1A1A6] hover:text-[#0071E3] dark:hover:text-[#2997FF] transition-colors p-2 rounded-lg hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Legal & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#86868B]">
          <p className="text-center sm:text-left">
            &copy; {currentYear} Максим Кононенко. Разработка ПО по договору (специальный налоговый режим НПД).
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] rounded"
            aria-label="Вернуться к началу страницы"
          >
            <span>Наверх</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
