import React from 'react';
import './style.css';

//import { ReactComponent as Heart } from '../../assets/img/Img1.svg';

export default function Partners() {
  return (
    <section className='partners container'>
      <h2 className='h2'>Партнёры центра</h2>

      <ul className='partners__list'>
        <li className='partners__item'>
          <img src='http://anovershina.ru/wp-content/uploads/2022/03/Img1.jpg' width='64px' height='64px' alt='foto' />
          <span className='partners__title'>Наименование партнера</span>
        </li>

        <li className='partners__item'>
          <img src='http://anovershina.ru/wp-content/uploads/2022/03/Img1.jpg' width='64px' height='64px' alt='foto' />
          <span className='partners__title'>Наименование партнера</span>
        </li>

        <li className='partners__item'>
          <img src='http://anovershina.ru/wp-content/uploads/2022/03/Img1.jpg' width='64px' height='64px' alt='foto' />
          <span className='partners__title'>Наименование партнера</span>
        </li>

        <li className='partners__item'>
          <img src='http://anovershina.ru/wp-content/uploads/2022/03/Img1.jpg' width='64px' height='64px' alt='foto' />
          <span className='partners__title'>Наименование партнера</span>
        </li>

        <li className='partners__item'>
          <img src='http://anovershina.ru/wp-content/uploads/2022/03/Img1.jpg' width='64px' height='64px' alt='foto' />
          <span className='partners__title'>Наименование партнера</span>
        </li>
      </ul>
    </section>
  );
}
