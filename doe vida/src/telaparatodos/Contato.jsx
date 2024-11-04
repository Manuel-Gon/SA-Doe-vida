import React from 'react'
import NavBar from '../Navbar/NavBar'
import './Four-pages.css'

function Contato() {
  return (
    <div>
      <NavBar /> 
          <div className="container-four-pages">
       <div className='titulo'>
        <h1>Contatos - Campanha Doe Vida</h1>
       </div>
    
        <h3>Fale Conosco</h3>
        <p>Tem dúvidas sobre a doação de sangue? Quer saber mais sobre a campanha ou como participar? Entre em contato conosco pelos canais abaixo:</p>
    
        <h3>Telefone</h3>
        <p>Central de Atendimento: <strong>(11) 1234-5678</strong></p>
    
        <h3>E-mail</h3>
        <p>Envie suas dúvidas para: <a>contato@doevida.org</a></p>
    
        <h3>Redes Sociais</h3>
        <p>Siga-nos e acompanhe as novidades da campanha:</p>
        <ul>
            <li><a>Facebook</a></li>
            <li><a>Instagram</a></li>
            <li><a>Twitter</a></li>
        </ul>
    
        <h3>Endereço</h3>
        <p>Hemocentro Central: Rua Lauro Linhares, 64 - Trindade, Florianopólis, SC</p>
    
        <h3>Horário de Funcionamento</h3>
        <p>Segunda button Sexta: 8h às 18h Sábados: 8h às 14h</p>
    
        <p>Estamos aqui para ajudar e esclarecer todas as suas dúvidas. Doe Vida e faça parte dessa corrente de solidariedade!</p>
    </div>
    </div>
  )
}

export default Contato
