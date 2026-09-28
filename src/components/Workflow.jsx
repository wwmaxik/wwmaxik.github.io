import { ClipboardList, Code, CheckCircle, Rocket, Shield, Clock, FileCheck } from 'lucide-react'

function Workflow() {
  const steps = [
    {
      num: '01',
      icon: ClipboardList,
      title: 'Бриф и оценка за 1–2 часа',
      desc: 'Без многостраничных анкет. Вы описываете задачу своими словами, я задаю 3–5 уточняющих вопросов и даю точную оценку сроков и стоимости.',
      duration: '1–2 часа',
    },
    {
      num: '02',
      icon: FileCheck,
      title: 'Договор и старт',
      desc: 'Заключаем типовой договор на разработку (НПД). Фиксируем состав работ, сроки и порядок сдачи. Никаких непредвиденных доплат в процессе.',
      duration: 'День 1',
    },
    {
      num: '03',
      icon: Code,
      title: 'Разработка и демо на стенде',
      desc: 'Пишу чистый код, подключаю API и тестирую граничные случаи. Вы получаете ссылку на тестового бота или стенд и лично проверяете сценарии.',
      duration: 'Дни 1–2',
    },
    {
      num: '04',
      icon: Rocket,
      title: 'Деплой, передача и чек',
      desc: 'Разворачиваю сервис на вашем сервере, настраиваю автозапуск и автобэкапы. Передаю репозиторий с инструкцией и формирую официальный чек ФНС.',
      duration: 'День 2–3',
    },
  ]

  return (
    <section id="workflow" className="py-20 md:py-28 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#0071E3] dark:text-[#2997FF] mb-2 font-mono">
            Прозрачный регламент
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-4">
            Как строится работа над проектом.
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] dark:text-[#A1A1A6]">
            От первой мысли до боевого релиза на продакшене без бюрократии и срыва дедлайнов.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="apple-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-mono font-bold text-[#0071E3] dark:text-[#2997FF]">
                    {s.num}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-black/[0.04] dark:bg-white/[0.08] text-[#86868B]">
                    {s.duration}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight mb-2">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Legal & Safety Banner for Russian Businesses */}
        <div className="apple-card p-6 sm:p-8 bg-gradient-to-r from-black/[0.02] to-transparent dark:from-white/[0.03]">
          <div className="grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#34C759] dark:text-[#30D158] font-mono uppercase">
                <Shield size={15} />
                <span>Юридическая чистота</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight">
                Работаю как самозанятый (НПД) — 100% прозрачно для ООО и ИП
              </h3>
              <p className="text-xs sm:text-sm text-[#6E6E73] dark:text-[#A1A1A6] leading-relaxed">
                Заказчикам не нужно платить за меня страховые взносы или НДФЛ. Вы получаете договор, акт и фискальный чек ФНС «Мой налог», который полностью уменьшает вашу налогооблагаемую базу.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <div className="flex items-center gap-2 text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
                <CheckCircle size={16} className="text-[#34C759] flex-shrink-0" />
                <span>Безналичный расчет для юрлиц</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
                <CheckCircle size={16} className="text-[#34C759] flex-shrink-0" />
                <span>Электронный чек сразу в день оплаты</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
                <CheckCircle size={16} className="text-[#34C759] flex-shrink-0" />
                <span>14 дней бесплатной гарантии на баги</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Workflow
