import { createBrowserRouter } from "react-router-dom"; 
import DoadorCadastro from "../Doador/DoadorCadastro";
import DoadorLogin from "../Doador/DoadorLogin";
import DoadorPefil from "../Doador/DoadorPefil";
import TelaIDoador from "../Doador/TelaIDoador";
import HospitalCadastro from "../Hospital/HospitalCadastro";
import LoginHospital from "../Hospital/LoginHospital";
import PerfilHospital from "../Hospital/PerfilHospital";
import Campanhas from "../telaparatodos/Campanhas";
import Contato from "../telaparatodos/Contato";
import Doacao from "../telaparatodos/Doacao";
import Parceiros from "../telaparatodos/Parceiros";
import QuemSomos from "../telaparatodos/QuemSomos";
import TelaInicialT from "../telaparatodos/TelaInicialT";


const router = createBrowserRouter([
    {path: "/", element: <TelaInicialT/>},
    {path: "/campanhas", element: <Campanhas/>},
    {path: "/doacao", element: <Doacao/>},
    {path: "/parceiros", element: <Parceiros/>},
    {path: "/contato", element: <Contato/>},
    {path: "/doador", element: <DoadorCadastro/>},
    {path: "/hospital", element: <HospitalCadastro/>},
    {path: "/qsomos", element: <QuemSomos/>},
    {path: "/perfilH", element: <PerfilHospital/>},
    {path: "/loginH", element: <LoginHospital/>},
    {path: "/perfilD", element: <DoadorPefil/>},
    {path: "/loginD", element: <DoadorLogin/>},
    {path: "/telaiDoador", element: <TelaIDoador/>},
])

export default router;