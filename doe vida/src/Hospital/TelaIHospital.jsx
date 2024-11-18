import React from 'react'
import { Link } from 'react-router-dom'
import NavBarH from '../NavBarH/NavBarH'
import './TelaIHospital.css'
function TelaIHospital() {
  return (
    <div>
        <NavBarH />
      <div className="container"></div>




<img className="fixa-tela-inicial-hospital" src="./mundial_doador.png" alt=""/>


<h1 className='h1-tela-hospital'>Bem vindo a sua área do hospital</h1>
<div className="cards-inicial-inicial-tela-hospital">

<div className="card-inicial-one-tela-hospital">
    <img className="img-card-inicial-tela-hospital" src="./quemsomos_card.png" alt=""/>

    <label className='label-inicial-tela-hospital'>Meu sangue doado</label>

    <p className='p-inicial-tela-hospital'>Somos uma comunidade comprometida em salvar vidas através da doação de sangue. Facilitamos button conexão entre doadores e pessoas em necessidade, garantindo que cada doação faça button diferença. </p>

    <Link to='/qsomos' className='button-cards-one'><button className="button-cards-inicial-tela-hospital">Sangue</button></Link>

</div>

<div className="card2-inicial-tela-hospital">
    <img className="img-card-inicial" src="./quero_doar_sangue.png" alt=""/>

    <label className='label-inicial-tela-hospital'>Campanhas</label>

    <p>Doar sangue é salvar vidas. Seu gesto pode ser o milagre que alguém precisa. Seja button esperança de alguém e doe sangue. Compartilhe o presente mais precioso: button vida.</p>

  <button className="button-cards-inicial-tela-hospital">Campanhas</button>
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
            <li><button className="linkUm-inicial-tela-hospital">Termos de Uso</button></li>
            <li><button className="linkDois-inicial-tela-hospital">Sobre Nós</button></li>
            <li><button className="linkTres-inicial-tela-hospital">Política de Privacidade</button></li>
        </ul>
    </section>
</div>
</footer> 

    </div>
    
  )
}

export default TelaIHospital
