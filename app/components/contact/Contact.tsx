"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(`Thank you, ${formData.name}! We will get back to you soon.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-red-900">
          Contact Us
        </h1>
        <p className="text-black  sm:text-lg mt-4">
          Have questions or feedback? We'd love to hear from you! Fill out the form below, 
          and we'll get in touch.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto border-2 p-6 rounded-lg shadow-2xl shadow-black/70 space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-black font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-black rounded px-4 py-2 mt-1"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-black font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-black rounded px-4 py-2 mt-1"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-black font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border border-black rounded px-4 py-2 mt-1"
            rows={5}
            placeholder="Enter your message"
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white font-bold py-2 px-6 rounded hover:bg-red-900"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;