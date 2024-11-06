import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../Navbar/NavBar'

function TelaIDoador() {
  return (
    <div>
    {/* <NavBar/> */}
      <div className="container">

</div>


<img className="fixa-tela-inicial" src="./mundial_doador.png" alt=""/>


<div className="cards-inicial-inicial">

<div className="card-inicial-one">
    <img className="img-card-inicial" src="./quemsomos_card.png" alt=""/>

    <label className='label-inicial'>Meu sangue doado</label>

    <p className='p-inicial'>Somos uma comunidade comprometida em salvar vidas através da doação de sangue. Facilitamos button conexão entre doadores e pessoas em necessidade, garantindo que cada doação faça button diferença. </p>

    <Link to='/qsomos' className='button-cards-one'><button className="button-cards-inicial">Sangue</button></Link>

</div>

<div className="card2-inicial">
    <img className="img-card-inicial" src="./quero_doar_sangue.png" alt=""/>

    <label className='label-inicial'>Campanhas</label>

    <p>Doar sangue é salvar vidas. Seu gesto pode ser o milagre que alguém precisa. Seja button esperança de alguém e doe sangue. Compartilhe o presente mais precioso: button vida.</p>

  <button className="button-cards-inicial">Campanhas</button>
</div>



</div>

<footer className='footer-tela-inicial'>
<div className="secoes-inicial">
   
    <hr className="divisao-inicial"/>
    <section className="descricao-inicial">
        <img className="imgDois-inicial" src="./logo doação de sangue.png" alt="logo"/>
        <h1 className="projeto-inicial">DoeVida</h1>
        <div className="creditos-inicial">
            <p>©DoeVidas todos os direitos reservados.</p>
        </div>
        <ul className="linksFooter-inicial">
            <li><button className="linkUm-inicial">Termos de Uso</button></li>
            <li><button className="linkDois-inicial">Sobre Nós</button></li>
            <li><button className="linkTres-inicial">Política de Privacidade</button></li>
        </ul>
    </section>
</div>
</footer> 
    </div>
  )
}

export default TelaIDoador

