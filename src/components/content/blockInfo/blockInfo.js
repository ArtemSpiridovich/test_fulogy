import React, {useState} from 'react';
import s from './blockInfo.module.sass';
//images
import i from '../../../assets/images/icon-information.png'
import {Item} from "./items/item";

export const BlockInfo = ({setSlide, setInfo}) => {
  
  let [items, setItems] =useState([
    {
      title: 'Теплый',
      active: true
    },
    {
      title: 'Дневной',
      active: false
    },
    {
      title: 'Холодный',
      active: false
    },
  ])
  
  const setActive = (id) => {
    let newItems =  items.map((e, i) => {
      return {...e, active: id === i};
    });
    setItems(newItems)
  };
  
  return (
    <div className={s.block_info}>
      <table className={s.info__table}>
        <tbody>
          <tr>
            <td className={s.property}>Класс:</td>
            <td className={s.description}><button className={s.special}>Standart</button></td>
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
        </tbody>
      </table>
      <div className={s.info__choose_color}>
        <div onClick={() => setInfo(true)} className={s.information}>
          <img src={i}/>
        </div>
        <p className={s.choose_color}>
          Выберите цвет свечения
        </p>
      </div>
      <div className={s.info__lights}>
        <div className={s.lights__items}>
          {
            items.map((e,i) => {
              return <Item title={e.title} setSlide={setSlide} id={i} key={i} active={e.active} setActive={setActive}/>
            })
          }
        </div>
      </div>
    </div>
  );
}