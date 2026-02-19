import React, { useState } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: 'General Consultation',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = `Name: ${formData.name}%0APhone: ${formData.phone}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
        const url = `https://wa.me/91XXXXXXXXXX?text=${text}`; // TODO: Replace placeholder
        window.open(url, '_blank');
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold tracking-widest text-sm uppercase">Get In Touch</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
                        Book Your Appointment
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Call us, WhatsApp us, or fill the form below. We are here to help.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Cards */}
                    <div className="space-y-6">
                        <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-4 p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors border border-blue-100">
                            <div className="bg-primary text-white p-4 rounded-full">
                                <FaPhoneAlt size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-primary">Call Us</h3>
                                <p className="text-gray-600">+91 XXXXX XXXXX</p>
                            </div>
                        </a>

                        <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors border border-green-100">
                            <div className="bg-success text-white p-4 rounded-full">
                                <FaWhatsapp size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-green-800">WhatsApp</h3>
                                <p className="text-gray-600">Chat with us directly</p>
                            </div>
                        </a>

                        <a href="https://instagram.com/holy_family_dental_care" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-pink-50 rounded-2xl hover:bg-pink-100 transition-colors border border-pink-100">
                            <div className="bg-pink-500 text-white p-4 rounded-full">
                                <FaInstagram size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-pink-700">Instagram</h3>
                                <p className="text-gray-600">@holy_family_dental_care</p>
                            </div>
                        </a>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                                >
                                    <option>General Consultation</option>
                                    <option>Root Canal Treatment</option>
                                    <option>Dental Implants</option>
                                    <option>Cosmetic Dentistry</option>
                                    <option>Orthodontics / Braces</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="Tell us about your dental concern..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-success hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-95"
                            >
                                <FaWhatsapp size={22} />
                                Send Request via WhatsApp
                            </button>
                            <p className="text-xs text-gray-400 text-center mt-4">
                                This will open WhatsApp with your details pre-filled. No data is stored on our servers.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;