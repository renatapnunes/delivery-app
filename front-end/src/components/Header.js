import React, { useRef } from 'react';

function Header() {
  const { current: { name } } = useRef(JSON.parse(localStorage.getItem('user') || ''));

  return (
    <div style={ { display: 'flex' } }>
      <div>PEDIDOS</div>
      <div>{name}</div>
      <button type="button">Sair</button>
    </div>
  );
}

export default Header;
