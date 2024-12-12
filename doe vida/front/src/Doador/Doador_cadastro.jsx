import React from 'react'
import { Link } from 'react-router-dom'
import './Doador_cadastro.css'

function Doador_cadastro() {
  return (
    <form className='form-cadastro-doador-tela' action="">
    <div className='Container-cadastro-doador'>

      <div className='imagem_cadastro'>
        <img src="./tela_cadastro_doador.png" alt="" />

 
        <div className='formulario-cadastro-doador-d'>


            <div className='Div_cadastra-se'>
                <div className='Titulo_cadastra-se'> 
                <h1>Cadastre-se</h1>
                 </div>
                <div className='botao_login'>
                <Link to='/loginD'><button type='button'>Login</button></Link>
                   </div>
                </div>


        <div className='Div_requisitos'>
            <div className='primeiraColuna'>
                        <div className='Requisitos_cadastro'>
                            <label htmlFor="firstname">Nome Completo</label>
                            <input type="text" name="firstname" id="firstname" placeholder='Digite seu nome' required />
                        </div>
                           <div className='Requisitos_cadastro'>
                             <label htmlFor="data">Data de nascimento</label>
                             <input type="date" name="date" id="data" required />
                           </div>
                        <div className='Requisitos_cadastro'>
                        <label htmlFor="cpf">CPF</label>
                        <input id="cpf" type="text" name="cpf" placeholder="Digite seu CPF" required/>
                    </div>
                    <div className='Requisitos_cadastro'>
                        <label htmlFor="endereco">Endereço</label>
                        <input id="endereco" type="text" name="endereco" placeholder="Digite seu endereço" required/>
                    </div>

                    </div>
                    <div className='segundaColuna'>
                        <div className='Requisitos_cadastro'>
                        <label htmlFor="number">Telefone fixo e/ou celular</label>
                        <input id="number" type="tel" name="number" placeholder="(xx) xx xxxx-xxxx" required/>
                    </div>
                    <div className='Requisitos_cadastro'>
                        <label htmlFor="email">E-mail</label>
                        <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required/>
                    </div>
                    <div className='Requisitos_cadastro'>
                        <label htmlFor="password">Senha</label>
                        <input id="password" type="password" name="password" placeholder="Digite sua senha" required/>
                    </div>
                    <div className='Requisitos_cadastro'>
                        <label htmlFor="Confirmpassword">Confirme sua Senha</label>
                        <input id="Confirmpassword" type="password" name="Confirmpassword"
                            placeholder="Confirme sua senha" required/>
                 </div>
            </div>

            

        </div>


            <div className='Div_genero'>
                <div className='Titulo_genero'>
                    <h6>Gênero</h6>
                </div>
                <div className='Div_femino_masculino'>
                    <div className='Feminino_masculino'>
                        <input type="radio" id="female" name="gender"/>
                        <label htmlFor="female" >Feminino</label>
                    </div>
                    <div className='Feminino_masculino'>
                        <input type="radio" id="male" name="gender"/>
                        <label htmlFor="male">Masculino</label>
                    </div>
                </div>
            </div>


             <div className='Div_termos_e_Privacidade'>
                <input type="checkbox" id="confirmacao" name="confirmacao" value="confirmacao"/>
                <label className='' htmlFor="confirmacao">
                    Ao confirmar os dados preenchidos do formulário acima, você concorda com os nossos
                    <Link to=''> Termos de Uso</Link> e nossa
                    <Link to=''> Política de Privacidade</Link>.
                </label>
             </div>

             <div className='botao_cadastrar'>
       <Link to='/perfilD'><button>Cadastrar</button></Link>
    </div>
      </div>
    </div>
    
    </div>
    </form>
  )
}

export default Doador_cadastro
