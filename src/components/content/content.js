import React, {useState} from 'react';
import s from './content.module.sass';
import {BlockImages} from "./blockImages/blockImages";
import {BlockInfo} from "./blockInfo/blockInfo";

export const Content = () => {
  const [slide, setSlide] = useState(0)
  const [info, setInfo] = useState(false)
  
  return (
    <div className={s.content}>
      {
        !info ?
          <>
            <BlockImages slide={slide}/>
            <BlockInfo setInfo={setInfo} setSlide={setSlide}/>
          </>
          :
          <div className={s.content__info}>
            <button onClick={() => setInfo(false)} className={s.info__button}>&lt; Вернуться</button>
            <div className={s.info__text}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi, deleniti, dolores eligendi
                expedita illo impedit itaque iure magni neque nisi non officia officiis omnis quis quo sunt temporibus
                veniam.
              </p>
              <p>
                Ad adipisci, alias aperiam atque blanditiis commodi deleniti doloremque, eaque excepturi exercitationem
                expedita explicabo hic iste itaque magnam minus modi nulla odit officiis provident quasi qui quis soluta
                unde veniam!
              </p>
              <p>
                Assumenda corporis ex ratione repellat tempora voluptate voluptatum? Accusamus accusantium aut culpa
                dolores dolorum fugit iste nam nemo, odit provident quaerat sunt tempore vero! Autem earum eligendi
                eos
                minus reiciendis.
              </p>
            </div>
          </div>
      }
    </div>
  );
}