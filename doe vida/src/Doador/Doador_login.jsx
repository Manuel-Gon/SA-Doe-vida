import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Doador_login.css';

function Doador_login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Login realizado com sucesso!");
  };

  const handleForgotPassword = () => {
    console.log("Recuperação de senha solicitada!");
  };

  const handleBack = () => {
    console.log("Redirecionando para o cadastro!");
    navigate('/doador');
  };

  return (
    <div className='container-login-doador'>
      <div className='imagem-login-doador'>
        <img src="../../public/tela_login_doador.png" alt="Imagem de Login" id='imagem-de-login' />
      </div>

      <form className='formulario-login-doador' onSubmit={e => { e.preventDefault(); handleLogin(); }}>
      <div className='informacoes-login-doador'>
        <h1>Login</h1>
        <p>Digite seus dados de acesso no campo abaixo.</p>
      </div>
      <br /><br />
        <div className='botao-voltar-container-login-doador'>
          <button className='botao-voltar-login-doador' type="button" onClick={handleBack}>Voltar</button>
        </div>
<br /><br /><br />
        <div className='Requisitos-login-doador'>
          <label htmlFor="email">E-mail</label><br /><br /><br />
          <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required />
        </div>
<br />
        <div className='Requisitos-login-doador'>
          <label htmlFor="password">Senha</label><br /><br /><br />
          <input id="password" type="password" name="password" placeholder="Digite sua senha" required />
        </div>
<br /><br />
        <div className='esqueceuSenha'>
          <a href=''>Esqueci minha senha</a>
        </div>
<br /><br />
        <div className='termos-e-politicas-login-doador'>
          <input type="checkbox" id="confirmacao" name="confirmacao" required />
          <label htmlFor="confirmacao" className='confirmacao'>
            Ao confirmar os dados preenchidos do formulário acima, você concorda com os nossos <a href='/termos'>Termos de Uso</a> e nossa <a href='/politica'>Política de Privacidade</a>.
          </label>
        </div>
<br />
        <div>
          <button type="submit" className='botao-entrar-login-doador'>Entrar</button>
        </div>
<br />
      </form>
    </div>

  );
}

export default Doador_login;
