import React from 'react';
import s from './footer.module.sass';
import {Item} from "./item/item";

export const Footer = () => {
  return (
    <div className={s.footer}>
      <Item title='Вариант кухни' color='blue'/>
      <Item title='Размеры' color='blue'/>
      <Item title='Сенсор' color='blue'/>
      <Item title='Питающий кабель' color='blue'/>
      <Item title='Блок питания' color='blue'/>
      <Item title='Цвет свечения' color='blue'/>
      <Item title='Монтаж' color='red'/>
      <Item title='Корзина' color='red'/>
    </div>
  );
}