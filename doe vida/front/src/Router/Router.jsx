import { createBrowserRouter } from "react-router-dom"; 
import Doador_login from "../Doador/Doador_login";
import Doador_pefil from "../Doador/Doador_perfil";
import Tela_doador from "../Doador/Tela_doador";
import HospitalCadastro from "../Hospital/HospitalCadastro";
import LoginHospital from "../Hospital/LoginHospital";
import PerfilHospital from "../Hospital/PerfilHospital";
import Campanhas from "../telaparatodos/Campanhas";
import Contato from "../telaparatodos/Contato";
import Doacao from "../telaparatodos/Doacao";
import Parceiros from "../telaparatodos/Parceiros";
import QuemSomos from "../telaparatodos/QuemSomos";
import TelaInicialT from "../telaparatodos/TelaInicialT";
import Doador_cadastro from "../Doador/Doador_cadastro";
import Sangue_doado from "../Doador/Sangue_doado";
import TelaIHospital from "../Hospital/TelaIHospital";
import Formulario_sangue from "../Doador/Formulario_sangue";
import CampanhasHospital from "../Hospital/CampanhasHospital";


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
    {path: "/perfilD", element: <Doador_pefil/>},
    {path: "/loginD", element: <Doador_login/>},
    {path: "/telaiDoador", element: <Tela_doador/>},
    {path: "/sangueDoado", element: <Sangue_doado/>},
    {path: "/formulario", element: <Formulario_sangue/>},
    {path: "/telaH", element: <TelaIHospital/> },
    {path: '/campanhasHospital', element:<CampanhasHospital />},
])
export default router;