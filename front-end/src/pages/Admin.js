import React, { useState, useEffect, useRef } from 'react';
import nameValidate from '../utils/nameValidate';
import emailValidate from '../utils/emailValidate';
import passwordValidate from '../utils/passwordValidate';
import Header from '../components/Header';
import http from '../services/api';
import constant from '../utils/constants';
import dataTestIds from '../utils/dataTestIds';
import Table from '../components/Table';

function Admin() {
  const [inputNameUser, setInputNameUser] = useState('');
  const [inputEmailUser, setInputEmailUser] = useState('');
  const [inputPasswordUser, setInputPasswordUser] = useState('');
  const [inputTypeUser, setInputTypeUser] = useState('seller');
  const [validateValues, setValidValues] = useState(false);
  const [mensagemError, setMensagemError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState('');
  const { current: { token } } = useRef(JSON.parse(localStorage.getItem('user')) || '');

  useEffect(() => {
    setValidValues(nameValidate(inputNameUser)
    && emailValidate(inputEmailUser)
    && passwordValidate(inputPasswordUser));
  }, [inputNameUser, inputEmailUser, inputPasswordUser]);

  const getUser = async () => {
    const result = await http.getAllUsers();
    setUsers(result);
    setLoading(false);
  };

  const handleButtonRegister = async (name, email, password, role) => {
    const create = await http.createUserAdmin({ name, email, password, role, token });
    if (create === constant.USER_ALREADY_EXISTS) return setMensagemError(true);
    getUser();
  };

  useEffect(() => { getUser(); }, []);

  const deleteID = async (id) => {
    await http.deleteUser({ id, token });
    getUser();
  };

  if (loading) return <h1>Carregando...</h1>;
  return (
    <div>
      <Header />
      { mensagemError && <p data-testid={ `${dataTestIds[80]}` }>Cadastro existente</p>}
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
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
            <option value="administrador">Administrador</option>
          </select>
        </div>
        <button
          data-testid="admin_manage__button-register"
          type="button"
          disabled={ !validateValues }
          onClick={ () => handleButtonRegister(
            inputNameUser,
            inputEmailUser,
            inputPasswordUser,
            inputTypeUser,
          ) }
        >
          CADASTRAR
        </button>
      </section>
      <p>Lista de usuários</p>
      <div>
        <Table users={ users } func={ deleteID } />
      </div>
    </div>);
}

export default Admin;

// users
// email: "adm@deliveryapp.com"
// id: 1
// name: "Delivery App Admin"
// password: "a4c86edecc5aee06eff8fdeda69e0d04"
// role: "administrator"
