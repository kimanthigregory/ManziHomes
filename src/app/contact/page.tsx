"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to an API endpoint
    console.log("Form submitted:", formData);
    setStatus("Thank you for your message! We will get back to you shortly.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-white">
      <header className="bg-brand-green text-white py-20 text-center">
        <Reveal>
          <h1 className="text-5xl">Contact Us</h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg">
            We&apos;d love to hear from you. Let&apos;s start a conversation.
          </p>
        </Reveal>
      </header>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <Reveal>
              <h2 className="text-3xl font-serif text-brand-dark mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Have a question about a design, a project idea, or just want to
                learn more? Reach out to us through the form or contact us
                directly.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4 text-brand-gold" />
                  <span>123 Architecture Ave, Nairobi, Kenya</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-brand-gold" />
                  <a
                    href="mailto:contact@manzihomes.com"
                    className="hover:text-brand-gold"
                  >
                    contact@manzihomes.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-brand-gold" />
                  <a href="tel:+254700123456" className="hover:text-brand-gold">
                    +254 700 123 456
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Contact Form */}
            <Reveal delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 focus:ring-brand-gold focus:border-brand-gold"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 focus:ring-brand-gold focus:border-brand-gold"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 focus:ring-brand-gold focus:border-brand-gold"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 focus:ring-brand-gold focus:border-brand-gold"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-brand-green text-white font-bold tracking-wide hover:bg-green-800 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </div>
                {status && (
                  <p className="text-center text-brand-green">{status}</p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
