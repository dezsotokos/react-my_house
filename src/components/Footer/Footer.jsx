import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div class="footer-container">
                <div class="footer-element">
                    <div class="footer-element-logo">
                        <h4 class="footer-logo-title">Lily Guesthouse</h4>
                        <a href="/">
                            <img width="150" height="150" src="" class="image" alt="" title="Gyöngyvirág Kulcsosház" />
                        </a>
                    </div>        
                </div>
                <div class="footer-element">
                    <div class="footer-element-address">
                        <p>
                            Szeltersz, 1304/B, Lövéte, Románia
                        </p>
                    </div>
                </div>
                <div class="footer-element">
                    <div class="footer-element-nav_menu">
                        <ul class="footer-nav-menu">
                            <li class="footer-nav-menu-item"><a href="/about-me/">About the guesthouse</a></li>
                            <li class="footer-nav-menu-item"><a href="#">Contact</a></li>
                            <li class="footer-nav-menu-item"><a href="#">Services</a></li>
                            <li class="footer-nav-menu-item"><a href="#">Sights</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-element">
                    <div class="footer-element-contact">
                        <h4 class="footer-contact-title">Book your stay:</h4>
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
                    </div>       
                 </div>
            </div>
        </div>
    );
}

export default Footer;
