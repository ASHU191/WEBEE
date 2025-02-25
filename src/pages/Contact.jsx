import React, { useState } from "react";
import AboutHeader from "../components/AboutHeader";

const ModernContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
  
      try {
        const phoneNumber = "923010209887"; // Pakistan number (92 code zaroori hai)
        const message = `Contact Form Submission from Webelo IT Solutions%0A
        *Name:* ${formData.name}%0A
        *Email:* ${formData.email}%0A
        *Subject:* ${formData.subject}%0A
        *Message:* ${formData.message}`;
  
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
  
        // Secretly WhatsApp pe kholna
        window.open(whatsappURL, "_blank");
  
        // User ko success message dikhana
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } catch (error) {
        setErrors({ general: "An error occurred. Please try again later." });
      }
  
      setLoading(false);
    } else {
      setErrors(newErrors);
    }
  };
  

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Connect With Us</h2>
      {isSubmitted && <p className="text-green-600 text-center mb-4">Message sent successfully!</p>}
      {errors.general && <p className="text-red-600 text-center mb-4">{errors.general}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-white">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
          {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default function SSRMasonry() {
  return (
    <>
      <AboutHeader title="Contact Us" backgroundImage="./heroimg.png" />
      <ModernContactForm />
    </>
  );
}
