
import { Link } from "react-router-dom"
function NavBarD() {
  return (

        <nav>
    <div>
       <div className="navBar">

            <img className="imgUm" src="./Logo da SA - sem o fundo.png " alt="logo"/>
            <h2 className="h2-navbar">Doação de Sangue</h2>

            <div class="linksNavBar">
                <ul className="itens">
                  <Link to= "/telaiDoador" className="home">Inicio</Link>
                  <Link to="/campanhas" className="link1">Campanhas</Link>
                  <Link to="/parceiros" className="link3">Parceiros</Link>
                  <Link to="/contato" className="link4">Contato</Link>

                </ul>
                
              
            </div>
           <img className="perfil" src="./Cópia de user.png" alt=""/>
    </div>
    </div>
    </nav>
 
  )
}

export default NavBarD
