import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailValidate from '../utils/emailValidate';
import passwordValidate from '../utils/passwordValidate';
import nameValidate from '../utils/nameValidate';
import http from '../services/api';
import constant from '../utils/constants';
import * as C from '../styles/RegisterStyle';

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
    const token = await http.tokenGenerator({ email, password });
    const objToLocalStorage = { name, email, role: 'costumer', token };
    window.localStorage.setItem('user', JSON.stringify(objToLocalStorage));
    navigate('/customer/products');
  };
  return (
    <C.ContainerCentralizado>
      {/* <div>Nome</div> */}
      <C.BannerLogo>Cadastro</C.BannerLogo>
      <C.Input
        data-testid="common_register__input-name"
        id="input-register-name"
        value={ inputRegisterName }
        onChange={ (event) => setInputRegisterName(event.target.value) }
        placeholder="Digite seu nome"
      />
      {/* <div>Email</div> */}
      <C.Input
        data-testid="common_register__input-email"
        id="input-register-email"
        value={ inputRegisterEmail }
        onChange={ (event) => setInputRegisterEmail(event.target.value) }
        placeholder="Digite seu email"
      />
      {/* <div>Senha</div> */}
      <C.Input
        data-testid="common_register__input-password"
        id="input-register-password"
        value={ inputRegisterPassword }
        onChange={ (event) => setInputRegisterPassword(event.target.value) }
        placeholder="Digite sua senha"
      />
      { mensagemError
      && <p data-testid="common_register__element-invalid_register">Dados inválidos</p>}
      <div>
        <C.Button
          data-testid="common_register__button-register"
          type="button"
          disabled={ !isValidEmailPassword }
          onClick={ () => handleRegisterButton(inputRegisterName,
            inputRegisterEmail,
            inputRegisterPassword) }
        >
          CADASTRAR
        </C.Button>
      </div>
    </C.ContainerCentralizado>);
}

export default Register;
