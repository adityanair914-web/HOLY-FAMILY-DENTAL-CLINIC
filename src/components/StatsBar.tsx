
import { motion } from 'framer-motion';

const StatsBar = () => {
    const stats = [
        { label: 'Years Experience', value: '13+' },
        { label: 'Happy Patients', value: '1000+' },
        { label: 'Average Rating', value: '4.9★' },
        { label: 'Google Reviews', value: '110+' },
    ];

    return (
        <section className="bg-secondary py-12 relative z-20 -mt-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-center"
                        >
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 font-sans">
                                {stat.value}
                            </h3>
                            <p className="text-blue-200 text-sm md:text-base font-medium uppercase tracking-wide">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsBar;