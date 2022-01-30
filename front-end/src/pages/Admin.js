import React, { useState, useEffect } from 'react';
import nameValidate from '../utils/nameValidate';
import emailValidate from '../utils/emailValidate';
import passwordValidate from '../utils/passwordValidate';

function Admin() {
  const [inputNameUser, setInputNameUser] = useState('');
  const [inputEmailUser, setInputEmailUser] = useState('');
  const [inputPasswordUser, setInputPasswordUser] = useState('');
  const [inputTypeUser, setInputTypeUser] = useState('Vendedor');
  const [validateValues, setValidValues] = useState(false);

  useEffect(() => {
    setValidValues(nameValidate(inputNameUser)
    && emailValidate(inputEmailUser)
    && passwordValidate(inputPasswordUser));
  }, [inputNameUser, inputEmailUser, inputPasswordUser]);

  const handleButtonRegister = () => {
    console.log(inputTypeUser);
  };

  return (
    <div>
      <header>AQUI</header>
      <section style={ { display: 'flex' } }>
        <div>
          <p>Nome</p>
          <input
            data-testid="admin_manage__input-name"
            value={ inputNameUser }
            onChange={ (event) => setInputNameUser(event.target.value) }
          />
        </div>
        <div>
          <p>Email</p>
          <input
            data-testid="admin_manage__input-email"
            value={ inputEmailUser }
            onChange={ (event) => setInputEmailUser(event.target.value) }
          />
        </div>
        <div>
          <p>Senha</p>
          <input
            data-testid="admin_manage__input-password"
            value={ inputPasswordUser }
            onChange={ (event) => setInputPasswordUser(event.target.value) }
          />
        </div>
        <div>
          <p>Tipo</p>
          <select
            name="tipo"
            id="tipo"
            data-testid="admin_manage__select-role"
            value={ inputTypeUser }
            onChange={ (event) => setInputTypeUser(event.target.value) }
          >
            <option value="vendedor" selected>Vendedor</option>
            <option value="cliente">Cliente</option>
            <option value="administrador">Administrador</option>
          </select>
        </div>
        <button
          data-testid="admin_manage__button-register"
          type="button"
          disabled={ !validateValues }
          onClick={ handleButtonRegister }
        >
          CADASTRAR
        </button>
      </section>
      <p>Lista de usuários</p>
      <ul>
        <li>A</li>
      </ul>
    </div>);
}

export default Admin;
