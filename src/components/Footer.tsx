
import { FaTooth, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-primary text-blue-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-white/10 p-2 rounded-full text-white">
                                <FaTooth size={20} />
                            </div>
                            <span className="font-bold text-xl text-white">
                                Holy Family <span className="text-accent">Dental</span>
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed mb-6 opacity-80">
                            Advanced Root Canal & Implant Centre in Kuravilangad.
                            Providing world-class dental care with a gentle touch since 2013.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                                <FaInstagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-success hover:text-white transition-colors">
                                <FaWhatsapp size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                                <FaFacebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
                        <ul className="space-y-3">
                            {['Home', 'About', 'Services', 'Doctors', 'Gallery', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="hover:text-accent transition-colors text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="opacity-80">
                                Chennanparambil Building, Central Junction,<br />
                                Kuravilangad, Kerala — 686633
                            </li>
                            <li>
                                <a href="tel:+91XXXXXXXXXX" className="hover:text-accent transition-colors font-medium">
                                    +91 XXXXX XXXXX
                                </a>
                            </li>
                            <li>
                                <span className="text-success font-medium">Mon - Sat: 9:00 AM - 7:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-xs opacity-60">
                    <p>© {new Date().getFullYear()} Holy Family Dental Care. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;