import { useRef } from 'react';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Header/Navbar';

function App() {
  const header = useRef(null);
  const about = useRef(null);
  const projetcs = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App overflow-hidden">
      <Navbar
        scrollToSection={scrollToSection}
        sections={{ header, about, projetcs, contact }}
      />
      <Header ref={header} id="header" />
      <About ref={about} id="about" />
      <Projects ref={projetcs} id="projetcs" />
      <Contact ref={contact} id="contact" />
      <Footer ref={contact} id="contact" />
    </div>
  );
}

export default App;
