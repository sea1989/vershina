import React from 'react';
import './style.css';

import LogoDesktop from '../../assets/img/LogoDesktop.png';
import MyButton from '../UI/button/MyButton';

import { ReactComponent as Up } from '../../assets/img/up.svg';

export default function Header() {
  return (
    <header className='header'>
      <div className='header__wrapper container'>
        <div className='header__top'>
          <img
            className='header__logo'
            src={LogoDesktop}
            width='191px'
            height='56px'
            alt='logo'
          />

          <nav class='menu'>
            <a href='#' className='menu__doc'>
              <span>Документация</span>
            </a>
            <a href='#' className='menu__report'>
              <span>Отчёты</span>
            </a>
          </nav>
        </div>

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
