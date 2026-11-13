"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "../lib/asset";
import { letters } from "../lib/letters";

type Letter = (typeof letters)[number];

export default function ThankYouLetters() {
  const [selected, setSelected] = useState<Letter | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!selected) return;
    const modal = dialog.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    modal?.showModal();
    return () => {
      modal?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  return (
    <section className="letters-section" id="letters" aria-labelledby="letters-heading">
      <div className="letters-heading">
        <p className="eyebrow">Отзывы партнёров</p>
        <h2 id="letters-heading">Благодарственные письма</h2>
        <p>Письма предприятий, с которыми мы сотрудничаем. Откройте скан, чтобы прочитать письмо целиком.</p>
      </div>
      <div className="letters-grid">
        {letters.map((letter) => (
          <article className="letter-card" key={letter.id}>
            <h3>{letter.organization}</h3>
            <button
              className="letter-preview"
              type="button"
              aria-label={`Прочитать благодарственное письмо: ${letter.organization}`}
              aria-haspopup="dialog"
              onClick={() => setSelected(letter)}
            >
              <img src={asset(`/letters/${letter.id}-thumb.webp`)} alt={`Благодарственное письмо от ${letter.organization}`} width={letter.width} height={letter.height} loading="lazy" />
              <span className="letter-preview-action" aria-hidden="true">Читать письмо <span>↗</span></span>
            </button>
            <a className="letter-download" href={asset(`/letters/${letter.id}.pdf`)} download={`Благодарственное письмо — ${letter.organization}.pdf`} aria-label={`Скачать PDF: ${letter.organization}`}>
              Скачать PDF <span aria-hidden="true">↓</span>
            </a>
          </article>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="letter-dialog"
        aria-labelledby="letter-dialog-title"
        onClose={() => setSelected(null)}
        onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}
      >
        {selected && (
          <div className="letter-dialog-content">
            <div className="letter-dialog-toolbar">
              <h2 id="letter-dialog-title">{selected.organization}</h2>
              <a className="letter-download" href={asset(`/letters/${selected.id}.pdf`)} download={`Благодарственное письмо — ${selected.organization}.pdf`}>Скачать PDF <span aria-hidden="true">↓</span></a>
              <button type="button" className="letter-close" aria-label="Закрыть письмо" onClick={() => dialog.current?.close()} autoFocus>×</button>
            </div>
            <img src={asset(`/letters/${selected.id}.webp`)} alt={`Полный скан благодарственного письма от ${selected.organization}`} width={selected.width} height={selected.height} />
          </div>
        )}
      </dialog>
    </section>
  );
}
