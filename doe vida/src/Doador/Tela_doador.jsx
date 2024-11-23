import React from 'react'
import { Link } from 'react-router-dom'
import NavBarD from '../NavBarD/NavBarD'
import './Tela_doador.css'
function Tela_doador() {
  return (
    <div>
      <NavBarD />
      <div className="container-tela-i-doador"></div>




<img className="fixa-tela-inicial-i-doador" src="./mundial_doador.png" alt=""/>


<div className="cards-inicial-inicial-i-doador">

<div className="card-inicial-one-i-doador">
    <img className="img-card-inicial-i-doador" src="./quemsomos_card.png" alt=""/>

    <label className='label-inicial-i-doador'>Meu sangue doado</label>

    <p className='p-inicial-i-doador'>Somos uma comunidade comprometida em salvar vidas através da doação de sangue. Facilitamos button conexão entre doadores e pessoas em necessidade, garantindo que cada doação faça button diferença. </p>

    <Link to='/qsomos' className='button-cards-one-i-doador'><button className="button-cards-inicial-i-doador">Sangue</button></Link>

</div>

<div className="card2-inicial-i-doador">
    <img className="img-card-inicial-i-doador" src="./quero_doar_sangue.png" alt=""/>

    <label className='label-inicial-i-doador'>Campanhas</label>

    <p className='p-tela-i-doador'>Doar sangue é salvar vidas. Seu gesto pode ser o milagre que alguém precisa. Seja button esperança de alguém e doe sangue. Compartilhe o presente mais precioso: button vida.</p>

  <button className="button-cards-inicial-i-doador-dois">Campanhas</button>
</div>



</div>

<footer className='footer-tela-inicial-i-doador'>
<div className="secoes-inicial-i-doador">
   
    <hr className="divisao-inicial-i-doador"/>
    <section className="descricao-inicial-i-doador">
        <img className="imgDois-inicial-i-doador" src="./logo doação de sangue.png" alt="logo"/>
        <h1 className="projeto-inicial-i-doador">DoeVida</h1>
        <div className="creditos-inicial-i-doador">
            <p>©DoeVidas todos os direitos reservados.</p>
        </div>
        <ul className="linksFooter-inicial-i-doador">
            <li><button className="linkUm-inicial-i-doador">Termos de Uso</button></li>
            <li><button className="linkDois-inicial-i-doador">Sobre Nós</button></li>
            <li><button className="linkTres-inicial-i-doador">Política de Privacidade</button></li>
        </ul>
    </section>
</div>
</footer> 

    </div>
  )
}

export default Tela_doador
