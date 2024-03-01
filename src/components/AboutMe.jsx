import house from '../assets/images/House_front_main.png'; 
import kitchen from '../assets/images/House_kitchen.jpg'; 
import bathroom from '../assets/images/House_bath-room.jpg'; 
import bedroom1 from '../assets/images/House_bed-room_1.jpg'; 
import bedroom3 from '../assets/images/House_bed-room_3.jpg';
import terraceDown from '../assets/images/House_terrace_view_down.jpg'; 
import terraceUp from '../assets/images/House_terrace_view_up.jpg'; 
import terrace from '../assets/images/House_terrace.jpg'; 
import oven from '../assets/images/House_oven.jpg'; 
import hotTab from '../assets/images/House_hot-tab.jpg'; 
import table from '../assets/images/House_table.jpg'; 
import living_room from '../assets/images/Living-room_main.jpg'; 
import { useTranslation } from "react-i18next";
import * as Style from '../style/AboutMe.js';
import MyGoogleMap from './MyGoogleMap';
import { ThreeDots } from 'react-loader-spinner'
import { useRef } from "react";
import '../style/AboutMe.css';
import Calendar from './Calendar.jsx';

const AboutMe = () => {
    const { t } = useTranslation();
    const myRef = useRef(null);

    return (
        <div className='about_block'>
            <div className='about_element about_intro' style={Style.intro}>
                <div className='about_intro_block' style={Style.introBlock}>
                    <h1>{t("about.title")}</h1>
                    <p>{t("about.description")}</p>
                    <div onClick={() => {myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });}}>
                    <ThreeDots 
                        color='#000b4d'
                    />
                    </div>
                </div>
            </div>
            <div className='about_element about_page' ref={myRef}>
                <div className='about_page_block'>
                    <div className='about_element about_recommendation'>
                        <div className='about_recommendation_block'>
                            <div className='about_recommendation_element'>
                                <img alt='house' src={house}/>
                            </div>
                            <div className='about_recommendation_element'>
                                <h2>{t("about.recomendationTitle")}</h2>
                                <p>{t("about.recomendationDescription")}</p>
                            </div>
                        </div>
                    </div>
                    <div className='about_element about_gallery'>
                        <div className='about_gallery_block'>
                            <div className='about_gallery_element about_gallery_side_element'>
                                <img alt='bathroom' src={bathroom}/>
                            </div>
                            <div className='about_gallery_element about_gallery_midle_element'>
                                <img alt='bedroom1' src={bedroom1}/>
                            </div>
                            <div className='about_gallery_element about_gallery_main_element'>
                                <img alt='living_room' src={living_room}/>
                            </div>
                            <div className='about_gallery_element about_gallery_midle_element'>
                                <img alt='bedroom3' src={bedroom3}/>
                            </div>
                            <div className='about_gallery_element about_gallery_side_element'>
                                <img alt='kitchen' src={kitchen}/>
                            </div>
                        </div>
                    </div>
                    <div className='about_element about_amenities'>
                        <div className='about_amenities_block'>
                            <h2>{t("about.amenitie.title")}</h2>
                            <div className='about_amenities_element'>
                                <div className='about_amenities_images'>
                                    <img className='about_amenities_image' alt='terraceDown' src={terraceDown}/>
                                    <img className='about_amenities_image absolute' alt='terraceUp' src={terraceUp} style={{left: '1%', top: '9%'}}/>
                                    <img className='about_amenities_image absolute' alt='terrace' src={terrace} style={{right: '6%', top: '0'}}/>
                                    <img className='about_amenities_image absolute' alt='oven' src={oven} style={{left: '3%', bottom: '6', zIndex: '2'}}/>
                                    <img className='about_amenities_image absolute' alt='hotTab' src={hotTab} style={{right: '0%', bottom: '33%'}}/>
                                    <img className='about_amenities_image absolute' alt='table' src={table} style={{right: '4%', bottom: '3%', width: '50%'}}/>
                                </div>
                                <div className='about_amenities_description'>
                                    <p>{t("about.amenitie.description")}</p>
                                    <ul >
                                        <li>
                                            <p>{t("about.amenitie.listElement1")}</p>
                                        </li>
                                        <li>
                                            <p>{t("about.amenitie.listElement2")}</p>
                                        </li>
                                        <li>
                                            <p>{t("about.amenitie.listElement3")}</p>
                                        </li>
                                        <li>
                                            <p>{t("about.amenitie.listElement4")}</p>
                                        </li>
                                        <li>
                                            <p>{t("about.amenitie.listElement5")}</p>
                                        </li>
                                        <li>
                                            <p>{t("about.amenitie.listElement6")}</p>
                                        </li>
                                        <li>
                                            <p>{t("about.amenitie.listElement7")}</p>
                                        </li>
                                        <li>
                                            <a href='/amenities'>
                                                <p>
                                                    ...
                                                </p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='about_element about_calendar'>
                        <div className='about_calendar_block'>
                            <h2>{t("about.calendar.title")}</h2>
                            <p>{t("about.calendar.description")}</p>
                            <Calendar />
                            <a href='/reservation'>
                                <button className='about_calendar_button'>{t("about.calendar.button")}</button>
                            </a>
                        </div>
                    </div>
                    <div className='about_element about_map'>
                        <MyGoogleMap />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
