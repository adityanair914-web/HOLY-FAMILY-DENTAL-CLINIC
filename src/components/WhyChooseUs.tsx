import { motion } from 'framer-motion';
import { FaSyringe, FaMicroscope, FaUserMd, FaMapMarkedAlt } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <FaSyringe />,
            title: 'Painless Treatments',
            desc: 'Modern anesthesia for completely pain-free procedures'
        },
        {
            icon: <FaMicroscope />,
            title: 'Advanced Equipment',
            desc: 'In-house X-ray & modern instrumentation for precise care'
        },
        {
            icon: <FaUserMd />,
            title: 'Specialist Doctors',
            desc: 'Multi-doctor team with 13+ years combined expertise'
        },
        {
            icon: <FaMapMarkedAlt />,
            title: 'Accessible Location',
            desc: 'Central Junction, near bus station, easy for all patients'
        }
    ];

    const container = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } }
    };
    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <section className="py-24 bg-gradient-dental text-white relative overflow-hidden">
            {/* Decorative ring */}
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-secondary/15 border-dashed" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full border border-secondary/10 border-dashed" />
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-14 items-center">

                    {/* Left copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="section-label border-secondary/30 text-secondary bg-white/10 mb-4">
                            Why Choose Us
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mt-3 mb-5 leading-tight">
                            Experience the{' '}
                            <span className="italic text-secondary">Difference</span>{' '}
                            in Dental Care
                        </h2>
                        <p className="text-white/60 text-lg mb-10 leading-relaxed max-w-md">
                            We combine advanced technology with a gentle, patient-centered approach
                            to ensure your dental visit is comfortable and effective.
                        </p>
                        <a
                            href="https://wa.me/919447XXXXXX"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp"
                        >
                            <FaWhatsapp size={18} />
                            Book Your Visit
                        </a>
                    </motion.div>

                    {/* Right feature cards */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-2 gap-5"
                    >
                        {features.map((feature) => (
                            <motion.div
                                key={feature.title}
                                variants={item}
                                className="glass-teal rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 group cursor-default"
                            >
                                <div className="w-11 h-11 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary text-xl mb-4 group-hover:bg-secondary/30 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="font-display text-xl font-semibold text-white mb-1.5">
                                    {feature.title}
                                </h3>
                                <p className="text-white/55 text-sm leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;