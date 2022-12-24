import React from 'react';
import './style.css';

import arrow from '../../assets/img/arrow.svg';
import arrowdown from '../../assets/img/arrow_down.svg';
import cross from '../../assets/img/cross.svg';
import download from '../../assets/img/download.svg';
import MyButton from '../UI/button/MyButton';
import { ReactComponent as Up } from '../../assets/img/up.svg';
import menu_burger from '../../assets/img/menu.svg';
import Vk from '../../assets/img/Vk.svg';
import inst from '../../assets/img/instagram.svg';
import odnoklassniki from '../../assets/img/Odnoklassniki.svg';
import Fb from '../../assets/img/FB.svg';
import Logo from '../../assets/img/logo.svg';

export default function Header() {
  return (
    <header className='header' >
      <div className='header__wrapper container'>
        <div className='header__top'>
          <img
            className='header__logo'
            src={Logo}
            // src='http://anovershina.ru/wp-content/uploads/2022/03/Frame.png'
            width='191px'
            height='56px'
            alt='logo'
          />

          <nav class='menu'>
            <a href='#' className='menu__doc'>
              <img className='menu__arrow' src={arrow} alt='' />
              <span>Документация</span>
            </a>
            <a href='#' className='menu__report'>
              <img className='menu__arrow' src={arrowdown} alt='' />
              <span>Отчёты</span>
            </a>
          </nav>
          <div className='hamburger-menu'>
            <input id='menu__toggle' type='checkbox' />
            <label className='menu_btn' for='menu__toggle'>
              {/* <img className="menu__imag" src={menu_burger} alt="menu" /> */}
              <span className='menu__burger'></span>
              {/* <div className="menu__burger"></div> */}
            </label>
            <div className='menu__section'>
              <div className='menu__main'>
                <div className='menu__main__top'>
                  <div className='menu__main__title'>
                    <img className='menu__imag' src={download} alt='menu' />
                    <p>Скачать</p>
                  </div>
                  <ul className='menu__list'>
                    <a href=''>
                      <li className='menu__item'>Выписка_из_ЕГРЮЛ.pdf</li>
                    </a>
                    <a href=''>
                      <li className='menu__item'>Решение_о_назначе...ля.pdf</li>
                    </a>
                    <a href=''>
                      <li className='menu__item'>Устав_организации.pdf</li>
                    </a>
                    <a href=''>
                      <li className='menu__item'>Реквизиты.doc</li>
                    </a>
                    <a href=''>
                      <li className='menu__item'>Свид...ции НКО.jpg</li>
                    </a>
                  </ul>
                </div>
                <div className='menu__main__top'>
                  <div className='menu__main__title'>
                    <img className='menu__imag' src={download} alt='menu' />
                    <p>Отчётность:</p>
                  </div>
                  <ul className='menu__list'>
                    <a href=''>
                      {' '}
                      <li className='menu__item'>2020</li>
                    </a>
                    <a href=''>
                      {' '}
                      <li className='menu__item'>2019</li>
                    </a>
                    <a href=''>
                      {' '}
                      <li className='menu__item'>2018</li>
                    </a>
                  </ul>
                </div>
                <div className='menu__footer'>
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
              </div>
            </div>
          </div>
        </div>
        <div className='header__empty_block'></div>
        <div className='header__main'>
          <h1> АНО «Вершина» – межмуниципальный ресурсный центр.</h1>

          <p className='header__description'>
            Мы принимаем участие в социальных и благотворительных программах
            Приморского края и России, активно откликаемся на острые проблемы,
            следим за современными трендами и потребностями.
          </p>

          <MyButton>Помочь людям</MyButton>
        </div>

        <button className='button-up'>
          <Up />
        </button>
      </div>
    </header>
  );
}
