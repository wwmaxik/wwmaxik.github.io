import { Github, GitFork, ArrowUpRight, Code, Cpu } from 'lucide-react'
import GitHubStarIcon from './GitHubStarIcon'

function OpenSource() {
  const repos = [
    {
      name: 'driftwm-settings',
      desc: 'Нативная графическая утилита конфигурации оконного менеджера driftwm на Rust (Iced 0.13, lossless TOML, Catppuccin Mocha).',
      stars: 14,
      lang: 'Rust',
      langColor: 'bg-orange-500',
      url: 'https://github.com/wwmaxik/driftwm-settings',
    },
    {
      name: 'driftglide',
      desc: 'Панель навигации жестов и Circle to Search с интеграцией Google Gemini Vision для Linux Wayland.',
      stars: 0,
      lang: 'Rust',
      langColor: 'bg-orange-500',
      url: 'https://github.com/wwmaxik/driftglide',
    },
    {
      name: 'driftwm',
      desc: 'Trackpad-first бесконечный холст и Wayland-композитор (форк / контрибьютинг системного кода).',
      stars: 0,
      lang: 'Rust',
      langColor: 'bg-orange-500',
      url: 'https://github.com/wwmaxik/driftwm',
    },
    {
      name: 'VoidAgent',
      desc: 'Экспериментальная архитектура автономных взаимодействующих мультиагентов на базе современных LLM.',
      stars: 0,
      lang: 'Python',
      langColor: 'bg-blue-500',
      url: 'https://github.com/wwmaxik/VoidAgent',
    },
    {
      name: 'telegram-total-recall',
      desc: 'AI-агент семантического векторного поиска по архивам сообщений и диалогов в Telegram.',
      stars: 0,
      lang: 'Python',
      langColor: 'bg-blue-500',
      url: 'https://github.com/wwmaxik/telegram-total-recall',
    },
    {
      name: 'tcode',
      desc: 'Терминальный (TUI) редактор кода профессионального уровня со встроенным AI-агентом и поддержкой LSP.',
      stars: 0,
      lang: 'Rust / C',
      langColor: 'bg-purple-500',
      url: 'https://github.com/wwmaxik/tcode',
    },
    {
      name: 'BrawlStars-RL-AI',
      desc: 'Автономный агент обучения с подкреплением (Reinforcement Learning) на базе YOLOv8 и RecurrentPPO (LSTM).',
      stars: 1,
      lang: 'Python',
      langColor: 'bg-blue-500',
      url: 'https://github.com/wwmaxik/BrawlStars-RL-AI',
    },
    {
      name: 'viaflame',
      desc: 'Full-stack веб-платформа с бэкендом на FastAPI, фронтендом на React и сборкой в Docker.',
      stars: 0,
      lang: 'React / FastAPI',
      langColor: 'bg-emerald-500',
      url: 'https://github.com/wwmaxik/viaflame',
    },
  ]

  return (
    <section id="opensource" className="py-20 md:py-28 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-semibold tracking-wider uppercase text-[#0071E3] dark:text-[#2997FF] mb-2 font-mono">
              Открытый исходный код
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
              Репозитории и Open Source вклад.
            </h2>
          </div>
          <a
            href="https://github.com/wwmaxik"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-btn-secondary !px-4 !py-2 text-xs font-medium gap-1.5 self-start md:self-auto"
          >
            <Github size={15} />
            <span>Все 50+ репозиториев на GitHub</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 w-full">
          {repos.map((r, idx) => (
            <a
              key={idx}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-card p-4 sm:p-5 flex flex-col justify-between hover:-translate-y-1 hover:border-[#0071E3]/40 dark:hover:border-[#2997FF]/40 transition-all duration-200 group w-full min-w-0"
            >
              <div className="w-full min-w-0">
                <div className="flex items-center justify-between mb-3 gap-2">
                  <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#1D1D1F] dark:text-[#F5F5F7] group-hover:text-[#0071E3] dark:group-hover:text-[#2997FF] transition-colors truncate min-w-0">
                    <Code size={14} className="flex-shrink-0 text-[#86868B]" />
                    <span className="truncate">{r.name}</span>
                  </div>

                  {r.stars > 0 && (
                    <span className="flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 font-semibold flex-shrink-0">
                      <GitHubStarIcon className="w-3 h-3 text-amber-500 fill-amber-500 shrink-0" />
                      {r.stars}
                    </span>
                  )}
                </div>

                <p className="text-xs text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed mb-4 line-clamp-3">
                  {r.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${r.langColor}`} />
                  <span className="font-mono text-[#86868B]">{r.lang}</span>
                </div>
                <ArrowUpRight size={13} className="text-[#86868B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OpenSource
