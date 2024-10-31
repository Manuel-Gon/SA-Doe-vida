import React from 'react'
import './LoginD.css'

function DoadorLogin() {
  return (
    <div className='container'>
      <div className='form-image'>
        <img src="./imagem da tela de login.svg" alt="" />
      </div>
     <div className='form-header'>
     <div className='tittle'>
        <h1>Login</h1>
       </div>
     </div>
       <div className='mensagem'>
          <p>Digite seus dados de acesso no campo abaixo.</p>
         </div>
      <div className='input-group' >
          <div className='input-box'>
              <div className='input-box'>
                   <label htmlFor="email">E-mail</label>
                 <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required/>
              </div>
               <div className='input-box'>
                   <label htmlFor="password">Senha</label>
                   <input id="password" type="password" name="password" placeholder="Digite sua senha" required/>
               </div>
          </div>
      </div>
      <div className='esqueceuSenha'>
          <button>Esqueci minha senha</button>
        </div>
        <div className='confirm-input'>
            <input type="checkbox" id="confirmacao" name="confirmacao" value="confirmacao" required/>
            <label for="confirmacao">
                Ao confirmar os dados preenchidos do login acima, você concorda com os nossos 
                <button>Termos de Uso</button> e nossa 
                <button>Política de Privacidade</button>.
            </label>
        </div>

        <div className='login-button'>
           <button onclick="login()">Entrar</button>
        </div>

        <label>Não possui conta? <button>Cadastre-se</button></label>
    </div>
  )
}

export default DoadorLogin
