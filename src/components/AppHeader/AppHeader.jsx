import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import css from './AppHeader.module.css';

function AppHeader() {
    return (
        <header className={`${css.header} text text_type_main-default p-5`}>
            <nav>
                <ul className={css.navigation}>
                    <li className={css.linkItem}>
                        <BurgerIcon type="secondary" />
                        <a href='ya.ru' className={`${css.link} p-2`}>Конструктор</a>
                    </li>
                    <li className={css.linkItem}>
                        <ListIcon type="secondary" />
                        <a href='ya.ru' className={`${css.link} p-2`}>Лента заказов</a>
                    </li>
                </ul>
            </nav>
            <div className={css.logo} >
                <Logo />
            </div>
            <div className={css.linkItem}>
                <ProfileIcon type="secondary" />
                <a href='ya.ru' className={`${css.link} p-2`}>Личный кабинет</a>
            </div>
        </header>
    )
}

export default AppHeader;