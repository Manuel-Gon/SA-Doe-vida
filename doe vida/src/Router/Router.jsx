import { createBrowserRouter } from "react-router-dom"; 
<<<<<<< HEAD
import DoadorCadastro from "../Doador/DoadorCadastro";
import DoadorLogin from "../Doador/DoadorLogin";
import DoadorPefil from "../Doador/DoadorPefil";
import TelaIDoador from "../Doador/TelaIDoador";
=======
import DoadorCadastro from "../Doador/Doador_cadastro";
import Doador_login from "../Doador/Doador_login";
>>>>>>> c2a9694f3bd173f0a6a18960ff9ba2a99e625f55
import HospitalCadastro from "../Hospital/HospitalCadastro";
import LoginHospital from "../Hospital/LoginHospital";
import PerfilHospital from "../Hospital/PerfilHospital";
import Campanhas from "../telaparatodos/Campanhas";
import Contato from "../telaparatodos/Contato";
import Doacao from "../telaparatodos/Doacao";
import Parceiros from "../telaparatodos/Parceiros";
import QuemSomos from "../telaparatodos/QuemSomos";
import TelaInicialT from "../telaparatodos/TelaInicialT";
import Doador_perfil from "../Doador/Doador_perfil";
import Doador_cadastro from "../Doador/Doador_cadastro";



const router = createBrowserRouter([
    {path: "/", element: <TelaInicialT/>},
    {path: "/campanhas", element: <Campanhas/>},
    {path: "/doacao", element: <Doacao/>},
    {path: "/parceiros", element: <Parceiros/>},
    {path: "/contato", element: <Contato/>},
    {path: "/doador", element: <Doador_cadastro/>},
    {path: "/hospital", element: <HospitalCadastro/>},
    {path: "/qsomos", element: <QuemSomos/>},
    {path: "/perfilH", element: <PerfilHospital/>},
    {path: "/loginH", element: <LoginHospital/>},
<<<<<<< HEAD
    {path: "/perfilD", element: <DoadorPefil/>},
    {path: "/loginD", element: <DoadorLogin/>},
    {path: "/telaiDoador", element: <TelaIDoador/>},
=======
    {path: "/perfilD", element: <Doador_perfil/>},
    {path: "/loginD", element: <Doador_login/>},
>>>>>>> c2a9694f3bd173f0a6a18960ff9ba2a99e625f55
])

export default router;