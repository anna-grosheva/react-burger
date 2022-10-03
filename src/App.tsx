import React from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';


function App() {
  return (
    <div>
      <AppHeader />
      <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '40px' }}>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </div>
  );
}

export default App;
