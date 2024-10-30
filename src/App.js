import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import Navigation from './components/Navigation.js';
import devnow from "./assets/devnow.png";
import oceanIsle from "./assets/ocean-isle.png";
import resBuilder from "./assets/res-builder.png";

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Main leftBrace = '&#123;' rightBrace='&#125;' rightBracket='&#91;' leftBracket='&#93;' DevNow={devnow} OceanIsle={oceanIsle} ResBuilder={resBuilder}/>
      <Footer />
    </div>
  );
}

export default App;
