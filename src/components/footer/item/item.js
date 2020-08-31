import React from 'react';
import s from './item.module.sass';

export const Item = ({title, color}) => {
  let classColor
  if(color === 'blue') {
    classColor = s.item__color_blue
  } else if (color === 'red') {
    classColor = s.item__color_red
  } else {
    classColor = s.item__color_blue
  }
  
  return (
    <div className={s.item}>
      {title}
      <span className={classColor}></span>
    </div>
  );
}