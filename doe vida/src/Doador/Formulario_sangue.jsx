import React from 'react'
import './FormularioSangue.css'

function Formulario_sangue() {
  return (
    <div className='container-formulario-doador'>
        
         <div className="PrimeiraColuna-formulario-doador">
         <div className="form-header-formulario-doador">
                    <h1>Formulário</h1>
        </div>
                    <h2 className='h2-formulario-doador'>Você já doou sangue para essa organização antes?</h2>
                          
                    <div className="input-box-doador-formulario">
                        <label>
                            <input type="radio" id="Sim" name="opção" value="Sim"/>Sim
                        </label>
                        
                        <label>
                            <input type="radio" id="Não" name="opção" value="Não"/>Não
                        </label>
                    </div>
                          
                            <h2 className='h2-formulario-doador'>Tem alergia a algum tipo de medicamento?</h2>

                    <div className="input-radio-formulario-doador">
                        <label>
                            <input type="radio"  id="Sim" name="opção" value="Sim"/>Sim
                        </label>
                     
                        <label>
                            <input type="radio" id="Não" name="opção" value="Não"/>Não
                        </label>
                      
                    <h2>Qual seu tipo sanguineo?</h2>

                    <div className="radio-group">
                        <div className="radio-column">
                            <label>
                                <input type="radio" id="sangue" name="tipo sanguineo" value="sangue"/>A+
                            </label>
                            <label>
                                <input type="radio" id="sangue" name="tipo sanguineo" value="sangue"/>A-
                            </label>
                        </div>
                        <div className="radio-column-formulario-doador">
                            <label>
                                <input type="radio" id="sangue" name="tipo sanguineo" value="sangue"/>B+
                            </label>
                            <label>
                                <input type="radio" id="sangue" name="tipo sanguineo" value="sangue"/>B-
                            </label>
                        </div>
                        <div className="radio-column-formulario-doador">
                            <label>
                                <input type="radio" id="sangue" name="tipo sanguineo" value="sangue"/>AB+
                            </label>
                            <label>
                                <input type="radio" id="sangue" name="tipo sanguineo" value="sangue"/>AB-
                            </label>
                        </div>
                        <div className="radio-column-formulario-doador">
                            <label>
                                <input type="radio" id="sangue" name="tipo sanguineo" value="sangue"/>O+
                            </label>
                            <label>
                                <input type="radio" id="sangue" name="tipo sanguineo" value="sangue"/>O-
                            </label>
                        
                        </div>
                    </div>

                    <h2>Como classifica o seu estado e saúde atual?</h2>

                    <div className="input-radio-formulario-doador">
                        <label>
                            <input type="radio"  id="Muito bom" name="opção" value="Sim"/>Muito bom
                        </label>
                        <label>
                            <input type="radio"id="Bom" name="opção" value="Não"/>Bom
                        </label>
                        <label>
                            <input type="radio" id="Rasuável" name="opção" value="Não"/>Rasuável
                        </label>
                    </div>

                </div>
            </div> 
            <div className="continue-button-formulario-doador">
                <button >Cadastrar</button>
            </div>
    </div>
    
  )
}

export default Formulario_sangue
