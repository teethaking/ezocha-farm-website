import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Donation from './components/Donation';

function App() {
  return (
    <div className="min-h-screen bg-farm-green/10">
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Donation />
    </div>
  );
}

export default App;