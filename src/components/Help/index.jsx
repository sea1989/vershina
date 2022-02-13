import React from 'react';
import './style.css';

import MyButton from '../UI/button/MyButton';

import { ReactComponent as Up } from '../../assets/img/up.svg';

export default function Help() {
  return (
    <section className='help'>
      <div className='help__wrapper container'>
        <h2 className='h2'>Помощь проекту</h2>

        <div className='help__title'>Зачем мы это делаем?</div>

        <p className='help__description'>
          Мы хотим изменить качество жизни в Артемовском городском округе.
          Сформировать постоянный местный источник финансирования социальных
          проектов некоммерческих организаций и социальных инициатив местных
          жителей. <br />
          Помощь нам – это проявить активность по решению собственных проблем
          силами некоммерческого сектора Артемовского городского округа
        </p>

        <MyButton>Пожертвовать</MyButton>

        <button className='button-up'>
          <Up />
        </button>
      </div>
    </section>
  );
}
