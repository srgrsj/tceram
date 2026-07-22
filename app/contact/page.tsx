import type { Metadata } from "next";

export const metadata: Metadata = { title: "Обратная связь" };

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="contact-intro">
        <p className="eyebrow">Обратная связь</p>
        <h1>Отправьте чертёж, эскиз или фотографию детали</h1>
        <p>Для первого разговора достаточно фотографии, эскиза или короткого описания условий работы детали.</p>
        <div className="contact-details">
          <div><span>Телефон</span><a href="tel:+79131030315">+7 913 103-03-15</a></div>
          <div><span>Эл. почта</span><a href="mailto:nano-ceramics@mail.ru">nano-ceramics@mail.ru</a></div>
          <div><span>Адрес</span><p>634041, Россия, Томск<br />ул. Карташова, 40а</p></div>
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
