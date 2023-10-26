import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import TextCont from "./components/text.js";
import downloadFile from "./components/file.js";
import Footer from "./components/Footer.js";

// Helper function to handle download
const handleDownloadClick = (event) => {
	event.preventDefault();
	downloadFile(
		"./cv_file/CV_VALTTERI_PUUMALAINEN.pdf",
		"CV_VALTTERI_PUUMALAINEN.pdf"
	);
};

// Main App component
function App() {
	
	return (
		<div className="App">
			{/* Parallax container */}
			<Parallax pages={2} style={{ top: "0", left: "0" }} className="animation">
				
				{/* Parallax layer for background */}
				<ParallaxLayer offset={0} speed={-0.15}>
					<div className="animation_layer parallax" id="background"></div>
				</ParallaxLayer>
				
				{/* Parallax layer for logo */}
				<ParallaxLayer offset={0} speed={0.5}>
					<div className="animation_layer parallax" id="logo"></div>
				</ParallaxLayer>
				
				{/* Parallax layer for social buttons */}
				<ParallaxLayer offset={0} speed={0.5}>
					<div id="buttons">
						<a href="https://www.linkedin.com/in/puuval/" target="_blank" rel="noopener noreferrer">
							<img src="./images/linkedin.png" alt="LinkedIn" />
						</a>
						<a href="https://github.com/puuval" target="_blank" rel="noopener noreferrer">
							<img src="./images/github.png" alt="GitHub" />
						</a>
						<a href="#" onClick={handleDownloadClick}>
							<img src="./images/download.png" alt="Download" />
						</a>
					</div>
				</ParallaxLayer>
				
				{/* Text content section */}
				<ParallaxLayer offset={1} speed={0}>
					<TextCont />
				</ParallaxLayer>
				
				{/* Footer */}
				<Footer />
			</Parallax>
		</div>
	);
}

export default App;
