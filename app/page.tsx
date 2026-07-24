import Link from "next/link";
import { asset } from "./lib/asset";

const requests = [
  {
    number: "01",
    title: "Деталь по образцу",
    text: "Проведём замеры, восстановим геометрию и подберём материал — даже если исходных чертежей нет.",
  },
  {
    number: "02",
    title: "Сложная геометрия",
    text: "Изготавливаем втулки, сопла, фильеры, изоляторы, ролики и нестандартные изделия с высокой точностью.",
  },
  {
    number: "03",
    title: "Гибкий объём производства",
    text: "Проходим путь от единичного прототипа до стабильного серийного выпуска и регулярных поставок.",
  },
  {
    number: "04",
    title: "Замена металла",
    text: "Помогаем увеличить ресурс узлов, работающих при износе, высокой температуре и в агрессивных средах.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero section-grid">
        <div className="hero-copy">
          <h1>
            <span className="hero-title-type">Инжиниринговый центр</span>
            <span className="hero-title-name">«Металлокерамические композиты»</span>
          </h1>
          <p className="hero-lead">
            Разрабатываем и производим изделия из технической керамики — от
            идеи или образца до готовой детали.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Обсудить задачу
            </Link>
            <Link className="text-link" href="/projects">
              Смотреть проекты
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <img src={asset("/ceramic-hero-assortment.jpg")} alt="Изделия из белой и терракотовой технической керамики" />
          <div className="hero-tag">
            <span>Точность обработки</span>
            <strong>до 0,01 мм</strong>
          </div>
        </div>
      </section>

      <section className="intro section-grid">
        <div>
          <p className="eyebrow">Когда стандартное решение не подходит</p>
          <h2>Начать можно без чертежа</h2>
        </div>
        <div className="intro-copy">
          <p>
            Мы подключаемся на раннем этапе: выясняем условия эксплуатации,
            помогаем сформулировать требования, предлагаем конструкцию и
            технологию изготовления.
          </p>
          <p>
            После согласования материала и геометрии изготавливаем образец,
            проверяем ключевые параметры и готовим изделие к повторному выпуску.
          </p>
        </div>
      </section>

      <section className="request-section">
        <div className="section-heading">
          <p className="eyebrow">С какими задачами к нам обращаются</p>
        </div>
        <div className="request-list">
          {requests.map((item) => (
            <article className="request-row" key={item.number}>
              <span className="request-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-band">
        <div className="feature-image">
          <img src={asset("/ceramic-parts.jpg")} alt="Керамические детали на технических чертежах" />
        </div>
        <div className="feature-copy">
          <p className="eyebrow">Реверс-инжиниринг</p>
          <h2>Восстановление детали по образцу</h2>
          <p>
            Восстановим параметры, учтём реальные нагрузки, подберём состав и
            подготовим технологию изготовления. После согласования выпустим
            опытный образец или партию.
          </p>
          <Link className="button button-light" href="/about">
            Как мы работаем
          </Link>
        </div>
      </section>

      <section className="materials section-grid">
        <div>
          <p className="eyebrow">Материалы и возможности</p>
          <h2>Керамика под условия задачи</h2>
        </div>
        <div className="material-chips" aria-label="Используемые материалы">
          <span>Al₂O₃</span>
          <span>Al₂O₃–SiO₂</span>
          <span>MgO–SiO₂</span>
          <span>ZrO₂(Y₂O₃)</span>
        </div>
        <div className="material-note">
          <strong>Ra 0,2 мкм</strong>
          <p>Поверхность от матовой до глянцевой, включая глазирование.</p>
        </div>
        <div className="material-note">
          <strong>до 50%</strong>
          <p>Объёмная пористость для специальных применений.</p>
        </div>
      </section>

      <section className="cta section-grid">
        <p className="eyebrow">Заявка на изготовление</p>
        <h2>Пришлите чертёж, эскиз или фотографию детали.</h2>
        <Link className="button button-primary" href="/contact">
          Отправить материалы
        </Link>
      </section>
    </>
  );
}
