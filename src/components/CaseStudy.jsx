import { useState } from 'react'
import { ExternalLink, Terminal, Globe, Cpu, Bot, Zap, Star } from 'lucide-react'

function CaseStudy() {
  const [activeTab, setActiveTab] = useState(0)

  const cases = [
    {
      id: 'sferus',
      tabTitle: 'ООО «Сферус» (sferus24.ru)',
      category: 'КОММЕРЧЕСКИЙ ПРОДАКШЕН • ВЕБ-СИСТЕМА',
      title: 'Корпоративный портал управляющей компании Красноярска',
      liveUrl: 'https://sferus24.ru',
      repoUrl: null,
      problem: 'Управляющей компании многоквартирными домами требовался современный, быстрый и удобный портал для жильцов: публикация нормативной отчетности (ГИС ЖКХ), регламент аварийной службы, новости об индексации тарифов и диспетчеризация заявок.',
      solution: 'Спроектировал и разработал легковесный SPA на React + Vite. Реализована интерактивная структура домов под управлением, телефоны круглосуточной аварийной службы, база знаний ЖКУ и адаптивный интерфейс.',
      metrics: [
        { label: 'Скорость отклика', val: '<0.4 сек' },
        { label: 'Стандарты Минстроя', val: '100%' },
        { label: 'Статус проекта', val: 'В продакшене' },
      ],
      techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Nginx', 'Docker'],
      flow: [
        { step: '1', title: 'Проектирование структуры', desc: 'Учет требований законодательства ЖКХ и удобства жителей' },
        { step: '2', title: 'UI/UX прототип', desc: 'Строгий современный дизайн с высокой контрастностью и читаемостью' },
        { step: '3', title: 'Оптимизация бандла', desc: 'Минимизация размера скриптов и мгновенная загрузка на смартфонах' },
        { step: '4', title: 'Деплой в прод', desc: 'Настройка production-окружения на сервере с HTTPS и Nginx' },
      ],
      terminalSnippet: `GET / HTTP/2.0
Host: sferus24.ru
User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 18_0)

HTTP/2.0 200 OK
Content-Type: text/html; charset=UTF-8
Content-Encoding: gzip
Cache-Control: public, max-age=31536000, immutable

--> TTFB: 28ms | Total Load: 180ms
--> Service: ООО «Сферус» Красноярск
--> Production status: Healthy & Live at https://sferus24.ru`,
    },
    {
      id: 'driftwm-settings',
      tabTitle: 'driftwm-settings (Rust)',
      category: 'OPEN SOURCE • 14 ЗВЁЗД НА GITHUB',
      title: 'Быстрая нативная утилита настроек для Wayland на Rust',
      liveUrl: 'https://github.com/wwmaxik/driftwm-settings',
      repoUrl: 'https://github.com/wwmaxik/driftwm-settings',
      problem: 'Пользователям Wayland-композитора driftwm требовался графический центр управления без тяжелых GTK/C зависимостей и с бережным сохранением комментариев в файлах конфигурации.',
      solution: 'Создал приложение на чистом Rust и фреймворке Iced 0.13 в палитре Catppuccin Mocha. Интегрировал парсер toml_edit для сохранения комментариев и встроенную валидацию driftwm --check-config.',
      metrics: [
        { label: 'Звёзд на GitHub', val: '14 ★' },
        { label: 'Холодный старт', val: '<15 мс' },
        { label: 'Язык реализации', val: 'Pure Rust' },
      ],
      techStack: ['Rust 1.85+', 'Iced 0.13', 'toml_edit', 'Wayland', 'Linux API'],
      flow: [
        { step: '1', title: 'Lossless TOML', desc: 'Сохранение комментариев и порядка секций в ~/.config/driftwm/' },
        { step: '2', title: 'Iced Elm-архитектура', desc: 'Реактивный GUI с нулевыми накладными расходами памяти' },
        { step: '3', title: 'Живая валидация', desc: 'Проверка синтаксиса и совместимости с driftwm 0.19+' },
        { step: '4', title: 'Системная интеграция', desc: 'Автозапуск, шейдеры, размытие и привязка к горячим клавишам' },
      ],
      terminalSnippet: `$ git clone https://github.com/wwmaxik/driftwm-settings
$ cd driftwm-settings && cargo build --release
   Compiling driftwm-settings v0.5.0 (/home/wwmaxik/driftwm-settings)
    Finished \`release\` profile [optimized] in 14.2s

$ ./target/release/driftwm-settings
[INFO] Loaded config from ~/.config/driftwm/config.toml
[INFO] Syntax valid. Theme: Catppuccin Mocha. Memory: 18.4 MB`,
    },
    {
      id: 'driftglide',
      tabTitle: 'DriftGlide & AI Vision',
      category: 'AI & SYSTEM LINUX • WAYLAND',
      title: 'Circle to Search с Gemini Vision для Linux Wayland',
      liveUrl: 'https://github.com/wwmaxik/driftglide',
      repoUrl: 'https://github.com/wwmaxik/driftglide',
      problem: 'На рабочем столе Linux отсутствовал нативный аналог мобильного Circle to Search для быстрого визуального поиска и анализа содержимого экрана с помощью ИИ.',
      solution: 'Разработал панель навигации жестов и оверлей на Rust под wlr-layer-shell. Выделенный регион экрана мгновенно отправляется в Google Gemini Vision API с выводом интерактивного ответа в плавающем окне.',
      metrics: [
        { label: 'Время анализа ИИ', val: '~1.5 сек' },
        { label: 'Протокол', val: 'Wayland' },
        { label: 'AI Модель', val: 'Gemini Vision' },
      ],
      techStack: ['Rust', 'wlr-layer-shell', 'Google Gemini API', 'grim', 'wl-clipboard'],
      flow: [
        { step: '1', title: 'Захват области', desc: 'Мгновенный снимок выбранного фрагмента экрана без сохранения на диск' },
        { step: '2', title: 'Vision пайплайн', desc: 'Мультимодальная передача в Gemini 3.5 Flash Lite API' },
        { step: '3', title: 'Контекстный UI', desc: 'Отображение решения с форматированием Markdown, формулами и кодом' },
        { step: '4', title: '1-click copy', desc: 'Копирование результата в буфер обмена Wayland' },
      ],
      terminalSnippet: `[driftglide::ipc] Gesture detected: Hold bottom-center
[driftglide::capture] Area selected: 820x440 at (400, 320)
[driftglide::gemini] Sending image payload to Gemini 3.5 Flash Lite...
[driftglide::gemini] Response received in 1.42s (310 tokens)
[driftglide::ui] Rendered floating response overlay with syntax highlighting`,
    },
    {
      id: 'ai-agents',
      tabTitle: 'Telegram AI & VoidAgent',
      category: 'МУЛЬТИАГЕНТЫ & RAG',
      title: 'Векторный поиск по Telegram-архивам и автономные агенты',
      liveUrl: 'https://github.com/wwmaxik/telegram-total-recall',
      repoUrl: 'https://github.com/wwmaxik/telegram-total-recall',
      problem: 'В рабочих чатах и каналах теряется критическая информация, а стандартный поиск по точным словам бессилен при синонимах или неточных формулировках.',
      solution: 'Создал систему Total Recall с векторизацией сообщений через эмбеддинги и поиском по смыслу. Параллельно разработал экспериментальную мультиагентную архитектуру VoidAgent.',
      metrics: [
        { label: 'Поиск по 100k записей', val: '<240 мс' },
        { label: 'Архитектура', val: 'Multi-Agent' },
        { label: 'Векторный индекс', val: 'ChromaDB' },
      ],
      techStack: ['Python 3.12', 'ChromaDB', 'Gemini / Claude API', 'aiogram', 'Redis'],
      flow: [
        { step: '1', title: 'Индексация потока', desc: 'Асинхронный сбор сообщений и генерация семантических векторов' },
        { step: '2', title: 'Векторный RAG', desc: 'Поиск ближайших соседей (kNN) по косинусному расстоянию' },
        { step: '3', title: 'Реранкинг', desc: 'Отсечение нерелевантного контекста с помощью LLM-классификатора' },
        { step: '4', title: 'Ответ в Telegram', desc: 'Точная цитата и ссылка на исходное сообщение' },
      ],
      terminalSnippet: `[TotalRecall::Daemon] Query: "где мы обсуждали договор на поставку серверов?"
--> Embedding computed: [0.021, -0.048, 0.119, ... (1536 dim)]
--> ChromaDB query executed in 21ms (scanned 84,200 chunks)
--> Match #1 (Score: 0.94): Chat "Ops-2026", 14 Feb 18:22, message_id=4021
--> Synthesized answer dispatched to user`,
    },
  ]

  const current = cases[activeTab]

  return (
    <section id="cases" className="py-20 md:py-28 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#0071E3] dark:text-[#2997FF] mb-2 font-mono">
            Кейсы и открытый код
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-4">
            Проекты, доведенные до результата.
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] dark:text-[#A1A1A6]">
            От коммерческого продакшена для бизнеса (<a href="https://sferus24.ru" target="_blank" rel="noopener noreferrer" className="text-[#0071E3] dark:text-[#2997FF] underline">sferus24.ru</a>) до системного софта на Rust с десятками звезд на GitHub.
          </p>
        </div>

        {/* Apple Segmented Control */}
        <div className="w-full overflow-x-auto pb-3 mb-8 no-scrollbar flex justify-start sm:justify-center px-1">
          <div className="apple-segment-container shrink-0 inline-flex">
            {cases.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => setActiveTab(idx)}
                className={`apple-segment-item whitespace-nowrap px-3 sm:px-4 py-1.5 text-xs sm:text-sm ${
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
        <div className="apple-card p-4 sm:p-8 md:p-12 transition-all duration-300 w-full max-w-full overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-start w-full min-w-0">
            {/* Left Column: Description & Details */}
            <div className="lg:col-span-7 flex flex-col justify-between w-full min-w-0">
              <div>
                <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#0071E3] dark:text-[#2997FF] mb-2 block">
                  {current.category}
                </span>

                <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-6">
                  {current.title}
                </h3>

                {/* Problem & Solution block */}
                <div className="space-y-4 mb-8">
                  <div className="p-3.5 sm:p-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/[0.06]">
                    <div className="text-xs font-semibold text-[#86868B] uppercase mb-1">Задача</div>
                    <p className="text-xs sm:text-sm text-[#1D1D1F] dark:text-[#E8E8ED] leading-relaxed">
                      {current.problem}
                    </p>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-xl bg-[#0071E3]/5 dark:bg-[#2997FF]/10 border border-[#0071E3]/15 dark:border-[#2997FF]/20">
                    <div className="text-xs font-semibold text-[#0071E3] dark:text-[#2997FF] uppercase mb-1">Решение</div>
                    <p className="text-xs sm:text-sm text-[#1D1D1F] dark:text-[#E8E8ED] leading-relaxed">
                      {current.solution}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-8 w-full">
                  {current.metrics.map((m, idx) => (
                    <div key={idx} className="p-2.5 sm:p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.06] text-center min-w-0">
                      <div className="text-sm sm:text-2xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] font-mono mb-0.5 truncate">
                        {m.val}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-[#86868B] dark:text-[#86868B] leading-tight truncate">
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

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full">
                {current.liveUrl && (
                  <a
                    href={current.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apple-btn-primary gap-2 w-full sm:w-auto"
                  >
                    <span>{current.id === 'sferus' ? 'Открыть сайт sferus24.ru' : 'Смотреть на GitHub'}</span>
                    <ExternalLink size={15} />
                  </a>
                )}

                <a
                  href={`https://t.me/wwmaxik?text=${encodeURIComponent(`Здравствуйте, Максим! Меня заинтересовал проект "${current.title}". Хочу обсудить аналогичную задачу.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-btn-secondary gap-2 w-full sm:w-auto"
                >
                  <span>Обсудить в Telegram</span>
                </a>
              </div>
            </div>

            {/* Right Column: Flow Architecture & Terminal Simulator */}
            <div className="lg:col-span-5 space-y-5 w-full min-w-0">
              {/* Architecture Steps */}
              <div className="p-4 sm:p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] w-full min-w-0">
                <div className="text-xs font-semibold text-[#86868B] uppercase mb-4 flex items-center gap-1.5">
                  <Zap size={14} className="text-[#0071E3] dark:text-[#2997FF]" />
                  <span>Этапы и архитектурный пайплайн</span>
                </div>
                <div className="space-y-3">
                  {current.flow.map((s, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#0071E3]/10 dark:bg-[#2997FF]/15 text-[#0071E3] dark:text-[#2997FF] text-xs font-mono font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {s.step}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] truncate">
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

              {/* Terminal Preview Window */}
              <div className="rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.12] bg-[#1E1E20] text-white shadow-lg w-full max-w-full min-w-0">
                {/* Window Chrome */}
                <div className="px-4 py-3 bg-[#2A2A2E] flex items-center justify-between border-b border-white/[0.08]">
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#A1A1A6] font-mono truncate px-2">
                    <Terminal size={12} className="flex-shrink-0" />
                    <span className="truncate">{current.id === 'sferus' ? 'sferus24.access.log' : 'console.log'}</span>
                  </div>
                  <div className="w-10 flex-shrink-0" />
                </div>
                {/* Code body */}
                <pre className="p-3.5 sm:p-4 text-[10px] sm:text-[11px] font-mono text-[#D2D2D7] overflow-x-auto leading-relaxed whitespace-pre selection:bg-white/20 block w-full max-w-full">
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
