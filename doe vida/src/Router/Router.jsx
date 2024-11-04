import { createBrowserRouter } from "react-router-dom"; 
import DoadorCadastro from "../Doador/Doador_cadastro";
import Doador_login from "../Doador/Doador_login";
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
    {path: "/perfilD", element: <Doador_perfil/>},
    {path: "/loginD", element: <Doador_login/>},
])

export default router;