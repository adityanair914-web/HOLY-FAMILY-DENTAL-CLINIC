import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
        window.open(`https://wa.me/919447XXXXXX?text=${text}`, '_blank');
    };

    const contactItems = [
        {
            href: 'tel:+919447XXXXXX',
            icon: <FaPhoneAlt size={18} />,
            bg: 'bg-secondary/30',
            iconBg: 'bg-primary',
            title: 'Call Us',
            sub: '+91 94470 XXXXX',
        },
        {
            href: 'https://wa.me/919447XXXXXX',
            icon: <FaWhatsapp size={18} />,
            bg: 'bg-green-50',
            iconBg: 'bg-success',
            title: 'WhatsApp',
            sub: 'Chat with us directly',
            external: true,
        },
        {
            href: 'https://instagram.com/holy_family_dental_care',
            icon: <FaInstagram size={18} />,
            bg: 'bg-pink-50',
            iconBg: 'bg-gradient-to-br from-pink-500 to-orange-400',
            title: 'Instagram',
            sub: '@holy_family_dental_care',
            external: true,
        },
    ];

    const inputClass = `w-full px-4 py-3 rounded-xl border border-border bg-white
        focus:ring-2 focus:ring-secondary focus:border-secondary outline-none
        transition-all duration-200 text-dark placeholder-muted text-sm`;

    return (
        <section id="contact" className="py-24 bg-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="section-label mb-4">Get In Touch</span>
                    <h2 className="font-display text-4xl md:text-5xl text-primary mt-3 mb-4">
                        Book Your Appointment
                    </h2>
                    <p className="text-muted max-w-md mx-auto leading-relaxed">
                        Call us, WhatsApp us, or fill the form below. We are here to help.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Cards */}
                    <div className="space-y-5">
                        {contactItems.map((item) => (
                            <motion.a
                                key={item.title}
                                href={item.href}
                                target={item.external ? '_blank' : undefined}
                                rel={item.external ? 'noopener noreferrer' : undefined}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.4 }}
                                className={`flex items-center gap-4 p-5 ${item.bg} border border-border rounded-2xl
                                            hover:shadow-teal-sm transition-all duration-300 cursor-pointer`}
                            >
                                <div className={`${item.iconBg} text-white p-3.5 rounded-xl flex-shrink-0`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-display text-lg font-semibold text-primary">{item.title}</h3>
                                    <p className="text-muted text-sm">{item.sub}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-2 bg-white rounded-3xl shadow-teal-md border border-border p-8 md:p-10"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-dark mb-2">Full Name</label>
                                    <input
                                        type="text" name="name" required
                                        value={formData.name} onChange={handleChange}
                                        className={inputClass} placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-dark mb-2">Phone Number</label>
                                    <input
                                        type="tel" name="phone" required
                                        value={formData.phone} onChange={handleChange}
                                        className={inputClass} placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-dark mb-2">Service Needed</label>
                                <select
                                    name="service" value={formData.service} onChange={handleChange}
                                    className={inputClass}
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
                                <label className="block text-sm font-medium text-dark mb-2">Message (Optional)</label>
                                <textarea
                                    name="message" value={formData.message} onChange={handleChange}
                                    rows={4} className={`${inputClass} resize-none`}
                                    placeholder="Tell us about your dental concern..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn-whatsapp w-full py-4 text-base"
                            >
                                <FaWhatsapp size={20} />
                                Send Request via WhatsApp
                            </button>
                            <p className="text-xs text-muted text-center">
                                This will open WhatsApp with your details pre-filled. No data is stored on our servers.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;