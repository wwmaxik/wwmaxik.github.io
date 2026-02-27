import { MessageCircle, ArrowDown } from 'lucide-react'

function Hero() {
  const scrollToCases = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-800 border border-neon-purple/30 mb-8">
          <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
          <span className="text-sm text-gray-300">Доступен для новых проектов</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Автоматизация бизнеса,{' '}
          <span className="gradient-text">API и боты за 1-3 дня</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Разрабатываю быстрые IT-решения для малого бизнеса. 
          Работаю официально (самозанятый), закрываю проекты в срок от 24 часов.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Обсудить проект в Telegram"
            className="btn-primary inline-flex items-center gap-2"
          >
            <MessageCircle size={20} />
            Обсудить проект
          </a>
          <button
            onClick={scrollToCases}
            className="btn-secondary inline-flex items-center gap-2"
          >
            <ArrowDown size={20} />
            Смотреть кейсы
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-purple">50+</div>
            <div className="text-sm text-gray-400 mt-1">Проектов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-green">1-3</div>
            <div className="text-sm text-gray-400 mt-1">Дня срок</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-purple">100%</div>
            <div className="text-sm text-gray-400 mt-1">Сдача</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-gray-600" size={24} />
      </div>
    </section>
  )
}

export default Hero
