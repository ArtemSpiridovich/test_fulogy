import React, {useState} from 'react';
import s from './header.module.sass';
import {Burger} from "./burgerMenu/burger";
//images
import logo from '../../assets/images/logo.png'
import cart from '../../assets/images/shopping-cart.svg'

export const Header = () => {
  
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  
  return (
      <div className={s.header}>
        <img className={s.header__logo} src={logo}/>
        <div className={s.header__menu}>
          <img className={s.menu__cart} src={cart}/>
          <div onClick={() => setMenuIsOpen(!menuIsOpen)} className={`${s.menu__button} ${menuIsOpen ? s.open : ''}`}>
            <div className={s.button__burger}>
            
            </div>
          </div>
        </div>
        <Burger isOpen={menuIsOpen}/>
      </div>
  );
}







