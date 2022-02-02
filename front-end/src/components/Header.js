import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import dataTestIds from '../utils/dataTestIds';

function Header() {
  const { current: { name } } = useRef(JSON.parse(localStorage.getItem('user') || ''));
  const navigate = useNavigate();

  function handleChange({ name: buttonName }) {
    if (buttonName === 'login') localStorage.removeItem('user');
    return navigate(`/${buttonName}`);
  }

  return (
    <div style={ { display: 'flex' } }>
      <div>
        <button
          name="customer/products"
          data-testid={ dataTestIds[11] }
          type="button"
          onClick={ (e) => handleChange(e.target) }
        >
          PRODUTOS
        </button>
      </div>
      <div>
        <button
          name="customer/orders"
          type="button"
          onClick={ (e) => handleChange(e.target) }
          data-testid={ dataTestIds[12] }
        >
          PEDIDOS
        </button>
      </div>
      <div
        data-testid={ dataTestIds[13] }
      >
        { name }
      </div>
      <button
        name="login"
        type="button"
        onClick={ (e) => handleChange(e.target) }
        data-testid={ dataTestIds[14] }
      >
        Sair
      </button>
    </div>
  );
}

export default Header;
