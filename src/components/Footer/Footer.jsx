import React from 'react';
import './Footer.css';
import { useTranslation } from "react-i18next";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import house from '../../assets/images/House_front_main.png';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className="footer default-background-color">
            <div className="footer-container">
                <MDBContainer className='text-center text-md-start mt-3'>
                    <MDBRow className='mt-3'>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                            <h4 className='fw-bold mb-4 default-text-color'>
                                {t("footer.name")}
                            </h4>
                            <p>
                                <a href="/">
                                    <img width="150" height="150" src={house} className="image" alt="" title={t("footer.name")} />
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='fw-bold mb-4 default-text-color'>{t("footer.links")}</h6>
                            <p>
                                <a href='/about' className='text-reset'>
                                    {t("footer.about_guesthouse")}
                                </a>
                            </p>
                            <p>
                                <a href='/reservation' className='text-reset'>
                                    {t("footer.reservation")}
                                </a>
                            </p>
                            <p>
                                <a href='/rooms' className='text-reset'>
                                    {t("footer.rooms")}
                                </a>
                            </p>
                            <p>
                                <a href='/sights' className='text-reset'>
                                    {t("footer.sights")}
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h6 className='fw-bold mb-4 default-text-color'>{t("footer.contact")}</h6>
                            <p>
                                <MDBIcon color='secondary' icon='home' className='me-2' />
                                {t("footer.address")}
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                dezsotokos@gmail.com
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 40 745 486 360
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 40 727 173 332
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-below">
                    <div className="footer-copyright">
                        <p>
                            @{new Date().getFullYear()} {t("footer.all_right_reserved")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
