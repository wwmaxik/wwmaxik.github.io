import { MessageCircle, ArrowDown } from 'lucide-react'

function Hero() {
  const scrollToCases = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-24 relative overflow-hidden">
      {/* Background - subtle gradient for Light Mode */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm text-slate-600">Доступен для новых проектов</span>
        </div>

        {/* Main Heading - strict, no gradient */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-slate-900">
          Автоматизация бизнеса,{' '}
          <span className="text-indigo-600">API и боты за 1-3 дня</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Разрабатываю быстрые IT-решения для малого бизнеса. 
          Работаю официально (самозанятый), закрываю проекты в срок от 24 часов.
        </p>

        {/* CTA Buttons - Light Mode */}
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

        {/* Stats - White cards with shadow */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-lg mx-auto">
          <div className="bento-card text-center">
            <div className="text-2xl md:text-3xl font-bold text-slate-900">50+</div>
            <div className="text-xs md:text-sm text-slate-500 mt-1 font-mono">Проектов</div>
          </div>
          <div className="bento-card text-center">
            <div className="text-2xl md:text-3xl font-bold text-slate-900">1-3</div>
            <div className="text-xs md:text-sm text-slate-500 mt-1 font-mono">Дня срок</div>
          </div>
          <div className="bento-card text-center">
            <div className="text-2xl md:text-3xl font-bold text-slate-900">100%</div>
            <div className="text-xs md:text-sm text-slate-500 mt-1 font-mono">Сдача</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-slate-400" size={24} />
      </div>
    </section>
  )
}

export default Hero
