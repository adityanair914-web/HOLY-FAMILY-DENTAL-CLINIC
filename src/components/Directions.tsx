import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaLandmark } from 'react-icons/fa';

const infoItems = [
    {
        icon: <FaMapMarkerAlt size={18} />,
        title: 'Address',
        content: (
            <>
                Chennanparambil Building, 1st Floor,<br />
                Central Junction, Kuravilangad,<br />
                Kottayam, Kerala — 686633
            </>
        ),
    },
    {
        icon: <FaLandmark size={18} />,
        title: 'Landmark',
        content: (
            <>
                Opposite Hotel Sanyo<br />
                Near Kuravilangad Bus Station
            </>
        ),
    },
    {
        icon: <FaClock size={18} />,
        title: 'Timings',
        content: (
            <>
                Monday – Saturday: 9:00 AM – 7:00 PM<br />
                <span className="text-red-400 text-sm">Sunday: Closed</span>
            </>
        ),
    },
];

const Directions = () => {
    return (
        <section className="py-24 bg-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="h-96 w-full rounded-2xl overflow-hidden shadow-teal-lg border-4 border-white"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15730.0!2d76.5722!3d9.8024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNDgnMDguNiJOIDc2wrAzNCcyMC4wIkU!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin&q=Holy+Family+Dental+Care+Kuravilangad+Kerala"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Clinic Location"
                        />
                    </motion.div>

                    {/* Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col justify-center"
                    >
                        <span className="section-label mb-4">Visit Us</span>
                        <h2 className="font-display text-4xl md:text-5xl text-primary mt-3 mb-8">
                            Easy to Find,{' '}
                            <span className="italic text-teal">Ready to Serve</span>
                        </h2>

                        <div className="space-y-5">
                            {infoItems.map((item) => (
                                <div key={item.title} className="flex items-start gap-4">
                                    <div className="bg-secondary/30 border border-secondary/40 p-3 rounded-xl text-teal flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-display text-lg font-semibold text-dark mb-0.5">{item.title}</h3>
                                        <p className="text-muted text-sm leading-relaxed">{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 bg-secondary/20 border border-secondary/40 px-5 py-4 rounded-xl inline-block">
                            <p className="text-primary font-medium text-sm">
                                💬 Consultation Fee:{' '}
                                <span className="font-bold text-base">₹150</span>{' '}
                                <span className="text-muted text-xs">(approx)</span>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Directions;