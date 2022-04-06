import React from 'react';
import './style.scss';

const Contacts = (): JSX.Element => {
  console.log('++');

  return (
    <section className="contacts">

      <div className="container">
        <h2>Контакты</h2>
        <p>Наш адрес:</p>
        <p>г. Киев, ул. Космонавтов, д. 7, офис 5</p>
        <p>Наша почта</p>
        <p>aaaa@gmail.com</p>
        <button type="button">забронировать стол</button>
        <p>+7 (999) 999-99-99</p>
        <p>Звоните или оставляйте заявку</p>
        <span>Мы в соц сетях:</span>
      </div>
    </section>

  );
};

export default Contacts;
