import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
       <div className="navBar">

            <img className="imgUm" src="img/Logo.png" alt="logo"/>
            <h2>Doação de Sangue</h2>

            <div class="linksNavBar">
                <ul className="itens">
                    <Link to='/campanhas' className="link1">Campanhas</Link>
                    <Link to='/doacao' className="link2">Onde Doar</Link>
                    <Link to='/parceiros' className="link3">Parceiros</Link>
                   <Link to='/contato' className="link4">Contato</Link>
                </ul>
            </div>
    </div>
    </div>
  )
}

export default NavBar
