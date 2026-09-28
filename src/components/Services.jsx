import { Bot, Network, Database, Server, FileText, Sparkles, Check } from 'lucide-react'

function Services() {
  const services = [
    {
      icon: Bot,
      category: 'МЕССЕНДЖЕРЫ',
      title: 'Telegram-боты & Mini Apps',
      description: 'Автоматизация продаж, поддержки и взаимодействия с клиентами прямо в мессенджере. От легких ботов до полноценных WebApp-приложений.',
      features: [
        'Прием оплаты через Telegram Stars / ЮKassa',
        'Интеграция с LLM и базами знаний компании',
        'Интерактивный UI каталога (Telegram Mini App)',
        'Авторизация и роли пользователей (Admin, Manager, Client)',
      ],
      tech: ['Python / aiogram', 'Node.js', 'Telegram WebApp', 'Redis'],
    },
    {
      icon: Network,
      category: 'ИНТЕГРАЦИИ',
      title: 'API, Эквайринг & Логистика',
      description: 'Связываю ваши сайты, склады и службы доставки в единый автоматизированный конвейер. Исключаю ошибки ручного переноса данных.',
      features: [
        'Платежные шлюзы: ЮKassa, Robokassa, ЮMoney',
        'Автоматический вызов API СДЭК и печать накладных',
        'Синхронизация с CRM (amoCRM, МойСклад, Битрикс24)',
        'Идемпотентная обработка вебхуков без дублей',
      ],
      tech: ['REST API', 'Webhooks', 'FastAPI', 'PostgreSQL'],
    },
    {
      icon: Database,
      category: 'ДАННЫЕ',
      title: 'Парсеры & Мониторинг рынка',
      description: 'Автоматический сбор информации с сайтов, маркетплейсов и сервисов. Сберегает десятки часов монотонной работы сотрудников.',
      features: [
        'Мониторинг изменения цен конкурентов 24/7',
        'Парсинг номенклатур и выгрузка в Google Sheets / Excel',
        'Обход Cloudflare / Captcha и ротация прокси',
        'Оповещения о событиях в закрытый Telegram-канал',
      ],
      tech: ['Playwright', 'Scrapy', 'Headless Chrome', 'Cron Workers'],
    },
  ]

  const guarantees = [
    {
      icon: Server,
      title: 'Развертывание под ключ',
      text: 'Настройка VPS, Nginx, Docker-контейнеров, SSL-сертификатов и автоперезапуска при сбоях.',
    },
    {
      icon: FileText,
      title: 'Белая отчетность (НПД)',
      text: 'Работаю как самозанятый по договору. Предоставляю официальные электронные чеки для бухгалтерии.',
    },
    {
      icon: Sparkles,
      title: 'Чистый поддерживаемый код',
      text: 'Пишу понятный код с типизацией и документацией. Никакого «костыльного» спагетти-кода.',
    },
  ]

  return (
    <section id="services" className="py-20 md:py-28 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#0071E3] dark:text-[#2997FF] mb-2 font-mono">
            Компетенции
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-4">
            Решения, экономящие сотни часов рутины.
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed">
            Разрабатываю надежные автономные сервисы. Каждый инструмент создается под конкретные задачи вашего бизнеса с гарантией стабильной работы.
          </p>
        </div>

        {/* Core Services Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="apple-card-interactive p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#0071E3]/10 dark:bg-[#2997FF]/15 text-[#0071E3] dark:text-[#2997FF] flex items-center justify-center">
                    <item.icon size={24} />
                  </div>
                  <span className="text-[11px] font-mono tracking-wider text-[#86868B] dark:text-[#86868B] uppercase font-semibold">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#6E6E73] dark:text-[#A1A1A6] mb-6 leading-relaxed">
                  {item.description}
                </p>

                <ul className="space-y-2.5 mb-8" aria-label={`Возможности услуги ${item.title}`}>
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
                      className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-black/[0.04] dark:bg-white/[0.06] text-[#6E6E73] dark:text-[#A1A1A6]"
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
