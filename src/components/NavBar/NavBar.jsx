import './NavBar.scss'
import { CarritoWidget } from '../CarritoWidget/CarritoWidget'

export const NavBar = () => {
    return (
        <header className="header">
            <div className="header-container">
                <img src={'/logo.png'} width="100" alt="img logo"></img>
                                <nav>
                    <ul>
                        <li><a href="pages/quienessomos.html">Quienes somos?</a></li>
                        <li><a href="pages\tienda.html">tienda</a></li>
                        <li><a href="pages\serviciotecnico.html">servico tecnico</a></li>
                        <li><a href="pages\contacto.html">contacto</a></li>
                    </ul>
                    
                </nav>
            </div>
            <CarritoWidget/>
        </header>
        
    )
}

