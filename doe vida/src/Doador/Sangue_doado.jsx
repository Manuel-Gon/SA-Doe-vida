import React from 'react'
import './Sangue_doado.css'
import NavBarD from '../NavBarD/NavBarD'

function Sangue_doado() {
  return (
    <>
        <div className='sangue-doado-container'>
            <div className='coluna'>
            <div className='linha'>
                    <strong><p>Seu sangue doado</p></strong>
            </div>
                <div className='divisor'></div>
                <div className='linha'>
                    <strong><p>Local da sua doação de sangue</p></strong>
                </div>
                <br />
                <div className='linha'>
                    <strong><p>Seu sangue doado</p></strong>
                </div>
                <div className='divisor'></div>
                <div className='linha'>
                    <strong><p>Local da sua doação de sangue</p></strong>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sangue_doado