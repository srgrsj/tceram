import type { Metadata } from "next";
import Link from "next/link";
import BackToTop from "./components/BackToTop";
import { asset } from "./lib/asset";
import "./globals.css";

const title = "ИЦ «Металлокерамические композиты»";
const description = "Разработка и производство сложных изделий из технической и наноструктурной керамики — от прототипа до серийного выпуска.";

export const metadata: Metadata = {
  title: { default: title, template: "%s — ИЦ «МК»" },
  description,
  icons: { icon: asset("/favicon.png") },
  openGraph: { title, description, type: "website" },
  twitter: { card: "summary", title, description },
};

function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="ИЦ Металлокерамические композиты — главная">
        <img src={asset("/logo.png")} alt="ИЦ Металлокерамические композиты" />
      </Link>
      <nav className="desktop-nav" aria-label="Основная навигация">
        <Link href="/">Главная</Link>
        <Link href="/about">О компании</Link>
        <Link href="/projects">Проекты</Link>
        <Link href="/contact">Обратная связь</Link>
      </nav>
      <Link className="header-contact" href="/contact">
        Обсудить проект
      </Link>
      <details className="mobile-nav">
        <summary aria-label="Открыть меню"><span></span><span></span></summary>
        <nav aria-label="Мобильная навигация">
          <Link href="/">Главная</Link>
          <Link href="/about">О компании</Link>
          <Link href="/projects">Проекты</Link>
          <Link href="/contact">Обратная связь</Link>
        </nav>
      </details>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-info">
        <strong>ИЦ «Металлокерамические композиты»</strong>
        <p>Разработка и производство изделий из технической керамики</p>
      </div>
      <div className="footer-contact">
        <a href="tel:+79131030315">+7 913 103-03-15</a>
        <a href="mailto:nano-ceramics@mail.ru">nano-ceramics@mail.ru</a>
        <p>634041, Томск, ул. Карташова, 40а</p>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} ИЦ «Металлокерамические композиты»</span>
        <span>Техническая и наноструктурная керамика</span>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
