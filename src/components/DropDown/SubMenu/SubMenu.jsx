import { useTranslation } from "react-i18next";

const SubMenu = (props) => {
    const { t } = useTranslation();

    return (
        <ul className="menu">
            {props.menu.subMenu.map((sub, i) => (
                <li key={i} className="menu_list">
                    <div className="nav_menu">
                        <a href={sub.path}>{t('header.' + sub.title)}</a>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default SubMenu;
