import React from 'react';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import css from './BurgerConstructor.module.css';

import greenBun from '../../images/bun2.svg';
import yellowSauce from '../../images/sauce3.svg';
import meat from '../../images/meat2.svg';
import fruit from '../../images/fruit1.svg';
import rings from '../../images/mineral-rings.svg';

function BurgerConstructor() {
    return (
        <section className={css.section}>
            <ConstructorElement
                type="top"
                isLocked={true}
                text="Краторная булка N-200i (верх)"
                price={200}
                thumbnail={greenBun}
            />
            <div className={css.additionalItems}>
                <div className={css.constructorItem}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text="Соус традиционный галактический"
                        price={30}
                        thumbnail={yellowSauce}
                    />
                </div>
                <div className={css.constructorItem}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text="Мясо бессмертных моллюсков Protostomia"
                        price={300}
                        thumbnail={meat}
                    />
                </div>
                <div className={css.constructorItem}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text="Плоды Фалленианского дерева"
                        price={80}
                        thumbnail={fruit}
                    />
                </div>
                <div className={css.constructorItem}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text="Хрустящие минеральные кольца"
                        price={80}
                        thumbnail={rings}
                    />
                </div>
                <div className={css.constructorItem}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text="Хрустящие минеральные кольца"
                        price={80}
                        thumbnail={rings}
                    />
                </div>
            </div>
            <ConstructorElement
                type="bottom"
                isLocked={true}
                text="Краторная булка N-200i (низ)"
                price={200}
                thumbnail={greenBun}
            />
        </section>
    )
}

export default BurgerConstructor;