import React from 'react'
import { useState } from 'react'
import './FormularioSangue.css'

function Formulario_sangue() {


  return (
    
    <div className='containerFormularioDoador'>

<img className='img-tela-d-formulario' src="Design sem nome.png" alt="" />
         <div className="primeiraColunaFormularioDoador">
        
         <div className="formHeaderFormularioDoador">

             
                    <h1>Formulário</h1>
        </div>
                    <h2 className='h2FormularioDoador'>Você já doou sangue para essa organização antes?</h2>
                          
                    <div className="inputBoxDoadorFormulario">
                        <label>
                            <input type="radio" id="Sim" name="opcao" value="Sim"/>Sim
                        </label>
                        
                        <label>
                            <input type="radio" id="Nao" name="opcao" value="Nao"/>Não
                        </label>
                    </div>
                          
                            <h2 className='h2FormularioDoador'>Tem alergia a algum tipo de medicamento?</h2>

                   
                        <label>
                            <input type="radio"  id="Sim" name="opcao" value="Sim"/>Sim
                        </label>
                     
                        <label>
                            <input type="radio" id="Nao" name="opcao" value="Nao"/>Não
                        </label>
                        <div className="inputRadioFormularioDoador">
                      
                    <h2 className='h2-tipo-sanguineo-formulario-doador'>Qual seu tipo sanguineo?</h2>

                    <div className="radioGroup">
                        <div className="radioColumn">
                            <label>
                                 <input type="radio" id="sangue" name="tipoSanguineo" value="sangue"/>A+{/* para fazer a verificação do tipo Sanguíneo do usuário no banco de dados */}
                            </label>
                          
                            <label>
                                <input type="radio" id="sangue" name="tipoSanguineo" value="sangue"/>A-
                            </label>
                        </div>
                        <div className="radioColumnFormularioDoador">
                            <label>
                                <input type="radio" id="sangue" name="tipoSanguineo" value="sangue"/>B+
                            </label>
                            <label>
                                <input type="radio" id="sangue" name="tipoSanguineo" value="sangue"/>B-
                            </label>
                        </div>
                        <div className="radioColumnFormularioDoador">
                            <label>
                                <input type="radio" id="sangue" name="tipoSanguineo" value="sangue"/>AB+
                            </label>
                            <label>
                                <input type="radio" id="sangue" name="tipoSanguineo" value="sangue"/>AB-
                            </label>
                        </div>
                        <div className="radioColumnFormularioDoador">
                            <label>
                                <input type="radio" id="sangue" name="tipoSanguineo" value="sangue"/>O+
                            </label>
                            <label>
                                <input type="radio" id="sangue" name="tipoSanguineo" value="sangue"/>O-
                            </label>
                        
                        </div>
                    </div>

                    <h2>Como classifica o seu estado e saúde atual?</h2>

                    <div className="inputRadioFormularioDoador">
                        <label>
                            <input type="radio"  id="MuitoBom" name="opcao" value="Sim"/>Muito bom
                        </label>
                        <label>
                            <input type="radio"id="Bom" name="opcao" value="Nao"/>Bom
                        </label>
                        <label>
                            <input type="radio" id="Rasuável" name="opção" value="Não"/>Razoável
                        </label>
                    </div>
                    
                </div>
                <div className="continueButtonFormularioDoador">
                <button >Cadastrar</button>
            </div>
            </div> 
           
    </div>
  )
}

export default Formulario_sangue
