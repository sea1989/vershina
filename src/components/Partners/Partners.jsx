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
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const numberOfItems = index;

    const newArray = [];

    for (let i = 0; i < partnersData.length; i++) {
      if (i < numberOfItems) newArray.push(partnersData[i]);
    }

    setVisibleData(newArray);
  }, [index]);

  useEffect(() => {
    fetch('http://anovershina.ru/wp-json/wp/v2/posts?categories=4')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPartners(
          data.map((item) => ({
            id: item.id,
            title: item.title.rendered,
            content: item.content.rendered,
            image: item.acf.ava,
          }))
        );
      });
  }, []);

  function extractContent(s) {
    var span = document.createElement('span');
    span.innerHTML = s;
    console.log(s);
    return span.lastElementChild.lastElementChild.href;
  }

  return (
    <section className='partners container'>
      <h2 className='h2'>Партнёры центра</h2>

      <ul className='partners__list'>
        {partners.map((item) => (
          <a href={extractContent(item.content)}>
            <li className='partners__item'>
              <img src={item.image} height='64px' alt='foto' />
              <span className='partners__title'>{item.title}</span>
            </li>
          </a>
        ))}
      </ul>

      {/* <button
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
      </button> */}
    </section>
  );
}
