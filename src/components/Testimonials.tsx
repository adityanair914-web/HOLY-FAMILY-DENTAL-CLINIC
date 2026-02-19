
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    const testimonials = [
        {
            text: "I came all the way from the USA for dental work specifically to visit this clinic. Dr. Bijo fixed all my problems and I never felt any pain throughout the entire treatment. Highly recommended.",
            author: "Patient from USA",
            rating: 5
        },
        {
            text: "One of the best dental clinics I have ever been to. Both Dr. Bijo and Dr. Thara are highly qualified, professional, and genuinely caring doctors.",
            author: "Kottayam Patient",
            rating: 5
        },
        {
            text: "Had a root canal and capping done here. Very nice experience overall. The doctors are skilled and the staff is polite.",
            author: "Happy Patient",
            rating: 5
        },
        {
            text: "Dr. Rahul is extremely professional and caring. Made me feel very comfortable throughout my treatment. The clinic is clean and well-equipped.",
            author: "Regular Patient",
            rating: 5
        },
        {
            text: "Painless root canal treatment — something I thought was impossible. Dr. Bijo proved me wrong. Outstanding clinic.",
            author: "Local Resident",
            rating: 5
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-light overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold tracking-widest text-sm uppercase">Patient Stories</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
                        What Our Patients Say
                    </h2>
                    <div className="flex items-center justify-center gap-2 mt-4 text-yellow-500 text-xl">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        <span className="text-gray-600 text-base font-medium ml-2 text-dark">
                            4.9/5 Average Rating
                        </span>
                    </div>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="min-w-[300px] md:min-w-0 snap-center bg-white p-8 rounded-2xl shadow-md border-l-4 border-accent relative mt-4 md:mt-0"
                        >
                            <FaQuoteLeft className="text-blue-100 text-4xl absolute top-6 right-6" />
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(item.rating)].map((_, i) => (
                                    <FaStar key={i} size={16} />
                                ))}
                            </div>
                            <p className="text-gray-600 italic mb-6 relative z-10 leading-relaxed">
                                "{item.text}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                                    {item.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark text-sm">{item.author}</h4>
                                    <p className="text-xs text-gray-400">Verified Review</p>
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