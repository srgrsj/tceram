"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "../lib/asset";
import { productPhotos } from "../lib/productPhotos";

const categories = ["Все изделия", "Кольца и втулки", "Изоляторы", "Сложная геометрия"];

export default function ProductGallery() {
  const [category, setCategory] = useState("Все изделия");
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const pointerStart = useRef<number | null>(null);
  const suppressClick = useRef(false);
  const thumbnailStrip = useRef<HTMLDivElement>(null);
  const photos = category === "Все изделия" ? productPhotos : productPhotos.filter((photo) => photo.category === category);
  const photo = photos[index];
  const step = (direction: number) => setIndex((current) => (current + direction + photos.length) % photos.length);

  useEffect(() => {
    const strip = thumbnailStrip.current;
    const thumbnail = strip?.querySelector<HTMLButtonElement>(`[data-photo="${photo.id}"]`);
    if (strip && thumbnail) strip.scrollTo({ left: thumbnail.offsetLeft - (strip.clientWidth - thumbnail.clientWidth) / 2, behavior: "auto" });
  }, [photo.id]);

  useEffect(() => {
    if (!expanded) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const modal = dialog.current;
    modal?.showModal();
    return () => {
      document.body.style.overflow = previousOverflow;
      modal?.close();
    };
  }, [expanded]);

  const handleKeys = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      step(event.key === "ArrowLeft" ? -1 : 1);
    }
  };

  return (
    <section className="product-gallery" id="gallery" aria-labelledby="gallery-heading" onKeyDown={handleKeys}>
      <div className="gallery-heading">
        <div><p className="eyebrow">Фотографии нашей продукции</p><h2 id="gallery-heading">Керамика в деталях</h2></div>
        <p>Реальные изделия предприятия: от малогабаритных колец до деталей сложной формы. Выберите фото, чтобы рассмотреть его крупнее.</p>
      </div>
      <div className="gallery-filters" role="group" aria-label="Виды изделий">
        {categories.map((item) => <button type="button" key={item} aria-pressed={category === item} onClick={() => { setCategory(item); setIndex(0); }}>{item}</button>)}
      </div>
      <div className="gallery-stage"
        onPointerDown={(event) => { pointerStart.current = event.clientX; suppressClick.current = false; }}
        onPointerCancel={() => { pointerStart.current = null; }}
        onPointerUp={(event) => {
          if (pointerStart.current === null) return;
          const distance = event.clientX - pointerStart.current;
          if (Math.abs(distance) > 50) { step(distance > 0 ? -1 : 1); suppressClick.current = true; }
          pointerStart.current = null;
        }}>
        <button className="gallery-view" type="button" onClick={() => { if (!suppressClick.current) setExpanded(true); }} aria-label={`Открыть фото: ${photo.title}`}>
          <img src={asset(photo.src)} alt={photo.title} width={1600} height={1200} loading="lazy" draggable={false} />
          <span className="gallery-expand" aria-hidden="true">↗ Рассмотреть</span>
        </button>
        <button className="gallery-arrow gallery-prev" type="button" aria-label="Предыдущее фото" onClick={() => step(-1)}>←</button>
        <button className="gallery-arrow gallery-next" type="button" aria-label="Следующее фото" onClick={() => step(1)}>→</button>
      </div>
      <div className="gallery-caption" aria-live="polite" aria-atomic="true">
        <div><span>{photo.category}</span><h3>{photo.title}</h3></div>
        <p>{String(index + 1).padStart(2, "0")} <span>/ {String(photos.length).padStart(2, "0")}</span></p>
      </div>
      <div className="gallery-thumbnails" ref={thumbnailStrip} role="group" aria-label="Выбор фотографии">
        {photos.map((item, itemIndex) => <button type="button" key={item.id} data-photo={item.id} aria-label={`Фото ${itemIndex + 1}: ${item.title}`} aria-pressed={index === itemIndex} onClick={() => setIndex(itemIndex)}>
          <img src={asset(item.thumbnail)} alt="" loading="lazy" width={240} height={180} />
        </button>)}
      </div>
      <dialog ref={dialog} className="gallery-dialog" aria-label="Просмотр фотографии продукции" onCancel={() => setExpanded(false)} onClose={() => setExpanded(false)} onClick={(event) => { if (event.target === event.currentTarget) setExpanded(false); }}>
        <div className="gallery-dialog-content">
          <button className="gallery-close" type="button" aria-label="Закрыть фото" onClick={() => setExpanded(false)}>×</button>
          <img src={asset(photo.src)} alt={photo.title} width={1600} height={1200} />
          <div className="gallery-dialog-caption"><button type="button" aria-label="Предыдущее фото" onClick={() => step(-1)}>←</button><p>{photo.title}<span>{index + 1} / {photos.length}</span></p><button type="button" aria-label="Следующее фото" onClick={() => step(1)}>→</button></div>
        </div>
      </dialog>
    </section>
  );
}
