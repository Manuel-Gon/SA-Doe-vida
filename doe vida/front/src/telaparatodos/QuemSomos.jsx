import React from 'react'
import NavBar from '../Navbar/NavBar'
import './Four-pages.css'

function QuemSomos() {
  return (
    <div>
      <NavBar />
      <div className="container-four-pages">
         
      <div className='titulo-four-pages'>
        <h1>DoeVida</h1>
       </div>
            
         <h3>Sobre Nós</h3>
         <p className='p-four-pages'>Bem-vindo ao Doevida, uma plataforma dedicada à promoção e facilitação da doação de sangue. Acreditamos que cada doação tem o poder de salvar vidas e é nossa missão criar uma comunidade conectada de doadores e hospitais para atender essa necessidade vital.</p>
         
         <h3>Nossa Missão</h3>
         <p className='p-four-pages'>Nosso objetivo é aumentar a conscientização sobre a importância da doação de sangue e facilitar o processo para doadores e instituições de saúde. Através do Doevida, queremos garantir que todos os hospitais e centros de saúde tenham acesso suficiente a sangue seguro e de qualidade, e que os doadores tenham uma experiência fácil e informada.</p>
         
         <h3>O que Fazemos</h3>
         <p className='p-four-pages'>Cadastro de Doadores: Permite que indivíduos interessados em doar sangue se cadastrem e mantenham seus perfis atualizados, recebendo informações sobre campanhas e necessidades locais.</p>
         <p className='p-four-pages'>Cadastro de Hospitais: Hospitais e centros de saúde podem se registrar, informando suas necessidades de sangue e atualizando seus perfis para melhor comunicação com a comunidade de doadores.</p>
         <p className='p-four-pages'>Conexão e Comunicação: Facilitamos a comunicação entre doadores e instituições, promovendo campanhas de doação e emergências.</p>
         
         <h3>Nossa Visão</h3>
         <p className='p-four-pages'>Acreditamos em um mundo onde a doação de sangue é um ato comum e consciente, com uma rede eficaz e solidária que garante o suprimento contínuo e seguro de sangue para todos os que precisam.</p>
         <p className='p-four-pages'>Junte-se a nós nesta missão de salvar vidas. Seja um doador, cadastre-se, ou compartilhe esta causa. Juntos, podemos fazer a diferença!</p>
        
     </div>
    </div>
  )
}

export default QuemSomos
