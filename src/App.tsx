import { createGlobalStyle } from "styled-components"
import RoutesManagement from "./RoutesManagement"
import Footer from "./layout/Footer"
import MenuBar from "./layout/MenuBar"
// styled component
const GlobalDiv = createGlobalStyle`
	body{
		// font-family: "Roboto","Edu TAS Beginner", cursive;
		font-family: 'Nunito Sans', sans-serif;
		font-size: 1rem;
	}
`

function App() {
	return (
		<div>
			<GlobalDiv />
			<MenuBar />
			<RoutesManagement />
			<Footer />
		</div>
	)
}

export default App
