import React from 'react';
import s from './item.module.sass';

export const Item = ({title}) => {
  return (
    <div className={s.item}>
      {title}
    </div>
  );
}