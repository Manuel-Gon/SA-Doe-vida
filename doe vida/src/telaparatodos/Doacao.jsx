import React from 'react'
import NavBar from '../Navbar/NavBar'
import './Four-pages.css'

function Doacao() {
  return (
    <div>
      <NavBar />
       <div className="container-four-pages">
       <div className='titulo-four-pages'>
        <h1>Doação - Campanha Doe Vida</h1>
       </div>
    
        <h3>Por Que Doar Sangue?</h3>
        <p className='p-four-pages'>Doar sangue é um ato de solidariedade que pode salvar vidas. Uma única doação pode beneficiar até quatro pessoas. Seja para vítimas de acidentes, pacientes em tratamento de câncer, ou pessoas que precisam de cirurgias, o sangue doado é vital.
        </p>
    
        <h3>Quem Pode Doar?</h3>
        <p className='p-four-pages'>Para ser um doador de sangue, você deve atender aos seguintes critérios:</p>
        <ul>
            <li>Ter entre 16 e 69 anos (menores de idade devem ter autorização dos responsáveis).</li>
            <li>Pesar mais de 50 kg e estar em boas condições de saúde.</li>
            <li>Não é necessário estar em jejum, apenas evitar alimentos gordurosos um dia antes da doação.</li>
            <li>Homens podem doar a cada 2 meses e mulheres a cada 3 meses.</li>
        </ul>
    
        <h3>Como é o Processo de Doação?</h3>
        <p className='p-four-pages'>A doação de sangue é simples e segura. Todo o material utilizado é descartável e o processo dura cerca de 10 minutos:</p>
        <ol>
            <li><strong>Cadastro:</strong> Você preencherá um formulário com informações básicas.</li>
            <li><strong>Triagem:</strong> Será feita uma breve avaliação para garantir que você está apto a doar.</li>
            <li><strong>Doação:</strong> O processo de coleta de sangue é rápido e indolor.</li>
            <li><strong>Recuperação:</strong> Após a doação, você receberá um lanche e será orientado a se hidratar bem.</li>
        </ol>
    
        <h3>O Que Fazer Antes e Depois de Doar?</h3>
        <ul>
            <li>Antes de doar, alimente-se bem e evite alimentos gordurosos.</li>
            <li>Hidrate-se bebendo bastante água.</li>
            <li>Após a doação, continue se hidratando e evite atividades físicas pesadas por algumas horas.</li>
        </ul>
    
        <h3>Benefícios para Quem Recebe</h3>
        <p className='p-four-pages'>O sangue doado é separado em componentes (plaquetas, plasma, hemácias), permitindo que diferentes pacientes recebam o que precisam. Isso significa que uma única doação pode ajudar até quatro pessoas diferentes.</p>
    
        <p className='p-four-pages'>Participe da campanha Doe Vida e ajude a salvar vidas. Uma pequena atitude pode fazer toda a diferença para quem mais precisa.</p>
    </div>
    </div>
  )
}

export default Doacao
