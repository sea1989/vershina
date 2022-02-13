import React from 'react';
import './style.css';

import Img1 from '../../assets/img/Img1.jpg';
import Project2 from '../../assets/img/project2.jpg';
import Project3 from '../../assets/img/project3.jpg';

//import { ReactComponent as Heart } from '../../assets/img/Img1.svg';

export default function Projects() {
  return (
    <section className='projects container'>
      <h2 className='h2'>Наши проекты</h2>

      <ul className='projects__list'>
        <li className='projects__item'>
          <div className='projects__info'>
            <span className='projects__date'>Декабрь 2019 года </span>
            <p className='projects__text'>
              Я живу в Приморье!
              <br />
              Я знаю! <br />Я горжусь!
            </p>

            <button className='button-more'>Подробнее</button>
          </div>
          <img src={Img1} width='863px' height='553px' alt='foto' />
        </li>

        <li className='projects__item'>
          <img src={Project2} width='863px' height='553px' alt='foto' />

          <div className='projects__info'>
            <span className='projects__date'>Апрель 2020 </span>
            <p className='projects__text'>«Вершите добрые дела»</p>

            <button className='button-more'>Подробнее</button>
          </div>
        </li>

        <li className='projects__item'>
          <div className='projects__info'>
            <span className='projects__date'>Декабрь 2019 года </span>
            <p className='projects__text'>
              Я живу в Приморье!
              <br />
              Я знаю! <br />Я горжусь!
            </p>

            <button className='button-more'>Подробнее</button>
          </div>
          <img src={Project3} width='863px' height='553px' alt='foto' />
        </li>
      </ul>
    </section>
  );
}
