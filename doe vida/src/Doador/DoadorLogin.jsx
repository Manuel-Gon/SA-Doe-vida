import React from 'react'
import './LoginD.css'

function DoadorLogin() {
  return (
    <div className='container-login-doador'>
      <div className='form-image-login-doador'>
        <img src="./tela_login_doador.png" alt="" />
      </div>
     <div className='form-header-login-doador'>
     <div className='tittle'>
        <h1>Login</h1>
       </div>
     </div>
       <div className='mensagem'>
          <p>Digite seus dados de acesso no campo abaixo.</p>
         </div>
      <div className='input-group-login-doador' >
          <div className='input-box-login-doador'>
              <div className='input-box-login-doador'>
                   <label htmlFor="email">E-mail</label>
                 <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required/>
              </div>
               <div className='input-box-login-doador'>
                   <label htmlFor="password">Senha</label>
                   <input id="password" type="password" name="password" placeholder="Digite sua senha" required/>
               </div>
          </div>
      </div>
      <div className='esqueceuSenha'>
          <button>Esqueci minha senha</button>
        </div>
        <div className='confirm-input-login-doador'>
            <input type="checkbox" id="confirmacao" name="confirmacao" value="confirmacao" required/>
            <label for="confirmacao">
                Ao confirmar os dados preenchidos do login acima, você concorda com os nossos 
                <button>Termos de Uso</button> e nossa 
                <button>Política de Privacidade</button>.
            </label>
        </div>

        <div className='login-button-doador-login'>
           <button onclick="login()">Entrar</button>
        </div>

        <label>Não possui conta? <button>Cadastre-se</button></label>
    </div>
  )
}

export default DoadorLogin
