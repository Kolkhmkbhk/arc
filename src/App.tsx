import { type FormEvent, useEffect, useState } from "react";
import logoImage from './assets/color-logo.jpg';

const navItems = [
  { label: "О нас", href: "#about" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Проекты на разработке", href: "#projects" },
  { label: "Петербургская мозаика", href: "#mosaic" },
  { label: "Фотовернисаж", href: "#gallery" },
  { label: "Контакты", href: "#contacts" },
  { label: "Новости", href: "#news" },
];

const palette = [
  { name: "терракота", value: "#cf3a21" },
  { name: "синий Политеха", value: "#315d95" },
  { name: "песочный", value: "#e7ddcd" },
  { name: "зелёный СПбПУ", value: "#35aa36" },
  { name: "графит", value: "#111111" },
];

const excursions = [
  {
    title: "Политехнический - сердце Политеха",
    text: "Маршрут по кампусу, инженерной истории и памятным местам университета.",
    image: "https://picsum.photos/seed/polytech-heart/780/520",
  },
  {
    title: "Архитектурный модерн Петербурга",
    text: "Прогулка о фасадах, деталях, материалах и культурном контексте начала XX века.",
    image: "https://picsum.photos/seed/spb-modern/780/520",
  },
  {
    title: "Экскурсии для официальных делегаций",
    text: "Короткие представительские маршруты для гостей, партнёров и абитуриентов Политеха.",
    image: "https://picsum.photos/seed/delegation-tour/780/520",
  },
];

const events = [
  {
    title: "Студенческие конференции",
    text: "Доклады об экскурсионном проектировании и городской идентичности.",
    image: "https://picsum.photos/seed/student-conference/620/430",
  },
  {
    title: "Городские форумы",
    text: "Обсуждение молодёжных инициатив в сфере культуры и туризма.",
    image: "https://picsum.photos/seed/city-forum/620/430",
  },
  {
    title: "Грантовые конкурсы",
    text: "Подготовка заявок на культурно-просветительские проекты.",
    image: "https://picsum.photos/seed/grant-contest/620/430",
  },
];

const projects = [
  {
    title: "Индустриальный туризм Политеха",
    stage: "Сбор архивных материалов и согласование маршрута",
    date: "сентябрь 2026",
  },
  {
    title: "Квест-экскурсия по кампусу",
    stage: "Тестирование сценариев для студенческих групп",
    date: "октябрь 2026",
  },
  {
    title: "Аудиогид на иностранных языках",
    stage: "Запись русской версии и подготовка переводов",
    date: "декабрь 2026",
  },
  {
    title: "Маршрут «Политех и город»",
    stage: "Проектирование остановок и визуальных материалов",
    date: "весна 2027",
  },
];

const articles = [
  {
    icon: "01",
    title: "Архитектурные жемчужины северной стороны",
    date: "18.04.2026",
    text: "Как промышленные корпуса, доходные дома и учебные здания создают особый ритм района.",
  },
  {
    icon: "02",
    title: "История экскурсионного дела в Петербурге",
    date: "02.04.2026",
    text: "От просветительских прогулок начала XX века до современных авторских маршрутов.",
  },
  {
    icon: "03",
    title: "Конструктивизм: строгая геометрия и новые смыслы",
    date: "21.03.2026",
    text: "Почему лаконичные формы конструктивизма стали языком технического прогресса.",
  },
  {
    icon: "04",
    title: "Памятные места Политеха",
    date: "07.03.2026",
    text: "Кампус как живая карта научных открытий, студенческих традиций и личных историй.",
  },
  {
    icon: "05",
    title: "Детали фасадов, которые стоит заметить",
    date: "19.02.2026",
    text: "Небольшой гид по орнаментам, материалам и знакам городской памяти.",
  },
];

const photos = [
  {
    title: "Кампус в зимнем свете",
    date: "12.02.2026",
    place: "СПбПУ, Главная аллея",
    author: "демо-автор",
    permission: "разрешение на использование: демо-контент",
    image: "https://picsum.photos/seed/winter-campus/760/620",
  },
  {
    title: "Линия фасада",
    date: "03.03.2026",
    place: "Санкт-Петербург",
    author: "демо-автор",
    permission: "разрешение на использование: демо-контент",
    image: "https://picsum.photos/seed/facade-line/760/620",
  },
  {
    title: "Маршрут у воды",
    date: "16.03.2026",
    place: "Петроградская сторона",
    author: "демо-автор",
    permission: "разрешение на использование: демо-контент",
    image: "https://picsum.photos/seed/water-route/760/620",
  },
  {
    title: "Двор как музей",
    date: "28.03.2026",
    place: "Исторический центр",
    author: "демо-автор",
    permission: "разрешение на использование: демо-контент",
    image: "https://picsum.photos/seed/courtyard-museum/760/620",
  },
  {
    title: "Лестница и свет",
    date: "05.04.2026",
    place: "Учебный корпус",
    author: "демо-автор",
    permission: "разрешение на использование: демо-контент",
    image: "https://picsum.photos/seed/stair-light/760/620",
  },
  {
    title: "Экскурсионная группа",
    date: "14.04.2026",
    place: "Кампус Политеха",
    author: "демо-автор",
    permission: "разрешение на использование: демо-контент",
    image: "https://picsum.photos/seed/tour-group/760/620",
  },
  {
    title: "Городская перспектива",
    date: "29.04.2026",
    place: "Санкт-Петербург",
    author: "демо-автор",
    permission: "разрешение на использование: демо-контент",
    image: "https://picsum.photos/seed/city-perspective/760/620",
  },
  {
    title: "Архитектурная деталь",
    date: "08.05.2026",
    place: "Санкт-Петербург",
    author: "демо-автор",
    permission: "разрешение на использование: демо-контент",
    image: "https://picsum.photos/seed/architectural-detail/760/620",
  },
];

const news = [
  {
    date: "20.05.2026",
    title: "Лекция по подготовке к аттестации гидов",
    text: "Участники бюро разберут структуру экскурсионного рассказа и требования к профессиональной речи.",
  },
  {
    date: "12.05.2026",
    title: "Анонс открытой экскурсии по кампусу",
    text: "Приглашаем студентов и сотрудников на обновлённый маршрут о научной истории Политеха.",
  },
  {
    date: "30.04.2026",
    title: "Проект бюро отмечен на грантовом конкурсе",
    text: "Команда представила идею аудиогида и получила рекомендации экспертов для доработки заявки.",
  },
  {
    date: "15.04.2026",
    title: "Медиа-отдел запускает фотовернисаж",
    text: "Собираем снимки с маршрутов, лекций и городских исследований с согласия авторов.",
  },
  {
    date: "01.04.2026",
    title: "Началась разработка квест-экскурсии",
    text: "Проектный отдел тестирует задания, карту и механику командного прохождения.",
  },
];

const pageCss = `
:root {
  --sand: #e7ddcd;
  --sand-light: #f8f2e8;
  --terracotta: #cf3a21;
  --terracotta-dark: #9f2b19;
  --poly-blue: #315d95;
  --poly-blue-dark: #1f416d;
  --poly-green: #35aa36;
  --ink: #111111;
  --muted: #6d665e;
  --line: rgba(17, 17, 17, 0.12);
  --white: #ffffff;
  color-scheme: light;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; background: var(--sand-light); color: var(--ink); }
button, input, textarea { font: inherit; }
a { color: inherit; }

.site {
  min-height: 100vh;
  overflow-x: hidden;
  background:
    radial-gradient(circle at 88% 10%, rgba(49, 93, 149, 0.12), transparent 26rem),
    linear-gradient(180deg, var(--sand-light), #fffaf2 42%, var(--sand-light));
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.container { width: min(1180px, calc(100% - 32px)); margin-inline: auto; }
.section { padding: clamp(72px, 9vw, 128px) 0; scroll-margin-top: 96px; }
.section-tight { padding-top: clamp(50px, 6vw, 86px); }
.section-head { display: grid; gap: 14px; max-width: 760px; margin-bottom: clamp(34px, 5vw, 58px); }
.eyebrow { color: var(--terracotta); font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; font-size: 0.78rem; }
.section-title { margin: 0; font-size: clamp(2rem, 4.2vw, 4.6rem); line-height: 0.95; letter-spacing: -0.055em; }
.section-lead { margin: 0; color: var(--muted); font-size: clamp(1rem, 1.6vw, 1.22rem); line-height: 1.7; }
.muted { color: var(--muted); }

.reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.75s ease, transform 0.75s ease; }
.reveal.is-visible { opacity: 1; transform: translateY(0); }

.header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(17, 17, 17, 0.66);
  backdrop-filter: blur(18px);
}
.header-inner {
  min-height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.brand-lockup { display: flex; align-items: center; gap: 12px; color: white; text-decoration: none; min-width: 0; }
.brand-lockup svg { flex: 0 0 auto; }
.brand-text { display: grid; gap: 2px; min-width: 0; }
.brand-name { font-weight: 900; letter-spacing: -0.04em; font-size: 1.1rem; white-space: nowrap; }
.brand-sub { color: rgba(255,255,255,0.7); font-size: 0.72rem; white-space: nowrap; }
.nav { display: flex; align-items: center; gap: 4px; }
.nav a {
  position: relative;
  padding: 11px 10px;
  border-radius: 999px;
  color: rgba(255,255,255,0.82);
  text-decoration: none;
  font-size: 0.84rem;
  font-weight: 700;
  transition: color 0.25s ease, background 0.25s ease;
}
.nav a::after {
  content: "";
  position: absolute;
  left: 13px;
  right: 13px;
  bottom: 6px;
  height: 2px;
  background: var(--terracotta);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}
.nav a:hover, .nav a:focus-visible { color: white; background: rgba(255,255,255,0.09); outline: none; }
.nav a:hover::after, .nav a:focus-visible::after { transform: scaleX(1); }
.burger {
  display: none;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 999px;
  background: rgba(255,255,255,0.08);
  color: white;
  align-items: center;
  justify-content: center;
}
.burger span, .burger span::before, .burger span::after {
  display: block;
  width: 18px;
  height: 2px;
  border-radius: 8px;
  background: currentColor;
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.burger span::before, .burger span::after { content: ""; position: relative; }
.burger span::before { top: -7px; }
.burger span::after { top: 5px; }
.burger.is-open span { transform: rotate(45deg); }
.burger.is-open span::before { transform: translateY(7px) rotate(90deg); }
.burger.is-open span::after { opacity: 0; }

.hero {
  position: relative;
  min-height: 100svh;
  display: grid;
  align-items: end;
  isolation: isolate;
  color: white;
  overflow: hidden;
}
.hero-media {
  position: absolute;
  inset: 0;
  z-index: -2;
  animation: heroPresence 11s ease-out forwards;
}
.hero-media img { width: 100%; height: 100%; object-fit: cover; filter: saturate(0.92) contrast(1.02); }
.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    linear-gradient(90deg, rgba(17,17,17,0.82), rgba(17,17,17,0.46) 48%, rgba(49,93,149,0.18)),
    linear-gradient(0deg, rgba(17,17,17,0.84), rgba(17,17,17,0.05) 55%);
}
.hero-content {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  padding: 130px 0 clamp(70px, 10vw, 118px);
  display: grid;
  gap: 28px;
  max-width: 980px;
  margin-left: max(16px, calc((100vw - 1180px) / 2));
}
.hero-brand { display: grid; gap: 18px; animation: riseIn 0.8s ease both 0.1s; }
.hero-logo-row { display: flex; align-items: center; gap: 18px; }
.hero-logo-row svg { animation: markFloat 4.8s ease-in-out infinite; }
.hero h1 {
  margin-bottom: 5%;
  font-size: clamp(4.2rem, 15vw, 13rem);
  line-height: 0.78;
  letter-spacing: -0.085em;
  text-transform: none;
}
.hero h1 span { color: var(--sand); }
.hero-copy { max-width: 720px; display: grid; gap: 18px; animation: riseIn 0.8s ease both 0.25s; }
.hero-copy h2 { margin: 0; font-size: clamp(1.6rem, 3.2vw, 3.25rem); line-height: 1.03; letter-spacing: -0.045em; font-weight: 780; }
.hero-copy p { margin: 0; color: rgba(255,255,255,0.78); font-size: clamp(1rem, 1.55vw, 1.25rem); line-height: 1.7; max-width: 650px; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 14px; padding-top: 6px; animation: riseIn 0.8s ease both 0.4s; }
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 13px 20px;
  border-radius: 999px;
  border: 1px solid transparent;
  text-decoration: none;
  font-weight: 850;
  transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease, color 0.25s ease;
  cursor: pointer;
}
.button:hover, .button:focus-visible { transform: translateY(-2px); outline: none; }
.button-primary { background: var(--terracotta); color: white; box-shadow: 0 18px 42px rgba(207, 58, 33, 0.34); }
.button-primary:hover, .button-primary:focus-visible { background: var(--terracotta-dark); }
.button-ghost { border-color: rgba(255,255,255,0.35); color: white; background: rgba(255,255,255,0.08); }
.button-ghost:hover, .button-ghost:focus-visible { background: rgba(255,255,255,0.16); }
.button-dark { background: var(--ink); color: white; }
.button-outline { border-color: var(--line); color: var(--ink); background: transparent; }
.button-outline:hover, .button-outline:focus-visible { border-color: var(--terracotta); color: var(--terracotta); }

.palette-strip { display: flex; flex-wrap: wrap; gap: 10px; }
.palette-dot { display: inline-flex; align-items: center; gap: 8px; color: var(--muted); font-size: 0.9rem; }
.palette-dot i { width: 16px; height: 16px; border-radius: 999px; border: 1px solid rgba(17,17,17,0.12); }

.about-grid { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: clamp(28px, 5vw, 76px); align-items: start; }
.text-panel { display: grid; gap: 24px; }
.large-text { margin: 0; font-size: clamp(1.25rem, 2.4vw, 2.05rem); line-height: 1.28; letter-spacing: -0.035em; }
.rule-list { display: grid; gap: 0; border-top: 1px solid var(--line); }
.rule-list li { list-style: none; padding: 18px 0; border-bottom: 1px solid var(--line); color: #2c2925; line-height: 1.55; }
.rule-list strong { color: var(--ink); }
.structure { display: grid; gap: 16px; }
.structure-item { border-left: 4px solid var(--terracotta); padding: 6px 0 6px 18px; }
.structure-item:nth-child(2) { border-color: var(--poly-blue); }
.structure-item:nth-child(3) { border-color: var(--poly-green); }
.structure-item:nth-child(4) { border-color: var(--ink); }
.structure-item h3 { margin: 0 0 6px; font-size: 1.08rem; }
.structure-item p { margin: 0; color: var(--muted); line-height: 1.55; }
.notice-line { margin: 20px 0 0; color: var(--muted); line-height: 1.7; }

.split-line { display: grid; grid-template-columns: minmax(0,1fr) minmax(260px, 360px); gap: 22px; align-items: end; margin-bottom: 28px; }
.portfolio-grid, .project-grid, .gallery-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
.content-card {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.56);
  border-radius: 28px;
  transition: transform 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease;
}
.content-card:hover { transform: translateY(-5px); border-color: rgba(207,58,33,0.35); box-shadow: 0 24px 70px rgba(49, 49, 49, 0.10); }
.content-card img { width: 100%; aspect-ratio: 1.42 / 1; object-fit: cover; display: block; }
.content-card-body { padding: 22px; display: grid; gap: 10px; }
.content-card h3 { margin: 0; font-size: 1.32rem; letter-spacing: -0.03em; line-height: 1.12; }
.content-card p { margin: 0; color: var(--muted); line-height: 1.62; }
.demo-caption { color: var(--muted); font-size: 0.78rem; }

.event-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 18px; margin-top: 24px; }
.partners { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
.partner-logo {
  min-height: 64px;
  padding: 14px 18px;
  border: 1px solid var(--line);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 18px;
  background: rgba(255,255,255,0.45);
  font-weight: 850;
  color: var(--poly-blue-dark);
}
.partner-logo i { width: 13px; height: 34px; background: var(--terracotta); display: inline-block; transform: skew(-14deg); }

.project-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.project-card { padding: 24px; min-height: 260px; display: flex; flex-direction: column; justify-content: space-between; }
.project-number { color: var(--terracotta); font-weight: 900; letter-spacing: -0.08em; font-size: 3rem; line-height: 1; }
.stage { display: grid; gap: 8px; }
.stage span { color: var(--muted); font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 850; }
.stage p { margin: 0; line-height: 1.55; }
.date-pill { align-self: flex-start; padding: 9px 12px; border-radius: 999px; color: white; background: var(--poly-blue); font-weight: 800; font-size: 0.86rem; }

.mosaic-list { display: grid; gap: 2px; border-top: 1px solid var(--line); }
.article-preview {
  display: grid;
  grid-template-columns: 72px minmax(0,1fr) auto;
  gap: 20px;
  align-items: center;
  padding: 26px 0;
  border-bottom: 1px solid var(--line);
}
.article-icon {
  width: 58px;
  height: 58px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: var(--ink);
  color: var(--sand);
  font-weight: 900;
  letter-spacing: -0.08em;
}
.article-preview h3 { margin: 0 0 8px; font-size: clamp(1.2rem, 2.4vw, 1.8rem); letter-spacing: -0.035em; }
.article-preview p { margin: 0; color: var(--muted); line-height: 1.58; max-width: 760px; }
.article-date { color: var(--terracotta); font-weight: 850; white-space: nowrap; margin-bottom: 8px; }
.read-more { color: var(--poly-blue-dark); font-weight: 900; text-decoration: none; white-space: nowrap; }
.read-more:hover, .read-more:focus-visible { color: var(--terracotta); outline: none; }

.gallery-grid { grid-template-columns: repeat(4, minmax(0,1fr)); }
.photo-card { cursor: pointer; text-align: left; padding: 0; border: 1px solid var(--line); background: rgba(255,255,255,0.55); border-radius: 24px; overflow: hidden; }
.photo-card img { width: 100%; aspect-ratio: 1 / 0.82; object-fit: cover; display: block; transition: transform 0.5s ease; }
.photo-card:hover img, .photo-card:focus-visible img { transform: scale(1.045); }
.photo-card:focus-visible { outline: 3px solid rgba(207,58,33,0.34); outline-offset: 3px; }
.photo-meta { padding: 16px; display: grid; gap: 5px; }
.photo-meta strong { line-height: 1.2; }
.photo-meta span { color: var(--muted); font-size: 0.85rem; line-height: 1.35; }
.rights-note { margin: 24px 0 0; padding-top: 18px; border-top: 1px solid var(--line); color: var(--muted); line-height: 1.6; }

.news-list { display: grid; gap: 0; border-top: 1px solid var(--line); }
.news-item { display: grid; grid-template-columns: 150px minmax(0, 1fr) auto; gap: 22px; align-items: start; padding: 28px 0; border-bottom: 1px solid var(--line); }
.news-date { color: var(--terracotta); font-weight: 900; }
.news-item h3 { margin: 0 0 8px; font-size: clamp(1.18rem, 2.1vw, 1.55rem); letter-spacing: -0.03em; }
.news-item p { margin: 0; color: var(--muted); line-height: 1.58; }

.contact-grid { display: grid; grid-template-columns: minmax(0,0.88fr) minmax(0,1.12fr); gap: clamp(26px, 5vw, 70px); align-items: start; }
.form-box, .contact-info { border: 1px solid var(--line); background: rgba(255,255,255,0.6); border-radius: 30px; padding: clamp(22px, 4vw, 34px); }
.form-box form { display: grid; gap: 16px; }
.field { display: grid; gap: 8px; }
.field label { font-weight: 850; }
.field input, .field textarea {
  width: 100%;
  border: 1px solid rgba(17,17,17,0.16);
  border-radius: 18px;
  background: rgba(255,255,255,0.76);
  padding: 14px 15px;
  color: var(--ink);
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.field textarea { min-height: 136px; resize: vertical; }
.field input:focus, .field textarea:focus { border-color: var(--poly-blue); box-shadow: 0 0 0 4px rgba(49,93,149,0.12); }
.consent { display: flex; gap: 10px; align-items: flex-start; color: var(--muted); line-height: 1.5; font-size: 0.94rem; }
.consent input { width: 19px; height: 19px; margin-top: 2px; accent-color: var(--terracotta); flex: 0 0 auto; }
.linklike { border: 0; padding: 0; background: none; color: var(--poly-blue-dark); font-weight: 850; text-decoration: underline; cursor: pointer; }
.linklike:hover, .linklike:focus-visible { color: var(--terracotta); outline: none; }
.contact-info { display: grid; gap: 22px; }
.contact-line { display: grid; gap: 6px; }
.contact-line strong { font-size: 1.02rem; }
.contact-line a { color: var(--poly-blue-dark); font-weight: 850; text-decoration: none; }
.qr-row { display: grid; grid-template-columns: 150px minmax(0,1fr); gap: 18px; align-items: center; }
.qr-row img { width: 150px; height: 150px; border-radius: 18px; border: 1px solid var(--line); background: white; padding: 8px; }
.map-wrap { overflow: hidden; border-radius: 24px; border: 1px solid var(--line); background: #ddd; }
.map-wrap iframe { width: 100%; height: 320px; border: 0; display: block; }

.footer { background: var(--ink); color: white; padding: 42px 0; }
.footer-grid { display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 28px; align-items: center; }
.footer-logos { display: flex; flex-wrap: wrap; gap: 18px; align-items: center; }
.footer p { margin: 14px 0 0; color: rgba(255,255,255,0.68); line-height: 1.55; }
.footer .linklike { color: var(--sand); }

.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  background: rgba(17,17,17,0.68);
  padding: 18px;
  backdrop-filter: blur(8px);
}
.modal {
  width: min(720px, 100%);
  max-height: min(86vh, 760px);
  overflow: auto;
  border-radius: 28px;
  background: var(--sand-light);
  color: var(--ink);
  padding: clamp(24px, 4vw, 36px);
  box-shadow: 0 30px 100px rgba(0,0,0,0.32);
  animation: modalIn 0.25s ease both;
}
.modal-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 18px; margin-bottom: 16px; }
.modal-header h2 { margin: 0; font-size: clamp(1.55rem, 4vw, 2.4rem); letter-spacing: -0.045em; line-height: 1; }
.close-btn { width: 42px; height: 42px; border-radius: 999px; border: 1px solid var(--line); background: white; cursor: pointer; font-weight: 900; }
.modal p, .modal li { color: var(--muted); line-height: 1.65; }
.modal ul { padding-left: 20px; }
.photo-modal img { width: 100%; max-height: 58vh; object-fit: cover; border-radius: 20px; display: block; }

@keyframes heroPresence { from { transform: scale(1.08); } to { transform: scale(1.01); } }
@keyframes riseIn { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
@keyframes markFloat { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-7px) rotate(-1deg); } }
@keyframes modalIn { from { opacity: 0; transform: translateY(16px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }

@media (max-width: 980px) {
  .nav {
    position: fixed;
    top: 78px;
    left: 16px;
    right: 16px;
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 2px;
    padding: 12px;
    border: 1px solid rgba(255,255,255,0.16);
    border-radius: 24px;
    background: rgba(17,17,17,0.94);
    box-shadow: 0 24px 80px rgba(0,0,0,0.28);
  }
  .nav.is-open { display: flex; }
  .nav a { padding: 14px 16px; }
  .burger { display: inline-flex; }
  .about-grid, .contact-grid { grid-template-columns: 1fr; }
  .portfolio-grid, .event-grid, .project-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .gallery-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

@media (max-width: 768px) {
  .container { width: min(100% - 24px, 1180px); }
  .brand-sub { display: none; }
  .hero-content { width: min(100% - 24px, 1180px); margin-inline: auto; padding-top: 116px; }
  .hero h1 { font-size: clamp(3.75rem, 22vw, 7rem); }
  .hero-logo-row { align-items: flex-start; flex-direction: column; gap: 12px; }
  .section { padding: 68px 0; }
  .split-line { grid-template-columns: 1fr; align-items: start; }
  .portfolio-grid, .event-grid, .project-grid, .gallery-grid { grid-template-columns: 1fr; }
  .article-preview { grid-template-columns: 1fr; gap: 12px; }
  .news-item { grid-template-columns: 1fr; gap: 10px; }
  .qr-row { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; transition-duration: 0.01ms !important; }
  .reveal { opacity: 1; transform: none; }
}
`;

function BureauLogo({ compact = false }: { compact?: boolean }) {
  const width = compact ? 52 : 64;
  const height = compact ? 52 : 64;

  return (
    <svg width={width} height={height} viewBox="0 0 72 72" role="img" aria-label="Логотип проектного бюро АрхитекТуры">
      <rect width="72" height="72" rx="18" fill="#e7ddcd" />
      <path d="M11 58L36 15h12v43H37l4-21-16 21H11Z" fill="#cf3a21" />
      <path d="M44 14h20v12H52v36H40V26h4V14Z" fill="#315d95" />
      <circle cx="25" cy="24" r="7" fill="#050505" />
      <path d="M15 50l42-13 4 9-43 13-3-9Z" fill="#111111" opacity="0.95" />
      <path d="M48 26h11" stroke="#e7ddcd" strokeWidth="5" strokeLinecap="square" />
    </svg>
  );
}

function PolytechLogo() {
  return (
    <svg width="48" height="48" viewBox="0 0 52 52" role="img" aria-label="Логотип СПбПУ Петра Великого">
      <rect width="52" height="52" rx="12" fill="#35aa36" />
      <path d="M9 19c5-9 11-10 19-10h16c-2 7-8 11-15 11v25H19V20c-3 1-6 4-8 8L3 24c1-2 3-4 6-5Z" fill="#050505" />
      <path d="M34 20h8v24h6v8H34V20Z" fill="#050505" transform="translate(-1 -7)" />
    </svg>
  );
}

function InstituteLogo() {
  return (
    <svg width="74" height="48" viewBox="0 0 92 60" role="img" aria-label="Логотип ИПМЭиТ">
      <rect width="92" height="60" rx="14" fill="#315d95" />
      <path d="M15 42V17h8v13l12-13h9L32 30l13 12H34L23 31v11h-8Z" fill="#e7ddcd" />
      <path d="M52 42V17h24v7H60v3h14v7H60v8h-8Z" fill="#e7ddcd" />
      <path d="M15 49h62" stroke="#cf3a21" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function SectionHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return (
    <div className="section-head reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      <p className="section-lead">{lead}</p>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[number] | null>(null);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Заглушка Яндекс.Метрики: замените 00000000 на реальный ID счётчика после публикации.
    // Пример подключения: ym(00000000, "init", { clickmap: true, trackLinks: true, accurateTrackBounce: true });
    console.info("Яндекс.Метрика: демо-заглушка, требуется заменить ID счётчика.");
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("consent") !== "on") {
      alert("Для отправки необходимо согласие на обработку персональных данных.");
      return;
    }

    console.log("Демо-отправка формы:", Object.fromEntries(data.entries()));
    alert("Данные не отправляются на сервер (демо-режим)");
    form.reset();
  }

  return (
    <div className="site">
      <style>{pageCss}</style>

      <header className="header">
        <div className="container header-inner">
          <a className="brand-lockup" href="#top" onClick={() => setMenuOpen(false)}>
            <BureauLogo compact />
            <span className="brand-text">
              <span className="brand-name">АрхитекТуры</span>
              <span className="brand-sub">Student Project Bureau «Architektury»</span>
            </span>
          </a>
          <nav className={`nav ${menuOpen ? "is-open" : ""}`} aria-label="Основная навигация">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
          <button
            className={`burger ${menuOpen ? "is-open" : ""}`}
            type="button"
            aria-label="Открыть меню"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-label="Главный экран АрхитекТуры">
          <div className="hero-media" aria-hidden="true">
            <img
              src="https://picsum.photos/seed/spb-architecture-hero/2200/1400"
              alt="Демо-изображение архитектуры Санкт-Петербурга, используется как временный визуальный материал с указанием авторских прав placeholder-сервиса"
            />
          </div>
          <div className="hero-content">
            <div className="hero-brand">
              <h1>
                Архитек<span>Туры</span>
              </h1>
            </div>
            <div className="hero-copy">
              <h2>Студенческое проектное бюро о городе, архитектуре и культуре Политеха.</h2>
              <p>
                Мы создаём экскурсионные продукты, исследуем Петербург и помогаем студентам собирать профессиональное портфолио в сфере культурного туризма.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#portfolio">Смотреть портфолио</a>
                <a className="button button-ghost" href="#contacts">Связаться с бюро</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <SectionHeader
              eyebrow="О нас"
              title="Бюро, где экскурсия становится студенческим проектом"
              lead="«АрхитекТуры» создано при поддержке ИПМЭиТ и Совета по молодёжной политике СПбПУ для развития экскурсионной, исследовательской и проектной практики студентов."
            />
            <div className="about-grid">
              <div className="text-panel reveal">
                <p className="large-text">
                  Мы соединяем академическую среду Политеха, городскую культуру и практику работы с маршрутами: от идеи и архивного поиска до готовой экскурсии для студентов, гостей и официальных делегаций.
                </p>
                <div className="palette-strip" aria-label="Палитра, извлечённая из логотипов">
                  {palette.map((color) => (
                    <span className="palette-dot" key={color.value}>
                      <i style={{ background: color.value }} />
                      {color.name}
                    </span>
                  ))}
                </div>
                <p className="notice-line">
                  Цветовая система страницы основана на доминантных цветах предоставленных логотипов: тёплый песочный фон, терракотовый акцент, глубокий синий Политеха, зелёный знак СПбПУ и графитовая типографика.
                </p>
                <a className="button button-dark" href="/polozhenie-architektury.pdf" download>
                  Скачать Положение, заглушка
                </a>
              </div>
              <div className="text-panel reveal">
                <ul className="rule-list" aria-label="Цели и задачи бюро">
                  <li><strong>Навыки экскурсоводов.</strong> Тренируем речь, драматургию маршрута, работу с группой и историческими источниками.</li>
                  <li><strong>Подготовка к аттестации.</strong> Проводим образовательные встречи и разбираем профессиональные требования.</li>
                  <li><strong>Экскурсионные продукты.</strong> Проектируем городские, кампусные, индустриальные и тематические маршруты.</li>
                  <li><strong>Портфолио и гранты.</strong> Помогаем участникам фиксировать опыт, готовить заявки и представлять проекты.</li>
                </ul>
                <div className="structure" aria-label="Состав актива и структура управления">
                  <div className="structure-item">
                    <h3>Руководитель бюро</h3>
                    <p>Избирается участниками в установленном порядке и координирует работу актива.</p>
                  </div>
                  <div className="structure-item">
                    <h3>Отдел культурно-массовой, проектной и образовательной работы</h3>
                    <p>Отвечает за маршруты, лекции, обучающие встречи и проектные команды.</p>
                  </div>
                  <div className="structure-item">
                    <h3>Медиа-отдел</h3>
                    <p>Ведёт визуальные материалы, новости, фотовернисаж и коммуникации.</p>
                  </div>
                  <div className="structure-item">
                    <h3>Хозяйственный отдел</h3>
                    <p>Помогает с организацией мероприятий, материалами и логистикой.</p>
                  </div>
                </div>
                <p className="notice-line">
                  Совет проектного бюро рассматривает стратегические вопросы и собирается не реже одного раза в год.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-tight" id="portfolio">
          <div className="container">
            <SectionHeader
              eyebrow="Портфолио"
              title="Маршруты, выступления и партнёрства"
              lead="Раздел показывает направления работы бюро. Все фотографии сейчас являются демо-контентом placeholder-сервиса и будут заменены на реальные материалы с согласия авторов."
            />
            <div className="portfolio-grid reveal">
              {excursions.map((item) => (
                <article className="content-card" key={item.title}>
                  <img src={item.image} alt={`Демо-изображение для экскурсии «${item.title}», авторские права placeholder-сервиса`} loading="lazy" />
                  <div className="content-card-body">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <span className="demo-caption">Изображение: демо-контент.</span>
                  </div>
                </article>
              ))}
            </div>
            <div className="split-line section-tight reveal">
              <div>
                <span className="eyebrow">Участие в мероприятиях</span>
                <h3 className="section-title" style={{ fontSize: "clamp(1.9rem, 3.4vw, 3.2rem)", marginTop: 12 }}>Конференции, форумы, гранты</h3>
              </div>
              <p className="section-lead">Команда представляет студенческие инициативы и учится защищать культурные проекты перед экспертами.</p>
            </div>
            <div className="event-grid reveal">
              {events.map((item) => (
                <article className="content-card" key={item.title}>
                  <img src={item.image} alt={`Демо-фотография события «${item.title}», авторские права placeholder-сервиса`} loading="lazy" />
                  <div className="content-card-body">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <span className="demo-caption">Фотография-заглушка.</span>
                  </div>
                </article>
              ))}
            </div>
            <div className="partners reveal" aria-label="Логотипы партнёров, демо-заглушки">
              <span className="partner-logo"><i /> Туристско-информационное бюро</span>
              <span className="partner-logo"><i /> Молодёжный центр СПб</span>
              <span className="partner-logo"><i /> Музейные партнёры</span>
              <span className="partner-logo"><i /> Студенческие объединения</span>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <SectionHeader
              eyebrow="Проекты на разработке"
              title="Идеи, которые скоро станут маршрутами"
              lead="Каждый проект проходит путь от исследования и сценария до тестового показа, оценки участников и публичного запуска."
            />
            <div className="project-grid reveal">
              {projects.map((project, index) => (
                <article className="content-card project-card" key={project.title}>
                  <div>
                    <div className="project-number">{String(index + 1).padStart(2, "0")}</div>
                    <h3>{project.title}</h3>
                  </div>
                  <div className="stage">
                    <span>Стадия</span>
                    <p>{project.stage}</p>
                  </div>
                  <span className="date-pill">Запуск: {project.date}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="mosaic">
          <div className="container">
            <SectionHeader
              eyebrow="Петербургская мозаика"
              title="Короткие материалы об истории культуры Петербурга"
              lead="Заметки для тех, кто хочет смотреть на город внимательнее: через детали, маршруты, память места и архитектурные эпохи."
            />
            <div className="mosaic-list reveal">
              {articles.map((article) => (
                <article className="article-preview" key={article.title}>
                  <div className="article-icon" aria-hidden="true">{article.icon}</div>
                  <div>
                    <div className="article-date">{article.date}</div>
                    <h3>{article.title}</h3>
                    <p>{article.text}</p>
                  </div>
                  <a className="read-more" href="#top">Читать далее</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="gallery">
          <div className="container">
            <SectionHeader
              eyebrow="Фотовернисаж"
              title="Галерея маршрутов, деталей и студенческих наблюдений"
              lead="Нажмите на изображение, чтобы открыть демо-просмотр. Реальные фото будут размещаться только с разрешения участников и авторов."
            />
            <div className="gallery-grid reveal">
              {photos.map((photo) => (
                <button className="photo-card" type="button" key={photo.title} onClick={() => setSelectedPhoto(photo)}>
                  <img src={photo.image} alt={`Демо-изображение «${photo.title}», ${photo.permission}, авторские права placeholder-сервиса`} loading="lazy" />
                  <span className="photo-meta">
                    <strong>{photo.title}</strong>
                    <span>{photo.date}, {photo.place}</span>
                    <span>Автор: {photo.author}</span>
                    <span>{photo.permission}</span>
                  </span>
                </button>
              ))}
            </div>
            <p className="rights-note reveal">
              Все фото размещены с согласия участников и авторов. Копирование только с разрешения проектного бюро.
            </p>
          </div>
        </section>

        <section className="section" id="news">
          <div className="container">
            <SectionHeader
              eyebrow="Новости"
              title="Лента бюро"
              lead="Анонсы, итоги мероприятий и новости проектных команд в обратном хронологическом порядке."
            />
            <div className="news-list reveal">
              {news.map((item) => (
                <article className="news-item" key={item.title}>
                  <time className="news-date" dateTime={item.date.split(".").reverse().join("-")}>{item.date}</time>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                  <a className="read-more" href="#top">Подробнее</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contacts">
          <div className="container">
            <SectionHeader
              eyebrow="Контакты"
              title="Напишите нам или приходите на встречу"
              lead="Форма работает в демо-режиме: данные не отправляются на сервер и не сохраняются без подтверждённого согласия."
            />
            <div className="contact-grid reveal">
              <div className="form-box">
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <label htmlFor="name">Имя</label>
                    <input id="name" name="name" type="text" autoComplete="name" required />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" autoComplete="email" required />
                  </div>
                  <div className="field">
                    <label htmlFor="message">Сообщение</label>
                    <textarea id="message" name="message" required />
                  </div>
                  <label className="consent">
                    <input name="consent" type="checkbox" />
                    <span>
                      Я согласен на обработку персональных данных и ознакомлен с&nbsp;
                      <button className="linklike" type="button" onClick={() => setPrivacyOpen(true)}>
                        Политикой конфиденциальности
                      </button>
                    </span>
                  </label>
                  <button className="button button-primary" type="submit">Отправить</button>
                </form>
              </div>
              <div className="contact-info">
                <div className="contact-line">
                  <strong>Email</strong>
                  <a href="mailto:architektury@spbstu.ru">architektury@spbstu.ru</a>
                </div>
                <div className="qr-row">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https%3A%2F%2Fvk.com%2Farchitektury_spbpu"
                    alt="QR-код на сообщество ВКонтакте vk.com/architektury_spbpu, статическое изображение сервиса QR"
                    loading="lazy"
                  />
                  <p className="muted">Наведите камеру на QR-код, чтобы перейти в сообщество ВКонтакте: vk.com/architektury_spbpu.</p>
                </div>
                <div className="map-wrap">
                  <iframe
                    title="Карта с меткой: Новороссийская ул., 50, Санкт-Петербург"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=30.3505%2C59.9974%2C30.3834%2C60.0116&layer=mapnik&marker=60.0046%2C30.3668"
                    loading="lazy"
                  />
                </div>
                <p className="muted">
                  Адрес: Новороссийская ул., 50, Санкт-Петербург. Удобнее всего добираться от станции метро «Политехническая» пешком по направлению к учебным корпусам и уточнить место встречи у координатора.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-logos" aria-label="Логотипы бюро, СПбПУ и ИПМЭиТ">
              <BureauLogo compact />
              <PolytechLogo />
              <InstituteLogo />
            </div>
            <p>
              &copy; Студенческое проектное бюро «АрхитекТуры», СПбПУ Петра Великого, 2026. Все права защищены.
            </p>
            <p>Единое англоязычное наименование: Student Project Bureau «Architektury».</p>
          </div>
          <button className="linklike" type="button" onClick={() => setPrivacyOpen(true)}>
            Политика конфиденциальности
          </button>
        </div>
      </footer>

      {privacyOpen ? (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.currentTarget === event.target && setPrivacyOpen(false)}>
          <section className="modal" role="dialog" aria-modal="true" aria-labelledby="privacy-title">
            <div className="modal-header">
              <h2 id="privacy-title">Политика конфиденциальности</h2>
              <button className="close-btn" type="button" aria-label="Закрыть политику конфиденциальности" onClick={() => setPrivacyOpen(false)}>×</button>
            </div>
            <p>
              Настоящая демо-страница не отправляет данные формы на сервер. После подключения реальной формы персональные данные будут использоваться только для ответа на сообщение пользователя.
            </p>
            <ul>
              <li>Персональные данные не передаются третьим лицам без законного основания.</li>
              <li>Пользователь может запросить удаление или уточнение данных, направив письмо на architektury@spbstu.ru.</li>
              <li>Обработка выполняется только при подтверждённом согласии в форме обратной связи.</li>
              <li>Фото и визуальные материалы публикуются с согласия участников и авторов.</li>
            </ul>
          </section>
        </div>
      ) : null}

      {selectedPhoto ? (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.currentTarget === event.target && setSelectedPhoto(null)}>
          <section className="modal photo-modal" role="dialog" aria-modal="true" aria-labelledby="photo-title">
            <div className="modal-header">
              <h2 id="photo-title">{selectedPhoto.title}</h2>
              <button className="close-btn" type="button" aria-label="Закрыть просмотр фотографии" onClick={() => setSelectedPhoto(null)}>×</button>
            </div>
            <img src={selectedPhoto.image} alt={`Демо-изображение «${selectedPhoto.title}», ${selectedPhoto.permission}, авторские права placeholder-сервиса`} />
            <p><strong>Дата:</strong> {selectedPhoto.date}. <strong>Место:</strong> {selectedPhoto.place}. <strong>Автор:</strong> {selectedPhoto.author}.</p>
            <p>{selectedPhoto.permission}. Копирование только с разрешения проектного бюро.</p>
          </section>
        </div>
      ) : null}
    </div>
  );
}
