import { red } from "@material-ui/core/colors";
import React from "react";
import "./Footer.css";

const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const Footer = (props) => {
     return (
        <div className="footer">
            {
                props?.hideBackToTop
                ?
                ("")
                :
                (
                    <a href="#home__top" className="footer__backToToppnk">
                        <div className="footer__backToTop">
                            <p>BACK TO TOP</p>
                        </div>
                    </a>
                )
            }
            
            <div className="footer__main">
                
                <div className="footer__mainInner">
                    <h3>Get to Know Us!!</h3>
                    <p><a href="#">About Us</a></p>
                    <p><a href="#">Careers</a></p>
                    <p><a href="#">Press Releases</a></p>
                    <p><a href="#">Zed Online Sources Cares</a></p>
                    <p><a href="#">Get a Smile</a></p>
                </div>

                <div className="footer__mainInner">
                    <h3>Connect with Us!!</h3>
                    <p><a href="https://www.facebook.com/zedonlinesources"  target="_blank">Facebook</a></p>
                    <p><a href="https://twitter.com/zedonlinesources"  target="_blank">Twitter</a></p>
                    <p><a href="https://www.instagram.com/zedonlinesources"  target="_blank">Instagram</a></p>
                    <p><a href="https://www.linkedin.com/zedonlinesources"  target="_blank">LinkedIn</a></p>
                    <p><a href="https://www.youtube.com/zedonlinesources"  target="_blank">YouTube</a></p>
                </div>

                <div className="footer__mainInner">
                    <h3>Make Money with Us!!</h3>
                    <p><a href="#">Sell On Zed Online Sources</a></p>
                    <p><a href="#">Become An Affiliate</a></p>
                    <p><a href="#">Advertise Your Products & Services</a></p>
                    <p><a href="#">Zed Online Sources Pay On Merchants</a></p>

                </div>

                <div className="footer__mainInner">
                    <h3>Let Us Help You!!</h3>
                    <p><a href="#">Your Account</a></p>
                    <p><a href="#">Returns Centre</a></p>
                    <p><a href="#">100% Purchase Protection</a></p>
                    <p><a href="#">App Download</a></p>
                    <p><a href="#">Help</a></p>
                </div>

            </div>
            <div className="footer__copyright">
                <p className="footer__year">{getCurrentYear()}</p>
                <p className="footer__company">&copy; Zed Online Sources</p>
                <p className="powered_by_word">Powered By</p>
                <p className="footer__poweredby">
                    <a className="footer__poweredby_link" href="https://synchronltd.net/" target="_blank">Synchron Engineering</a>
                </p>
            </div>
        </div>
     )
 }

export default Footer;