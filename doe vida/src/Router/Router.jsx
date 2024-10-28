import { createBrowserRouter } from "react-router-dom"; 
import Campanhas from "../telaparatodos/Campanhas";
import Contato from "../telaparatodos/Contato";
import Doacao from "../telaparatodos/Doacao";
import Parceiros from "../telaparatodos/Parceiros";


const router = createBrowserRouter([
    {path: "/campanhas", element: <Campanhas/>},
    {path: "/doacao", element: <Doacao/>},
    {path: "/parceiros", element: <Parceiros/>},
    {path: "/contato", element: <Contato/>},
])

export default router;