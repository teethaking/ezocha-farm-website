function Hero() {
  return (
    <section id="home" className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/src/assets/hero.jpg)' }}>
      <div className="absolute inset-0 bg-farm-green opacity-50"></div>
      <div className="container mx-auto h-full flex items-center justify-center text-center text-white">
        <div>
          <h2 className="text-5xl font-bold mb-4">Ezocha Farm Service Ltd</h2>
          <p className="text-xl mb-6">Your One-Stop Shop for Agribusiness Excellence in Nigeria and Africa</p>
          <a href="#services" className="bg-farm-gold text-farm-green py-2 px-6 rounded-full hover:bg-farm-brown hover:text-white transition">
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;