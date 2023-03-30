import { NavLink } from "react-router-dom";

function Menu(){
    return (
        <nav className="bg-azulEscuro h8 px-4 text-white">
            <ul className="h-8 flex flex-row gap-4">
                <li>
                <NavLink to="/login" className='hover:underline '>
                    Login
                </NavLink>
                </li>
                <li>
                <NavLink to="/" className='hover:underline'>
                    Home
                </NavLink>
                </li>
                <li><NavLink to="/exemplo1" className='hover:underline'>
                    Exemplo1
                </NavLink></li>
                <li><NavLink to="/gitHubPage" className='hover:underline'>
                    GitHub
                </NavLink></li>
            </ul>
        </nav>
    );
}
export default Menu;