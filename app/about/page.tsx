import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "../lib/asset";

export const metadata: Metadata = { title: "О компании" };

const stages = [
  ["01", "Погружаемся в задачу", "Изучаем деталь, среду работы, нагрузки и ограничения проекта."],
  ["02", "Проектируем решение", "Подбираем материал, уточняем геометрию и формируем технологический маршрут."],
  ["03", "Изготавливаем и проверяем", "Производим опытный образец или партию и контролируем ключевые параметры."],
  ["04", "Развиваем результат", "Улучшаем конструкцию и подготавливаем решение к повторному выпуску."],
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero-about">
        <p className="eyebrow">О компании</p>
        <h1>Разработка материалов и производство изделий</h1>
        <p className="page-lead">Инжиниринговый центр в Томске, работающий с технической керамикой и композиционными материалами.</p>
      </section>

      <section className="about-story section-grid">
        <div className="about-image"><img src={asset("/company.jpg")} alt="Специалисты за работой на производстве" /></div>
        <div className="about-copy">
          <p className="eyebrow">Компетенции внутри компании</p>
          <h2>Разработка и производство в одном процессе</h2>
          <p>Основное направление центра — создание изделий из технической керамики и композиционных материалов. Мы работаем вместе с ведущими учёными Томского государственного университета и участвуем в НИР и НИОКР.</p>
          <p>Инженеры по материалам подключаются ещё до появления финального чертежа. Это помогает одновременно улучшить конструкцию, технологичность и экономику будущего изделия.</p>
        </div>
      </section>

      <section className="technology-panel">
        <div className="section-heading light-heading">
          <div><p className="eyebrow">Технологический подход</p><h2>Контролируем путь от состава до поверхности</h2></div>
        </div>
        <div className="tech-grid">
          <article><span>01</span><h3>Материаловедение</h3><p>Подбор состава под температуру, износ, агрессивную среду и электрофизические свойства.</p></article>
          <article><span>02</span><h3>Формование</h3><p>Получение сложной геометрии, внутренних каналов и резьбовых соединений.</p></article>
          <article><span>03</span><h3>Термообработка</h3><p>Управляемые режимы спекания для достижения требуемой структуры материала.</p></article>
          <article><span>04</span><h3>Финишная обработка</h3><p>Точность до 0,01 мм, поверхность до Ra 0,2 мкм и силикатное глазирование.</p></article>
        </div>
      </section>

      <section className="process-section">
        <div className="section-heading"><div><p className="eyebrow">Как строится работа</p><h2>Один контакт — полный цикл</h2></div></div>
        <div className="process-list">
          {stages.map(([n, title, text]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="partners">
        <p className="eyebrow">Нам доверяют</p>
        <div className="partner-list"><span>НИКИЭТ</span><span>НПЦ «Полюс»</span><span>ОЭМК</span><span>Томсккабель</span><span>Сибкабель</span></div>
        <Link className="text-link" href="/contact">Обсудить сотрудничество</Link>
      </section>
    </>
  );
}
