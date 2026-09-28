import { useState, useMemo } from 'react'
import { Calculator, Clock, CreditCard, Send, CheckCircle, Sparkles } from 'lucide-react'

function Estimator() {
  const [projectType, setProjectType] = useState('web')
  const [selectedAddons, setSelectedAddons] = useState(['deploy'])
  const [isUrgent, setIsUrgent] = useState(false)

  const projectTypes = [
    {
      id: 'web',
      name: 'Корпоративный веб-портал / SPA',
      basePrice: 25000,
      baseDays: 3,
      desc: 'Современный быстрый сайт под ключ (уровень sferus24.ru)',
    },
    {
      id: 'ai-bot',
      name: 'Telegram-бот с AI / RAG',
      basePrice: 18000,
      baseDays: 2,
      desc: 'Умный бот с базой знаний компании или админ-панелью',
    },
    {
      id: 'integration',
      name: 'API Интеграция (СДЭК, ЮKassa)',
      basePrice: 14000,
      baseDays: 1,
      desc: 'Автоматизация логистики, приема оплат и обмена данными',
    },
    {
      id: 'rust-sys',
      name: 'Системное GUI / Приложение на Rust',
      basePrice: 35000,
      baseDays: 5,
      desc: 'Высокопроизводительное ПО на чистом Rust (как driftwm-settings)',
    },
  ]

  const addonsList = [
    {
      id: 'payment',
      name: 'Подключение онлайн-оплаты',
      detail: 'ЮKassa, Robokassa или Telegram Stars',
      price: 5000,
      days: 0.5,
    },
    {
      id: 'cdek',
      name: 'Интеграция с логистикой СДЭК',
      detail: 'Автосоздание заказов, накладных и трек-номеров',
      price: 6000,
      days: 0.5,
    },
    {
      id: 'rag',
      name: 'Векторная база знаний RAG',
      detail: 'Поиск и консультирование по документам компании',
      price: 8000,
      days: 1,
    },
    {
      id: 'miniapp',
      name: 'Telegram Mini App (Web UI)',
      detail: 'Полноценный интерактивный веб-интерфейс внутри чата',
      price: 7000,
      days: 1,
    },
    {
      id: 'deploy',
      name: 'Развертывание на сервере под ключ',
      detail: 'Docker, Nginx, SSL, Systemd, мониторинг сбоев',
      price: 4000,
      days: 0.5,
    },
  ]

  const toggleAddon = (id) => {
    setSelectedAddons(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  const { totalPrice, totalDays, currentTypeObj, selectedAddonObjects } = useMemo(() => {
    const current = projectTypes.find(p => p.id === projectType) || projectTypes[0]
    const addons = addonsList.filter(a => selectedAddons.includes(a.id))

    let price = current.basePrice + addons.reduce((sum, a) => sum + a.price, 0)
    let days = current.baseDays + addons.reduce((sum, a) => sum + a.days, 0)

    if (isUrgent) {
      price = Math.round(price * 1.25)
      days = Math.max(1, Math.round(days * 0.6))
    }

    return {
      totalPrice: price,
      totalDays: Math.ceil(days),
      currentTypeObj: current,
      selectedAddonObjects: addons,
    }
  }, [projectType, selectedAddons, isUrgent])

  const telegramMessage = useMemo(() => {
    const addonNames = selectedAddonObjects.map(a => a.name).join(', ')
    return `Здравствуйте, Максим! Рассчитал предварительную смету на сайте:
• Направление: ${currentTypeObj.name}
• Дополнительные модули: ${addonNames || 'Без доп. модулей'}
• Срочность: ${isUrgent ? 'Экспресс-MVP (24-48ч)' : 'Стандартный срок'}
• Ориентировочный расчет: от ${totalPrice.toLocaleString('ru-RU')} ₽ (~${totalDays} ${totalDays === 1 ? 'день' : totalDays < 5 ? 'дня' : 'дней'})

Хочу обсудить техническое задание!`
  }, [currentTypeObj, selectedAddonObjects, isUrgent, totalPrice, totalDays])

  return (
    <section id="estimator" className="py-20 md:py-28 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#0071E3] dark:text-[#2997FF] mb-2 font-mono">
            Интерактивный расчет
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-4">
            Калькулятор проекта.
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] dark:text-[#A1A1A6]">
            Выберите конфигурацию вашей задачи. Прозрачные цены без скрытых платежей, официальный расчет по договору НПД.
          </p>
        </div>

        {/* Calculator Main Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-start w-full min-w-0">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6 w-full min-w-0">
            {/* Step 1: Project Type */}
            <div className="apple-card p-4 sm:p-6 w-full min-w-0">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#86868B] block mb-3 font-mono">
                1. Направление разработки
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full">
                {projectTypes.map((pt) => {
                  const isSelected = projectType === pt.id
                  return (
                    <button
                      key={pt.id}
                      type="button"
                      onClick={() => setProjectType(pt.id)}
                      className={`p-3.5 rounded-xl text-left transition-all duration-150 border min-w-0 ${
                        isSelected
                          ? 'border-[#0071E3] dark:border-[#2997FF] bg-[#0071E3]/5 dark:bg-[#2997FF]/10 ring-1 ring-[#0071E3] dark:ring-[#2997FF]'
                          : 'border-black/[0.06] dark:border-white/[0.08] hover:bg-black/[0.02] dark:hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1 gap-2">
                        <span className={`text-sm font-semibold truncate ${isSelected ? 'text-[#0071E3] dark:text-[#2997FF]' : 'text-[#1D1D1F] dark:text-[#F5F5F7]'}`}>
                          {pt.name}
                        </span>
                        {isSelected && <CheckCircle size={15} className="text-[#0071E3] dark:text-[#2997FF] flex-shrink-0" />}
                      </div>
                      <p className="text-xs text-[#6E6E73] dark:text-[#86868B] leading-tight line-clamp-2">
                        {pt.desc}
                      </p>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 2: Add-ons */}
            <div className="apple-card p-4 sm:p-6 w-full min-w-0">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#86868B] block mb-3 font-mono">
                2. Дополнительные модули и интеграции
              </label>
              <div className="space-y-2 w-full">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id)
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`w-full p-3 rounded-xl text-left flex items-center justify-between transition-all duration-150 border min-w-0 ${
                        isChecked
                          ? 'border-[#0071E3]/40 dark:border-[#2997FF]/40 bg-[#0071E3]/5 dark:bg-[#2997FF]/10'
                          : 'border-black/[0.05] dark:border-white/[0.06] hover:bg-black/[0.02] dark:hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0 flex-1 mr-2">
                        <div className={`w-4 h-4 rounded flex items-center justify-center border transition-colors flex-shrink-0 ${
                          isChecked
                            ? 'bg-[#0071E3] dark:bg-[#2997FF] border-[#0071E3] dark:border-[#2997FF] text-white dark:text-black'
                            : 'border-black/30 dark:border-white/30'
                        }`}>
                          {isChecked && <CheckCircle size={12} />}
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7] truncate">
                            {addon.name}
                          </div>
                          <div className="text-[11px] text-[#86868B] truncate">
                            {addon.detail}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs font-mono text-[#6E6E73] dark:text-[#A1A1A6] font-medium flex-shrink-0">
                        +{addon.price.toLocaleString('ru-RU')} ₽
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 3: Urgency toggle */}
            <div className="apple-card p-4 sm:p-6 flex items-center justify-between w-full min-w-0 gap-3">
              <div className="min-w-0">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#86868B] block mb-0.5 font-mono">
                  3. Режим срочности
                </span>
                <div className="text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7] truncate">
                  Срочный MVP за 24–48 часов
                </div>
                <div className="text-xs text-[#86868B] truncate">
                  Приоритетный слот в разработке (+25% к стоимости)
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsUrgent(prev => !prev)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] flex-shrink-0 ${
                  isUrgent ? 'bg-[#34C759]' : 'bg-black/20 dark:bg-white/20'
                }`}
                role="switch"
                aria-checked={isUrgent}
                aria-label="Включить срочный режим MVP"
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                    isUrgent ? 'translate-x-5' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Summary & CTA Column */}
          <div className="lg:col-span-5 w-full min-w-0 relative lg:sticky lg:top-24">
            <div className="apple-card p-5 sm:p-8 bg-gradient-to-b from-white to-[#F9F9FB] dark:from-[#1C1C1E] dark:to-[#161617] border border-black/[0.08] dark:border-white/[0.12] shadow-apple-card w-full min-w-0">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#86868B] font-mono mb-4">
                <Calculator size={15} className="text-[#0071E3] dark:text-[#2997FF] flex-shrink-0" />
                <span>Итог предварительной оценки</span>
              </div>

              {/* Price Display */}
              <div className="mb-6 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
                <div className="text-xs text-[#86868B] mb-1">Ориентировочный бюджет:</div>
                <div className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] font-mono">
                  от {totalPrice.toLocaleString('ru-RU')} ₽
                </div>
                <div className="text-xs text-[#34C759] dark:text-[#30D158] font-medium mt-1 flex items-center gap-1.5">
                  <CheckCircle size={13} className="flex-shrink-0" />
                  <span>Чек плательщика НПД включен</span>
                </div>
              </div>


              {/* Specs Breakdown */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#86868B] flex items-center gap-1.5">
                    <Clock size={14} />
                    Срок реализации:
                  </span>
                  <span className="font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] font-mono">
                    {totalDays} {totalDays === 1 ? 'день' : totalDays < 5 ? 'дня' : 'дней'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#86868B] flex items-center gap-1.5">
                    <CreditCard size={14} />
                    Порядок оплаты:
                  </span>
                  <span className="font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                    50% предоплата / 50% сдача
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#86868B] flex items-center gap-1.5">
                    <Sparkles size={14} />
                    Гарантия и саппорт:
                  </span>
                  <span className="font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                    14 дней бесплатной поддержки
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={`https://t.me/wwmaxik?text=${encodeURIComponent(telegramMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-btn-primary w-full gap-2 text-sm font-semibold py-3"
              >
                <Send size={16} />
                <span>Отправить ТЗ в Telegram</span>
              </a>

              <p className="text-[11px] text-center text-[#86868B] mt-4 leading-relaxed">
                Точная смета фиксируется в официальном договоре после короткого обсуждения деталей.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Estimator
