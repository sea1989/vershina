import React from "react";
import "./Modal.css";
import Image1 from "../../assets/img/Img1.jpg";
import MyButton from "../UI/button/MyButton";
const Modal = (active, setActive) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__button_close">
          <img src="" alt="" />
        </div>
        <div className="modal__slider">
          <img src={Image1} alt="" className="modal__slide" />
          <ul className="modal__list">
            <li className="modal__item"></li>
            <li className="modal__item"></li>
            <li className="modal__item"></li>
            <li className="modal__item"></li>
          </ul>
        </div>
        <div className="modal__main">
          <div className="main__text_block">
            <p className="text_block__Data">Декабрь 2019</p>
            <h1>Я живу в Приморье! Я знаю! Я горжусь!</h1>
          </div>
          <div className="main__text_block">
            <p className="text_block__title">Направление конкурса:</p>
            <p className="text_block__text">
              «Духовно-нравственное воспитание и гражданская инициатива»,
              развитие, укрепление и повышение патриотического и
              духовно-нравственного воспитания жителей Приморского края. Роль
              жителей Приморского края в Великой отечественной войне.
            </p>
          </div>

          <div className="main__text_block">
            <p className="text_block__title">Cрок реализации</p>
            <p className="text_block__text">с января по октябрь 2020 года</p>
          </div>
          <div className="main__text_block">
            <p className="text_block__title">
              Общая стоимость проекта проекта{" "}
            </p>
            <p className="text_block__text">1 353 722 рублей</p>
          </div>
          <div className="main__text_block double_block">
            <div className="main__text_block">
              <p className="text_block__title">Сумма собственных средств</p>
              <p className="text_block__text">505132 рубля</p>
            </div>
            <div className="main__text_block">
              <p className="text_block__title">Сумма запрашиваемых средств</p>
              <p className="text_block__text">848 590 рублей</p>
            </div>
          </div>
        </div>
        <MyButton className='myBtn'></MyButton>
      </div>
    </div>
  );
};
export default Modal;
