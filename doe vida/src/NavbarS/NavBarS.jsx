import { Link } from "react-router-dom"
import './NavBarS.css'

function NavBarDD() {
  return (
    <nav>
    <div>
       <div className="navBar-tela-s">

            <img className="imgUm" src="../../public/Cópia de logo doação de sangue (2).png" alt="logo"/>
            <h2 className="h2-navbar-tela-s">Doação de Sangue</h2>

            <div class="linksNavBar">
                <ul className="itens">
                  
                  <Link to= "/" className="home-tela-s">Inicio</Link>
                    <Link to="/campanhas" className="link1-tela-s">Campanhas</Link>
                    <Link to="/doacao" className="link2-tela-s">Onde Doar</Link>
                    <Link to="/parceiros" className="link3-tela-s">Parceiros</Link>
                    <Link to="/contato" className="link4-tela-s">Contato</Link>
                </ul>
                
              
            </div>
           <img className="perfil-tela-s" src="./Cópia de user.png" alt=""/>
    </div>
    </div>
    </nav>
  )
}

export default NavBarDD