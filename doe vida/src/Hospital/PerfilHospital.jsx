import React from 'react'
import NavBar from '../Navbar/NavBar'
import './PerfilHospital.css'

function PerfilHospital() {
  return (
   
    <>

    <div className='container-perfil'>
         
       <div className='form-img-perfil'>
            <img className='img-perfil-hospital-cadastro' src="./tela_perfil_hospital.png "/>
        </div>
        <div className='form-perfil'>
            <div className='topo'>
                <div className='form-header-perfil'>
                <img className='logo' src="./Cópia de logo doação de sangue (2).png"/>
                <h1>Perfil do Hospital</h1>
                    <div className='voltar-button'>
                        <button>Voltar</button>
                    </div>
                </div>

                <div className='form-content-perfil'>
                    <img className='avatar' src="./user.png" alt=""/>
                    <h4>Dados do Hospital</h4>
                </div>
            </div>
 
            <div className='input-group-perfil'>

                <div className='primeiraColuna'>
                    <div className='input-box-perfil'>
                        <label htmlFor="hospital">Hospital*</label>
                        <input id="hospital" type="text" name="hospital"/>
                    </div>
        
                    <div className='input-box-perfil'>
                        <label htmlFor="responsavel">Responsável*</label>
                        <input id="responsavel" type="text" name="responsavel"/>
                    </div>
        
                    <div className='input-box-perfil'>
                        <label htmlFor="numero">Número*</label>
                        <input id="numero" type="text" name="numero"/>
                    </div>
        
                    <div className='input-box-perfil'>
                        <label htmlFor="cnpj">CNPJ*</label>
                        <input id="cnpj" type="date" name="cnpj"/>
                    </div>
                </div>
        
                <div className='segundaColuna'>

                    <div className='input-box-perfil'>
                        <label htmlFor="email">Login*</label>
                        <div className='input-btn-wrapper-perfil'>
                            <input id="email" type="email" name="email"/>
                            <button className='bntEditar'>Editar</button>
                        </div>
                    </div>

                    <div className='input-box-perfil'>
                        <label htmlFor="password">Senha*</label>
                        <div className='input-btn-wrapper-perfil'>
                            <input id="password" type="password" name="password"/>
                            <button className='bntEditar'>Editar</button>
                        </div>
                    </div>

                    <div className='input-box-perfil'>
                        <label htmlFor='endereco'>Website*</label>
                        <div className='input-btn-wrapper-perfil'>
                            <input id="website" type="text" name="website"/>
                            <button className='bntEditar'>Editar</button>
                        </div>
                    </div>

                    <div className='input-box-perfil'>
                        <label htmlFor="number">Equipe*</label>
                        <div className='input-btn-wrapper-perfil'>
                            <input id="equipe" type="tel" name="equipe"/>
                            <button className='bntEditar'>Editar</button>
                        </div>
                    </div> 
                </div>
             </div>

             <div className='sair-button-perfil'>
                <button>Excluir conta</button>
            </div>

        </div> 
    </div>
    </>
  )
}

export default PerfilHospital
