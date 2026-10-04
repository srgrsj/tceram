import type { Metadata } from "next";
import Link from "next/link";
import BackToTop from "./components/BackToTop";
import { asset } from "./lib/asset";
import { company } from "./lib/company";
import "./globals.css";

const title = "Нанокерамика";
const description = "ООО «Нанокерамика», Томск, с 2004 года. Полный цикл разработки и производства изделий из технической корундовой керамики — от концепции до серии.";

export const metadata: Metadata = {
  title: { default: title, template: "%s — Нанокерамика" },
  description,
  icons: { icon: asset("/favicon.png") },
  openGraph: { title, description, type: "website" },
  twitter: { card: "summary", title, description },
};

function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Нанокерамика — главная">
        <img src={asset("/logo.png")} alt="" />
        <span className="brand-name">Нанокерамика</span>
      </Link>
      <nav className="desktop-nav" aria-label="Основная навигация">
        <Link href="/">Главная</Link>
        <Link href="/about">О компании</Link>
        <Link href="/projects">Продукция</Link>
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
          <Link href="/projects">Продукция</Link>
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
        <strong>Нанокерамика</strong>
        <p>Разработка и производство технической керамики полного цикла с 2004 года</p>
      </div>
      <div className="footer-contact">
        {company.phones.map((phone) => <a key={phone.href} href={phone.href}>{phone.label}</a>)}
        <a href={`mailto:${company.email}`}>{company.email}</a>
        <p>{company.address}</p>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Нанокерамика</span>
        <span>Сибирская выносливость и качество, проверенное временем</span>
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
