import React from 'react'
import { Link } from 'react-router-dom'
import NavBarH from '../NavBarH/NavBarH'
import './TelaIHospital.css'
function TelaIHospital() {
  return (
    <div>

      <NavBarH/>

<img className="fixa-tela-inicial-hospital" src="./mundial_doador.png" alt=""/>

<h1 className='h1-tela-hospital'>Bem vindo a sua área do hospital</h1>
<div className="cards-inicial-inicial-tela-hospital">

<div className="card-inicial-one-tela-hospital">
    <img className="img-card-inicial-tela-hospital" src="./quemsomos_card.png" alt=""/>

    <label className='label-inicial-tela-hospital'>Tipos doados</label>

    <p className='p-inicial-tela-hospital'> aqui você pode conferir os tipos de sangue que foram doados para seu hospital e ainda por cima ver se o tipo doado é raro, o que pode ajudar a salvar vidas que dependem do tipo raro. </p>

    <Link to='/qsomos' className='button-cards-one-hospital'><button className="button-cards-inicial-tela-hospital">Sangue</button></Link>

</div>

<div className="card2-inicial-tela-hospital">
    <img className="img-card-inicial" src="./quero_doar_sangue.png" alt=""/>

    <label className='label-inicial-tela-hospital'>Campanhas</label>

    <p className='p-inicial-tela-hospital'>Aqui você poderá fazer suas campanhas para arrecadar os tipos sanguineos que necessitam urgentemente ou para repor o estoque para caso algo acontece, sempre bom estarmos preparados.</p>

  <button className="button-cards-inicial-tela-hospital-dois">Campanhas</button>
</div>

</div>

<footer className='footer-tela-inicial-hospital'>
<div className="secoes-inicial-tela-hospital">
   
    <hr className="divisao-inicial-tela-hospital"/>
    <section className="descricao-inicial-tela-hospital">
        <img className="imgDois-inicial-tela-hospital" src="./logo doação de sangue.png" alt="logo"/>
        <h1 className="projeto-inicial-tela-hospital">DoeVida</h1>
        <div className="creditos-inicial-tela-hospital">
            <p>©DoeVidas todos os direitos reservados.</p>
        </div>
        <ul className="linksFooter-inicial-tela-hospital">
            <Link to=''><button className="linkUm-inicial-tela-hospital">Termos de Uso</button></Link>
            <Link to='/qsomos'><button className="linkDois-inicial-tela-hospital">Sobre Nós</button></Link>
            <Link to=''><button className="linkTres-inicial-tela-hospital">Política de Privacidade</button></Link>
        </ul>
    </section>
</div>
</footer> 

    </div>
    
  )
}

export default TelaIHospital
