import { CheckCircle, ExternalLink, Github } from 'lucide-react'

function CaseStudy() {
  const features = [
    'Вебхук оплаты через ЮMoney',
    'Автоматический вызов API СДЭК при оплате',
    'Генерация трек-номера и накладной',
    'Стабильная работа на легковесной инфраструктуре',
  ]

  const techStack = ['React', 'Node.js', 'REST API', 'Docker']

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Кейс: <span className="gradient-text">E-commerce платформа</span>
          </h2>
          <p className="section-subtitle">
            Полная автоматизация интернет-магазина от заказа до доставки.
          </p>
        </div>

        {/* Case Study Card */}
        <div className="bg-dark-800 border border-neon-purple/30 rounded-2xl p-8 md:p-10 relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Main Description */}
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              С нуля разработан интернет-магазин. Настроен вебхук оплаты через ЮMoney. 
              При успешной транзакции система автоматически дергает API СДЭК, 
              генерирует трек-номер и накладную. Серверная часть работает стабильно 
              и экономно на легковесной инфраструктуре.
            </p>

            {/* Features List */}
            <div className="grid md:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-neon-green flex-shrink-0" size={20} />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-gray-500 mr-2">Стек:</span>
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-md bg-dark-700 text-neon-purple border border-neon-purple/20"
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
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <ExternalLink size={18} />
                Обсудить похожий проект
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <p className="text-center text-gray-500 mt-8 text-sm">
          Есть и другие кейсы. Обсудим на консультации.
        </p>
      </div>
    </section>
  )
}

export default CaseStudy
