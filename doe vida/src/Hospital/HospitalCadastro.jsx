import { Link } from 'react-router-dom'
import { useState } from 'react';
import './CadastroH.css'

function HospitalCadastro() {

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        telefoneFixo: '',
        cidade: '',
        pais: '',
        responsavel: '',
        site: '',
        senha: '',
        cep: '',
        bairro: '',
        estado: '',
        cnpj: '',
        equipe: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:3000/CadastroHospital', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            const data = await response.json();
            alert('Hospital cadastrado com sucesso!');
            console.log('Dados retornados:', data);
          } else {
            alert('Erro ao cadastrar hospital.');
          }
        } catch (error) {
          console.error('Erro:', error);
          alert('Erro de conexão com o servidor.');
        }
      };
   
  return (
    <div className='container-hospital-cadastro'>
     
 <div className='form-image-hospital'>
<img src="./tela_cadastro_hospital.png"/>
</div>
<div className='form-hospital'>
    <div className='form-header-hospital'>
        <div className='title'>
            <h1>Novo hospital</h1>
        </div>
        <div className='login-button-hospital'>
            <Link to='/loginH' type="button" ><button>Login</button></Link>
        </div>
    </div>

    <div className='input-group-hospital'>
        <div className='primeiraColuna'>
            <div className='input-box-hospital'>
                <label htmlFor="nomeHospital">Nome do hospital</label>
                <input id="nomeHospital" type="text" name="nomeHospital" value={formData.nomeHospita} onChange={handleChange} required/>
            </div>

            <div className='input-box-hospital'>
                <label htmlFor="email">Email</label>
                <input id="EmailHospital" type="email" name="email" value={formData.email} onChange={handleChange} required/>
            </div>

            <div className='input-box-hospital'>
                <label htmlFor="telefone">Telefone</label>
                <input id="telefone" type="tel" name="telefone" placeholder="(xx) xxxx-xxxx" value={formData.telefone} onChange={handleChange} required/>
            </div>

            <div className='input-box-hospital'>
                <label htmlFor="telefoneFixo">Telefone Fixo</label>
                <input id="telefoneFixo" type="text" name="telefoneFixo" value={formData.telefoneFixo} onChange={handleChange} required/>
            </div>

            <div className='input-box-hospital'>
                <label htmlFor="cidade">Cidade</label>
                <input id="cidade" type="text" name="cidade" value={formData.cidade} onChange={handleChange} required/>
            </div> 

            <div className='input-box-hospital'>
                <label htmlFor="pais">País</label>
                <input id="pais" type="text" name="pais" value={formData.pais} onChange={handleChange} required/>
            </div>

            <div className='input-box-hospital'>
                <label htmlFor="responsavel">Responsável</label>
                <input id="responsavelDoperfil" type="text" name="responsavel" placeholder="João Cardoso" value={formData.responsavel} onChange={handleChange} required/>
            </div>

        </div>
        <div className='divisor'></div>
        <div className='segundaColuna'>
            <div className='input-box-hospital'>
                <label htmlFor="site">Website</label>
                <input id="site" type="text" name="site" value={formData.site} onChange={handleChange} required/>
            </div>

            <div className='input-box-hospital'>
                <label htmlFor="senha">Senha</label>
                <input id="senha" type="password" name="senha" value={formData.senha} onChange={handleChange} required/>
            </div>

            <div className='input-box-hospital'>
                <label htmlFor="cep">CEP</label>
                <input id="cep" type="text" name="cep" value={formData.cep} onChange={handleChange} required/>
            </div>

            <div className='input-box-hospital'>
                <label htmlFor="bairro">Bairro</label>
                <input id="bairro" type="text" name="bairro" value={formData.bairro} onChange={handleChange} required/>
            </div>

            <div className='input-box-hospital'>
                <label htmlFor="estado">Estado</label>
                <input id="estado" type="text" name="estado" value={formData.estado} onChange={handleChange} required/>
            </div>

            <div className='input-box-hospital'>
                <label htmlFor="cnpj">CNPJ</label>
                <input id="cnpj" type="text" name="cnpj" value={formData.cnpj} onChange={handleChange} required/>
            </div>

            <div className='input-box-hospital'>
                <label htmlFor="equipe">Equipe</label>
                <input id="equipe" type="text" name="equipe" placeholder="equipe principal" value={formData.equipe} onChange={handleChange} required/>
            </div>

        </div>
        
    </div>

    <div className='confirm-input-hospital'>
        <input type="checkbox" id="confirmacao" name="confirmacao" value="confirmacao"/>
        <label htmlFor="confirmacao">
            Ao confirmar os dados preenchidos do formulário acima, você concorda com os nossos <Link>Termos de Uso</Link> e nossa <Link>Política de Privacidade</Link>.
        </label>
    </div>

    <div className='continue-button-hospital'>
       <Link to='/perfilH'><button>Cadastrar</button></Link>
    </div>
 
</div> 
      
    </div>
  )
}

export default HospitalCadastro

