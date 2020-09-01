import React, {useState} from 'react';
import s from './footer.module.sass';
import {Item} from "./items/item";

export const Footer = () => {
  
  const [items, setItems] = useState([
    {title: 'Вариант кухни', color: 'blue', active: false},
    {title: 'Размеры', color: 'blue', active: false},
    {title: 'Сенсор', color: 'blue', active: false},
    {title: 'Питающий кабель', color: 'blue', active: false},
    {title: 'Блок питания', color: 'blue', active: false},
    {title: 'Цвет свечения', color: 'blue', active: false},
    {title: 'Монтаж', color: 'red', active: false},
    {title: 'Корзина', color: 'red', active: false},
  ])
  
  const setActive = (id) => {
    let newItems =  items.map((e, i) => {
      return {...e, active: id === i};
    });
    setItems(newItems)
  };
  
  return (
    <div className={s.footer}>
      {
        items.map((e, i) => {
          return <Item title={e.title} color={e.color} id={i} key={i} active={e.active} setActive={setActive}/>
        })
      }
    </div>
  );
}