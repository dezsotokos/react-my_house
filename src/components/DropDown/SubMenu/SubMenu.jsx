
const SubMenu = (props) => {
    return (
        <ul className="menu">
            {props.menu.subMenu.map((sub, i) => (
                <li key={i} className="menu_list">
                    <div className="nav_menu">
                        <a href={sub.path}>{sub.title}</a>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default SubMenu;
