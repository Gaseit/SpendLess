import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faYoutube, faFacebook, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";

// Pie de página
function Footer () {
    return (
        <footer className="footer bg-dark text-white">
            <div className="row justify-content-center">
                <div className="col-md-12 text-center py-3">

                    <ul className="p-2">
                        <a href="https://www.youtube.com/" className="link-light m-1">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                        <a href="https://es-es.facebook.com/" className="link-light m-1">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="https://twitter.com/" className="link-light m-1">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a href="https://www.instagram.com/" className="link-light m-1">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>

                    </ul>

                    <p className="fot-menu mt-5">
                        <NavLink to="/contact" className="link-light">Contacta con nosotros</NavLink>
                        <NavLink to="/legal" className="link-light">Aviso legal</NavLink>
                        <NavLink to="/privacity" className="link-light">Política de privacidad</NavLink>
                        <NavLink to="/cookies" className="link-light">Política de cookies</NavLink>
                    </p>

                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-12 text-center">
                    <p className="copyright">
                        Copyright ©
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;