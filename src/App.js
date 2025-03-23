import Navigate from "./navigate/navigate";
import Content from "./home/home";
import Contact from "./contact/contact";
import Footer from "./footer/footer";

function App() {
	return (
		<>
			<Navigate />
			<main>
				<Content />
				<Contact />
			</main>
			<Footer />
		</>
	);
}

export default App;
