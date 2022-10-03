import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import css from './BurgerIngredients.module.css';

function BurgerIngredients() {
    const [current, setCurrent] = React.useState('one')
    return (
        <main className={css.main}>
            <h1 className="text text_type_main-large">Соберите бургер</h1>
            <div style={{ display: 'flex' }}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <h2 className="text text_type_main-medium">Булки</h2>
            <h2 className="text text_type_main-medium">Соусы</h2>
            <h2 className="text text_type_main-medium">Начинки</h2>
        </main>
    )
}

export default BurgerIngredients;