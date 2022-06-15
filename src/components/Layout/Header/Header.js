import React from 'react'
import classes from './Header.module.css'
import mealsImg from '../../../assets/meals.jpg'
import HeaderCartButton from '../HeaderCart/HeaderCartButton'

function Header(props) {
  return (
    <div>
        <header className={classes.header}>
           <h1>
            Bimasha App
           </h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImg} alt="meals" />
        </div>
    </div>
  )
}

export default Header