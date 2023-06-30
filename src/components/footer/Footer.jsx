import style from "./Footer.module.css";
import {
	FacebookCircleIcon,
	InstagramCircleIcon,
	LinkedinCircleIcon,
	MailIcon,
	PhoneIcon,
	SeismicIcon,
	WhatsappCircleIcon,
} from "../zHelpers/icons";

const Footer = () => {
	return (
		<div className={style.footerContainer}>
			<div>
				<span>
					<SeismicIcon color="#999999" />
					<b>PSP</b>
				</span>
			</div>
			<div>
				<span>
					<LinkedinCircleIcon color="#999999" />
					<WhatsappCircleIcon color="#999999" />
					<FacebookCircleIcon color="#999999" />
					<InstagramCircleIcon color="#999999" />
				</span>
			</div>
			<div>
				<span>
					<MailIcon color="#999999" />
					<p>+51 997 336 060</p>
				</span>
				<span>
					<PhoneIcon color="#999999" />
					<p>miguel.roncal@marc.com.pe</p>
				</span>
			</div>
		</div>
	);
};

export default Footer;
