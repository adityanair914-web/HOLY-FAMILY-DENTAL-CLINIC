import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
    const highlights = [
        'KSDC Registered Clinic',
        'In-house Dental X-Ray',
        'Emergency Care Available',
        'Multi-Specialist Team',
    ];

    return (
        <section id="about" className="py-24 bg-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-14 items-center">

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-secondary/20 rounded-3xl -z-10 blur-sm" />
                        <div className="relative rounded-2xl overflow-hidden shadow-teal-lg">
                            <img
                                src="https://placehold.co/600x800/E8F0F1/2F3E3C?text=Clinic+Reception"
                                alt="Holy Family Dental Care Reception"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
                        </div>
                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -bottom-5 -right-5 bg-white p-5 rounded-2xl shadow-teal-md border-l-4 border-teal hidden md:block"
                        >
                            <p className="font-display text-4xl font-semibold text-primary mb-0.5">13+</p>
                            <p className="text-muted text-xs">Years Serving<br />Kuravilangad</p>
                        </motion.div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="section-label mb-4">About Us</span>
                        <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary mt-3 mb-6 leading-tight">
                            Specialized Care in the Heart of{' '}
                            <span className="italic text-teal">Kuravilangad</span>
                        </h2>

                        <p className="text-muted mb-5 leading-relaxed">
                            Holy Family Dental Care has been serving the community of Kuravilangad and Central Kerala since its establishment.
                            Located at Central Junction in the Chennanparambil Building — opposite Hotel Sanyo and near the Kuravilangad bus station —
                            our clinic is strategically accessible to patients across the Kottayam district and beyond.
                        </p>
                        <p className="text-muted mb-8 leading-relaxed">
                            Under the leadership of{' '}
                            <span className="font-semibold text-primary">Dr. Thara Maria Joseph</span>, a BDS graduate from
                            the University of Calicut with 13 years of specialized experience in Prosthodontics and Implantology,
                            Holy Family Dental Care offers a full spectrum of dental treatments — evident in our 4.9-star rating
                            across 110+ patient reviews.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {highlights.map((item) => (
                                <div key={item} className="flex items-center gap-3 bg-white border border-border rounded-xl px-4 py-3">
                                    <FaCheckCircle className="text-teal flex-shrink-0" />
                                    <span className="text-dark text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;