
import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <div>
            <Link to="/">Menu</Link>
            <Link to="/produtos">Produtos</Link>
            <Link to="/categorias">Categorias</Link>
            <Link to="/MeusPedidos">Meus Pedidos</Link>
        </div>
    )
}