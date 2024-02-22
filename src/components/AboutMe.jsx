import house from '../assets/images/haz_front.jpg'; 
import hot_tab from '../assets/images/dezsa.jpg'; 
import { useTranslation } from "react-i18next";

/* eslint-disable jsx-a11y/alt-text */
const AboutMe = () => {
    const { t } = useTranslation();

    return (
        <>
            <img width="100%" src={house}></img>
            <img width="100%" src={hot_tab}></img>
            <h1>{t("about.title")}</h1>
            <p>{t("about.description")}</p>
        </>
    );
}

export default AboutMe;
