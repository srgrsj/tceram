import type { Metadata } from "next";
import { company } from "../lib/company";

export const metadata: Metadata = { title: "Обратная связь" };

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="contact-intro">
        <p className="eyebrow">Обратная связь</p>
        <h1>Отправьте чертёж, эскиз или фотографию детали</h1>
        <p>Начать можно с технической задачи или описания условий эксплуатации. Поможем пройти путь от концепции до внедрения готового изделия.</p>
        <div className="contact-details">
          <div><span>Телефоны</span>{company.phones.map((phone) => <a className="contact-phone" key={phone.href} href={phone.href}>{phone.label}</a>)}</div>
          <div><span>Эл. почта</span><a href={`mailto:${company.email}`}>{company.email}</a></div>
          <div className="contact-wide"><span>Специалист по производству и коммуникации</span><p>{company.contact}</p></div>
          <div className="contact-wide"><span>Адрес</span><p>{company.address}</p></div>
          <div className="contact-wide company-requisites">
            <span>Реквизиты</span>
            <p>{company.name}<br />ИНН 7017098950 · КПП 701701001<br />ОГРН 1047000164970</p>
            <p>р/с 40702810800000039243<br />Банк ГПБ (АО)<br />к/с 30101810200000000823<br />БИК 044525823</p>
          </div>
        </div>
      </div>
      <form className="contact-form">
        <div className="form-row">
          <label>Имя<input type="text" name="name" placeholder="Как к вам обращаться" /></label>
          <label>Компания<input type="text" name="company" placeholder="Название организации" /></label>
        </div>
        <div className="form-row">
          <label>Телефон<input type="tel" name="phone" placeholder="+7 000 000-00-00" /></label>
          <label>Эл. почта<input type="email" name="email" placeholder="name@company.ru" /></label>
        </div>
        <label>В чём состоит задача?<textarea name="message" rows={6} placeholder="Что нужно изготовить, как работает деталь, какие есть исходные материалы…" /></label>
        <label className="file-field"><input type="file" name="file" /><span>＋</span><strong>Приложить файл</strong><small>Фото, эскиз или чертёж до 20 МБ</small></label>
        <label className="consent"><input type="checkbox" /> <span>Я согласен на обработку персональных данных</span></label>
        <button className="button button-primary" type="button">Отправить запрос</button>
      </form>
    </section>
  );
}
