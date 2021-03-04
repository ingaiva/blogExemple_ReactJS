import './menu.css';
import logo from "./logoBocal.png";

function Menu(props){
    return (
        <nav className="menu-inline">
            <div> 
                <img src={logo} alt="logo"></img>             
            </div>            
            <ul className="menu-inline">
                <li className="menu-item">
                    <a href="">Blog</a>
                </li>
                <li className="menu-item">
                    <a href=""> A propos</a>
                </li>
            </ul>
        </nav>
    );
}
export default Menu;