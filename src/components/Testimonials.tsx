import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    const testimonials = [
        {
            text: 'I came all the way from the USA for dental work specifically to visit this clinic. Dr. Bijo fixed all my problems and I never felt any pain. Highly recommended.',
            author: 'Patient from USA',
            rating: 5,
        },
        {
            text: 'One of the best dental clinics I have ever been to. Both Dr. Bijo and Dr. Thara are highly qualified, professional, and genuinely caring doctors.',
            author: 'Kottayam Patient',
            rating: 5,
        },
        {
            text: 'Had a root canal and capping done here. Very nice experience overall. The doctors are skilled and the staff is polite.',
            author: 'Happy Patient',
            rating: 5,
        },
        {
            text: 'Dr. Rahul is extremely professional and caring. Made me feel very comfortable throughout my treatment. Clean and well-equipped clinic.',
            author: 'Regular Patient',
            rating: 5,
        },
        {
            text: 'Painless root canal treatment — something I thought was impossible. Dr. Bijo proved me wrong. Outstanding clinic.',
            author: 'Local Resident',
            rating: 5,
        },
    ];

    return (
        <section id="testimonials" className="py-24 bg-light overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="section-label mb-4">Patient Stories</span>
                    <h2 className="font-display text-4xl md:text-5xl text-primary mt-3 mb-4">
                        What Our Patients Say
                    </h2>
                    <div className="flex items-center justify-center gap-1 text-amber-400 text-lg">
                        {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                        <span className="text-muted text-sm font-medium ml-3">4.9 / 5 Average Rating</span>
                    </div>
                </motion.div>

                {/* Cards */}
                <div className="flex overflow-x-auto pb-6 gap-6 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            className="min-w-[300px] md:min-w-0 snap-center bg-white p-7 rounded-2xl
                                       shadow-teal-sm border-l-4 border-teal relative
                                       hover:shadow-teal-md transition-all duration-300"
                        >
                            <FaQuoteLeft className="text-secondary/50 text-3xl absolute top-5 right-5" />

                            <div className="flex text-amber-400 mb-3 gap-0.5">
                                {[...Array(item.rating)].map((_, i) => <FaStar key={i} size={14} />)}
                            </div>

                            <p className="text-muted italic mb-5 text-sm leading-relaxed relative z-10">
                                "{item.text}"
                            </p>

                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 bg-secondary/30 rounded-full flex items-center justify-center text-primary font-display font-semibold text-sm">
                                    {item.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-dark text-sm">{item.author}</h4>
                                    <p className="text-xs text-muted">Verified Review</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;