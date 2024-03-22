import React from "react";
import { Link } from "react-router-dom";
import './Menu.css';

const Menu = ({header, items, active, setActive}) => {
    return(
        <div className={active ? 'menu active' : 'menu'} onClick={()=> setActive(false)}>
            <div className="blur"/>
            <div className="menu__content" onClick={e => e.stopPropagation()}>
                <div className="menu__header">{header}</div>
                <ul>
                        {items.map(item =>
                            <li>
                                    <div className="navbar__links"><Link to={item.href}>{item.value}</Link></div>
                                    <span className="material-symbols-outlined">{item.icon}</span>
                            </li>
                        )}
                    </ul>
            </div>
        </div>

                    

    );
};
export default Menu;