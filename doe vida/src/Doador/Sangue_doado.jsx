import React from 'react';
import './Sangue_doado.css';
import NavBarS from '../NavbarS/NavBarS';

function Sangue_doado() {
  return (
    <>
      <NavBarS />
      <div className='sangue-doado-container'>
        <div className='row'>
          <div className='column'>
            <p id='linha'>Seu sangue doado</p>
            <p id='linha'>Seu sangue doado</p>
            <p id='linha'>Seu sangue doado</p>
            <p id='linha'>Seu sangue doado</p>
          </div>
          <div id='divisor'></div>
          <div className='column'>
            <p id='linha'>Local para onde foi a doação</p>
            <p id='linha'>Local para onde foi a doação</p>
            <p id='linha'>Local para onde foi a doação</p>
            <p id='linha'>Local para onde foi a doação</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sangue_doado