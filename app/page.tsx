import Link from "next/link";

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
          <p className="eyebrow">Техническая керамика · Томск</p>
          <h1>
            Сложные детали.
            <span>Инженерный подход.</span>
            Точный результат.
          </h1>
          <p className="hero-lead">
            Разрабатываем и производим изделия из технической керамики — от
            идеи или образца до готовой детали.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Обсудить задачу <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" href="/projects">
              Смотреть проекты <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/ceramic-hero.jpg" alt="Партия сложных керамических деталей" />
          <div className="hero-tag">
            <span>Точность обработки</span>
            <strong>до 0,01 мм</strong>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">01 / 04</div>
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
            Вы получаете не просто деталь, а проработанное инженерное решение,
            готовое к производству и масштабированию.
          </p>
        </div>
      </section>

      <section className="request-section">
        <div className="section-heading">
          <p className="eyebrow">С какими задачами к нам обращаются</p>
          <span className="section-count">04 направления</span>
        </div>
        <div className="request-list">
          {requests.map((item) => (
            <article className="request-row" key={item.number}>
              <span className="request-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="request-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="feature-band">
        <div className="feature-image">
          <img src="/ceramic-parts.jpg" alt="Керамические детали на технических чертежах" />
        </div>
        <div className="feature-copy">
          <p className="eyebrow">Реверс-инжиниринг</p>
          <h2>От изношенного образца — к новой детали</h2>
          <p>
            Восстановим параметры, учтём реальные нагрузки, подберём состав и
            подготовим технологию. Сопровождаем проект понятным языком на каждом
            этапе.
          </p>
          <Link className="button button-light" href="/about">
            Как мы работаем <span aria-hidden="true">→</span>
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
        <p className="eyebrow">Есть нестандартная задача?</p>
        <h2>Покажите деталь или опишите, что должно работать.</h2>
        <Link className="button button-primary" href="/contact">
          Начать обсуждение <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}
