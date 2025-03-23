import "./footer.scss";
import { ReactComponent as Logo } from "../assets/logo-bookmark.svg";
import { ReactComponent as FacebookIcon } from "../assets/icon-facebook.svg";
import { ReactComponent as TwitterIcon } from "../assets/icon-twitter.svg";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container container">
				<div className="footer__links">
					<a href="#home">
						<Logo className="footer__logo" />
					</a>
					<a href="#features" className="footer__link">
						FEATURES
					</a>
					<a href="#pricing" className="footer__link">
						PRICING
					</a>
					<a href="#contact" className="footer__link">
						CONTACT
					</a>
				</div>
				<div className="footer__icons">
					<a href="/" className="footer__icon" aria-label="Facebook">
						<FacebookIcon />
					</a>
					<a href="/" className="footer__icon" aria-label="Twitter">
						<TwitterIcon />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
