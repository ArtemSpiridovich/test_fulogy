import React, {useState} from 'react';
import s from './item.module.sass';
//image
import check from '../../../../assets/images/checked-symbol.png'

export const Item = ({title, setSlide, id, active, setActive}) => {
  
  let classItem = active ? `${s.item} ${s.active}`: s.item
  
  let clickItem = () => {
    setSlide(id)
    setActive(id)
  }
  
  return (
    <div onClick={() => clickItem()} className={classItem}>
      <div className={s.active}>
        <img src={check}/>
      </div>
      <span className={s.item__text}>{title}</span>
    </div>
  );
}