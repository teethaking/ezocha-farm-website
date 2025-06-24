import { useState } from 'react';

function Services() {
  const [services] = useState([
    { id: 1, name: 'Research', description: 'Innovative solutions to enhance agricultural productivity.', image: '/src/assets/research.jpg' },
    { id: 2, name: 'Agricultural Tourism', description: 'Immersive farm experiences for education and leisure.', image: '/src/assets/tourism.jpg' },
    { id: 3, name: 'Processing & Packaging', description: 'Efficient processing for market-ready products.', image: '/src/assets/processing.jpg' },
    { id: 4, name: 'Warehousing', description: 'Secure storage for agricultural goods.', image: '/src/assets/warehousing.jpg' },
    { id: 5, name: 'Farmland Leasing', description: 'Access prime farmland for your agribusiness.', image: '/src/assets/leasing.jpg' },
    { id: 6, name: 'Agribusiness Entertainment', description: 'Events to promote agricultural awareness.', image: '/src/assets/entertainment.jpg' },
  ]);

  return (
    <section id="services" className="py-16 bg-farm-cream">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-8 text-farm-green">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img src={service.image} alt={service.name} className="w-full h-40 object-cover rounded-t-lg mb-4" />
              <h3 className="text-xl font-semibold text-farm-green">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;