import "./DropDown.css";
import SubMenu from "./SubMenu/SubMenu";
import { dropMenu } from "./data";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Headroom from 'react-headroom'

function DropDown(props) {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <Headroom >
            <div className="wrapper">
                <div className="logo">
                    <a href="/">
                        <h1>Logo</h1>
                    </a>
                </div>
                <div className={`shadow ${openMenu && "active"}`} />
                <ul className={`navigation ${openMenu && "active"}`}>
                    <span className="close_menu" onClick={() => setOpenMenu(false)}>
                        <FaTimes />
                    </span>
                    {dropMenu.map((menu, i) => (
                        <li key={i} className="list_menu">
                            <div className="nav_menu">
                                <a href={menu.path}>{menu.title}</a>
                                {menu.subMenu && (
                                    <span className="menu_icon">
                                        <IoIosArrowDown />
                                    </span>
                                )}
                            </div>
                            {menu.subMenu && (
                                <div className="sub_menu">
                                    <SubMenu menu={menu} />
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
                <span className="bar_menu" on>
                    <FaBars onClick={() => setOpenMenu(true)}/>
                </span>
            </div>
        </Headroom>
    );
}

export default DropDown;
