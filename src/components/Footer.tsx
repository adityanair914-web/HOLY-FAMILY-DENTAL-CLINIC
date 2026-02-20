
import { FaTooth, FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-primary text-white/70 pt-16 pb-8 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-3 gap-12 mb-12">

                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-5">
                            <div className="bg-secondary/20 p-2 rounded-full text-secondary border border-secondary/30">
                                <FaTooth size={18} />
                            </div>
                            <span className="font-display text-xl font-semibold text-white">
                                Holy Family{' '}
                                <span className="text-secondary">Dental</span>
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed mb-7 text-white/55 max-w-xs">
                            Advanced Root Canal &amp; Implant Centre in Kuravilangad.
                            World-class dental care with a gentle touch since 2013.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: <FaInstagram size={16} />, href: 'https://instagram.com/holy_family_dental_care', hoverBg: 'hover:bg-pink-500' },
                                { icon: <FaWhatsapp size={16} />, href: 'https://wa.me/919447XXXXXX', hoverBg: 'hover:bg-success' },
                                { icon: <FaFacebook size={16} />, href: '#', hoverBg: 'hover:bg-blue-600' },
                            ].map((s, i) => (
                                <a
                                    key={i}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center
                                                ${s.hoverBg} hover:text-white hover:border-transparent transition-all duration-300`}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-display text-lg font-semibold text-white mb-5">Quick Links</h3>
                        <ul className="space-y-2.5">
                            {['Home', 'About', 'Services', 'Doctors', 'Gallery', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-sm text-white/55 hover:text-secondary transition-colors duration-200 flex items-center gap-1.5 group"
                                    >
                                        <span className="w-1 h-1 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-display text-lg font-semibold text-white mb-5">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-white/55">
                            <li className="flex gap-3">
                                <FaMapMarkerAlt className="text-secondary mt-0.5 flex-shrink-0" />
                                <span>Chennanparambil Building, Central Junction,<br />Kuravilangad, Kerala — 686633</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <FaPhone className="text-secondary flex-shrink-0" />
                                <a href="tel:+919447XXXXXX" className="hover:text-secondary transition-colors font-medium">
                                    +91 94470 XXXXX
                                </a>
                            </li>
                            <li className="flex gap-3 items-center">
                                <FaClock className="text-secondary flex-shrink-0" />
                                <span className="text-success font-medium">Mon – Sat: 9:00 AM – 7:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-7 text-center text-xs text-white/35">
                    <p>© {new Date().getFullYear()} Holy Family Dental Care. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;