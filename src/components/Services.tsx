
import { motion } from 'framer-motion';
import {
    FaTooth,
    FaMagic,
    FaCrown,
    FaSmile,
    FaUserInjured,
    FaBaby,
    FaFirstAid,
    FaXRay,
    FaTeethOpen
} from 'react-icons/fa';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { GiJawbone } from 'react-icons/gi';

const Services = () => {
    const services = [
        { icon: <FaTooth />, title: "Root Canal Treatment", desc: "Painless, same-day relief from tooth pain" },
        { icon: <GiJawbone />, title: "Dental Implants", desc: "Permanent, natural-looking tooth replacement" },
        { icon: <FaCrown />, title: "Crowns & Bridges", desc: "High-quality ceramic restorations" },
        { icon: <FaSmile />, title: "Smile Designing", desc: "Transform your smile with cosmetic procedures" },
        { icon: <FaUserInjured />, title: "Dentures", desc: "Comfortable metal-based partial & full dentures" },
        { icon: <FaMagic />, title: "Teeth Whitening", desc: "Professional-grade whitening treatments" },
        { icon: <FaTeethOpen />, title: "Orthodontics & Braces", desc: "Metal, ceramic braces & Invisalign" },
        { icon: <MdOutlineHealthAndSafety />, title: "Gum Treatment", desc: "Periodontal care for healthy gums" },
        { icon: <FaUserInjured />, title: "Oral Surgery", desc: "Wisdom tooth removal & surgical procedures" },
        { icon: <FaXRay />, title: "Dental X-Ray", desc: "In-house imaging for accurate diagnosis" },
        { icon: <FaBaby />, title: "Pediatric Dentistry", desc: "Gentle care for children" },
        { icon: <FaFirstAid />, title: "Emergency Dental Care", desc: "Available during clinic hours" },
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold tracking-widest text-sm uppercase">Our Services</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
                        Comprehensive Dental Care
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Everything you need for a healthy, beautiful smile under one roof.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-primary text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;