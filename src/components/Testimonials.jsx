import { useState } from 'react';

function Testimonials() {
  const [testimonials] = useState([
    { id: 1, name: 'Farmer Adebayo', quote: 'Ezocha’s research services transformed our crop yields!' },
    { id: 2, name: 'Investor Chika', quote: 'Their farmland leasing program is seamless and profitable.' },
    { id: 3, name: 'Community Leader Nkechi', quote: 'Ezocha’s agribusiness events inspired our youth.' },
  ]);

  return (
    <section id="testimonials" className="py-16 bg-farm-green text-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-8">What Our Partners Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-farm-cream text-farm-green p-6 rounded-lg shadow-md">
              <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
              <h4 className="text-xl font-semibold">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;