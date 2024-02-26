import house from '../assets/images/haz_front.jpg'; 
import hot_tab from '../assets/images/dezsa.jpg'; 
import { useTranslation } from "react-i18next";
import * as Style from '../style/AboutMe.js';
import MyGoogleMap from './MyGoogleMap';
import '../style/AboutMe.css';

/* eslint-disable jsx-a11y/alt-text */
const AboutMe = () => {
    const { t } = useTranslation();

    return (
        <div className='about_block'>
            <div className='about_element about_intro' style={Style.intro}>
                <h1>{t("about.title")}</h1>
                <p>{t("about.description")}</p>
                <p>...</p>
            </div>
            <div className='about_element about_page'>
                <div className='about_page_block'>
                    <div className='about_element '>

                    </div>
                    <div className='about_element about_gallery'>

                    </div>
                    <div className='about_element about_rooms'>

                    </div>
                    <div className='about_element about_calendar'>

                    </div>
                    <div className='about_element about_map'>
                        <MyGoogleMap />
                    </div>
                </div>
            </div>
            <img width="100%" src={house}></img>
            <img width="100%" src={hot_tab}></img>
            <h1>{t("about.title")}</h1>
            <p>{t("about.description")}</p>
        </div>
    );
}

export default AboutMe;
