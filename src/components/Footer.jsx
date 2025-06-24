function Footer() {
  return (
    <footer className="bg-farm-green text-white py-8">
      <div className="container mx-auto text-center px-4">
        <h3 className="text-2xl font-bold mb-4">Ezocha Farm Service Ltd</h3>
        <p className="mb-4">Empowering agribusiness for a sustainable future.</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="hover:text-farm-cream">Facebook</a>
          <a href="#" className="hover:text-farm-cream">Twitter</a>
          <a href="#" className="hover:text-farm-cream">Instagram</a>
        </div>
        <p className="text-sm">© 2025 Ezocha Farm Service Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;