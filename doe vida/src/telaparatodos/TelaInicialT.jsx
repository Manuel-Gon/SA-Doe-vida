import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../Navbar/navBar'
import './TelaInicialT.css'

function TelaInicialT() {
  return (
    <div>
      <NavBar/>
<<<<<<< HEAD
   
=======
      <div className="container">


      
<button > <img className="perfil-inicial" src="./Cópia de user.png" alt=""/></button>


</div>


<img className="fixa" src="./mundial_doador.png" alt=""/>


>>>>>>> 84203977ca458e694be35f46d9fee414a571db80

<div className="body-opcoes-inicial">

<div className="opcoesCadastro-inicial">

    <h1>Selecione uma das opções abaixo para o Cadastro!</h1>

    <div className="button-group-inicial">

<<<<<<< HEAD
        <div className="button-wrapper">
            <img src="./undraw_love_it_heart_dxlp.svg" alt="" className="btn-image"/>
          <Link to= '/doador'><button className="button-opcoes">Sou Doador</button></Link>
        </div>

        <div className="button-wrapper">
            <img src="./undraw_doctors_p6aq.svg" alt="" className="btn-image"/>
          <Link to='hospital'><button className="button-opcoes">Área Hospitalar</button></Link>
=======
        <div className="button-wrapper-inicial">
            <img src="./sou_doador.png" alt="" className="btn-image"/>
          <Link to= '/doador'><button className="button-opcoes-inicial">Sou Doador</button></Link>
        </div>

        <div className="button-wrapper-inicial">
            <img src="./area_hospitalar.png" alt="" className="btn-image"/>
          <Link to='hospital'><button className="button-opcoes-inicial">Área Hospitalar</button></Link>
>>>>>>> 84203977ca458e694be35f46d9fee414a571db80
        </div>

    </div>

</div>
</div>



<div className="cards-inicial-inicial">

<div className="card-inicial-one">
    <img className="img-card-inicial" src="./quemsomos_card.png" alt=""/>

    <label className='label-inicial'>QUEM SOMOS</label>

    <p className='p-inicial'>Somos uma comunidade comprometida em salvar vidas através da doação de sangue. Facilitamos button conexão entre doadores e pessoas em necessidade, garantindo que cada doação faça button diferença. </p>

    <Link to='/qsomos' className='button-cards-one'><button className="button-cards-inicial">Sobre Nós!</button></Link>

</div>

<div className="card2-inicial">
    <img className="img-card-inicial" src="./quero_doar_sangue.png" alt=""/>

    <label className='label-inicial'>DOE VIDA DOE SANGUE</label>

    <p>Doar sangue é salvar vidas. Seu gesto pode ser o milagre que alguém precisa. Seja button esperança de alguém e doe sangue. Compartilhe o presente mais precioso: button vida.</p>

  <button ><button className="button-cards-inicial">Quero Doar Sangue!</button></button>
</div>

<div className="card3-inicial">
    <img className="img-card-inicial" src="./saiba_mais_card.png" alt=""/>

    <label className='label-inicial'>QUEM PODE DOAR SANGUE?</label>

    <p>Uma doação de sangue pode salvar até quatro vidas! Confira os requisitos para doar de forma segura. Sua generosidade é button esperança de muitos. Abra o arquivo e saiba mais!</p>

    <button className="button-cards-inicial">Saiba mais!</button>
</div>

</div>

<footer className='footer-tela-inicial'>
<div className="secoes-inicial">
    <section className="informacoes-inicial">
        <div className="info1-inicial">
            <h2>Descrição</h2>
            <p>O projeto Doevida é uma plataforma dedicada à doação de sangue,  onde doadores e hospitais podem se cadastrar e gerenciar seus perfis.  O principal objetivo do projeto é facilitar e incentivar button doação de sangue,  conectando doadores voluntários com hospitais e centros de saúde que necessitam  de sangue para pacientes.  A plataforma permite que doadores atualizem suas  informações  e que hospitais publiquem suas necessidades, promovendo uma rede  eficiente de comunicação e colaboração para salvar vidas.</p>
        </div>

        <div className="info2-inicial">
            <h2>Contato</h2>
            <p>(48) 91234-5678</p>
            <p>exemplo@gmail.com</p>
            <p>Brasil</p>
        </div>

        <div className="info3-inicial">
            <h2>TORNE-SE UM DOADOR DE SANGUE</h2>
            <p>Todos os dias acontecem centenas de acidentes, cirurgias e queimaduras  violentas que
                exigem transfusão, assim como os portadores de hemofilia,  leucemia e anemias.Além
                disso, doar sangue é um ato simples, tranquilo e seguro que não provoca risco.</p>
           <button > <button className="bntFooter-inicial">Quero Doar Sangue!</button></button>
        </div>

    </section>
    <hr className="divisao-inicial"/>
    <section className="descricao-inicial">
        <img className="imgDois" src="./logo doação de sangue.png" alt="logo"/>
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
  
export default TelaInicialT 
