import React, { useState, useEffect } from 'react';
import './style.css';

const partnersData = [
  {
    image: 'http://anovershina.ru/wp-content/uploads/2022/03/Img1.jpg',
    title: 'Наименование партнера',
  },
  {
    image: 'http://anovershina.ru/wp-content/uploads/2022/03/Img1.jpg',
    title: 'Наименование партнера',
  },
  {
    image: 'http://anovershina.ru/wp-content/uploads/2022/03/Img1.jpg',
    title: 'Наименование партнера',
  },
  {
    image: 'http://anovershina.ru/wp-content/uploads/2022/03/Img1.jpg',
    title: 'Наименование партнера',
  },
  {
    image: 'http://anovershina.ru/wp-content/uploads/2022/03/Img1.jpg',
    title: 'Наименование партнера',
  },
  {
    image: 'http://anovershina.ru/wp-content/uploads/2022/03/Img1.jpg',
    title: 'Наименование партнера',
  },
  {
    image: 'http://anovershina.ru/wp-content/uploads/2022/03/Img1.jpg',
    title: 'Наименование партнера',
  },
  {
    image: 'http://anovershina.ru/wp-content/uploads/2022/03/Img1.jpg',
    title: 'Наименование партнера',
  },
  {
    image: 'http://anovershina.ru/wp-content/uploads/2022/03/Img1.jpg',
    title: 'Наименование партнера',
  },
  {
    image: 'http://anovershina.ru/wp-content/uploads/2022/03/Img1.jpg',
    title: 'Наименование партнера',
  },
  {
    image: 'http://anovershina.ru/wp-content/uploads/2022/03/Img1.jpg',
    title: 'Наименование партнера',
  },
];

//import { ReactComponent as Heart } from '../../assets/img/Img1.svg';

export default function Partners() {
  const [index, setIndex] = useState(3);
  const [visibleData, setVisibleData] = useState([]);

  useEffect(() => {
    const numberOfItems = index;

    const newArray = [];

    for (let i = 0; i < partnersData.length; i++) {
      if (i < numberOfItems) newArray.push(partnersData[i]);
    }

    setVisibleData(newArray);
  }, [index]);

  return (
    <section className='partners container'>
      <h2 className='h2'>Партнёры центра</h2>

      <ul className='partners__list'>
        {visibleData.map((item) => (
          <li className='partners__item'>
            <img src={item.image} width='64px' height='64px' alt='foto' />
            <span className='partners__title'>{item.title}</span>
          </li>
        ))}
      </ul>

      <button
        className={
          index === partnersData.length ? 'visually-hidden' : 'button-more'
        }
        onClick={() => setIndex(partnersData.length)}
      >
        Подробнее
      </button>
      <button
        className={index === 3 ? 'visually-hidden' : 'button-more'}
        onClick={() => setIndex(3)}
      >
        Скрыть
      </button>
    </section>
  );
}
