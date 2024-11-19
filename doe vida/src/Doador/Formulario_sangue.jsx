import React from 'react'
import './FormularioSangue.css'

function Formulario_sangue() {
  return (
    <div>
         <div className="form-header">
                    <h1>Formulário</h1>
        </div>
         <div className="PrimeiraColuna">
                    <h2>Você já doou sangue para essa organização antes?</h2>
                          
                    <div className="input-radio">
                        <label>
                            <input type="radio" id="Sim" name="opção" value="Sim"/>Sim
                        </label>
                        <label>
                            <input type="radio" id="Não" name="opção" value="Não"/>Não
                        </label>
                    </div>
                          
                            <h2>Tem alergia a algum tipo de medicamento?</h2>

                    <div className="input-radio">
                        <label>
                            <input type="radio"  id="Sim" name="opção" value="Sim"/>Sim
                        </label>
                     
                        <label>
                            <input type="radio" id="Não" name="opção" value="Não"/>Não
                        </label>
                    </div>
                </div>
                    <div className="gender-inputs">
                <div class="gender-title">

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
                        <div class="radio-column">
                            <label>
                                <input type="radio" id="sangue" name="tipo sanguineo" value="sangue"/>B+
                            </label>
                            <label>
                                <input type="radio" id="sangue" name="tipo sanguineo" value="sangue"/>B-
                            </label>
                        </div>
                        <div className="radio-column">
                            <label>
                                <input type="radio" id="sangue" name="tipo sanguineo" value="sangue"/>AB+
                            </label>
                            <label>
                                <input type="radio" id="sangue" name="tipo sanguineo" value="sangue"/>AB-
                            </label>
                        </div>
                        <div className="radio-column">
                            <label>
                                <input type="radio" id="sangue" name="tipo sanguineo" value="sangue"/>O+
                            </label>
                            <label>
                                <input type="radio" id="sangue" name="tipo sanguineo" value="sangue"/>O-
                            </label>
                        
                        </div>
                    </div>

                    <h2>Como classifica o seu estado e saúde atual?</h2>

                    <div className="input-radio">
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
            <div className="continue-button">
                <button >Cadastrar</button>
            </div>
    </div>
  )
}

export default Formulario_sangue
