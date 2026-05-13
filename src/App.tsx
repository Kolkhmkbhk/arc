import React, { useState } from 'react';

// Color palette extracted from logos:
// Primary Terracotta: #C94F3C
// Deep Polytechnic Blue: #1E4A8A
// Sand/Beige: #F5F0E6
// Dark neutral: #1F2937

const COLORS = {
  primary: '#C94F3C',
  blue: '#1E4A8A',
  sand: '#F5F0E6',
  dark: '#1F2937',
};

const navLinks = [
  { label: 'О нас', id: 'about' },
  { label: 'Портфолио', id: 'portfolio' },
  { label: 'Проекты на разработке', id: 'projects' },
  { label: 'Петербургская мозаика', id: 'mosaic' },
  { label: 'Фотовернисаж', id: 'gallery' },
  { label: 'Контакты', id: 'contacts' },
  { label: 'Новости', id: 'news' },
];

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [consent, setConsent] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      alert('Пожалуйста, подтвердите согласие на обработку персональных данных');
      return;
    }
    console.log('Форма отправлена (демо):', formData);
    alert('Спасибо! Ваше сообщение отправлено (демо-режим). Данные не передаются на сервер.');
    setFormData({ name: '', email: '', message: '' });
    setConsent(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#1F2937]">
      {/* HEADER / NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-[#F5F0E6]">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            {/* Logo Architektury */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 flex items-center justify-center" style={{ backgroundColor: COLORS.sand }}>
                <span className="font-bold text-3xl tracking-tighter" style={{ color: COLORS.primary }}>А</span>
              </div>
              <div>
                <div className="font-semibold text-xl tracking-tight">АрхитекТуры</div>
                <div className="text-[10px] text-[#1E4A8A] -mt-1">СПбПУ Петра Великого</div>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map(link => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className="hover:text-[#C94F3C] transition-colors">
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2" aria-label="Меню">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-3 text-sm font-medium">
            {navLinks.map(link => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-left py-2 hover:text-[#C94F3C]">
                {link.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="pt-20 bg-[#F5F0E6] min-h-[92vh] flex items-center relative">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white shadow-sm border text-sm">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS.primary }}></div>
              <span>Студенческое проектное бюро СПбПУ</span>
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-4">
            АрхитекТуры
          </h1>
          <p className="text-2xl text-[#1E4A8A] mb-8">Экскурсии • История • Культура Петербурга</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => scrollToSection('about')} className="px-8 py-3 rounded-full text-white font-medium" style={{ backgroundColor: COLORS.primary }}>
              Узнать о нас
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="px-8 py-3 rounded-full border border-[#1E4A8A] hover:bg-[#1E4A8A] hover:text-white transition font-medium">
              Смотреть портфолио
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[3px] text-[#1E4A8A]">ПРОКРУТИТЕ ВНИЗ</div>
      </section>

      {/* О НАС */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl mb-14">
          <div className="text-[#C94F3C] text-sm tracking-[2px] font-medium mb-3">ИСТОРИЯ И МИССИЯ</div>
          <h2 className="text-5xl font-bold tracking-tight">О нас</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6 text-[15px] leading-relaxed">
            <p>Студенческое проектное бюро «АрхитекТуры» создано в 2023 году при поддержке Института промышленного менеджмента, экономики и торговли (ИПМЭиТ) и Совета по молодёжной политике СПбПУ Петра Великого.</p>
            <p>Мы объединяем студентов, увлечённых историей и архитектурой Петербурга, и помогаем им развиваться в роли экскурсоводов и организаторов культурных проектов.</p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4">Цели и задачи</h3>
            <ul className="space-y-2 text-sm list-disc pl-5">
              <li>Развитие навыков экскурсоводов и подготовка к аттестации</li>
              <li>Проектирование и реализация экскурсионных продуктов</li>
              <li>Организация образовательных мероприятий и лекций</li>
              <li>Помощь в формировании портфолио участников</li>
              <li>Работа с грантами и конкурсами</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-semibold mb-2">Состав актива</div>
            <div className="text-sm text-gray-600">Руководитель, три отдела: культурно-массовая и проектная работа, образовательная работа, медиа-отдел, хозяйственный отдел.</div>
          </div>
          <div>
            <div className="font-semibold mb-2">Структура управления</div>
            <div className="text-sm text-gray-600">Совет проектного бюро (заседания не реже 1 раза в год). Руководитель избирается Советом.</div>
          </div>
          <div>
            <a href="#" className="inline-block text-sm px-5 py-2.5 border rounded-full hover:bg-[#F5F0E6] transition">Скачать Положение о бюро (PDF)</a>
          </div>
        </div>
      </section>

      {/* ПОРТФОЛИО */}
      <section id="portfolio" className="bg-[#F5F0E6] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold tracking-tight mb-12">Портфолио</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { title: 'Политехнический — сердце Политеха', desc: 'Экскурсия по кампусу СПбПУ' },
              { title: 'Архитектурный модерн Петербурга', desc: 'Знаковые здания и их авторы' },
              { title: 'Экскурсии для официальных делегаций', desc: 'Индивидуальные программы' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-[#E8DFD0]">
                <div className="h-2 w-12 mb-8" style={{ backgroundColor: COLORS.primary }}></div>
                <h4 className="font-semibold text-xl mb-2 tracking-tight">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-5">Участие в мероприятиях</h3>
            <div className="flex flex-wrap gap-3">
              {['Конференция «Молодой Политех»', 'Форум молодёжных инициатив', 'Грантовый конкурс «Культура СПб»', 'Дни открытых дверей СПбПУ'].map((t, i) => (
                <div key={i} className="px-5 py-2 bg-white rounded-full text-sm border">{t}</div>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-10 border-t flex flex-wrap gap-x-12 gap-y-4 items-center opacity-75">
            <div className="text-sm font-medium">Партнёры:</div>
            <div>Туристско-информационное бюро СПб</div>
            <div>Музей истории СПбПУ</div>
            <div>Комитет по туризму</div>
          </div>
        </div>
      </section>

      {/* ПРОЕКТЫ НА РАЗРАБОТКЕ */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold tracking-tight mb-12">Проекты на разработке</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Индустриальный туризм Политеха', stage: 'Разработка маршрута', date: 'Май 2026' },
            { name: 'Квест-экскурсия «Тайны кампуса»', stage: 'Тестирование', date: 'Апрель 2026' },
            { name: 'Аудиогид на иностранных языках', stage: 'Запись контента', date: 'Июнь 2026' },
            { name: 'Цифровая карта архитектурных памятников', stage: 'Прототип', date: 'Сентябрь 2026' },
          ].map((p, idx) => (
            <div key={idx} className="border rounded-3xl p-8 hover:shadow-md transition">
              <div className="text-xs uppercase tracking-widest text-[#C94F3C] mb-3">В РАЗРАБОТКЕ</div>
              <h4 className="font-semibold text-xl leading-tight mb-8">{p.name}</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <div>Стадия: {p.stage}</div>
                <div>Запуск: {p.date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ПЕТЕРБУРГСКАЯ МОЗАИКА */}
      <section id="mosaic" className="bg-[#1E4A8A] py-20 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold tracking-tight mb-3">Петербургская мозаика</h2>
          <p className="text-[#A3C1E8] mb-12 max-w-md">Интересные материалы об истории культуры Петербурга</p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Архитектурные жемчужины Выборгской стороны', date: '12 февраля 2026', excerpt: 'Забытые доходные дома и их выдающиеся архитекторы.' },
              { title: 'История экскурсионного дела в Петербурге', date: '28 января 2026', excerpt: 'От первых гиодов до современного музейного туризма.' },
              { title: 'Объекты конструктивизма в Политехническом', date: '15 января 2026', excerpt: 'Как выглядел кампус в 1920–30-е годы.' },
              { title: 'Памятные места Политеха', date: '3 декабря 2025', excerpt: 'Мемориальные доски и знаковые события университета.' },
            ].map((a, i) => (
              <div key={i} className="border border-white/30 rounded-3xl p-8 group">
                <div className="text-xs tracking-[2px] text-[#A3C1E8] mb-4">{a.date}</div>
                <h4 className="font-semibold text-2xl mb-4 group-hover:text-[#C94F3C] transition">{a.title}</h4>
                <p className="text-sm opacity-90 mb-6">{a.excerpt}</p>
                <a href="#" className="text-sm underline decoration-white/40 hover:decoration-white">Читать далее →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ФОТОВЕРНИСАЖ */}
      <section id="gallery" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold tracking-tight mb-4">Фотовернисаж</h2>
        <p className="text-sm text-gray-500 mb-10">Демо-изображения. Все фото размещены с согласия участников и авторов.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-3xl aspect-[4/3]">
              <img 
                src={`https://picsum.photos/id/${30 + idx}/800/600`} 
                alt={`Демо-изображение: архитектура Петербурга. Автор: проектное бюро «АрхитекТуры»`} 
                className="w-full h-full object-cover transition group-hover:scale-105" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-5 text-white text-sm">
                <div className="font-medium">Политехнический кампус • {2025 - idx}</div>
                <div className="text-xs opacity-75">Фото: команда АрхитекТуры</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs mt-8 text-gray-500">Копирование разрешено только с письменного разрешения проектного бюро.</p>
      </section>

      {/* НОВОСТИ */}
      <section id="news" className="bg-[#F5F0E6] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold tracking-tight mb-12">Новости</h2>
          <div className="space-y-6">
            {[
              { date: '20.02.2026', title: 'Проведена лекция по аттестации гидов', text: 'Приглашённые эксперты рассказали о новых требованиях к экскурсоводам.' },
              { date: '11.02.2026', title: 'Победа в грантовом конкурсе «Молодёжь и культура»', text: 'Проект «Архитектурные тропы» получил поддержку Администрации Санкт-Петербурга.' },
              { date: '05.02.2026', title: 'Открыта запись на весенние экскурсии', text: 'Расписание экскурсий по кампусу СПбПУ доступно на сайте.' },
              { date: '22.01.2026', title: 'Студенты представили проекты на конференции', text: 'Доклады по индустриальному туризму и цифровым аудиогидам.' },
            ].map((n, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 flex flex-col md:flex-row md:items-center gap-4 border">
                <div className="md:w-40 text-sm text-[#C94F3C] font-medium">{n.date}</div>
                <div className="flex-1">
                  <div className="font-semibold text-xl mb-1">{n.title}</div>
                  <div className="text-sm text-gray-600">{n.text}</div>
                </div>
                <a href="#" className="text-sm font-medium text-[#1E4A8A] hover:underline">Подробнее →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* КОНТАКТЫ */}
      <section id="contacts" className="max-w-4xl mx-auto px-6 py-20">
        <div className="max-w-xl mb-10">
          <h2 className="text-5xl font-bold tracking-tight">Контакты</h2>
          <p className="text-xl mt-2 text-[#1E4A8A]">Напишите нам — мы всегда рады новым идеям и вопросам.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-16">
          {/* Contact Form */}
          <div className="md:col-span-3">
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Ваше имя" required className="w-full border border-gray-300 px-6 py-4 rounded-2xl" />
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" required className="w-full border border-gray-300 px-6 py-4 rounded-2xl" />
              <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Ваше сообщение" rows={5} required className="w-full border border-gray-300 px-6 py-4 rounded-3xl resize-y" />
              
              <label className="flex items-start gap-3 text-sm">
                <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} className="mt-1" />
                <span>Я согласен на обработку персональных данных согласно <button type="button" onClick={() => setIsPrivacyOpen(true)} className="underline">Политике конфиденциальности</button></span>
              </label>

              <button type="submit" className="w-full py-4 rounded-3xl text-white font-medium transition" style={{ backgroundColor: COLORS.primary }}>
                Отправить
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="md:col-span-2 text-sm space-y-8 pt-2">
            <div>
              <div className="font-semibold mb-1">Email</div>
              <a href="mailto:architektury@spbstu.ru" className="text-[#C94F3C]">architektury@spbstu.ru</a>
            </div>
            <div>
              <div className="font-semibold mb-1">ВКонтакте</div>
              <div>vk.com/architektury_spbpu</div>
              <img src="https://picsum.photos/id/1011/120/120" alt="QR-код ВКонтакте" className="mt-3 w-24 rounded-xl" />
            </div>
            <div>
              <div className="font-semibold mb-1">Адрес</div>
              <div>Новороссийская ул., 50, Санкт-Петербург</div>
              <div className="text-xs mt-3 text-gray-500">Как добраться: ст. м. «Лесная», автобус 86, 102 до остановки «Политехнический университет»</div>
            </div>
          </div>
        </div>

        {/* Yandex Map placeholder */}
        <div className="mt-16 rounded-3xl overflow-hidden border h-[300px] bg-[#E8DFD0] flex items-center justify-center text-sm text-gray-600">
          <div className="text-center">
            <div className="font-medium mb-1">Яндекс.Карты</div>
            <div>Новороссийская ул., 50, Санкт-Петербург</div>
            <div className="text-xs mt-1">(В реальном проекте — интерактивная карта Яндекс)</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1F2937] py-12 text-[#A3B3C4] text-sm">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-y-6">
          <div>
            © Студенческое проектное бюро «АрхитекТуры»,<br />СПбПУ Петра Великого, 2026. Все права защищены.
          </div>
          <div className="flex gap-x-8 text-xs">
            <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-white">Политика конфиденциальности</button>
            <span>Логотипы СПбПУ и ИПМЭиТ — собственность университета</span>
          </div>
        </div>
      </footer>

      {/* Privacy Modal */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4" onClick={() => setIsPrivacyOpen(false)}>
          <div onClick={e => e.stopPropagation()} className="bg-white max-w-lg w-full rounded-3xl p-8">
            <h3 className="font-semibold text-2xl mb-5">Политика конфиденциальности</h3>
            <div className="text-sm text-gray-700 space-y-4 leading-relaxed">
              <p>Персональные данные используются исключительно для ответа на сообщение. Данные не передаются третьим лицам. Вы можете в любой момент запросить удаление данных, написав на architektury@spbstu.ru.</p>
              <p>Используя форму, вы подтверждаете согласие на обработку персональных данных в соответствии с ФЗ-152.</p>
            </div>
            <button onClick={() => setIsPrivacyOpen(false)} className="mt-8 w-full py-3 rounded-2xl bg-[#1F2937] text-white text-sm">Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;