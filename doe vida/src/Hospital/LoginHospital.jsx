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
                    <Link to='/hospital'>Esqueci minha senha</Link>
                </div>

                
                <div className='confirm-input-login'>
                    <input type="checkbox" id="confirmacao" name="confirmacao" value="confirmacao" required/> <label>
                        Ao confirmar os dados preenchidos do login acima, você concorda com os nossos <Link >Termos de Uso</Link> e nossa <Link>Política de Privacidade</Link>.
                    </label>
                </div>

<<<<<<< Updated upstream
                <div className='login-button-hospital-login'>
                  <button onClick={PerfilUsuario}><button>Entrar</button></button>
                </div>

                <label className='naoPossuiConta'>Não possui conta?</label><Link to='/hospital' className='login-button-hospital'><button>Cadastre-se</button></Link>
=======
                  <button onclick="login()" id='login-button-hospital'>Entrar</button>
                
                <br />
                <label className='naoPossuiConta'>Não possui conta?</label><Link to='/hospital' className='login-button-hospital'>
                <br />    
                <button id='trocar-cadastro'>Cadastre-se</button></Link>
>>>>>>> Stashed changes

        </div>
    </div>
  )
} 

export default LoginHospital
