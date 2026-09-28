import { useState } from 'react'
import { CheckCircle2, ArrowRight, ExternalLink, Terminal, Cpu, Database, Zap } from 'lucide-react'

function CaseStudy() {
  const [activeTab, setActiveTab] = useState(0)

  const cases = [
    {
      id: 'ecommerce',
      tabTitle: 'E-Commerce + СДЭК + ЮKassa',
      category: 'ИНТЕГРАЦИЯ ЛОГИСТИКИ И ОПЛАТЫ',
      title: 'Автоматизация интернет-магазина от оплаты до трек-номера',
      problem: 'Менеджеры вручную копировали адреса клиентов и создавали накладные в кабинете СДЭК, тратя до 4 часов в день и допуская ошибки в индексах.',
      solution: 'Разработан легковесный серверный сервис на FastAPI с вебхуками. При успешной оплате заказ моментально регистрируется в СДЭК, создается накладная со штрихкодом, а покупатель получает трек-номер.',
      metrics: [
        { label: 'Скорость оформления', val: '1.2 сек' },
        { label: 'Снижение рутины', val: '-95%' },
        { label: 'Ошибок в адресах', val: '0%' },
      ],
      techStack: ['FastAPI', 'CDEK API v2', 'ЮKassa Webhooks', 'Docker', 'PostgreSQL'],
      flow: [
        { step: '1', title: 'Оплата', desc: 'Клиент оплачивает заказ, ЮKassa шлет подписанный вебхук' },
        { step: '2', title: 'Идемпотентность', desc: 'Сервис валидирует подпись и исключает дубли' },
        { step: '3', title: 'API СДЭК', desc: 'Генерация заказа на доставку, расчет тарифа и трек-номера' },
        { step: '4', title: 'Документы', desc: 'Автосоздание PDF накладной со штрихкодом для склада' },
      ],
      terminalSnippet: `POST /api/v1/webhooks/yookassa HTTP/1.1
Content-Type: application/json
X-Signature: sha256_verified

{
  "event": "payment.succeeded",
  "object": { "id": "pay_98a4c12", "amount": 14900.00 }
}

--> [200 OK] Handled in 42ms
--> Triggering CDEK dispatch order...
--> Generated Track: CDEK-159482034 [PDF Ready]`,
    },
    {
      id: 'bot',
      tabTitle: 'Telegram AI-Консьерж',
      category: 'МЕССЕНДЖЕР И ИИ-АССИСТЕНТ',
      title: 'Умный Telegram-бот с консультацией по 800+ позициям',
      problem: 'Клиенты писали во внерабочее время и в выходные. До 40% лидов «остывали» до утра, уходя к конкурентам.',
      solution: 'Бот на aiogram 3 с интеграцией LLM и векторным поиском по каталогу. Отвечает на сложные технические вопросы о товарах, подбирает аналоги и формирует заказ.',
      metrics: [
        { label: 'Время ответа', val: '1.8 сек' },
        { label: 'Конверсия ночью', val: '+38%' },
        { label: 'Доступность', val: '24/7/365' },
      ],
      techStack: ['Python 3.12', 'aiogram 3', 'OpenAI/Claude API', 'Redis Cache', 'SQLite'],
      flow: [
        { step: '1', title: 'Запрос', desc: 'Клиент задает вопрос человеческим языком в чате' },
        { step: '2', title: 'RAG поиск', desc: 'Поиск релевантных спецификаций в локальной базе знаний' },
        { step: '3', title: 'Генерация', desc: 'Формирование экспертного ответа со ссылкой на покупку' },
        { step: '4', title: 'Сделка', desc: 'Передача готового заказа в Telegram-чат менеджера' },
      ],
      terminalSnippet: `[Telegram Inbound] UpdateID: 8492010
User @tech_buyer: "Подберите блок питания на 750W Gold для ITX корпуса"
--> Vector search: found 3 exact matches in catalog
--> Prompt tokens: 412 | Completion tokens: 98 | 1.8s
--> Message sent with interactive checkout keyboard
--> Order #742 created in CRM`,
    },
    {
      id: 'parser',
      tabTitle: 'Мониторинг цен & Парсер',
      category: 'АВТОМАТИЗАЦИЯ И ДАННЫЕ',
      title: 'Парсер 20,000+ SKU с защитой от блокировок и алертингом',
      problem: 'Конкуренты часто меняли цены и запускали акции, а ручной мониторинг занимал целые дни и опаздывал на сутки.',
      solution: 'Высокоскоростной асинхронный парсер с ротацией резидентных прокси. Мониторит ассортимент каждые 15 минут и моментально присылает алерт при демпинге.',
      metrics: [
        { label: 'Объем мониторинга', val: '20,000 SKU' },
        { label: 'Частота сканирования', val: '15 минут' },
        { label: 'Успешность запросов', val: '99.4%' },
      ],
      techStack: ['Playwright', 'Scrapy', 'Proxy Mesh', 'Telegram Bot API', 'Google Sheets API'],
      flow: [
        { step: '1', title: 'Планировщик', desc: 'CRON-задача запускает параллельные очереди воркеров' },
        { step: '2', title: 'Сбор', desc: 'Headless браузер с обходом защиты Cloudflare и анти-бот капчи' },
        { step: '3', title: 'Сравнение', desc: 'Вычисление дельты цен и сравнение с правилами маржи' },
        { step: '4', title: 'Алерт', desc: 'Срочное уведомление в закрытый канал руководства' },
      ],
      terminalSnippet: `[CRON Daemon] Job #parse-cycle-15m triggered
Workers active: 16 | Proxy pool latency: 85ms
--> 20,410 items checked across 4 marketplaces
--> Discrepancy detected: SKU #48911 -18% below min margin
--> Alert dispatched to TG #pricing-alerts
--> Synced 1,240 updated rows to Google Sheets`,
    },
  ]

  const current = cases[activeTab]

  return (
    <section id="cases" className="py-20 md:py-28 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#0071E3] dark:text-[#2997FF] mb-2 font-mono">
            Реальные кейсы
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-4">
            Примеры реализованных решений.
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] dark:text-[#A1A1A6]">
            От автоматизации логистики до ИИ-консультантов в Telegram. Конкретные цифры, архитектура и доказанный результат.
          </p>
        </div>

        {/* Apple Segmented Control */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="apple-segment-container max-w-full">
            {cases.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => setActiveTab(idx)}
                className={`apple-segment-item whitespace-nowrap ${
                  activeTab === idx ? 'apple-segment-active' : 'apple-segment-inactive'
                }`}
                role="tab"
                aria-selected={activeTab === idx}
              >
                {c.tabTitle}
              </button>
            ))}
          </div>
        </div>

        {/* Case Card */}
        <div className="apple-card p-6 sm:p-10 md:p-12 transition-all duration-300">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Description & Details */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#0071E3] dark:text-[#2997FF] mb-2 block">
                  {current.category}
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-6">
                  {current.title}
                </h3>

                {/* Problem & Solution block */}
                <div className="space-y-4 mb-8">
                  <div className="p-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/[0.06]">
                    <div className="text-xs font-semibold text-[#86868B] uppercase mb-1">Задача бизнеса</div>
                    <p className="text-sm text-[#1D1D1F] dark:text-[#E8E8ED] leading-relaxed">
                      {current.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0071E3]/5 dark:bg-[#2997FF]/10 border border-[#0071E3]/15 dark:border-[#2997FF]/20">
                    <div className="text-xs font-semibold text-[#0071E3] dark:text-[#2997FF] uppercase mb-1">Решение инженера</div>
                    <p className="text-sm text-[#1D1D1F] dark:text-[#E8E8ED] leading-relaxed">
                      {current.solution}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {current.metrics.map((m, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.06] text-center">
                      <div className="text-xl sm:text-2xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] font-mono mb-0.5">
                        {m.val}
                      </div>
                      <div className="text-[11px] text-[#86868B] dark:text-[#86868B] leading-tight">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap items-center gap-1.5 mb-8">
                  <span className="text-xs text-[#86868B] mr-1 font-mono">Стек:</span>
                  {current.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs rounded-md bg-black/[0.04] dark:bg-white/[0.06] text-[#1D1D1F] dark:text-[#F5F5F7] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={`https://t.me/wwmaxik?text=${encodeURIComponent(`Здравствуйте, Максим! Меня заинтересовал кейс "${current.title}". Хочу обсудить аналогичную задачу.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-btn-primary gap-2"
                >
                  <span>Обсудить похожий проект</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>

            {/* Right Column: Flow Architecture & macOS Terminal Simulator */}
            <div className="lg:col-span-5 space-y-5">
              {/* Architecture Steps */}
              <div className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08]">
                <div className="text-xs font-semibold text-[#86868B] uppercase mb-4 flex items-center gap-1.5">
                  <Zap size={14} className="text-[#0071E3] dark:text-[#2997FF]" />
                  <span>Архитектура потока данных</span>
                </div>
                <div className="space-y-3">
                  {current.flow.map((s, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#0071E3]/10 dark:bg-[#2997FF]/15 text-[#0071E3] dark:text-[#2997FF] text-xs font-mono font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {s.step}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                          {s.title}
                        </div>
                        <div className="text-[11px] text-[#6E6E73] dark:text-[#86868B] leading-tight">
                          {s.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* macOS Terminal Preview Window */}
              <div className="rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.12] bg-[#1E1E20] text-white shadow-lg">
                {/* Window Chrome */}
                <div className="px-4 py-3 bg-[#2A2A2E] flex items-center justify-between border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#A1A1A6] font-mono">
                    <Terminal size={12} />
                    <span>production.log</span>
                  </div>
                  <div className="w-10" />
                </div>
                {/* Code body */}
                <pre className="p-4 text-[11px] font-mono text-[#D2D2D7] overflow-x-auto leading-relaxed whitespace-pre selection:bg-white/20">
                  {current.terminalSnippet}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudy
