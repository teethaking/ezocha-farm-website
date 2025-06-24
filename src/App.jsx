import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Donation from './components/Donation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-farm-cream">
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Donation />
      <Footer />
    </div>
  );
}

export default App;