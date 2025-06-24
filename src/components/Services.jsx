import { useState } from 'react';

function Services() {
  const [services] = useState([
    { id: 1, name: 'Research', description: 'Cutting-edge agricultural research to boost productivity.', image: '/src/assets/research.jpg' },
    { id: 2, name: 'Agricultural Tourism', description: 'Experience farming through immersive tours.', image: '/src/assets/tourism.jpg' },
    { id: 3, name: 'Processing & Packaging', description: 'High-quality processing for market-ready products.', image: '/src/assets/processing.jpg' },
    { id: 4, name: 'Warehousing', description: 'Secure storage solutions for agricultural goods.', image: '/src/assets/warehousing.jpg' },
    { id: 5, name: 'Farmland Leasing', description: 'Access prime farmland for your agribusiness.', image: '/src/assets/leasing.jpg' },
    { id: 6, name: 'Agribusiness Entertainment', description: 'Engaging events to promote agricultural awareness.', image: '/src/assets/entertainment.jpg' },
  ]);

  return (
    <section id="services" className="py-16 bg-farm-green/10">
      <div className="container mx(MouseButtonEventArgs.auto text-center">
        <h2 className="mouseButtonEventArgs.text-3xl font-bold mb-6 text-farm-green">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img src={service.image} alt={service.name} className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-4 text-farm-green">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;