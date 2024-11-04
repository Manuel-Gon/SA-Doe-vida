import React from 'react'
import { Link } from 'react-router-dom'
import './Doador_cadastro.css'

function Doador_cadastro() {
  return (
    <div className='Container-cadastro-doador'>
      <div className='form-image-cadastro-doador'>
        <img src="./tela_cadastro_doador.png" alt="" />
        <div className='form-cadastro-doador'>
            <div className='form-header-cadastro-doador'>
                <div className='title'> 
                <h1>Cadastre-se</h1>
                 </div>
                <div className='login-button-cadastro-doador'>
                <Link to='/loginD'><button type='button'>Login</button></Link>
                   </div>
                </div>
                <div className='input-group-cadastro-doador'>
                    <div className='primeiraColuna'>

                        <div className='input-box-cadastro-doador'>
                            <label htmlFor="firstname">Nome Completo</label>
                            <input type="text" name="firstname" id="firstname" placeholder='Digite seu nome' required />
                        </div>

                        <div className='input-box-cadastro-doador'>
                            <label htmlFor="data">Data de nascimento</label>
                            <input type="date" name="date" id="data" required />
                        </div>

                        <div className='input-box-cadastro-doador'>
                        <label htmlFor="cpf">CPF</label>
                        <input id="cpf" type="text" name="cpf" placeholder="Digite seu CPF" required/>
                    </div>

                    <div className='input-box-cadastro-doador'>
                        <label htmlFor="endereco">Endereço</label>
                        <input id="endereco" type="text" name="endereco" placeholder="Digite seu endereço" required/>
                    </div>
                    </div>

                    <div className='segundaColuna'>
                    
                        <div className='input-box-cadastro-doador'>
                        <label htmlFor="number">Telefone fixo e/ou celular</label>
                        <input id="number" type="tel" name="number" placeholder="(xx) xx xxxx-xxxx" required/>
                    </div>

                    <div className='input-box-cadastro-doador'>
                        <label htmlFor="email">E-mail</label>
                        <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required/>
                    </div>

                    <div className='input-box-cadastro-doador'>
                        <label htmlFor="password">Senha</label>
                        <input id="password" type="password" name="password" placeholder="Digite sua senha" required/>
                    </div>

                    <div className='input-box-cadastro-doador'>
                        <label htmlFor="Confirmpassword">Confirme sua Senha</label>
                        <input id="Confirmpassword" type="password" name="Confirmpassword"
                            placeholder="Confirme sua senha" required/>
                    </div>
                </div>
        </div>

        <div className='gender-inputs'>
                <div className='gender-title'>
                    <h6>Gênero</h6>
                </div>
                <div className='gender-group-cadastro-doador'>
                    <div className='gender-input-cadastro-doador'>
                        <input type="radio" id="female" name="gender"/>
                        <label htmlFor="female" >Feminino</label>
                    </div>

                    <div className='gender-input-cadastro-doador'>
                        <input type="radio" id="male" name="gender"/>
                        <label htmlFor="male">Masculino</label>
                    </div>

                </div>
            </div>

             <div className='confirm-input-cadastro-doador'>
                <input type="checkbox" id="confirmacao" name="confirmacao" value="confirmacao"/>
                <label htmlFor="confirmacao">
                    Ao confirmar os dados preenchidos do formulário acima, você concorda com os nossos
                    <button>Termos de Uso</button> e nossa
                    <button>Política de Privacidade</button>.
                </label>
             </div>

             <div className='continue-button-cadastro-doador'>
       <Link to='/perfilD'><button>Cadastrar</button></Link>
    </div>
      </div>
    </div>
    </div>
  )
}

export default Doador_cadastro
