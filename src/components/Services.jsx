import { Bot, Plug, Database } from 'lucide-react'

function Services() {
  const services = [
    {
      icon: Bot,
      title: 'Telegram-боты под ключ',
      description: 'Магазины, техподдержка, ИИ-ассистенты. Полная автоматизация бизнес-процессов в привычном мессенджере.',
      tags: ['Node.js', 'Python', 'AI'],
    },
    {
      icon: Plug,
      title: 'API Интеграции',
      description: 'Подключение эквайринга (ЮMoney, Robokassa), служб доставки (СДЭК) и CRM. Объединяю разрозненные системы в единое целое.',
      tags: ['REST API', 'Webhooks', 'CRM'],
    },
    {
      icon: Database,
      title: 'Парсеры и скрипты',
      description: 'Сбор данных, автоматизация рутины. Экономлю десятки часов ручного труда ваших сотрудников.',
      tags: ['Node.js', 'Python', 'Selenium'],
    },
  ]

  return (
    <section id="services" className="py-24 px-4 relative bg-slate-50">
      {/* Background blobs */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-indigo-400 bg-blob" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-purple-400 bg-blob" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text-accent">Услуги</span>
          </h2>
          <p className="section-subtitle">
            Решаю конкретные бизнес-задачи. Никакой воды — только работающий код.
          </p>
        </div>

        {/* Services Grid - Glass cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="glass-card group p-6 md:p-8 hover:bg-white/60 transition-all duration-300">
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-indigo-100 flex items-center justify-center mb-5 group-hover:bg-indigo-200 transition-colors">
                <service.icon className="text-indigo-600" size={28} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-slate-900 group-hover:text-indigo-600 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2.5 py-1 text-xs rounded-md bg-white/40 text-slate-600 border border-white/40 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Advantages */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center p-6">
            <div className="text-4xl mb-3">📋</div>
            <h4 className="font-semibold text-slate-900 mb-2">По договору (НПД)</h4>
            <p className="text-sm text-slate-600">Работаю официально как самозанятый. Без налоговых рисков для бизнеса.</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-3">⚡</div>
            <h4 className="font-semibold text-slate-900 mb-2">Скорость</h4>
            <p className="text-sm text-slate-600">Использую ИИ-агенты в пайплайне. Рабочий MVP за сутки.</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-3">🛡️</div>
            <h4 className="font-semibold text-slate-900 mb-2">Надежность</h4>
            <p className="text-sm text-slate-600">Сам настраиваю сервера и CI/CD. Отдаю готовый продукт.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
