import { HeaderNavbar } from "./components/HeaderNavbar";
import FooterPage from "./components/footer/FooterPage";
import Homepage from "./pages/home/Homepage";

function App() {
	return (
		<div>
			<HeaderNavbar />
			<Homepage />
			<FooterPage />
		</div>
	);
}

export default App;
