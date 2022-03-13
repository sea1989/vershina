import React, { useState, useEffect } from 'react';
import './style.css';
import Modal from '../Modal';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [modalData, setModalData] = useState([]);
  const [modalActive, setModalActive] = useState(false);

  function buttonHandler(item) {
    setModalActive(true);
    setModalData(item);
  }

  useEffect(() => {
    fetch('http://anovershina.ru/wp-json/wp/v2/posts?categories=3')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProjects(
          data.map((item) => ({
            id: item.id,
            date: item.date,
            title: item.title.rendered,
            content: item.content.rendered,
            image: item.acf.ava,
            description: item.acf.short_description,
          }))
        );
      });
  }, []);

  return (
    <section className='projects container'>
      <h2 className='h2'>Наши проекты</h2>

      <ul className='projects__list'>
        {projects.map((item) => (
          <li key={item.id} className='projects__item'>
            <div className='projects__info'>
              <span className='projects__date'>{item.date}</span>
              <p className='projects__text'>{item.title}</p>

              <button
                onClick={() => buttonHandler(item)}
                className='button-more'
              >
                Подробнее
              </button>
            </div>
            <img src={item.image} width='863px' height='553px' alt='foto' />
          </li>
        ))}
      </ul>

      <Modal data={modalData} active={modalActive} setActive={setModalActive} />
    </section>
  );
}
