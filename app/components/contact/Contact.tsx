"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Define the error state type explicitly
  const [errors, setErrors] = useState<{ name: string; email: string; message: string }>({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    let formIsValid = true;
    let tempErrors: { name: string; email: string; message: string } = {
      name: "",
      email: "",
      message: "",
    };

    // Name validation
    if (!formData.name.trim()) {
      formIsValid = false;
      tempErrors.name = "Name is required.";
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.email.trim()) {
      formIsValid = false;
      tempErrors.email = "Email is required.";
    } else if (!emailPattern.test(formData.email)) {
      formIsValid = false;
      tempErrors.email = "Please enter a valid email address.";
    }

    // Message validation
    if (!formData.message.trim()) {
      formIsValid = false;
      tempErrors.message = "Message is required.";
    } else if (formData.message.length < 10) {
      formIsValid = false;
      tempErrors.message = "Message should be at least 10 characters long.";
    }

    setErrors(tempErrors); 
    return formIsValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      alert(`Thank you, ${formData.name}! We will get back to you soon.`);
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" }); // Clear errors after successful submission
    }
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-red-900">
          Contact Us
        </h1>
        <p className="text-black sm:text-lg mt-4">
          Have questions or feedback? We&apos;d love to hear from you! Fill out the form below,
          and we&apos;ll get in touch.
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
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
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