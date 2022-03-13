import React from 'react';
import './style.css';

import { ReactComponent as CloseModal } from '../../assets/img/close-modal.svg';
import ModuleButton from '../UI/button/ModuleButton';

export default function Modal({ active, setActive, data }) {
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <div className='modal__content' onClick={(e) => e.stopPropagation()}>
        <div onClick={() => setActive(false)} className='modal__button_close'>
          <CloseModal />
        </div>
        <div className='modal__slider'>
          <img src={data.image} alt='logo_projects' width='864px' height='554px' className='modal__slide' />
          <ul className='modal__list'>
            <li className='modal__item'></li>
            <li className='modal__item'></li>
            <li className='modal__item'></li>
            <li className='modal__item'></li>
          </ul>
        </div>
        <div className='modal__main'>
          <div className='main__text_block'>
            <p className='text_block__Data'>{data.date}</p>
            <h2>{data.title}</h2>
          </div>
          <div className='main__text_block'>
            <p className='text_block__title'>Направление конкурса:</p>
            <p className='text_block__text'>{data.description}</p>
          </div>

          <div className='main__text_block'>
            <p className='text_block__title'>Cрок реализации</p>
            <p className='text_block__text'>с января по октябрь 2020 года</p>
          </div>
          <div className='main__text_block'>
            <p className='text_block__title'>Общая стоимость проекта проекта</p>
            <p className='text_block__text'>1 353 722 рублей</p>
          </div>
          <div className='main__text_block double_block'>
            <div className='main__text_block'>
              <p className='text_block__title'>Сумма собственных средств</p>
              <p className='text_block__text'>505132 рубля</p>
            </div>
            <div className='main__text_block'>
              <p className='text_block__title'>Сумма запрашиваемых средств</p>
              <p className='text_block__text'>848 590 рублей</p>
            </div>
          </div>
        </div>
        <ModuleButton className='myBtn'>Помочь проекту</ModuleButton>
      </div>
    </div>
  );
}
