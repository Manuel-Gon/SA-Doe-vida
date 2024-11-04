import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import './Doador_perfil.css';

function Doador_perfil() {
  const navigate = useNavigate(); // Inicializando a função navigate

  const handleDeleteAccount = () => {
    // Aqui você pode adicionar a lógica para excluir a conta, se necessário
    navigate('/'); // Redireciona para TelaInicialT
  };

  return (
    <div className='container-doador'>
      <div className='form-img-doador'>
        <img src="/tela_login_doador.png" alt="" /> {/* Corrigido o caminho da imagem */}
      </div>
      <div className='form-doador'>
        <div className='form-header'>
          <img className='logo' src="logo doação de sangue (2).png" alt="" />
          <h1>Perfil do Doador</h1>
          <div className='voltar-button'>
            <button onClick={() => navigate('/')} >Voltar</button>
          </div>
        </div>
        
        <div className='form-content-doador'>
          <img className='avatar' src="Cópia de user.png" alt="" />
          <h4>Dados pessoais de usuário</h4>
        </div>
        
        <div className='input-group-doador'>
          <div className='primeiraColuna'>
            <div className='input-box'>
              <label htmlFor="firstname">Nome*</label>
              <input id="firstname" type="text" name="firstname" />
            </div>
            <div className='input-box-doador'>
              <label htmlFor="tipoSanguineo">Tipo Sanguíneo*</label>
              <input id="tipoSanguineo" type="text" name="tipoSanguineo" />
            </div>
            <div className='input-box-doador'>
              <label htmlFor="cpf">CPF*</label>
              <input id="cpf" type="text" name="cpf" />
            </div>
            <div className='input-box-doador'>
              <label htmlFor="data">Data de nascimento*</label>
              <input id="data" type="date" name="data" />
            </div>
          </div>
          <div className='segundaColuna'>
            <div className='input-box-doador'>
              <label htmlFor="endereco">Endereço*</label>
              <div className='input-btn-wrapper-doador'>
                <input id="endereco" type="text" name="endereco" />
                <button onClick={() => console.log('Editar Endereço')} className='bntEditar'>Editar</button>
              </div>
            </div>
            <div className='input-box-doador'>
              <label htmlFor="email">Email*</label>
              <div className='input-btn-wrapper'>
                <input id="email" type="email" name="email" />
              </div>
            </div>
            <div className='input-box'>
              <label htmlFor="password">Senha*</label>
              <div className='input-btn-wrapper'>
                <input id="password" type="password" name="password" />
                <button onClick={() => console.log('Editar Senha')} className='bntEditar'>Editar</button>
              </div>
            </div>
            <div className='input-box'>
              <label htmlFor="number">Telefone*</label>
              <div className='input-btn-wrapper'>
                <input id="number" type="tel" name="number" />
                <button onClick={() => console.log('Editar Telefone')} className='bntEditar'>Editar</button>
              </div>
            </div> 
          </div> 
        </div> 
        <div className='sair-button'>
          <button onClick={handleDeleteAccount}>Excluir conta</button>
        </div>
      </div>
    </div>
  );
}

export default Doador_perfil;
