import Link from "next/link";
import { asset } from "./lib/asset";
import CeramicsComparison from "./components/CeramicsComparison";

const requests = [
  {
    number: "01",
    title: "Разработка с нуля",
    text: "Начинаем с технической задачи: анализируем условия эксплуатации, выбираем состав керамики и разрабатываем конструкцию.",
  },
  {
    number: "02",
    title: "Сложная геометрия",
    text: "Получаем изделия с точностью до 12 квалитета без дополнительной механической обработки, включая резьбовые соединения керамика — керамика и керамика — металл.",
  },
  {
    number: "03",
    title: "Гибкий объём производства",
    text: "Изготавливаем опытные образцы и выпускаем мелкие и средние серии. Ассортимент насчитывает более тысячи видов изделий, комплектующих и деталей.",
  },
  {
    number: "04",
    title: "Замена металла и пластика",
    text: "Подбираем керамические решения для быстроизнашивающихся деталей и участвуем в программах импортозамещения.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero hero-dark" aria-labelledby="hero-heading">
        <div className="hero-product-art">
          <div className="hero-product-glow" aria-hidden="true" />
          <img src={asset("/products/ceramic-assortment-cutout.png")} alt="Изделия Нанокерамики: белые керамические кольца и терракотовые фасонные детали" width={1536} height={1024} fetchPriority="high" />
          <Link className="hero-product-caption" href="/projects#gallery"><span className="hero-product-dot" />Изделия нашего производства<span aria-hidden="true">↗</span></Link>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Техническая керамика</p>
          <h1 id="hero-heading">Техническая керамика.<br />Надёжность в каждой детали.</h1>
          <p className="hero-lead">
            Разработка и производство технической корундовой керамики полного цикла. В Томске с 2004 года.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/projects">
              Наша продукция
            </Link>
            <Link className="text-link" href="/about">
              О компании <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <ul className="hero-values" aria-label="Наши приоритеты">
          <li>Точность</li>
          <li>Качество</li>
          <li>Надёжность</li>
        </ul>
      </section>

      <section className="intro section-grid">
        <div>
          <p className="eyebrow">Когда стандартное решение не подходит</p>
          <h2>Начать можно без чертежа</h2>
        </div>
        <div className="intro-copy">
          <p>
            К нам можно прийти с технической задачей: нужна деталь, устойчивая
            к термошокам, агрессивной химической среде или абразивному износу.
            Инженеры и исследователи проанализируют условия, подберут состав
            керамики и предложат конструктивное решение.
          </p>
          <p>
            Разрабатываем трёхмерную модель и литейные формы, выполняем спекание,
            финишную алмазную обработку и нанесение металлизации или глазури.
            Подтверждаем работоспособность на опытных образцах и готовим выпуск серии.
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
          <img src={asset("/products/photo-104.webp")} alt="Реальные керамические детали Нанокерамики на технических чертежах" loading="lazy" />
        </div>
        <div className="feature-copy">
          <p className="eyebrow">Полный производственный цикл</p>
          <h2>От концепции до готового изделия</h2>
          <p>
            Объединяем собственное производство с исследовательским потенциалом
            Томского государственного университета. Участвуем в разработке
            новых составов и технологий, НИР и НИОКР промышленных партнёров.
          </p>
          <Link className="button button-light" href="/about">
            Как мы работаем
          </Link>
        </div>
      </section>

      <section className="materials section-grid" id="materials">
        <div>
          <p className="eyebrow">Материалы и возможности</p>
          <h2>Корундовая керамика под условия задачи</h2>
        </div>
        <div className="material-chips" aria-label="Используемые материалы">
          <span>ВК94-1 (22ХС)</span>
          <span>ВК95-1</span>
          <Link className="text-link" href="/projects#materials">Технические характеристики →</Link>
        </div>
        <div className="material-note">
          <strong>Ra 0,2 мкм</strong>
          <p>Поверхность от матовой до глянцевой, включая глазирование.</p>
        </div>
        <div className="material-note">
          <strong>≤ 0,02%</strong>
          <p>Водопоглощение основных марок корундовой керамики.</p>
        </div>
        <CeramicsComparison />
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
