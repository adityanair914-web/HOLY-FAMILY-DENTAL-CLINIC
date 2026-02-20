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
        { icon: <FaTooth />, title: 'Root Canal Treatment', desc: 'Painless, same-day relief from tooth pain' },
        { icon: <GiJawbone />, title: 'Dental Implants', desc: 'Permanent, natural-looking tooth replacement' },
        { icon: <FaCrown />, title: 'Crowns & Bridges', desc: 'High-quality ceramic restorations' },
        { icon: <FaSmile />, title: 'Smile Designing', desc: 'Transform your smile with cosmetic procedures' },
        { icon: <FaUserInjured />, title: 'Dentures', desc: 'Comfortable metal-based partial & full dentures' },
        { icon: <FaMagic />, title: 'Teeth Whitening', desc: 'Professional-grade whitening treatments' },
        { icon: <FaTeethOpen />, title: 'Orthodontics & Braces', desc: 'Metal, ceramic braces & Invisalign' },
        { icon: <MdOutlineHealthAndSafety />, title: 'Gum Treatment', desc: 'Periodontal care for healthy gums' },
        { icon: <FaUserInjured />, title: 'Oral Surgery', desc: 'Wisdom tooth removal & surgical procedures' },
        { icon: <FaXRay />, title: 'Dental X-Ray', desc: 'In-house imaging for accurate diagnosis' },
        { icon: <FaBaby />, title: 'Pediatric Dentistry', desc: 'Gentle care for children' },
        { icon: <FaFirstAid />, title: 'Emergency Dental Care', desc: 'Available during clinic hours' },
    ];

    return (
        <section id="services" className="py-24 bg-mint">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="section-label mb-4">Our Services</span>
                    <h2 className="font-display text-4xl md:text-5xl text-primary mt-3 mb-4">
                        Comprehensive Dental Care
                    </h2>
                    <p className="text-muted max-w-lg mx-auto leading-relaxed">
                        Everything you need for a healthy, beautiful smile — all under one roof.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="group p-7 rounded-2xl bg-white border border-border shadow-teal-sm
                                       hover:shadow-teal-md hover:-translate-y-1.5 hover:border-secondary
                                       transition-all duration-350 cursor-default"
                        >
                            <div className="w-12 h-12 bg-secondary/30 rounded-xl flex items-center justify-center
                                            text-teal text-xl mb-5 group-hover:bg-primary group-hover:text-white
                                            transition-all duration-300">
                                {service.icon}
                            </div>
                            <h3 className="font-display text-xl font-semibold text-primary mb-2 group-hover:text-teal transition-colors duration-200">
                                {service.title}
                            </h3>
                            <p className="text-muted text-sm leading-relaxed">
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