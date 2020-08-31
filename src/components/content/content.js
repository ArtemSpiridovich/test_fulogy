import React, {useState} from 'react';
import s from './content.module.sass';
import {BlockImages} from "./blockImages/blockImages";
import {BlockInfo} from "./blockInfo/blockInfo";

export const Content = () => {
  const [slide, setSlide] = useState(0)
  
  return (
    <div className={s.content}>
      <BlockImages slide={slide}/>
      <BlockInfo setSlide={setSlide}/>
    </div>
  );
}