import React from 'react';
import './style.css';

import Img1 from '../../assets/img/Img1.jpg';

//import { ReactComponent as Heart } from '../../assets/img/Img1.svg';

export default function Partners() {
  return (
    <section className='partners container'>
      <h2 className='h2'>Партнёры центра</h2>

      <ul className='partners__list'>
        <li className='partners__item'>
          <img src={Img1} width='64px' height='64px' alt='foto' />
          <span className='partners__title'>Наименование партнера</span>
        </li>

        <li className='partners__item'>
          <img src={Img1} width='64px' height='64px' alt='foto' />
          <span className='partners__title'>Наименование партнера</span>
        </li>

        <li className='partners__item'>
          <img src={Img1} width='64px' height='64px' alt='foto' />
          <span className='partners__title'>Наименование партнера</span>
        </li>

        <li className='partners__item'>
          <img src={Img1} width='64px' height='64px' alt='foto' />
          <span className='partners__title'>Наименование партнера</span>
        </li>

        <li className='partners__item'>
          <img src={Img1} width='64px' height='64px' alt='foto' />
          <span className='partners__title'>Наименование партнера</span>
        </li>
      </ul>
    </section>
  );
}
