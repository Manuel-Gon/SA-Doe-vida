import React from 'react'
import NavBar from '../Navbar/NavBar'
import './Four-pages.css'

function Parceiros() {
  return (
    <div>
      <NavBar />
       <div className="container-four-pages">
       <div className='titulo-four-pages'>
        <h1>Parceiros - Campanha Doe Vida</h1>
       </div>
    
        <h3>Famosos que Apoiamos a Campanha</h3>
        <p className='p-four-pages'>A campanha "Doe Vida" conta com o apoio de diversos parceiros e celebridades que se juntaram a nós nessa causa tão importante. Com a ajuda de pessoas influentes, conseguimos aumentar a conscientização sobre a importância da doação de sangue e salvar ainda mais vidas.</p>
    
        <h3>Embaixadores da Campanha</h3>
        <ul>
            <li>Ana Silva - Atriz e apresentadora conhecida, Ana tem sido uma grande defensora da doação de sangue e usa suas redes sociais para incentivar seus seguidores a doar.</li>
            <li>Lucas Andrade - Jogador de futebol, Lucas compartilhou sua experiência de doar sangue pela primeira vez e inspirou muitos fãs a seguirem seu exemplo.</li>
            <li>Mariana Costa - Influenciadora digital, Mariana criou uma série de vídeos mostrando o passo a passo da doação, quebrando mitos e incentivando uma geração mais jovem a participar.</li>
            <li>DJ Pedro Lima - Conhecido por suas músicas animadas, Pedro se uniu à campanha com um show beneficente, onde todos os ingressos foram convertidos em doações para hemocentros.</li>
            <li>Fernanda Oliveira - Jornalista e apresentadora de TV, Fernanda sempre traz histórias emocionantes sobre doadores e receptores, ajudando a sensibilizar o público.</li>
        </ul>
    
        <h3>Outros Parceiros Importantes</h3>
        <p className='p-four-pages'>Agradecemos a colaboração de diversas empresas e organizações que fazem parte dessa corrente do bem:</p>
        <ul>
            <li>Empresa X - Parceira oficial da campanha, ajudando com recursos logísticos para facilitar a coleta de sangue em diversas cidades.</li>
            <li>Clínica Y - Oferecendo suporte médico e voluntários para ajudar nos centros de doação.</li>
            <li>Agência Z - Responsável pela divulgação e marketing da campanha, garantindo que a mensagem alcance o maior número de pessoas.</li>
        </ul>
    
        <p className='p-four-pages'>Com o apoio de nossos parceiros e embaixadores, a campanha "Doe Vida" continua crescendo e tocando o coração de mais pessoas. Junte-se a nós e faça parte dessa corrente de solidariedade!</p>
    </div>
    
    </div>
  )
}

export default Parceiros
