import React from 'react'
import NavBar from '../Navbar/NavBar'
import './Four-pages.css'

function Campanhas() {
  return (
    <div>
        <NavBar />
         <div className="container-four-pages">
            <div className='titulo-four-pages'>
                <h1>Campanha Doe Vida</h1>
            </div>

            <h3>Você Sabia?</h3>
            <p className='p-four-pages'>Você sabia que uma única doação de sangue pode salvar até quatro vidas? O simples ato de doar pode fazer a diferença entre a vida e a morte para milhares de pessoas que dependem dessa solidariedade todos os dias.

                Na campanha Doe Vida, convidamos você a se tornar parte dessa corrente do bem. O sangue não pode ser fabricado, ele só pode ser doado. Por isso, é fundamental que cada um de nós faça a sua parte.</p>
            <h3>Quem pode doar?</h3>
            <p className='p-four-pages'> Se você tem entre 16 e 69 anos, pesa mais de 50kg e está em boas condições de saúde, você pode ser um doador. Não é necessário estar em jejum, e todo o processo é rápido e seguro.</p>
            <h3>Por que doar?</h3>
            <p className='p-four-pages'>Porque, além de salvar vidas, a doação de sangue é um gesto de amor ao próximo. Pessoas que passam por cirurgias, acidentes ou tratamentos médicos, como quimioterapia, muitas vezes precisam de transfusões regulares para sobreviver.
            O sangue é um recurso insubstituível. Não pode serfabricado, replicado em laboratório ou criadoartificialmente. Ele só pode ser obtido através dedoações. Todos os dias, hospitais e clínicas precisamde estoques de sangue para realizar procedimentos quesalvam vidas, como cirurgias de emergência, tratamentospara doenças graves como o câncer, e o atendimento avítimas de acidentes.
            Pense em todas as situações em que você ou alguém queama pode precisar de uma transfusão de sangue: umacidente de trânsito, uma cirurgia delicada, umacomplicação no parto. Nessas horas, o sangue doado é aúnica esperança de sobrevivência para milhares depessoas. E é por isso que precisamos de você.
            </p>
            <h3>Como participar?</h3>
            <p className='p-four-pages'>Basta procurar o hemocentro mais próximo da sua casa e fazer a sua doação. Agende seu horário e compartilhe essa mensagem com amigos e familiares. Quanto mais pessoas participarem, mais vidas podemos salvar.

                Não espere que a necessidade bata à porta. Doe hoje, doe sempre. Doe Vida e seja a esperança para quem mais precisa.</p>
            <h3>Quem pode doar?</h3>
            <p className='p-four-pages'>
                A doação de sangue é mais simples do que você imagina. Se você tem entre 16 e 69 anos, pesa mais de 50 kg, está em boas condições de saúde e atende a alguns requisitos básicos, você já está apto a doar. Pessoas com doenças crônicas controladas, como hipertensão ou diabetes, também podem doar, desde que sigam orientação médica.
                
                Aqui estão algumas informações importantes sobre a doação:
              
                <ul>
                    <li>O processo é seguro e rápido: todo o material utilizado é descartável e a coleta de sangue dura, em média, apenas 10 minutos.</li>
                
                <li>Não é necessário estar em jejum: é recomendado que o doador esteja bem alimentado, mas evite alimentos gordurosos antes da doação.</li>

                <li>Você pode doar a cada dois meses (homens) ou três meses (mulheres), sem prejudicar sua saúde.</li>
                </ul>
            </p>
            <h3>O que acontece com o sangue doado?</h3>
            <p className='p-four-pages'>
                Após a doação, o sangue passa por rigorosos testes para garantir sua segurança. Ele é separado em componentes como plaquetas, hemácias e plasma, que podem ser usados para tratar diferentes condições médicas. Cada parte do sangue é vital para diferentes pacientes, desde bebês prematuros até pessoas submetidas a tratamentos de câncer ou vítimas de traumas graves. Ou seja, uma única doação pode beneficiar até <strong>quatro pessoas diferentes</strong>.
            </p>
            <h3></h3>
        </div>
    </div>
  )
}

export default Campanhas
