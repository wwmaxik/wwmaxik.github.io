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
      {/* Radial background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a2e_0%,#030303_70%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
          <span className="text-sm text-gray-300">Доступен для новых проектов</span>
        </div>

        {/* Main Heading with gradient */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight tracking-tight">
          Автоматизация бизнеса,{' '}
          <span className="gradient-text">API и боты за 1-3 дня</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Разрабатываю быстрые IT-решения для малого бизнеса. 
          Работаю официально (самозанятый), закрываю проекты в срок от 24 часов.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-16">
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

        {/* Stats - Bento Grid */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-lg mx-auto">
          <div className="bento-card text-center">
            <div className="text-2xl md:text-3xl font-semibold text-white">50+</div>
            <div className="text-xs md:text-sm text-gray-400 mt-1 font-mono">Проектов</div>
          </div>
          <div className="bento-card text-center">
            <div className="text-2xl md:text-3xl font-semibold text-white">1-3</div>
            <div className="text-xs md:text-sm text-gray-400 mt-1 font-mono">Дня срок</div>
          </div>
          <div className="bento-card text-center">
            <div className="text-2xl md:text-3xl font-semibold text-white">100%</div>
            <div className="text-xs md:text-sm text-gray-400 mt-1 font-mono">Сдача</div>
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
