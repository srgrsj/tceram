import type { Metadata } from "next";
import Link from "next/link";
import { asset } from "../lib/asset";
import { ceramicProperties } from "../lib/company";
import ProductGallery from "../components/ProductGallery";

export const metadata: Metadata = { title: "Продукция и материалы" };

const projects = [
  { image: "/products/photo-128.webp", tag: "Микроэлектроника", title: "Изоляторы и подложки", text: "Изоляторы, подложки и корпусные детали. Низкие диэлектрические потери и стабильность электрических и теплофизических параметров." },
  { image: "/products/photo-103.webp", tag: "Космическая отрасль", title: "Конструкционные элементы", text: "Конструкционные и изоляционные элементы из технической керамики для космической отрасли." },
  { image: "/products/photo-125.webp", tag: "Машиностроение", title: "Детали узлов трения", text: "Направляющие, втулки и резьбовые соединения керамика — керамика и керамика — металл. Прочность, твёрдость и износостойкость." },
  { image: "/products/photo-124.webp", tag: "Нефтегазовая отрасль", title: "Компоненты оборудования", text: "Детали для оборудования, работающего в агрессивных и абразивных средах, при высоких температурах и механических нагрузках." },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero projects-hero">
        <p className="eyebrow">Продукция и сферы применения</p>
        <h1>Изделия из технической керамики</h1>
        <p className="page-lead">Более тысячи видов изделий, комплектующих и деталей. Разработка под условия эксплуатации, изготовление по чертежам, мелкие и средние серии.</p>
      </section>
      <ProductGallery />
      <section className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-image"><img src={asset(project.image)} alt={project.title} loading="lazy" /></div>
            <div className="project-meta"><span>{String(index + 1).padStart(2, "0")}</span><span>{project.tag}</span></div>
            <h2>{project.title}</h2><p>{project.text}</p>
          </article>
        ))}
      </section>
      <section className="application-note section-grid">
        <div><p className="eyebrow">Строительная промышленность</p><h2>Износостойкая оснастка</h2></div>
        <p>Керамические элементы технологической оснастки для строительной промышленности. Высокая твёрдость и устойчивость к износу расширяют возможности применения деталей в производственном оборудовании.</p>
      </section>
      <section className="specifications" id="materials" aria-labelledby="materials-heading">
        <div className="section-heading"><div><p className="eyebrow">Основные составы керамики</p><h2 id="materials-heading">ВК94-1 и ВК95-1</h2></div></div>
        <p className="specifications-lead">Основные марки корундовой керамики — ВК94-1 (22ХС) и ВК95-1. Высокая плотность, минимальное водопоглощение и стабильность электрических и теплофизических параметров в широком диапазоне температур.</p>
        <div className="table-scroll" role="region" aria-label="Технические характеристики керамики" tabIndex={0}>
          <table className="properties-table">
            <caption>Технические характеристики основных марок корундовой керамики</caption>
            <thead><tr><th scope="col">Свойство</th><th scope="col">ВК94-1 (22ХС)</th><th scope="col">ВК95-1</th></tr></thead>
            <tbody>{ceramicProperties.map(([property, vk94, vk95]) => <tr key={property}><th scope="row">{property}</th><td>{vk94}</td><td>{vk95}</td></tr>)}</tbody>
          </table>
        </div>
        <p className="specifications-note">Поверхность изделий — от матовой до глянцевой с шероховатостью Ra = 0,2 мкм. Доступны алмазная обработка, металлизация и глазирование.</p>
      </section>
      <section className="project-placeholder">
        <p className="eyebrow">Приглашение к сотрудничеству</p>
        <h2>Керамика для вашей задачи</h2>
        <p>Сотрудничаем с разработчиками и предприятиями, эксплуатирующими оборудование с керамическими деталями. Участвуем в импортозамещении и замене быстроизнашивающихся деталей из металла и пластика для увеличения межремонтного пробега оборудования.</p>
        <Link className="button button-primary" href="/contact">Рассказать о проекте</Link>
      </section>
    </>
  );
}
