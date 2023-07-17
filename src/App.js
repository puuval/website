import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import TextCont from './components/text.js';
import downloadFile from './components/file.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className='App'>
      <Parallax pages={2} style={{ top: '0', left: '0'}} className='animation'>
        <ParallaxLayer offset={0} speed={-0.15}>
          <div className="animation_layer parallax" id="background"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className="animation_layer parallax" id="logo"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div id="buttons">
            <a href="https://www.linkedin.com/in/puuval/" target="_blank" rel="noopener noreferrer">
              <img src='./images/linkedin.png' alt="LinkedIn"/>
            </a>
            <a href="https://github.com/puuval" target="_blank" rel="noopener noreferrer">
              <img src="./images/github.png" alt="GitHub"/>
            </a>
            <a href="#" onClick={(event) => {
              event.preventDefault(); 
              downloadFile("./cv_file/CV_VALTTERI_PUUMALAINEN_ENG.pdf", "CV_VALTTERI_PUUMALAINEN_ENG.pdf");
            }}>
              <img src="./images/download.png" alt="Download"/>
            </a>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0}>
            <TextCont />
        </ParallaxLayer>
        <Footer />
      </Parallax>
    </div>
  );
}

export default App;
