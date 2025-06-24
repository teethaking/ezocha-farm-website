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
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-6 text-farm-green">Get in Touch</h2>
        <p className="text-lg mb-8 text-gray-700">We’d love to collaborate on your agribusiness journey!</p>
        <div className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-farm-green"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-farm-green"
            required
          />
          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-farm-green"
            rows="5"
            required
          ></textarea>
          <button
            onClick={handleSubmit}
            className="w-full bg-farm-green text-white py-3 rounded-md hover:bg-farm-brown transition glow"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;