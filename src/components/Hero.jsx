function Hero() {
  return (
    <section id="home" className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/src/assets/hero.jpg)' }}>
      <div className="absolute inset-0 bg-farm-green opacity-60"></div>
      <div className="container mx-auto h-full flex items-center justify-center text-center text-white">
        <div>
          <h2 className="text-5xl font-bold mb-4">Welcome to Ezocha Farm Service Ltd</h2>
          <p className="text-2xl mb-6">Empowering Agribusiness for Food Security in Nigeria & Africa</p>
          <a href="#services" className="bg-farm-cream text-farm-green py-3 px-8 rounded-full hover:bg-farm-brown hover:text-white transition glow">
            Discover Our Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;