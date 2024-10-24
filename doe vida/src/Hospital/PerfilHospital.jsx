import React from 'react'

function PerfilHospital() {
  return (
    <div className='container'>
       <div className='form-img'>
            <img src="./imagem de perfil - Hospital.svg " alt=""/>
        </div>
        <div className='form'>
            <div className='form-header'>
               <img className='logo' src="./Cópia de logo doação de sangue (2).png" alt=""/>
               <h1>Perfil do Hospital</h1>
               <div className='voltar-button'>
                <button>Voltar</button>
            </div>
            </div>

            <div className='form-content'>
                <img className='avatar' src="./user.png" alt=""/>
                <h4>Dados do Hospital</h4>
            </div>
 
            <div className='input-group'>

                <div className='primeiraColuna'>
                    <div className='input-box'>
                        <label htmlFor="hospital">Hospital*</label>
                        <input id="hospital" type="text" name="hospital"/>
                    </div>
        
                    <div className='input-box'>
                        <label htmlFor="responsavel">Responsável*</label>
                        <input id="responsavel" type="text" name="responsavel"/>
                    </div>
        
                    <div className='input-box'>
                        <label htmlFor="numero">Número*</label>
                        <input id="numero" type="text" name="numero"/>
                    </div>
        
                    <div className='input-box'>
                        <label htmlFor="cnpj">CNPJ*</label>
                        <input id="cnpj" type="date" name="cnpj"/>
                    </div>
                </div>
        
                <div className='segundaColuna'>

                    <div className='input-box'>
                        <label htmlFor="email">Login*</label>
                        <div className='input-btn-wrapper'>
                            <input id="email" type="email" name="email"/>
                            <button className='bntEditar'>Editar</button>
                        </div>
                    </div>

                    <div className='input-box'>
                        <label htmlFor="password">Senha*</label>
                        <div className='input-btn-wrapper'>
                            <input id="password" type="password" name="password"/>
                            <button className='bntEditar'>Editar</button>
                        </div>
                    </div>

                    <div className='input-box'>
                        <label htmlFor='endereco'>Website*</label>
                        <div className='input-btn-wrapper'>
                            <input id="website" type="text" name="website"/>
                            <button className='bntEditar'>Editar</button>
                        </div>
                    </div>

                    <div className='input-box'>
                        <label htmlFor="number">Equipe*</label>
                        <div className='input-btn-wrapper'>
                            <input id="equipe" type="tel" name="equipe"/>
                            <button className='bntEditar'>Editar</button>
                        </div>
                    </div> 
                </div>
             </div>

             <div className='sair-button'>
                <button>Excluir conta</button>
            </div>

        </div> 
    </div>
  )
}

export default PerfilHospital
