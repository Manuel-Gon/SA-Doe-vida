import React from 'react'
import './PefilD.css'
function DoadorPefil() {
  return (
    <div className='container-doador'>
      
        <div className='form-img-doador'>
            <img src="./imagem de tela de perfil - Doador.svg " alt=""/>
        </div>
        <div className='form-doador'>
            <div classname='form-header'>
                
                <img className='logo' src="logo doação de sangue (2).png" alt=""/>
                <h1>Perfil do Doador</h1>
                <div className='voltar-button'>
                    <button ><button>Voltar</button></button>
                </div>
            </div>
        
            <div className='form-content-doador'>
                <img className='avatar'src="Cópia de user.png" alt=""/>
                <h4>Dados pessoais de usuário</h4>
            </div>
        
            <div className='input-group-doador'>
                <div className='primeiraColuna'>
                    <div className='input-box'>
                        <label htmlFor="firstname">Nome*</label>
                        <input id="firstname" type="text" name="firstname"/>
                    </div>
        
                    <div className='input-box-doador'>
                        <label htmlFor="tipoSanguineo">Tipo Sanguíneo*</label>
                        <input id="tipoSanguineo" type="text" name="tipoSanguineo"/>
                    </div>
        
                    <div className='input-box-doador'>
                        <label htmlFor="cpf">CPF*</label>
                        <input id="cpf" type="text" name="cpf"/>
                    </div>
        
                    <div classanme='input-box-doador'>
                        <label htmlFor="date">Data de nascimento*</label>
                        <input id="data" type="date" name="data"/>
                    </div>
                </div>
        
                <div className='segundaColuna'>
                    <div className='input-box-doador'>
                        <label htmlFor="endereco">Endereço*</label>
                        <div className='input-btn-wrapper-doador'>
                            <input id="endereco" type="text" name="endereco"/>
                            <button onclick="EditarEndereco()" class="bntEditar">Editar</button>
                        </div>
                    </div>
        
                    <div className='input-box-doador'>
                        <label htmlFor="email">Email*</label>
                        <div className='input-btn-wrapper'>
                            <input id="email" type="email" name="email"/>
                           
                        </div>
                    </div>
        
                    <div className='input-box'>
                        <label htmlFor="password">Senha*</label>
                        <div className='input-btn-wrapper'>
                            <input id="password" type="password" name="password"/>
                            <button onclick="EditarSenha()" className='bntEditar'>Editar</button>
                        </div>
                    </div>
        
                    <div className='input-box'>
                        <label for="number">Telefone*</label>
                        <div className='input-btn-wrapper'>
                            <input id="number" type="tel" name="number"/>
                            <button onload="EditarTelefone()" className='bntEditar'>Editar</button>
                        </div>
                    </div> 
                </div> 
             </div> 

             <div className='sair-button'>
                <button onclick="excluirConta()">Excluir conta</button>
            </div>

        </div>
    </div>
  )
}

export default DoadorPefil
