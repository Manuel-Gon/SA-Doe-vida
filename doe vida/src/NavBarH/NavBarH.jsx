
import { Link } from 'react-router-dom'
import './NavBarH.css'
  
function NavBarH() {
  return (
          <nav>
    <div>
       <div className="navBar-hospital">

            <img className="imgUm" src="./Logo da SA - sem o fundo.png " alt="logo"/>
            <h2>Doação de Sangue</h2>

            <div class="linksNavBar">
                <ul className="itens">
                  
                    <Link to= "/" className="home-navBar-hospital">Inicio</Link>
                    <Link to="/campanhas" className="link1-navBar-hospital">Campanhas</Link>
                    <Link to="/parceiros" className="link2-navBar-hospital">Parceiros</Link>
                    <Link to="/contato" className="link3-navBar-hosptal">Contato</Link>
                    
                </ul>
                
                <img className="perfil-navBar-hospital" src="./user.png" alt=""/>
            </div>
    </div>
    </div>
    </nav>
   
  )
}

export default NavBarH
