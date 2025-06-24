import { useState } from 'react';

function Donation() {
  const [address, setAddress] = useState('');
  const [validation, setValidation] = useState(null);

  const validateAddress = () => {
    const trimmed = address.trim();
    if (!trimmed.startsWith('0x')) {
      setValidation({ valid: false, reason: 'Must start with 0x' });
      return;
    }
    if (trimmed.length !== 42) {
      setValidation({ valid: false, reason: 'Must be 42 characters long' });
      return;
    }
    const hexPart = trimmed.slice(2);
    const hexRegex = /^[0-9a-fA-F]{40}$/;
    if (!hexRegex.test(hexPart)) {
      setValidation({ valid: false, reason: 'Must contain only hexadecimal characters' });
      return;
    }
    setValidation({ valid: true });
  };

  return (
    <section id="donation" className="py-16 bg-farm-cream">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-6 text-farm-green">Support Our Mission</h2>
        <p className="text-lg mb-8 text-gray-700">Help us advance food security with an Ethereum donation.</p>
        <input
          type="text"
          placeholder="Enter Ethereum address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full max-w-md p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-farm-green mb-4"
        />
        <button
          onClick={validateAddress}
          className="bg-farm-green text-white py-3 px-8 rounded-md hover:bg-farm-brown transition glow"
        >
          Validate Address
        </button>
        {validation && (
          <p className={`mt-4 ${validation.valid ? 'text-green-600' : 'text-red-600'}`}>
            {validation.valid ? '✅ Valid Address' : `❌ Invalid: ${validation.reason}`}
          </p>
        )}
      </div>
    </section>
  );
}

export default Donation;