import { useState, useEffect } from 'react';
import { FaTooth, FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
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
        <nav className={`fixed w-full z-50 transition-all duration-400 ${scrolled
                ? 'bg-light/95 backdrop-blur-md shadow-teal-sm py-3'
                : 'bg-transparent py-5'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

                {/* Logo */}
                <a href="#" className="flex items-center gap-2.5 group">
                    <div className={`p-2 rounded-full transition-all duration-300 group-hover:scale-110 ${scrolled ? 'bg-primary text-white' : 'bg-white/15 text-white backdrop-blur-sm'
                        }`}>
                        <FaTooth size={18} />
                    </div>
                    <span className={`font-display text-xl font-semibold tracking-tight transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white'
                        }`}>
                        Holy Family{' '}
                        <span className={scrolled ? 'text-teal' : 'text-secondary'}>Dental Care</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-7">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium relative transition-colors duration-200 group ${scrolled ? 'text-dark hover:text-teal' : 'text-white/85 hover:text-secondary'
                                }`}
                        >
                            {link.name}
                            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-teal rounded-full transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                    <a
                        href="https://wa.me/919447XXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp shadow"
                    >
                        <FaWhatsapp size={16} />
                        Book Appointment
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-primary hover:bg-secondary/20' : 'text-white hover:bg-white/10'
                        }`}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                </button>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="md:hidden bg-light border-t border-border overflow-hidden shadow-teal-md"
                    >
                        <div className="px-4 pt-3 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 rounded-xl text-base font-medium text-dark hover:text-teal hover:bg-secondary/20 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="https://wa.me/919447XXXXXX"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="btn-whatsapp w-full mt-4 py-3.5"
                            >
                                <FaWhatsapp size={18} />
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