import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (Demo—requires backend for full functionality.)');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-farm-green">Contact Us</h2>
        <p className="text-lg mb-4 text-gray-700">Connect with us to explore agribusiness opportunities!</p>
        <div className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-farm-gold"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-farm-gold"
            required
          />
          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-farm-gold"
            rows="5"
            required
          ></textarea>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-farm-gold text-farm-green py-2 rounded-md hover:bg-farm-brown hover:text-white transition glow"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;