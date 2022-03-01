import React from "react";
import "./style.css";

import { ReactComponent as Heart } from "../../assets/img/heart.svg";
import { ReactComponent as Family } from "../../assets/img/family.svg";
import { ReactComponent as Chat } from "../../assets/img/chat.svg";

export default function About() {
  return (
    <section className="about container">
      <h2 className="about__h2">О нас коротко</h2>

      <ul className="about__top">
        <li className="about__item">
          <Heart />

          <div className="about__item-wrapper">
            <span className="about__item-number">247</span>
            <span className="about__item-text">
              Дней помощи организациям и людям
            </span>
          </div>
        </li>

        <li className="about__item">
          <Family />

          <div className="about__item-wrapper">
            <span className="about__item-number">327</span>
            <span className="about__item-text">
              Семей получили от нас помощь
            </span>
          </div>
        </li>

        <li className="about__item">
          <Chat />

          <div className="about__item-wrapper">
            <span className="about__item-number">145</span>
            <span className="about__item-text">
              Консультаций для НКО было проведено
            </span>
          </div>
        </li>
      </ul>

      <div className="about__mission">
        <h3 className="h3">Наша миссия</h3>

        <p className="mission__text">
          АНО по реализации социальных проектов «Вершина» это команда поддержки
          инициатив, направленных на служение обществу. В своей работе мы
          руководствуемся ценностями и принципами открытости и прозрачности
          деятельности, равенства, партнерства и ответственности.
        </p>

        <p className="mission__text">
          Мы хотим изменить качество жизни вокруг себя, принимаем участие в
          социальных и благотворительных программах Приморского края и России,
          активно откликаемся на острые проблемы, следим за современными
          трендами и потребностями.
        </p>
      </div>

      <div className="about__footer">
        <div className="about__block">
          <h3 className="h3">Для НКО:</h3>

          <p className="about__text">
            Наш центр – это помощь,обучение и консультационное сопровождение для
            некоммерческих организаций по вопросам:
          </p>

          <ul className="about__block-list">
            <li className="about__block-item">планирования</li>
            <li className="about__block-item">
              социального проектирования и маркетинга
            </li>
            <li className="about__block-item">работы с волонтерами</li>
            <li className="about__block-item">управления проектами</li>
            <li className="about__block-item">поиска и привлечения средств</li>
            <li className="about__block-item">работы с добровольцами</li>
            <li className="about__block-item">оформления заявок на гранты</li>
            <li className="about__block-item">
              создания некоммерческой организации
            </li>
            <li className="about__block-item">
              бухгалтерского учета и налогообложения НКО
            </li>
            <li className="about__block-item">оформления отчетности</li>
          </ul>
        </div>

        <div className="about__block">
          <h3 className="h3">Населению:</h3>

          <p className="about__text">
            Мы сопровождаем участников Государственной программы по преодолению
            бедности. В партнерстве со специалистами центра социальной поддержки
            населения Приморского края по Артёмовскому городскому округу
            рассказываем как:
          </p>

          <ul className="about__block-list">
            <li className="about__block-item">
              выйти из трудной жизненной ситуации
            </li>
            <li className="about__block-item">
              получить дополнительное профессиональное образование
            </li>
            <li className="about__block-item">устроиться на работу</li>
            <li className="about__block-item">открыть своё собственное дело</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
