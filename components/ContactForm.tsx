import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Burada backend entegrasyonu yapılabilir
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-primary-navy mb-4 text-center">Contact Us</h2>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 px-6 bg-primary-navy text-white font-semibold rounded-lg hover:bg-primary-blue transition-colors"
      >
        Send Message
      </button>
      {submitted && (
        <div className="text-green-600 text-center font-medium mt-4">Thank you! Your message has been sent.</div>
      )}
    </form>
  );
};

export default ContactForm; 