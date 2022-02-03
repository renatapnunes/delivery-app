import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailValidate from '../utils/emailValidate';
import passwordValidate from '../utils/passwordValidate';
import http from '../services/api';
import constant from '../utils/constants';
import * as C from '../styles/LoginStyle';
import logo from '../images/logoBlack.png';

function Login() {
  const [inputLogin, setInputLogin] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [isValidEmailPassword, setIsValidEmailPassword] = useState(false);
  const [mensagemError, setMensagemError] = useState(false);
  const navigate = useNavigate();
  const { current: { token, role } } = useRef(
    JSON.parse(localStorage.getItem('user')) || '',
  );

  useEffect(() => {
    if (token && role === 'customer') return navigate('/customer/products');
  });

  useEffect(() => {
    setIsValidEmailPassword(emailValidate(inputLogin) && passwordValidate(inputPassword));
  }, [inputLogin, inputPassword, isValidEmailPassword]);

  const handleLoginButton = async (email, password) => {
    const user = await http.findUser({ email, password });
    if (user === constant.PAGE_404) return setMensagemError(true);
    const newToken = await http.tokenGenerator({ email, password });
    const objToLocalStorage = {
      name: user.name,
      email,
      role: user.role,
      token: newToken,
    };
    window.localStorage.setItem('user', JSON.stringify(objToLocalStorage));
    setMensagemError(false);

    switch (user.role) {
    case 'customer':
      return navigate('/customer/products');
    case 'seller':
      return navigate('/seller/orders');
    case 'administrator':
      return navigate('/admin/manage');
    default:
      navigate(0);
    }
  };

  return (
    <C.ContainerCentralizado>
      <C.BannerLogo src={ logo } alt="logo" onClick={ () => navigate('/register') } />
      <C.SubContainer>
        <C.Input
          data-testid="common_login__input-email"
          id="input-email"
          value={ inputLogin }
          onChange={ (event) => setInputLogin(event.target.value) }
          placeholder="Digite seu email"
        />
      </C.SubContainer>
      <C.SubContainer>
        <C.Input
          data-testid="common_login__input-password"
          id="input-password"
          value={ inputPassword }
          onChange={ (event) => setInputPassword(event.target.value) }
          placeholder="Digite sua senha"
        />
      </C.SubContainer>
      <C.Button
        data-testid="common_login__button-login"
        type="button"
        disabled={ !isValidEmailPassword }
        onClick={ () => handleLoginButton(inputLogin, inputPassword) }
      >
        LOGIN
      </C.Button>
      { mensagemError
        ? <p data-testid="common_login__element-invalid-email">Email/password inválido</p>
        : ''}
      <C.Button
        data-testid="common_login__button-register"
        type="button"
        onClick={ () => navigate('/register') }
      >
        Ainda não tenho conta
      </C.Button>
    </C.ContainerCentralizado>
  );
}

export default Login;
