import React, {useState} from 'react';
import s from './item.module.sass';

export const Item = ({title, color, active, setActive, id}) => {
  let classColor
  if(color === 'blue') {
    classColor = s.item__color_blue
  } else if (color === 'red') {
    classColor = s.item__color_red
  } else {
    classColor = s.item__color_blue
  }
  
  return (
      <div onClick={() => setActive(id)} className={`${s.item} ${active ? s.active : ''}`}>
      {title}
      <span className={classColor}></span>
    </div>
  );
}