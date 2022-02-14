import React from 'react';
import './style.css';

import LogoDesktop from '../../assets/img/logo.svg';
import Vk from '../../assets/img/Vk.svg';
import inst from '../../assets/img/instagram.svg';
import odnoklassniki from '../../assets/img/Odnoklassniki.svg';
import Fb from '../../assets/img/FB.svg';


export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer_top container'>
        <div className='footer__logo'>
          <img src={LogoDesktop} width='191px' max-height='56px' alt='logo' />
        </div>
        <div className='footer__info'>
          <p className='footer__title'>Информация об организации</p>
          <div className='footer__info_wrapper'>
            <p className='footer__info_title'>Полное наименование: </p>
            <p className='footer__info_text'>
              АВТОНОМНАЯ НЕКОММЕРЧЕСКАЯ ОРГАНИЗАЦИЯ ПО РЕАЛИЗАЦИИ СОЦИАЛЬНЫХ
              ПРОЕКТОВ “ВЕРШИНА”
            </p>
          </div>
          <div className='footer__info_wrapper'>
            <p className='footer__info_title'>Юридический адрес: </p>
            <p className='footer__info_text'>
              692754, Приморский край, г. Артём, ул. Волгоградская, д. 22
            </p>
          </div>
          <div className='footer__info_wrapper'>
            <p className='footer__info_title'>ОГРН:</p>
            <p className='footer__info_text'>1202500001087</p>
          </div>
          <div className='footer__info_wrapper'>
            <p className='footer__info_title'>ИНН:</p>
            <p className='footer__info_text'>2501061868</p>
          </div>
          <div className='footer__info_wrapper'>
            <p className='footer__info_title'>КПП:</p>
            <p className='footer__info_text'>250201001</p>
          </div>
        </div>
        <ul className='footer__document_list footer__title'>
          Документация и ссылки
          <li>
            <a className='footer__document' href='#'>
              Выписка_из_ЕГРЮЛ.pdf
            </a>
          </li>
          <li>
            <a className='footer__document' href='#'>
              Решение_о_назначении_рук...ля.pdf
            </a>
          </li>
          <li>
            <a className='footer__document' href='#'>
              Устав_организации.pdf
            </a>
          </li>
          <li>
            <a className='footer__document' href='#'>
              Реквизиты.doc
            </a>
          </li>
          <li>
            <a className='footer__document' href='#'>
              Свидетельство о рег...ции НКО.jpg
            </a>
          </li>
        </ul>
        <div className='footer__contact'>
          <p className='footer__title'>Контакты</p>
          <div className='footer__call_wrapper'>
            <p className='footer__call_title'>Телефон: </p>
            <p className='footer__call_text'>8 (423) 2-888-888</p>
          </div>
          <div className='footer__call_wrapper'>
            <p className='footer__call_title'>Whatsapp: </p>
            <p className='footer__call_text'>8 (999) 999-99-99</p>
          </div>
        </div>
      </div>
      <div className='footer__foot container'>
        <ul className='footer__social_net_list'>
          <li className='footer__image'>
            <a href='#'>
              <img src={inst} alt='instagram' />
            </a>
          </li>
          <li className='footer__image'>
            <a href='#'>
              <img src={Vk} alt='Vk' />
            </a>
          </li>
          <li className='footer__image'>
            <a href='#'>
              <img src={odnoklassniki} alt='Odnoklasniki' />
            </a>
          </li>
          <li className='footer__image'>
            <a href='#'>
              <img src={Fb} alt='Facebook' />
            </a>
          </li>
        </ul>
        <p className='footer__text mark'>©2020 АНО “Вершина”</p>
      </div>
    </footer>
  );
}
