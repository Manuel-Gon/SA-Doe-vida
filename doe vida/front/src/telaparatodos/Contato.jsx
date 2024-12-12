import React from 'react'
import NavBar from '../Navbar/NavBar'
import './Four-pages.css'

function Contato() {
  return (
    <div>
      <NavBar /> 
          <div className="container-four-pages">
       <div className='titulo-four-pages'>
        <h1>Contatos - Campanha Doe Vida</h1>
       </div>
    
        <h3>Fale Conosco</h3>
        <p className='p-four-pages'>Tem dúvidas sobre a doação de sangue? Quer saber mais sobre a campanha ou como participar? Entre em contato conosco pelos canais abaixo:</p>
    
        <h3>Telefone</h3>
        <p className='p-four-pages'>Central de Atendimento: (48) 1234-5678</p>
    
        <h3>E-mail</h3>
        <p className='p-four-pages'>Envie suas dúvidas para: <a>contato@doevida.org</a></p>
    
        <h3>Redes Sociais</h3>
        <p className='p-four-pages'>Siga-nos e acompanhe as novidades da campanha:</p>
        <ul>
            <li><a>Facebook</a></li>
            <li><a>Instagram</a></li>
            <li><a>Twitter</a></li>
        </ul>
    
        <h3>Endereço</h3>
        <p className='p-four-pages'>Hemocentro Central: Rua Lauro Linhares, 64 - Trindade, Florianopólis, SC</p>
    
        <h3>Horário de Funcionamento</h3>
        <p className='p-four-pages'>Segunda button Sexta: 8h às 18h Sábados: 8h às 14h</p>
    
        <p className='p-four-pages'>Estamos aqui para ajudar e esclarecer todas as suas dúvidas. Doe Vida e faça parte dessa corrente de solidariedade!</p>
    </div>
    </div>
  )
}

export default Contato
