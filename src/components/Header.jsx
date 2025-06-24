function Header() {
  return (
    <nav className="bg-farm-green text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ezocha Farm Service Ltd</h1>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-farm-cream">Home</a></li>
          <li><a href="#about" className="hover:text-farm-cream">About</a></li>
          <li><a href="#services" className="hover:text-farm-cream">Services</a></li>
          <li><a href="#contact" className="hover:text-farm-cream">Contact</a></li>
          <li><a href="#donation" className="hover:text-farm-cream">Support</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;