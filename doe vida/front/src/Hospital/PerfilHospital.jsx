import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PerfilHospital.css';
import axios from 'axios';

function PerfilHospital() {
    const [hospital, setHospital] = useState({}); // Estado para armazenar os dados do hospital
    const [editMode, setEditMode] = useState({
        nome: false,
        responsavel: false,
        telefone: false,
        cnpj: false,
        email: false,
        senha: false,
        website: false,
        equipe: false
    }); // Estado para controlar o modo de edição de cada campo
    const hospitalId = 1; // ID do hospital (no exemplo, hardcoded como 1)

    useEffect(() => {
        // Função para buscar os dados do hospital
        const fetchHospital = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/Usuarios/${hospitalId}`);
                setHospital(response.data); // Armazena os dados no estado
            } catch (error) {
                console.error('Erro ao buscar os dados do hospital:', error.message);
            }
        };

        fetchHospital();
    }, [hospitalId]);

    // Função para lidar com a atualização dos dados
    const handleUpdate = async (field) => {
        try {
            const updatedHospital = { ...hospital };
            const response = await axios.put(`http://localhost:3000/Usuarios/${hospitalId}`, updatedHospital);
            console.log('Hospital atualizado com sucesso:', response.data);
            setEditMode({ ...editMode, [field]: false }); // Desativa o modo de edição após atualizar
        } catch (error) {
            console.error('Erro ao atualizar o hospital:', error.message);
        }
    };

    // Função para mudar o valor dos campos enquanto edita
    const handleChange = (e) => {
        setHospital({ ...hospital, [e.target.name]: e.target.value });
    };

    // Função para excluir a conta
    const handleDelete = async () => {
        const confirmDelete = window.confirm('Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.');
        if (confirmDelete) {
            try {
                const response = await axios.delete(`http://localhost:3000/Usuarios/${hospitalId}`);
                console.log('Conta excluída com sucesso:', response.data);
                // Redirecionar ou mostrar uma mensagem de sucesso
                // Você pode usar o React Router para redirecionar após a exclusão
            } catch (error) {
                console.error('Erro ao excluir a conta:', error.message);
            }
        }
    };

    return (
        <div className='container-perfil'>
            <div className='form-img-perfil'>
                <img className='img-perfil-hospital-cadastro' src="./tela_perfil_hospital.png" alt="Hospital" />
            </div>
            <div className='form-perfil'>
                <div className='topo'>
                    <div className='form-header-perfil'>
                        <img className='logo' src="./Cópia de logo doação de sangue (2).png" alt="Logo" />
                        <h1>Perfil do Hospital</h1>
                        <div className='voltar-button'>
                            <Link to='/telaH'>
                                <button>Voltar</button>
                            </Link>
                        </div>
                    </div>

                    <div className='form-content-perfil'>
                        <img className='avatar' src="./user.png" alt="Avatar" />
                        <h4>Dados do Hospital</h4>
                    </div>
                </div>

                <div className='input-group-perfil'>
                    <div className='primeiraColuna'>
                        <div className='input-box-perfil'>
                            <label htmlFor="hospital">Hospital*</label>
                            <input
                                id="hospital"
                                type="text"
                                name="nome"
                                value={hospital.nome || ''}
                                onChange={handleChange}
                                readOnly={!editMode.nome}
                            />
                            {!editMode.nome && <button className='bntEditar' onClick={() => setEditMode({ ...editMode, nome: true })}>Editar</button>}
                            {editMode.nome && <button className='bntEditar' onClick={() => handleUpdate('nome')}>Salvar</button>}
                        </div>

                        <div className='input-box-perfil'>
                            <label htmlFor="responsavel">Responsável*</label>
                            <input
                                id="responsavel"
                                type="text"
                                name="responsavel"
                                value={hospital.responsavel || ''}
                                onChange={handleChange}
                                readOnly={!editMode.responsavel}
                            />
                            {!editMode.responsavel && <button className='bntEditar' onClick={() => setEditMode({ ...editMode, responsavel: true })}>Editar</button>}
                            {editMode.responsavel && <button className='bntEditar' onClick={() => handleUpdate('responsavel')}>Salvar</button>}
                        </div>

                        <div className='input-box-perfil'>
                            <label htmlFor="numero">Telefone*</label>
                            <input
                                id="numero"
                                type="text"
                                name="telefone"
                                value={hospital.telefone || ''}
                                onChange={handleChange}
                                readOnly={!editMode.telefone}
                            />
                            {!editMode.telefone && <button className='bntEditar' onClick={() => setEditMode({ ...editMode, telefone: true })}>Editar</button>}
                            {editMode.telefone && <button className='bntEditar' onClick={() => handleUpdate('telefone')}>Salvar</button>}
                        </div>

                        <div className='input-box-perfil'>
                            <label htmlFor="cnpj">CNPJ*</label>
                            <input
                                id="cnpj"
                                type="text"
                                name="cnpj"
                                value={hospital.cnpj || ''}
                                onChange={handleChange}
                                readOnly={!editMode.cnpj}
                            />
                            {!editMode.cnpj && <button className='bntEditar' onClick={() => setEditMode({ ...editMode, cnpj: true })}>Editar</button>}
                            {editMode.cnpj && <button className='bntEditar' onClick={() => handleUpdate('cnpj')}>Salvar</button>}
                        </div>
                    </div>

                    <div className='segundaColuna'>
                        <div className='input-box-perfil'>
                            <label htmlFor="email">Email*</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={hospital.email || ''}
                                onChange={handleChange}
                                readOnly={!editMode.email}
                            />
                            {!editMode.email && <button className='bntEditar' onClick={() => setEditMode({ ...editMode, email: true })}>Editar</button>}
                            {editMode.email && <button className='bntEditar' onClick={() => handleUpdate('email')}>Salvar</button>}
                        </div>

                        <div className='input-box-perfil'>
                            <label htmlFor="password">Senha*</label>
                            <input
                                id="password"
                                type="password"
                                name="senha"
                                value={hospital.senha || ''}
                                onChange={handleChange}
                                readOnly={!editMode.senha}
                            />
                            {!editMode.senha && <button className='bntEditar' onClick={() => setEditMode({ ...editMode, senha: true })}>Editar</button>}
                            {editMode.senha && <button className='bntEditar' onClick={() => handleUpdate('senha')}>Salvar</button>}
                        </div>

                        <div className='input-box-perfil'>
                            <label htmlFor="website">Website*</label>
                            <input
                                id="website"
                                type="text"
                                name="website"
                                value={hospital.website || ''}
                                onChange={handleChange}
                                readOnly={!editMode.website}
                            />
                            {!editMode.website && <button className='bntEditar' onClick={() => setEditMode({ ...editMode, website: true })}>Editar</button>}
                            {editMode.website && <button className='bntEditar' onClick={() => handleUpdate('website')}>Salvar</button>}
                        </div>

                        <div className='input-box-perfil'>
                            <label htmlFor="equipe">Equipe*</label>
                            <input
                                id="equipe"
                                type="text"
                                name="equipe"
                                value={hospital.equipe || ''}
                                onChange={handleChange}
                                readOnly={!editMode.equipe}
                            />
                            {!editMode.equipe && <button className='bntEditar' onClick={() => setEditMode({ ...editMode, equipe: true })}>Editar</button>}
                            {editMode.equipe && <button className='bntEditar' onClick={() => handleUpdate('equipe')}>Salvar</button>}
                        </div>
                    </div>
                </div>

                <div className='sair-button-perfil'>
                    <button onClick={handleDelete}>Excluir conta</button>
                </div>
            </div>
        </div>
    );
}


export default PerfilHospital
