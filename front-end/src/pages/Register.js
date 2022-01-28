import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailValidate from '../utils/emailValidate';
import passwordValidate from '../utils/passwordValidate';
import nameValidate from '../utils/nameValidate';
import http from '../services/api';
import constant from '../utils/constants';

function Register() {
  const [inputRegisterName, setInputRegisterName] = useState('');
  const [inputRegisterEmail, setInputRegisterEmail] = useState('');
  const [inputRegisterPassword, setInputRegisterPassword] = useState('');
  const [isValidEmailPassword, setIsValidEmailPassword] = useState(false);
  const [mensagemError, setMensagemError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsValidEmailPassword(nameValidate(inputRegisterName)
    && emailValidate(inputRegisterEmail)
    && passwordValidate(inputRegisterPassword));
  }, [inputRegisterName, inputRegisterEmail, inputRegisterPassword]);

  const handleRegisterButton = async (name, email, password) => {
    const create = await http.createUser({ name, email, password });
    if (create === constant.USER_ALREADY_EXISTS) return setMensagemError(true);
    navigate('/customer/products');
    console.log(create);
  };

  return (
    <div>
      <div>Nome</div>
      <input
        data-testid="common_register__input-name"
        id="input-register-name"
        value={ inputRegisterName }
        onChange={ (event) => setInputRegisterName(event.target.value) }
      />
      <div>Email</div>
      <input
        data-testid="common_register__input-email"
        id="input-register-email"
        value={ inputRegisterEmail }
        onChange={ (event) => setInputRegisterEmail(event.target.value) }
      />
      <div>Senha</div>
      <input
        data-testid="common_register__input-password"
        id="input-register-password"
        value={ inputRegisterPassword }
        onChange={ (event) => setInputRegisterPassword(event.target.value) }
      />
      { mensagemError
      && <p data-testid="common_register__element-invalid_register">Dados inválidos</p>}
      <div>
        <button
          data-testid="common_register__button-register"
          type="button"
          disabled={ !isValidEmailPassword }
          onClick={ () => handleRegisterButton(inputRegisterName,
            inputRegisterEmail,
            inputRegisterPassword) }
        >
          CADASTRAR
        </button>
      </div>
    </div>);
}

export default Register;
