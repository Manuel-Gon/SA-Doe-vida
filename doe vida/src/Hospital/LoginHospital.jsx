import React from 'react'
import { Link } from 'react-router-dom'
import './LoginH.css'
function LoginHospital() {
  return (
    <div className='container-login-hospital'>
       <div className='form-image-login'>
            <img src="./tela_login_hospital.png"/>
        </div>
        <div className='form-login'>
                <div className='form-header-login'>
                    <div className='tittle'>
                        <h1>Login</h1>
                    </div>
                </div>
                <div className='mensagem-login-hospital'>
                    <p>Digite os dados de acesso do hospital no campo abaixo.</p>
                </div>
                <div className='input-group-login'>
                    <div className='input-box-login'>
                        <div className='input-box-login'>
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" name="email" placeholder="Email" required/>
                        </div>
    
                        <div className='input-box-login'>
                            <label htmlFor="password">Senha</label>
                            <input id="password" type="password" name="password" placeholder="Senha" required/>
                        </div>
                    </div>
                </div>

                <div className='esqueceuSenha-login-doador'>
                    <button>Esqueci minha senha</button>
                </div>
                
                <div className='confirm-input-login'>
                    <input type="checkbox" id="confirmacao" name="confirmacao" value="confirmacao" required/>
                    <label htmlFor="confirmacao">
                        Ao confirmar os dados preenchidos do login acima, você concorda com os nossos 
                        <button>Termos de Uso</button> e nossa 
                        <button>Política de Privacidade</button>.
                    </label>
                </div>

                <div className='login-button-hospital'>
                  <button onclick="login()"><button>Entrar</button></button>
                </div>

                <label className='naoPossuiConta'>Não possui conta? <Link to='/hospital'><button>Cadastre-se</button></Link></label>

        </div>
    </div>
  )
} 

export default LoginHospital
