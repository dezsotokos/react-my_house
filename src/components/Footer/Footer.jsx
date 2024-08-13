import React from 'react';
import './Footer.css';
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className="footer">
            <div class="footer-container">
                <div class="footer-element footer-logo">
                    {/* <div class="footer-logo"> */}
                        <h4 class="footer-logo-title">{t("footer.name")}</h4>
                        <a href="/">
                            <img width="150" height="150" src="" class="image" alt="" title={t("footer.name")} />
                        </a>
                    {/* </div>         */}
                </div>
                <div class="footer-element footer-address">
                    {/* <div class="footer-address"> */}
                        <p>
                            {t("footer.address")}
                        </p>
                    {/* </div> */}
                </div>
                <div class="footer-element footer-nav_menu">
                    {/* <div class="footer-nav_menu"> */}
                        <a href="/about/">About the guesthouse</a>
                        <a href="#">Contact</a>
                        <a href="#">Services</a>
                        <a href="#">Sights</a>
                    {/* </div> */}
                </div>
                <div class="footer-element footer-contact">
                    {/* <div class="footer-contact"> */}
                        <h4 class="footer-contact-title">{t("footer.bookable_notice")}</h4>
                        <div class="footer-contact-container">
                            <p>
                                Tel:<br/>
                                +40 745486360<br/>
                                +40 727173332<br/>
                            </p>
                            <p>
                                E-mail:<br/>
                                dezsotokos@gmail.com
                            </p>
                        </div>
                    {/* </div> */}
                 </div>
            </div>
            <div className="footer-below">
                <div className="footer-copyright">
                    <p>
                        @{new Date().getFullYear()} Gyöngyvirág Kulcsosház. All right reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
