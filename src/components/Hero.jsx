import { MessageCircle, ArrowDown } from 'lucide-react'

function Hero() {
  const scrollToCases = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-24 relative overflow-hidden bg-slate-50">
      {/* Background blobs - жидкие цветовые пятна */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400 bg-blob" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 bg-blob" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 glass-card-round mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm text-slate-600">Доступен для новых проектов</span>
        </div>

        {/* Main Heading - text-slate-900 для контраста */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-slate-900">
          Автоматизация бизнеса,{' '}
          <span className="text-indigo-600">API и боты за 1-3 дня</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
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
            className="glass-btn btn-secondary inline-flex items-center gap-2 px-6 py-3.5 min-h-[48px]"
          >
            <ArrowDown size={20} />
            Смотреть кейсы
          </button>
        </div>

        {/* Stats - Glass cards rounded-3xl */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-lg mx-auto">
          <div className="glass-card-round text-center p-4 md:p-6">
            <div className="text-2xl md:text-3xl font-bold text-slate-900">50+</div>
            <div className="text-xs md:text-sm text-slate-500 mt-1 font-mono">Проектов</div>
          </div>
          <div className="glass-card-round text-center p-4 md:p-6">
            <div className="text-2xl md:text-3xl font-bold text-slate-900">1-3</div>
            <div className="text-xs md:text-sm text-slate-500 mt-1 font-mono">Дня срок</div>
          </div>
          <div className="glass-card-round text-center p-4 md:p-6">
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
