import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Проекты" };

const projects = [
  { image: "/ceramic-detail.jpg", tag: "Сложная геометрия", title: "Комплект керамических элементов", text: "Изготовление серии деталей со сложным профилем и повторяемой геометрией." },
  { image: "/ceramic-components.jpg", tag: "Серийное производство", title: "Компоненты по чертежу", text: "Подготовка технологического маршрута и выпуск изделий с повторяемыми параметрами." },
  { image: "/ceramic-process.jpg", tag: "Реверс-инжиниринг", title: "Замена изнашиваемого узла", text: "Восстановление геометрии образца и адаптация конструкции под техническую керамику." },
  { image: "/ceramic-rings.jpg", tag: "Высокая точность", title: "Кольца и изоляторы", text: "Финишная обработка функциональных поверхностей под заданные допуски." },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero projects-hero">
        <p className="eyebrow">Реализованные проекты</p>
        <h1>Инженерные задачи, переведённые в материал.</h1>
        <p className="page-lead">Раздел подготовлен как масштабируемая витрина: сюда можно добавлять подробные кейсы, отрасли и измеримые результаты.</p>
      </section>
      <section className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-image"><img src={project.image} alt={project.title} /></div>
            <div className="project-meta"><span>{String(index + 1).padStart(2, "0")}</span><span>{project.tag}</span></div>
            <h2>{project.title}</h2><p>{project.text}</p>
          </article>
        ))}
      </section>
      <section className="project-placeholder">
        <p className="eyebrow">Следующий кейс может быть вашим</p>
        <h2>Не нашли похожую задачу?</h2>
        <p>Это нормально: большая часть нашей работы начинается именно с нестандартного запроса.</p>
        <Link className="button button-primary" href="/contact">Рассказать о проекте <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  );
}
