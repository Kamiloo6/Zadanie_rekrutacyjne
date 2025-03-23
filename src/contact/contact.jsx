import CountUp from "react-countup";
import { useState } from "react";
import errorIcon from "../assets/icon-error.svg";
import "./contact.scss";

const Email = () => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");

	const validateEmail = (email) => {
		const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		return re.test(String(email).toLowerCase());
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validateEmail(email)) {
			setError("Whoops, make sure it's an email");
			return;
		}
		setEmail("");
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
		if (error) setError("");
	};

	return (
		<form className="contact__form" onSubmit={handleSubmit}>
			<div className={error && "contact__input_wrap"}>
				<input
					type="text"
					placeholder="Enter Your email address"
					className={`contact__input ${error ? "contact__input_error" : ""}`}
					value={email}
					onChange={handleEmailChange}
				/>
				{error && (
					<img
						src={errorIcon}
						alt="error icon"
						className="contact__error_icon"
					/>
				)}
				{error && <div className="contact__error_mess">{error}</div>}
			</div>
			<button className="contact__button" type="submit">
				Contact Us
			</button>
		</form>
	);
};

const Contact = () => {
	return (
		<section id="contact" className="contact">
			<p className="contact__counter">
				<CountUp start={35000} end={0} duration={20} /> + ALREADY JOINED
			</p>

			<h2 className="contact__title">Stay up-to-date with what we're doing</h2>

			<Email />
		</section>
	);
};

export default Contact;
