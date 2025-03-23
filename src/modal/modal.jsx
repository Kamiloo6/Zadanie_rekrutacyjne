import "./modal.scss";
import featureData from "../home/featureData";
import React, { useState, useEffect } from "react";
import { ReactComponent as IconClose } from "../assets/icon-close.svg";

const Modal = ({ showOnHover }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 30000);
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		setIsVisible(showOnHover);
	}, [showOnHover]);

	const handleClose = () => {
		setIsVisible(false);
	};

	if (!isVisible) {
		return null;
	}

	return (
		<div className="modal__overlay">
			<div className="modal">
				<img src={featureData[1].image} alt={featureData[1].buttonTitle} />
				<div className="modal__content">
					<h2 className="modal__title">{featureData[1].title}</h2>
					<p className="modal__text">{featureData[1].text}</p>
					<button onClick={handleClose} className="modal__close-button">
						<IconClose className="modal__icon-close" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
