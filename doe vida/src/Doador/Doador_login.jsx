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

  const handleRegister = () => {
    console.log("Redirecionando para o cadastro!");
  };

  const handleBack = () => {
    navigate('/doador'); // Redireciona para a página de cadastro do doador
  };

  return (
    <div className='container-login-doador'>
      <div className='imagem-login-doador'>
        <img src="./tela_login_doador.png" alt="Imagem de Login" />
      </div>

      <div className='informacoes-login-doador'>
        <h1>Login</h1>
        <p>Digite seus dados de acesso no campo abaixo.</p>
      </div>

      <form className='formulario-login-doador' onSubmit={e => { e.preventDefault(); handleLogin(); }}>
        <div className='botao-voltar-container-login-doador'>
          <button className='botao-voltar-login-doador' type="button" onClick={handleBack}>Voltar</button>
        </div>

        <div className='Requisitos-login-doador'>
          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required />
        </div>

        <div className='Requisitos-login-doador'>
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" name="password" placeholder="Digite sua senha" required />
        </div>

        <div className='esqueceuSenha'>
          <button type="button" onClick={handleForgotPassword}>Esqueci minha senha</button>
        </div>

        <div className='termos-e-politicas-login-doador'>
          <input type="checkbox" id="confirmacao" name="confirmacao" required />
          <label htmlFor="confirmacao">
            Ao confirmar os dados preenchidos do login acima, você concorda com os nossos 
            <button type="button" onClick={() => window.open('/termos', '_blank')}>Termos de Uso</button> e nossa 
            <button type="button" onClick={() => window.open('/politica', '_blank')}>Política de Privacidade</button>.
          </label>
        </div>

        <div className='botao-entrar-login-doador'>
          <button type="submit">Entrar</button>
        </div>

        <div className='naoPossuiConta'>
          <label>Não possui conta? <button type="button" onClick={handleRegister}>Cadastre-se</button></label>
        </div>
      </form>
    </div>

  );
}

export default Doador_login;
