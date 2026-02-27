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
    <section id="services" className="py-24 px-4 bg-dark-800/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Услуги</span>
          </h2>
          <p className="section-subtitle">
            Решаю конкретные бизнес-задачи. Никакой воды — только работающий код.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card group p-8">
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-neon-purple/10 flex items-center justify-center mb-4 group-hover:bg-neon-purple/20 transition-colors">
                <service.icon className="text-neon-purple" size={28} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 text-xs rounded-md bg-dark-700 text-gray-300 border border-dark-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Advantages */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="text-4xl mb-3">📋</div>
            <h4 className="font-semibold text-white mb-2">По договору (НПД)</h4>
            <p className="text-sm text-gray-400">Работаю официально как самозанятый. Без налоговых рисков для бизнеса.</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-3">⚡</div>
            <h4 className="font-semibold text-white mb-2">Скорость</h4>
            <p className="text-sm text-gray-400">Использую ИИ-агенты в пайплайне. Рабочий MVP за сутки.</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-3">🛡️</div>
            <h4 className="font-semibold text-white mb-2">Надежность</h4>
            <p className="text-sm text-gray-400">Сам настраиваю сервера и CI/CD. Отдаю готовый продукт.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
