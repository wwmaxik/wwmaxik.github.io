import { CheckCircle, ExternalLink } from 'lucide-react'

function CaseStudy() {
  const features = [
    'Вебхук оплаты через ЮMoney',
    'Автоматический вызов API СДЭК при оплате',
    'Генерация трек-номера и накладной',
    'Стабильная работа на легковесной инфраструктуре',
  ]

  const techStack = ['React', 'Node.js', 'REST API', 'Docker']

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Кейс: <span className="gradient-text-accent">E-commerce платформа</span>
          </h2>
          <p className="section-subtitle">
            Полная автоматизация интернет-магазина от заказа до доставки.
          </p>
        </div>

        {/* Case Study Card - White with shadow */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-10 lg:p-12 shadow-sm">
          <div className="relative z-10">
            {/* Main Description */}
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              С нуля разработан интернет-магазин. Настроен вебхук оплаты через ЮMoney. 
              При успешной транзакции система автоматически дергает API СДЭК, 
              генерирует трек-номер и накладную. Серверная часть работает стабильно 
              и экономно на легковесной инфраструктуре.
            </p>

            {/* Features List */}
            <div className="grid md:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-emerald-600 flex-shrink-0" size={20} />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-slate-500 mr-2 font-mono">Стек:</span>
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-md bg-slate-100 text-indigo-600 border border-slate-200 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://t.me/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Обсудить похожий проект в Telegram"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <ExternalLink size={18} />
                Обсудить похожий проект
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <p className="text-center text-slate-500 mt-8 text-sm">
          Есть и другие кейсы. Обсудим на консультации.
        </p>
      </div>
    </section>
  )
}

export default CaseStudy
