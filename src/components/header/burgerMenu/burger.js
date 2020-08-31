import React from 'react';
import s from './burger.module.sass';
import {Item} from "./item/item";

export const Burger = ({isOpen}) => {
  let classValue = isOpen ? s.open : s.close
  
  return (
    <div className={`${s.burger} ${classValue}`}>
      <Item title='Обучающее видео'/>
      <Item title='Оформление заказа'/>
      <Item title='Оплата'/>
      <Item title='Доставка'/>
      <Item title='Доставка'/>
      <Item title='Гарантия'/>
      <Item title='Возврат'/>
      <Item title='Контакты'/>
      <Item title='Партнеры'/>
    </div>
  );
}