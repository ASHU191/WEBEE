import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setMessage(''); // Clear previous messages

    // Simulate API call to subscribe to newsletter
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

      // Simulate successful response
      setMessage('Thank you for subscribing!');
      setEmail(''); // Clear email input
    } catch (error) {
      setMessage('Something went wrong, please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col mb-6 md:mb-0">
      <h6 className="mb-2 text-lg font-semibold">Join Our Newsletter</h6>
      <form className="flex flex-col md:flex-col gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          className="bg-white/10 text-white text-sm placeholder-white/60 rounded-md px-2 py-1 focus:outline-none border border-white/30 focus:border-white"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#9c4d9e] hover:bg-[#8a447c] text-white px-4 py-1 rounded-md"
        >
          {isSubmitting ? 'Submitting...' : 'SUBMIT'}
        </button>
      </form>
      {message && (
        <p className={`mt-2 text-sm ${message.includes('Thank you') ? 'text-green-400' : 'text-red-400'}`}>
          {message}
        </p>
      )}
    </div>
  );
}
