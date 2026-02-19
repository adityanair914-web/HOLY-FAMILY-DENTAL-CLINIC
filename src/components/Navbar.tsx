import { useState, useEffect } from 'react';
import { FaTooth, FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Doctors', href: '#doctors' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="bg-primary p-2 rounded-full text-white group-hover:scale-110 transition-transform">
                        <FaTooth size={20} />
                    </div>
                    <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-primary' : 'text-white'}`}>
                        Holy Family <span className="text-accent">Dental Care</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-accent ${scrolled ? 'text-dark' : 'text-white/90'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/91XXXXXXXXXX" // TODO: Replace placeholder
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-success text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        <FaWhatsapp size={18} />
                        Book Appointment
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-dark hover:bg-gray-100' : 'text-white hover:bg-white/10'
                        }`}
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-primary hover:bg-blue-50 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="https://wa.me/91XXXXXXXXXX"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-center gap-2 w-full bg-success text-white px-4 py-3 rounded-xl font-medium mt-4 hover:bg-green-600 active:scale-95 transition-all"
                            >
                                <FaWhatsapp size={20} />
                                Book via WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;