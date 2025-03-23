import React, { useState } from "react";
import "./home.scss";
import hero from "../assets/illustration-hero.svg";
import dots from "../assets/bg-dots.svg";
import { ReactComponent as ArrowIcon } from "../assets/icon-arrow.svg";
import featureData from "./featureData";
import accordionData from "./accordionData";
import data from "./downloadData";

// Home Component
const Home = () => {
	return (
		<header className="header">
			<div className="header__image">
				<img src={hero} alt="tablet" className="header__img" />
				<div className="header__background-shape"></div>
			</div>
			<div className="header__content container">
				<h1 className="header__title">a simple bookmark manager</h1>
				<p className="header__text">
					A clean and simple interface to organize your favourite websites. Open
					a new browser tab and see your sites load instantly. Try it for free.
				</p>
				<div className="header__buttons">
					<button className="header__button">Get in on Chrome</button>
					<button className="header__button">Get in on Firefox</button>
				</div>
			</div>
		</header>
	);
};

// FeatureButton Component
const FeatureButton = ({ buttonTitle, isActive, onClick }) => {
	return (
		<button
			className={`features__button ${
				isActive ? "features__button--active" : ""
			}`}
			onClick={onClick}
		>
			{buttonTitle}
		</button>
	);
};

// FeatureContent Component
const FeatureContent = ({ image, title, text, isActive }) => {
	const imageClassName = `features__img ${
		isActive ? "features__image--shifted" : ""
	}`;

	return (
		<div className="features__wrapper">
			<div className="features__image">
				<img src={image} alt={title} className={imageClassName} />
				<div className="features__background-shape"></div>
			</div>
			<div className="features__box">
				<h2 className="features__box-title">{title}</h2>
				<p className="features__box-text">{text}</p>
				<button className="features__box-btn">More info</button>
			</div>
		</div>
	);
};

// Features Component
const Features = () => {
	const [activeFeature, setActiveFeature] = useState(0);
	const activeData = featureData[activeFeature];

	const handleFeatureChange = (index) => {
		setActiveFeature(index);
	};

	return (
		<section id="features" className="features container">
			<div className="features__container">
				<h2 className="features__title">Features</h2>
				<p className="features__text">
					Our aim is to make it quick and easy for you to access your favourite
					websites. Your bookmarks sync between your devices so you can access
					them on the go.
				</p>
				<div className="features__buttons">
					{featureData.map((feature, index) => (
						<FeatureButton
							key={index}
							buttonTitle={feature.buttonTitle}
							isActive={activeFeature === index}
							onClick={() => handleFeatureChange(index)}
						/>
					))}
				</div>
				<FeatureContent
					image={activeData.image}
					buttonTitle={activeData.buttonTitle}
					title={activeData.title}
					text={activeData.text}
					isActive={activeFeature === 1 || activeFeature === 2}
				/>
			</div>
		</section>
	);
};

// DownloadItem Component
const DownloadItem = ({ img, title, text }) => {
	return (
		<div className="download__box">
			<img src={img} alt={title} className="download__box-img" />
			<h3 className="download__box-title">{title}</h3>
			<p className="download__box-text">{text}</p>
			<img src={dots} alt="dots" className="download__box-dots" />
			<button className="download__box-button">Add & Install Extension</button>
		</div>
	);
};

// Download Component
const Download = () => {
	return (
		<section id="pricing" className="download container">
			<h2 className="download__title">Download the extension</h2>
			<p className="download__text">
				We've got more browsers in the pipeline. Please do let us know if you've
				got a favourite you'd like us to prioritize.
			</p>
			<div className="download__container">
				{data.map((el) => (
					<DownloadItem key={el.title} {...el} />
				))}
			</div>
		</section>
	);
};

// AccordionItem Component
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
	return (
		<div className="accordion__item">
			<div className="accordion__box" onClick={onClick}>
				<p className="accordion__question">{question}</p>
				<ArrowIcon
					className={`accordion__icon ${
						isOpen ? "accordion__icon-active" : ""
					}`}
				/>
			</div>
			{isOpen && <div className="accordion__answer">{answer}</div>}
		</div>
	);
};

// Accordion Component
const Accordion = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const handleAccordionClick = (index) => {
		if (openIndex === index) {
			setOpenIndex(null);
		} else {
			setOpenIndex(index);
		}
	};

	return (
		<section className="accordion container">
			<div className="accordion__questions">
				<h2 className="accordion__title">Frequently Asked Questions</h2>
				<p className="accordion__text">
					Here are some of our FAQs. If you have any other questions you'd like
					answered please feel free to email us.
				</p>
				<div>
					{accordionData.map((q, index) => (
						<AccordionItem
							key={index}
							question={q.question}
							answer={q.answer}
							isOpen={openIndex === index}
							onClick={() => handleAccordionClick(index)}
						/>
					))}
				</div>
			</div>
			<button className="accordion__button">More Info</button>
		</section>
	);
};

function Content() {
	return (
		<>
			<Home />
			<Features />
			<Download />
			<Accordion />
		</>
	);
}
export default Content;
