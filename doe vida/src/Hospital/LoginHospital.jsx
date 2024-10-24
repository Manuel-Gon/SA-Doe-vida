import React from 'react'
import './LoginH.css'
function LoginHospital() {
  return (
    <div className='conteiner'>
       <div className='form-image'>
            <img src="./imagem da tela de login hospitalar.svg"/>
        </div>
        <div className='form'>
                <div className='form-header'>
                    <div className='tittle'>
                        <h1>Login</h1>
                    </div>
                </div>
                <div className='mensagem'>
                    <p>Digite os dados de acesso do hospital no campo abaixo.</p>
                </div>
                <div className='input-group'>
                    <div className='input-box'>
                        <div className='input-box'>
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" name="email" placeholder="Email" required/>
                        </div>
    
                        <div className='input-box'>
                            <label htmlFor="password">Senha</label>
                            <input id="password" type="password" name="password" placeholder="Senha" required/>
                        </div>
                    </div>
                </div>

                <div className='esqueceuSenha'>
                    <button>Esqueci minha senha</button>
                </div>
                
                <div className='confirm-input'>
                    <input type="checkbox" id="confirmacao" name="confirmacao" value="confirmacao" required/>
                    <label htmlFor="confirmacao">
                        Ao confirmar os dados preenchidos do login acima, você concorda com os nossos 
                        <button>Termos de Uso</button> e nossa 
                        <button>Política de Privacidade</button>.
                    </label>
                </div>

                <div className='login-button'>
                  <button onclick="login()"><button>Entrar</button></button>
                </div>

                <label>Não possui conta? <lin>Cadastre-se</lin></label>

        </div>
    </div>
  )
} 

export default LoginHospital
