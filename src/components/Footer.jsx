import { Send, Mail, Github, MessageCircle } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 px-4 bg-dark-800/30 border-t border-dark-700">
      <div className="max-w-4xl mx-auto text-center">
        {/* CTA */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Опишите вашу задачу, и я скажу{' '}
            <span className="gradient-text">цену и сроки уже сегодня</span>
          </h2>
          <p className="text-gray-300 mb-6">
            Консультация бесплатна. Отвечаю в течение часа.
          </p>
          <a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написать в Telegram"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Send size={18} />
            Написать в Telegram
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent mb-8" />

        {/* Contact Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="flex items-center gap-2 text-gray-300 hover:text-neon-green transition-colors"
          >
            <MessageCircle size={20} />
            <span>Telegram</span>
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-2 text-gray-300 hover:text-neon-purple transition-colors"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="mailto:hello@example.com"
            aria-label="Email"
            className="flex items-center gap-2 text-gray-300 hover:text-neon-purple transition-colors"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-600 text-sm">
          <p>&copy; {currentYear} Самозанятый разработчик. Работаю по договору НПД.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
