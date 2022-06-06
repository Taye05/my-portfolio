import react from 'react';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/projects';
import Technology from './components/Technology/Technology';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
     <Header />
     <Hero />
     <About />
     <Projects />
     <Technology />
     <Footer />
    </div>
  );
}

export default App;
