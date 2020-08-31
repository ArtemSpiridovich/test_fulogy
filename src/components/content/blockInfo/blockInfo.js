import React from 'react';
import s from './blockInfo.module.sass';
//images
import i from '../../../assets/images/icon-information.png'

export const BlockInfo = ({setSlide}) => {
  return (
    <div className={s.block_info}>
      <table className={s.info__table}>
        <tr>
          <td className={s.property}>Класс:</td>
          <td className={`${s.description} ${s.special}`}>Standart</td>
        </tr>
        <tr>
          <td className={s.property}>Потребляемая мощность:</td>
          <td className={s.description}>59 Вт.</td>
        </tr>
        <tr>
          <td className={s.property}>Сила света:</td>
          <td className={s.description}>3459 Дюмен = 7.5 ламп накаливания по 40 Вт.</td>
        </tr>
        <tr>
          <td className={s.property}>Гарантия:</td>
          <td className={s.description}>3 года</td>
        </tr>
        <tr>
          <td className={s.property}>Монтаж:</td>
          <td className={s.description}>Да</td>
        </tr>
        <tr>
          <td className={s.property}>Итого сумма:</td>
          <td className={s.description}>2594 рублей</td>
        </tr>
      </table>
      <div className={s.info__choose_color}>
        <div className={s.information}>
          <img src={i}/>
        </div>
        <p className={s.choose_color}>
          Выберите цвет свечения
        </p>
      </div>
      <div className={s.info__lights}>
      
      </div>
    </div>
  );
}