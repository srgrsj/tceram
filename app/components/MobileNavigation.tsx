"use client";

import Link from "next/link";
import { useRef } from "react";

export default function MobileNavigation() {
  const menu = useRef<HTMLDetailsElement>(null);

  return (
    <details className="mobile-nav" ref={menu}>
      <summary aria-label="Открыть меню"><span></span><span></span></summary>
      <nav aria-label="Мобильная навигация" onClick={(event) => {
        if ((event.target as HTMLElement).closest("a") && menu.current) menu.current.open = false;
      }}>
        <Link href="/">Главная</Link>
        <Link href="/about">О компании</Link>
        <Link href="/projects">Продукция</Link>
        <Link href="/about#letters">Благодарности</Link>
        <Link href="/contact">Обратная связь</Link>
      </nav>
    </details>
  );
}
