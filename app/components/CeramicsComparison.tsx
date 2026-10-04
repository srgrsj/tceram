import Link from "next/link";
import { asset } from "../lib/asset";

const materialClasses = [
  { formula: "Al₂O₃", name: "Оксид алюминия", color: "#02a6c4", main: true },
  { formula: "ZrO₂", name: "Диоксид циркония", color: "#bac8c8" },
  { formula: "Si₃N₄", name: "Нитрид кремния", color: "#628fba" },
  { formula: "AlN", name: "Нитрид алюминия", color: "#bd5c35" },
  { formula: "SiC", name: "Карбид кремния", color: "#007f99" },
];

const properties = [
  ["Плотность", "Масса материала на единицу объёма."],
  ["Прочность", "Способность выдерживать нагрузку. На схеме сравниваются комнатная температура и 1 200 °C."],
  ["Трещиностойкость", "Сопротивление материала распространению трещин."],
  ["Модуль Юнга", "Характеризует жёсткость материала при упругой деформации."],
  ["Твёрдость", "Сопротивление локальному воздействию, например вдавливанию."],
  ["Теплопроводность", "Способность материала передавать тепло."],
  ["Тепловое расширение", "Изменение размеров материала при изменении температуры."],
];

export default function CeramicsComparison() {
  return (
    <article className="ceramics-comparison" id="materials-overview" aria-labelledby="comparison-heading">
      <div className="comparison-heading">
        <div><p className="eyebrow">Сравнение классов керамики</p><h3 id="comparison-heading">Свойства задают<br />выбор материала</h3></div>
        <p>Температура, нагрузки, электрические свойства и условия среды определяют выбор состава. На схеме — общие различия пяти классов технической керамики.</p>
      </div>
      <ul className="comparison-legend" aria-label="Материалы на схеме">
        {materialClasses.map((material) => <li key={material.formula} className={material.main ? "is-profile" : undefined}>
          <span className="comparison-swatch" style={{ backgroundColor: material.color }} aria-hidden="true" />
          <div><strong>{material.formula}</strong><span>{material.name}</span>{material.main && <small>Наш профиль · корунд</small>}</div>
        </li>)}
      </ul>
      <figure className="comparison-figure">
        <a className="comparison-image-link" href={asset("/materials/ceramics-properties-ru.png")} target="_blank" rel="noreferrer" aria-label="Открыть схему свойств керамики в полном размере, в новой вкладке">
          <img src={asset("/materials/ceramics-properties-ru.webp")} alt="Сравнение Al₂O₃, ZrO₂, Si₃N₄, AlN и SiC по плотности, прочности при комнатной температуре и 1 200 °C, трещиностойкости, модулю Юнга, твёрдости, теплопроводности и тепловому расширению. Подписи на русском языке." width={1596} height={986} loading="lazy" />
          <span className="comparison-zoom">Увеличить схему <span aria-hidden="true">↗</span></span>
        </a>
        <figcaption>Адаптировано по схеме CeramTec. Качественное сравнение без числовой шкалы.</figcaption>
      </figure>
      <div className="comparison-profile">
        <div><span className="eyebrow">Корундовая керамика «Нанокерамики»</span><p>Работаем преимущественно с марками ВК94-1 (22ХС) и ВК95-1. Их точные параметры приведены в таблице характеристик.</p></div>
        <Link className="text-link" href="/projects#materials">Сравнить ВК94-1 и ВК95-1 <span aria-hidden="true">→</span></Link>
      </div>
      <details className="comparison-explainer">
        <summary>Как читать свойства на схеме <span aria-hidden="true">＋</span></summary>
        <p>Каждая ось показывает отдельное свойство. Большая площадь профиля сама по себе не означает, что материал лучше: важны параметры конкретной задачи.</p>
        <dl>{properties.map(([name, description]) => <div key={name}><dt>{name}</dt><dd>{description}</dd></div>)}</dl>
      </details>
    </article>
  );
}
