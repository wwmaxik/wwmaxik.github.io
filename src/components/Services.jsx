import { Globe, Bot, Cpu, Terminal, Check, Server, ShieldCheck, Sparkles } from 'lucide-react'
import GitHubStarIcon from './GitHubStarIcon'

function Services() {
  const services = [
    {
      icon: Globe,
      category: 'ПРОДАКШЕН ВЕБ-СИСТЕМЫ',
      title: 'Корпоративные порталы & Веб-приложения',
      description: 'Разработка современных быстрых веб-платформ для бизнеса под ключ. Реальный кейс в продакшене — портал управляющей компании sferus24.ru.',
      features: [
        'SPA на React + Vite с мгновенным откликом (<0.5с)',
        'Интерактивные кабинеты, формы заявок и диспетчеризация',
        'Соответствие требованиям стандартов и законодательства',
        'Полная адаптивность под iOS, Android и десктоп',
      ],
      tech: ['React', 'TypeScript', 'FastAPI', 'Tailwind CSS', 'Docker'],
      highlight: 'Кейс: sferus24.ru',
    },
    {
      icon: Bot,
      category: 'ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ & RAG',
      title: 'Автономные AI-агенты & Векторный поиск',
      description: 'Создание специализированных AI-систем на базе современных LLM. От умных Telegram-ботов с RAG-поиском по базе знаний до автономных агентов.',
      features: [
        'Векторный поиск по архивам и документам (как в Total Recall)',
        'Интеграция Gemini, Claude, OpenAI и локальных моделей',
        'Мультиагентные пайплайны принятия решений (VoidAgent)',
        'Голосовые ассистенты (распознавание Vosk + синтез Silero)',
      ],
      tech: ['Python', 'Gemini API', 'ChromaDB', 'PyTorch', 'aiogram'],
      highlight: 'Проекты: VoidAgent, Total Recall',
    },
    {
      icon: Cpu,
      category: 'СИСТЕМНАЯ РАЗРАБОТКА НА RUST',
      title: 'Высокопроизводительные GUI & Системные утилиты',
      description: 'Разработка легких нативных десктопных приложений без прожорливого Electron. Опыт создания интерфейсов и системного софта под Linux Wayland.',
      features: [
        'Графические интерфейсы на Rust + Iced (driftwm-settings, 14 звезд на GitHub)',
        'Жестовая навигация и Circle-to-Search с Gemini Vision (driftglide)',
        'Мгновенный холодный старт и потребление памяти до 20 МБ',
        'Интеграция с системными шинами IPC и протоколами Wayland',
      ],
      tech: ['Rust', 'Iced 0.13', 'Wayland', 'Linux IPC', 'Smithay'],
      highlight: 'driftwm-settings',
      stars: 14,
    },
    {
      icon: Terminal,
      category: 'МЕССЕНДЖЕРЫ & ИНТЕГРАЦИИ',
      title: 'Telegram-боты & Автоматизация рутины',
      description: 'Боты для закрытых клубов, платных подписок (AeroNet), модерации каналов (AnonBot), парсинга маркетплейсов и связки со службами доставки.',
      features: [
        'Прием оплаты: ЮKassa, ЮMoney, Telegram Stars',
        'Автогенерация накладных и трекинг через API СДЭК',
        'Парсеры данных с обходом блокировок и ротацией прокси',
        'Развертывание на надежных серверах с Nginx и Systemd',
      ],
      tech: ['Python', 'Node.js', 'Playwright', 'PostgreSQL', 'Redis'],
      highlight: 'Проекты: AeroNet, AnonBot',
    },
  ]

  const guarantees = [
    {
      icon: Server,
      title: 'Развертывание на ваших серверах',
      text: 'Настройка VPS, Nginx, Docker-контейнеров, SSL-сертификатов и автоперезапуска демонов.',
    },
    {
      icon: ShieldCheck,
      title: 'Официальный договор НПД',
      text: 'Работаю легально как самозанятый. Предоставляю электронные чеки ФНС для уменьшения налогов бизнеса.',
    },
    {
      icon: Sparkles,
      title: 'Глубокая инженерная культура',
      text: 'Опыт от системного программирования на Rust до прикладного веб-фронтенда и обучения нейросетей.',
    },
  ]

  return (
    <section id="services" className="py-20 md:py-28 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#0071E3] dark:text-[#2997FF] mb-2 font-mono">
            Направления разработки
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-4">
            Инженерные решения для любых задач.
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed">
            От коммерческих корпоративных сайтов до системного программирования на Rust и AI-агентов. Практический опыт, подтвержденный десятками открытых репозиториев и реальными внедрениями.
          </p>
        </div>

        {/* Core Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="apple-card-interactive p-5 sm:p-8 flex flex-col justify-between min-w-0 w-full"
            >
              <div>
                <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center justify-between gap-3 mb-6">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#0071E3]/10 dark:bg-[#2997FF]/15 text-[#0071E3] dark:text-[#2997FF] flex items-center justify-center flex-shrink-0">
                    <item.icon size={22} className="sm:w-6 sm:h-6" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono tracking-wider text-[#0071E3] dark:text-[#2997FF] uppercase font-semibold px-2.5 py-1 rounded-full bg-[#0071E3]/5 dark:bg-[#2997FF]/10 max-w-full truncate">
                    {item.stars ? (
                      <>
                        <GitHubStarIcon className="w-3 h-3 text-amber-500 fill-amber-500 shrink-0" />
                        <span>{item.stars} • {item.highlight}</span>
                      </>
                    ) : (
                      <span>{item.highlight}</span>
                    )}
                  </span>
                </div>

                <div className="text-[11px] font-mono tracking-wider text-[#86868B] uppercase font-semibold mb-1">
                  {item.category}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#6E6E73] dark:text-[#A1A1A6] mb-6 leading-relaxed">
                  {item.description}
                </p>

                <ul className="space-y-2.5 mb-8" aria-label={`Возможности направления ${item.title}`}>
                  {item.features.map((feat, featIdx) => (
                    <li key={featIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1D1D1F] dark:text-[#E8E8ED]">
                      <Check size={16} className="text-[#34C759] dark:text-[#30D158] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-wrap gap-1.5">
                  {item.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-black/[0.04] dark:bg-white/[0.06] text-[#6E6E73] dark:text-[#A1A1A6]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Standards / Secondary Guarantees */}
        <div className="grid md:grid-cols-3 gap-4">
          {guarantees.map((g, idx) => (
            <div
              key={idx}
              className="apple-card p-5 sm:p-6 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-black/[0.04] dark:bg-white/[0.08] text-[#1D1D1F] dark:text-[#F5F5F7] flex items-center justify-center flex-shrink-0">
                <g.icon size={20} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] mb-1">
                  {g.title}
                </h4>
                <p className="text-xs text-[#6E6E73] dark:text-[#86868B] leading-relaxed">
                  {g.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
