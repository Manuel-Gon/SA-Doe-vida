import React from 'react'
import NavBar from '../Navbar/NavBar'

function TelaInicialT() {
  return (
    <div>
      
      <div className="container">

        <NavBar/>

      
<button > <img className="perfil" src="./user perfil.png" alt=""/></button>

</div>


<img className="fixa" src="./Seja um doador.png" alt=""/>



<div className="body-opcoes">

<div className="opcoesCadastro">

    <h1>Selecione uma das opções abaixo para o Cadastro!</h1>

    <div className="button-group">

        <div className="button-wrapper">
            <img src="./undraw_love_it_heart_dxlp.svg" alt="" className="btn-image"/>
          <button>  <button className="button-opcoes">Sou Doador</button></button>
        </div>

        <div className="button-wrapper">
            <img src="./undraw_doctors_p6aq.svg" alt="" className="btn-image"/>
          <button>  <button className="button-opcoes">Área Hospitalar</button></button>
        </div>

    </div>

</div>
</div>



<div className="cards-inicial">

<div className="card">
    <img className="img-card" src="./Dia nacional do doador de sangue.png" alt=""/>

    <label>QUEM SOMOS</label>

    <p>Somos uma comunidade comprometida em salvar vidas através da doação de sangue. Facilitamos button conexão entre doadores e pessoas em necessidade, garantindo que cada doação faça button diferença. </p>

    <button ><button className="button-cards">Sobre Nós!</button></button>

</div>

<div className="card2">
    <img className="img-card" src="./Doevida.png" alt=""/>

    <label>DOE VIDA DOE SANGUE</label>

    <p>Doar sangue é salvar vidas. Seu gesto pode ser o milagre que alguém precisa. Seja button esperança de alguém e doe sangue. Compartilhe o presente mais precioso: button vida.</p>

  <button ><button className="button-cards">Quero Doar Sangue!</button></button>
</div>

<div className="card3">
    <img className="img-card" src="./Doevidaimg.png" alt=""/>

    <label>QUEM PODE DOAR SANGUE?</label>

    <p>Uma doação de sangue pode salvar até quatro vidas! Confira os requisitos para doar de forma segura. Sua generosidade é button esperança de muitos. Abra o arquivo e saiba mais!</p>

    <button className="button-cards">Saiba mais!</button>
</div>

</div>

<footer>
<div className="secoes">
    <section className="informacoes">
        <div className="info1">
            <h2>Descrição</h2>
            <p>O projeto Doevida é uma plataforma dedicada à doação de sangue,  onde doadores e hospitais podem se cadastrar e gerenciar seus perfis.  O principal objetivo do projeto é facilitar e incentivar button doação de sangue,  conectando doadores voluntários com hospitais e centros de saúde que necessitam  de sangue para pacientes.  A plataforma permite que doadores atualizem suas  informações  e que hospitais publiquem suas necessidades, promovendo uma rede  eficiente de comunicação e colaboração para salvar vidas.</p>
        </div>

        <div className="info2">
            <h2>Contato</h2>
            <p>(48) 91234-5678</p>
            <p>exemplo@gmail.com</p>
            <p>Brasil</p>
        </div>

        <div className="info3">
            <h2>TORNE-SE UM DOADOR DE SANGUE</h2>
            <p>Todos os dias acontecem centenas de acidentes, cirurgias e queimaduras  violentas que
                exigem transfusão, assim como os portadores de hemofilia,  leucemia e anemias.Além
                disso, doar sangue é um ato simples, tranquilo e seguro que não provoca risco.</p>
           <button > <button className="bntFooter">Quero Doar Sangue!</button></button>
        </div>

    </section>
    <hr className="divisao"/>
    <section className="descricao">
        <img className="imgDois" src="./logo doação de sangue.png" alt="logo"/>
        <h1 className="projeto">DoeVida</h1>
        <div className="creditos">
            <p>©DoeVidas todos os direitos reservados.</p>
        </div>
        <ul className="linksFooter">
            <li><button className="linkUm">Termos de Uso</button></li>
            <li><button className="linkDois">Sobre Nós</button></li>
            <li><button className="linkTres">Política de Privacidade</button></li>
        </ul>
    </section>
</div>
</footer>

</div>

  )
}

export default TelaInicialT
