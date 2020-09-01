import React from 'react';
import s from './burger.module.sass';
import {Item} from "./items/item";

export const Burger = ({isOpen}) => {
  let classValue = isOpen ? s.open : s.close
  
  let items = [{title: 'Обучающее видео'},
    {title: 'Оформление заказа'}, {title: 'Оплата'}, {title: 'Доставка'}, {title: 'Гарантия'}, {title: 'Возврат'}, {title: 'Контакты'}, {title: 'Партнеры'}]
  
  return (
    <div className={`${s.burger} ${classValue}`}>
      {
        items.map((e,i) => {
          return <Item title={e.title} key={i}/>
        })
      }
    </div>
  );
}